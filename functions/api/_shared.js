import { connect } from "cloudflare:sockets";

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const APP_REGISTRY = {
  collector: {
    appId: "collector",
    nameZh: "小咩魔法采集",
    nameEn: "Xiaomie Magic Collector",
    fromName: "Xiaomie Magic Collector",
    homeUrl: "https://xiaomie.tools/collector/",
    defaultTrialQuota: 20,
    plans: {
      pack100: {
        amount: 69,
        currency: "USD",
        cny: 500,
        credits: 100,
        type: "pack",
        title: "Xiaomie Magic Collector VIP (100 Products)",
      },
      lifetime: {
        amount: 139,
        currency: "USD",
        cny: 999,
        credits: -1,
        type: "lifetime",
        title: "Xiaomie Magic Collector SVIP (Lifetime Unlimited)",
      },
    },
  },
  carousel: {
    appId: "carousel",
    nameZh: "小咩魔法轮播视频",
    nameEn: "Xiaomie Magic Carousel",
    fromName: "Xiaomie Magic Carousel",
    homeUrl: "https://carousel.xiaomie.tools/",
    defaultTrialQuota: 1,
    plans: {
      pack50: {
        amount: 49.9,
        currency: "USD",
        cny: 360,
        credits: 50,
        type: "pack",
        title: "Xiaomie Magic Carousel (50 Videos)",
      },
      pack100: {
        amount: 69.9,
        currency: "USD",
        cny: 500,
        credits: 100,
        type: "pack",
        title: "Xiaomie Magic Carousel (100 Videos)",
      },
      lifetime: {
        amount: 139.9,
        currency: "USD",
        cny: 999,
        credits: -1,
        type: "lifetime",
        title: "Xiaomie Magic Carousel (Lifetime Unlimited)",
      },
    },
  },
  site: {
    appId: "site",
    nameZh: "小咩魔法系列软件",
    nameEn: "Xiaomie Magic Tools",
    fromName: "Xiaomie Magic Tools",
    homeUrl: "https://xiaomie.tools/",
    defaultTrialQuota: 0,
    plans: {},
  },
};

export function resolveApp(rawAppId, fallback = "collector") {
  const key = String(rawAppId || fallback).trim().toLowerCase();
  return APP_REGISTRY[key] || APP_REGISTRY[fallback] || APP_REGISTRY.site;
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS_HEADERS },
  });
}

export function optionsResponse() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function hmacSign(secret, payload) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function getLedgerKey(appId, email) {
  return `acct:${appId}:${email.toLowerCase()}`;
}

export async function getOrInitAccount(env, app, email) {
  const defaultAcc = {
    email,
    app_id: app.appId,
    plan: "trial",
    quotaLimit: app.defaultTrialQuota,
    usedCount: 0,
    remaining: app.defaultTrialQuota,
    updatedAt: new Date().toISOString(),
  };

  if (!env.XIAOMIE_KV) {
    return { ...defaultAcc, persisted: false };
  }

  const key = getLedgerKey(app.appId, email);
  const existing = await env.XIAOMIE_KV.get(key, { type: "json" });
  if (existing) {
    const remaining = existing.plan === "lifetime"
      ? -1
      : Math.max(0, (existing.quotaLimit || 0) - (existing.usedCount || 0));
    return { ...existing, remaining, persisted: true };
  }

  await env.XIAOMIE_KV.put(key, JSON.stringify(defaultAcc));
  return { ...defaultAcc, persisted: true };
}

export async function sendSmtpEmail({ host, port, user, pass, fromName, replyTo, to, subject, textBody }) {
  const socket = connect({ hostname: host, port }, { secureTransport: "on" });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const enc = new TextEncoder();
  const dec = new TextDecoder();

  let buffer = "";
  async function readLine() {
    while (true) {
      const idx = buffer.indexOf("\n");
      if (idx !== -1) {
        const line = buffer.slice(0, idx + 1);
        buffer = buffer.slice(idx + 1);
        return line;
      }
      const { value, done } = await reader.read();
      if (done) throw new Error("SMTP connection closed unexpectedly");
      buffer += dec.decode(value, { stream: true });
    }
  }

  async function readResponse() {
    let full = "";
    while (true) {
      const line = await readLine();
      full += line;
      if (/^\d{3} /.test(line)) break;
    }
    const code = parseInt(full.slice(0, 3), 10);
    if (code >= 400) throw new Error(`SMTP error ${code}: ${full.trim()}`);
    return full;
  }

  async function cmd(line) {
    await writer.write(enc.encode(line + "\r\n"));
    return readResponse();
  }

  try {
    await readResponse();
    await cmd("EHLO xiaomie.tools");
    await cmd("AUTH LOGIN");
    await cmd(btoa(user));
    await cmd(btoa(pass));
    await cmd(`MAIL FROM:<${user}>`);
    await cmd(`RCPT TO:<${to}>`);
    await cmd("DATA");

    const headers = [
      `From: "${fromName || "Xiaomie Magic Tools"}" <${user}>`,
      `To: <${to}>`,
    ];
    if (replyTo) {
      headers.push(`Reply-To: <${replyTo}>`);
    }
    headers.push(
      `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      textBody,
      `.`
    );

    await writer.write(enc.encode(headers.join("\r\n") + "\r\n"));
    await readResponse();
    await cmd("QUIT");
  } finally {
    try { writer.releaseLock(); } catch {}
    try { reader.releaseLock(); } catch {}
    try { await socket.close(); } catch {}
  }
}
