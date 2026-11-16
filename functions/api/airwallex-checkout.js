import { json, optionsResponse, resolveApp } from "./_shared.js";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const app = resolveApp(url.searchParams.get("app_id"), "collector");
  const airwallexConfigured = Boolean(
    context.env.AIRWALLEX_CLIENT_ID && context.env.AIRWALLEX_API_KEY
  );

  return json({
    ok: true,
    app_id: app.appId,
    plans: app.plans,
    channels: {
      airwallex: airwallexConfigured ? "ready" : "missing_secrets",
      wechat_pay: "reserved",
      alipay: "reserved",
    },
  });
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}));
    const app = resolveApp(body.app_id, "collector");
    const planId = String(body.planId || "pack100");
    const plan = app.plans[planId];

    if (!plan) {
      return json({ ok: false, error: `Invalid planId '${planId}' for app_id '${app.appId}'` }, 400);
    }

    const clientId = context.env.AIRWALLEX_CLIENT_ID || "";
    const apiKey = context.env.AIRWALLEX_API_KEY || "";
    if (!clientId || !apiKey) {
      return json({ ok: false, error: "Airwallex API secrets not configured" }, 503);
    }

    const authRes = await fetch("https://api.airwallex.com/api/v1/authentication/login", {
      method: "POST",
      headers: {
        "x-client-id": clientId,
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    if (!authRes.ok) {
      const txt = await authRes.text();
      return json({ ok: false, error: `Airwallex auth failed: ${authRes.status} ${txt}` }, 502);
    }
    const { token } = await authRes.json();

    const plRes = await fetch("https://api.airwallex.com/api/v1/pa/payment_links/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: plan.amount,
        currency: plan.currency,
        title: plan.title,
        reusable: false,
        default_currency: plan.currency,
        metadata: {
          app_id: app.appId,
          planId,
          buyerEmail: String(body.email || ""),
        },
      }),
    });

    const plData = await plRes.json();
    if (!plRes.ok || !plData.url) {
      return json(
        { ok: false, error: plData.message || "Failed to create Airwallex payment link" },
        502
      );
    }

    return json({
      ok: true,
      app_id: app.appId,
      planId,
      checkoutUrl: plData.url,
      paymentLinkId: plData.id,
    });
  } catch (err) {
    return json({ ok: false, error: err?.message || "Airwallex checkout error" }, 500);
  }
}
