import { getLedgerKey, getOrInitAccount, json, optionsResponse, resolveApp } from "./_shared.js";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}));
    const action = String(body.action || "get").trim().toLowerCase();
    const email = String(body.email || "").trim().toLowerCase();
    const app = resolveApp(body.app_id, "collector");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "Invalid email address" }, 400);
    }

    const account = await getOrInitAccount(context.env, app, email);

    if (action === "get") {
      return json({ ok: true, app_id: app.appId, account });
    }

    if (action === "consume") {
      const count = Math.max(1, parseInt(body.count || 1, 10) || 1);
      if (account.plan === "lifetime") {
        return json({ ok: true, app_id: app.appId, account });
      }
      const remaining = Math.max(0, (account.quotaLimit || 0) - (account.usedCount || 0));
      if (remaining < count) {
        return json(
          {
            ok: false,
            error: "Insufficient quota",
            app_id: app.appId,
            account,
          },
          402
        );
      }

      account.usedCount = (account.usedCount || 0) + count;
      account.remaining = Math.max(0, (account.quotaLimit || 0) - account.usedCount);
      account.updatedAt = new Date().toISOString();

      if (context.env.XIAOMIE_KV) {
        await context.env.XIAOMIE_KV.put(getLedgerKey(app.appId, email), JSON.stringify(account));
      }

      return json({ ok: true, app_id: app.appId, account });
    }

    return json({ ok: false, error: "Unsupported action" }, 400);
  } catch (err) {
    return json({ ok: false, error: err?.message || "Account operation failed" }, 500);
  }
}
