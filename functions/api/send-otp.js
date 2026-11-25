import { hmacSign, json, optionsResponse, resolveApp, sendSmtpEmail } from "./_shared.js";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();
    const lang = String(body.lang || "zh-CN");
    const app = resolveApp(body.app_id, "catalog");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "Invalid email address" }, 400);
    }

    const smtpPass =
      context.env.PURELYMAIL_NOREPLY_PASSWORD ||
      context.env.PURELYMAIL_PASSWORD ||
      "";
    const otpSecret =
      context.env.OTP_SECRET ||
      smtpPass ||
      "xiaomie-default-otp-secret-2026";

    if (!smtpPass) {
      return json(
        { ok: false, error: "SMTP service not configured (PURELYMAIL_NOREPLY_PASSWORD missing)" },
        503
      );
    }

    const code = String(
      Math.floor(100000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 900000))
    );
    const exp = Date.now() + 10 * 60 * 1000;
    const payload = btoa(JSON.stringify({ email, code, exp, app_id: app.appId }));
    const sig = await hmacSign(otpSecret, payload);
    const token = `${payload}.${sig}`;

    const isZh = lang.toLowerCase().startsWith("zh");
    const subject = isZh
      ? `【${app.nameZh}】您的登录验证码：${code}`
      : `[${app.nameEn}] Your Verification Code: ${code}`;

    const textBody = isZh
      ? `您好！\n\n您正在登录「${app.nameZh} (${app.nameEn})」，验证码为：\n\n  ${code}\n\n验证码 10 分钟内有效，请勿泄露给他人。\n\n官方客服邮箱：info@xiaomie.tools\n官网入口：${app.homeUrl}\n[app_id: ${app.appId}]`
      : `Hello!\n\nYour verification code for ${app.nameEn} is:\n\n  ${code}\n\nThis code expires in 10 minutes. Do not share it with anyone.\n\nSupport: info@xiaomie.tools\nWebsite: ${app.homeUrl}\n[app_id: ${app.appId}]`;

    await sendSmtpEmail({
      host: "smtp.purelymail.com",
      port: 465,
      user: "noreply@xiaomie.tools",
      pass: smtpPass,
      fromName: app.fromName,
      replyTo: "info@xiaomie.tools",
      to: email,
      subject,
      textBody,
    });

    return json({ ok: true, app_id: app.appId, token, expiresIn: 600 });
  } catch (err) {
    return json({ ok: false, error: err?.message || "Failed to send OTP" }, 500);
  }
}
