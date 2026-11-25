import { getOrInitAccount, hmacSign, json, optionsResponse, resolveApp } from "./_shared.js";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();
    const code = String(body.code || "").trim();
    const token = String(body.token || "").trim();
    const requestedApp = resolveApp(body.app_id, "catalog");

    if (!email || !code || !token || !token.includes(".")) {
      return json({ ok: false, error: "Missing email, code, or verification token" }, 400);
    }

    const [payload, sig] = token.split(".");
    const otpSecret =
      context.env.OTP_SECRET ||
      context.env.PURELYMAIL_NOREPLY_PASSWORD ||
      context.env.PURELYMAIL_PASSWORD ||
      "xiaomie-default-otp-secret-2026";

    const expectedSig = await hmacSign(otpSecret, payload);
    if (sig !== expectedSig) {
      return json({ ok: false, error: "Invalid verification token signature" }, 401);
    }

    const data = JSON.parse(atob(payload));
    if (Date.now() > data.exp) {
      return json({ ok: false, error: "Verification code expired" }, 401);
    }
    if (data.email !== email || data.code !== code) {
      return json({ ok: false, error: "Incorrect verification code" }, 401);
    }
    if (data.app_id && body.app_id && data.app_id !== requestedApp.appId) {
      return json({ ok: false, error: "Token app_id mismatch" }, 401);
    }

    const app = resolveApp(data.app_id || requestedApp.appId, "catalog");
    const account = await getOrInitAccount(context.env, app, email);

    return json({
      ok: true,
      email,
      app_id: app.appId,
      provider: "email_otp",
      verifiedAt: new Date().toISOString(),
      account,
    });
  } catch (err) {
    return json({ ok: false, error: err?.message || "Verification failed" }, 500);
  }
}
