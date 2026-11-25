import { json, optionsResponse, resolveApp } from "./_shared.js";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const app = resolveApp(url.searchParams.get("app_id"), "catalog");
  const creemConfigured = Boolean(context.env.CREEM_API_KEY);

  return json({
    ok: true,
    app_id: app.appId,
    plans: app.plans,
    channels: {
      creem: creemConfigured ? "ready" : "pending_integration",
      wechat_pay: "reserved",
      alipay: "reserved",
    },
  });
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}));
    const app = resolveApp(body.app_id, "catalog");
    const planId = String(body.planId || "starter");
    const plan = app.plans[planId];

    if (!plan) {
      return json({ ok: false, error: `Invalid planId '${planId}' for app_id '${app.appId}'` }, 400);
    }

    const creemCheckoutBase = context.env.CREEM_CHECKOUT_URL || "";
    if (!creemCheckoutBase) {
      return json({
        ok: false,
        error: "Global SaaS Checkout (Creem MoR) is reserved for final review. Email info@xiaomie.tools to activate your plan immediately via api.xiaomie.tools.",
      }, 200);
    }

    const target = new URL(creemCheckoutBase);
    target.searchParams.set("app_id", app.appId);
    target.searchParams.set("plan_id", planId);
    if (body.email) target.searchParams.set("customer_email", String(body.email));

    return json({
      ok: true,
      app_id: app.appId,
      planId,
      checkoutUrl: target.toString(),
    });
  } catch (err) {
    return json({ ok: false, error: err?.message || "Checkout error" }, 500);
  }
}
