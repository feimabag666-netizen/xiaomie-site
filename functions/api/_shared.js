import { connect } from "cloudflare:sockets";

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const APP_REGISTRY = {
  catalog: {
    appId: "catalog",
    nameZh: "小咩商品目录卖点生成器",
    nameEn: "Xiaomie Product Catalog & Selling Point Generator",
    fromName: "XiaoMie Tools",
    homeUrl: "https://xiaomie.tools/catalog/",
    defaultTrialQuota: 20,
    plans: {
      monthly9: {
        amount: 9,
        currency: "USD",
        cny: 68,
        credits: 30,
        type: "subscription",
        title: "Catalog Generator Starter ($9/mo)",
      },
      pack100: {
        amount: 69,
        currency: "USD",
        cny: 500,
        credits: 100,
        type: "pack",
        title: "Catalog Generator 100-Item Pack ($69)",
      },
      annual99: {
        amount: 99,
        currency: "USD",
        cny: 699,
        credits: -1,
        type: "subscription",
        title: "Catalog Generator Pro Annual ($99/yr)",
      },
    },
  },
  carousel: {
    appId: "carousel",
    nameZh: "小咩魔法轮播视频",
    nameEn: "Xiaomie Carousel Video Studio",
    fromName: "XiaoMie Tools",
    homeUrl: "https://carousel.xiaomie.tools/",
    defaultTrialQuota: 1,
    plans: {
      monthly19: {
        amount: 19,
        currency: "USD",
        cny: 138,
        credits: 20,
        type: "subscription",
        title: "Carousel Video Studio Monthly ($19/mo)",
      },
      pack50: {
        amount: 49.9,
        currency: "USD",
        cny: 360,
        credits: 50,
        type: "pack",
        title: "Carousel Video Studio (50 Videos)",
      },
      pack100: {
        amount: 69.9,
        currency: "USD",
        cny: 500,
        credits: 100,
        type: "pack",
        title: "Carousel Video Studio (100 Videos)",
      },
      annual99: {
        amount: 99,
        currency: "USD",
        cny: 699,
        credits: -1,
        type: "subscription",
        title: "Carousel Video Studio Annual Pro ($99/yr)",
      },
    },
  },
  site: {
    appId: "site",
    nameZh: "小咩魔法系列软件",
    nameEn: "XiaoMie Tools",
    fromName: "XiaoMie Tools",
    homeUrl: "https://xiaomie.tools/",
    defaultTrialQuota: 0,
    plans: {
      monthly9: {
        amount: 9,
        currency: "USD",
        cny: 68,
        credits: 30,
        type: "subscription",
        title: "Catalog & Copy Monthly ($9/mo)",
      },
      monthly19: {
        amount: 19,
        currency: "USD",
        cny: 138,
        credits: 50,
        type: "subscription",
        title: "Carousel Video Monthly ($19/mo)",
      },
      starter: {
        amount: 19,
        currency: "USD",
        cny: 138,
        credits: 50,
        type: "subscription",
        title: "XiaoMie Tools Starter SaaS ($19/mo)",
      },
      pack100: {
        amount: 69,
        currency: "USD",
        cny: 500,
        credits: 100,
        type: "pack",
        title: "XiaoMie Tools 100-Unit Pack ($69)",
      },
      annual99: {
        amount: 99,
        currency: "USD",
        cny: 699,
        credits: -1,
        type: "subscription",
        title: "XiaoMie Tools Studio Annual ($99/yr)",
      },
    },
  },
};

export function resolveApp(rawAppId, fallback = "catalog") {
  const key = String(rawAppId || fallback).trim().toLowerCase();
  if (key === "collector") return APP_REGISTRY.catalog;
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
