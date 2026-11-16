import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  API_BASE_URL,
  DOWNLOAD_BASE_URL,
  LANGUAGES,
  PAYMENTS_BY_LANG,
  SITE_BASE_URL,
  TRANSLATIONS,
} from "./collector-i18n-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const ASSETS_SRC_DIR = path.join(ROOT_DIR, "src-assets");
const WEB_DIR = path.join(ROOT_DIR, "web");
const COLLECTOR_DIR = path.join(WEB_DIR, "collector");
const CAROUSEL_DIR = path.join(WEB_DIR, "carousel");

const HUB_BASE_URL = "https://xiaomie.tools";
const ZIP_FILENAME = "小咩魔法采集-chrome-v1.0.8.zip";
const DOWNLOAD_URL = `${DOWNLOAD_BASE_URL}/${encodeURIComponent(ZIP_FILENAME)}`;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageUrlFor(lang) {
  return lang.slug ? `${SITE_BASE_URL}/${lang.slug}/` : `${SITE_BASE_URL}/`;
}

function relPathFor(lang) {
  return lang.slug ? `/collector/${lang.slug}/` : `/collector/`;
}

function renderSharedModals({ appId, plansHtmlOptions }) {
  return `
  <dialog id="accountPortalModal" class="xm-modal">
    <div class="xm-modal-head">
      <strong>👤 Account &amp; Entitlements / 账号与权益中心</strong>
      <button type="button" id="btnCloseAccountPortal" class="btn btn-secondary btn-sm">✕</button>
    </div>
    <div id="portalLoginBox">
      <p style="font-size:0.86rem;color:var(--ink-soft);margin-top:0">Sign in via Email Verification Code (sent from <strong>noreply@xiaomie.tools</strong> · Support: <strong>info@xiaomie.tools</strong>):</p>
      <div class="xm-field">
        <label for="webOtpEmail">Email Address / 邮箱地址</label>
        <div class="xm-row">
          <input id="webOtpEmail" type="email" placeholder="name@example.com" />
          <button type="button" id="btnWebSendOtp" class="btn btn-secondary btn-sm" style="white-space:nowrap">Send Code</button>
        </div>
      </div>
      <div class="xm-field">
        <label for="webOtpCode">6-Digit Code / 邮箱验证码</label>
        <div class="xm-row">
          <input id="webOtpCode" type="text" placeholder="123456" maxlength="6" />
          <button type="button" id="btnWebVerifyOtp" class="btn btn-primary btn-sm" style="white-space:nowrap">Verify &amp; Sign In</button>
        </div>
      </div>
      <div id="webOtpStatus" class="xm-status"></div>
    </div>
    <div id="portalDashBox" style="display:none">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;padding:12px;border-radius:12px;background:var(--surface-alt)">
        <div><small style="color:var(--muted)">Account (${escapeHtml(appId)})</small><div id="portalUserEmail" style="font-weight:800;font-size:0.9rem"></div></div>
        <div><small style="color:var(--muted)">Current Plan</small><div id="portalUserPlan" style="font-weight:800;font-size:0.9rem"></div></div>
        <div><small style="color:var(--muted)">Remaining Quota</small><div id="portalUserQuota" style="font-weight:800;font-size:0.9rem;color:var(--primary)"></div></div>
        <div style="display:flex;align-items:end;justify-content:end"><button type="button" id="btnWebLogout" class="btn btn-secondary btn-sm">Sign Out</button></div>
      </div>
      <strong style="font-size:0.88rem;display:block;margin-bottom:6px">Billing &amp; Deduction History / 权益与扣费记录</strong>
      <div id="portalLedgerList" class="ledger-box"></div>
    </div>
  </dialog>

  <dialog id="airwallexModal" class="xm-modal">
    <div class="xm-modal-head">
      <strong>🌐 Airwallex Global Checkout (USD)</strong>
      <button type="button" id="btnCloseAwxModal" class="btn btn-secondary btn-sm">✕</button>
    </div>
    <p style="font-size:0.86rem;color:var(--ink-soft);margin-top:0">Powered by Airwallex (JINHUA CREDIT IMPORT AND EXPORT CO.,LTD). Supports Visa, MasterCard, Amex, Apple Pay &amp; Google Pay.</p>
    <div class="xm-field">
      <label for="awxPlanSelect">Select Plan / 选择方案</label>
      <select id="awxPlanSelect">
        ${plansHtmlOptions}
      </select>
    </div>
    <div class="xm-field">
      <label for="awxBuyerEmail">Delivery Email / 接收激活码邮箱</label>
      <input id="awxBuyerEmail" type="email" placeholder="you@example.com" />
    </div>
    <button type="button" id="btnSubmitAwxCheckout" class="btn btn-primary" style="width:100%">Proceed to Airwallex Checkout ↗</button>
    <div id="awxCheckoutStatus" class="xm-status"></div>
  </dialog>`;
}

function buildHubHtml(isEn = false) {
  const langCode = isEn ? "en" : "zh-CN";
  const canonical = isEn ? `${HUB_BASE_URL}/en/` : `${HUB_BASE_URL}/`;
  const title = isEn
    ? "Xiaomie Magic Tools — AI E-Commerce Productivity Suite | Collector & Carousel Video"
    : "小咩魔法系列软件 (Xiaomie Magic Tools) — 跨境电商 AI 效率工具矩阵";
  const desc = isEn
    ? "Official suite for cross-border e-commerce sellers: Xiaomie Magic Collector (1688/Amazon/Shopify product & OCR extractor) and Xiaomie Magic Carousel (30-language AI product video generator)."
    : "跨境电商卖家全链路 AI 工具矩阵：小咩魔法采集（全网商品/长图OCR/箱规提取扩展）与小咩魔法轮播视频（30国母语AI口播与WebCodecs极速出片）。";

  return `<!doctype html>
<html lang="${langCode}" data-app-id="site">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="zh-CN" href="${HUB_BASE_URL}/" />
  <link rel="alternate" hreflang="en" href="${HUB_BASE_URL}/en/" />
  <link rel="alternate" hreflang="x-default" href="${HUB_BASE_URL}/en/" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${isEn ? "/en/" : "/"}">
        <img src="/assets/cat-logo.jpg" alt="Xiaomie Magic Tools Logo" width="38" height="38" />
        <span>${isEn ? "Xiaomie Magic Tools" : "小咩魔法系列软件"}</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="#suite">${isEn ? "Software Suite" : "软件矩阵"}</a>
        <a href="/collector/${isEn ? "en/" : ""}">${isEn ? "Magic Collector" : "小咩魔法采集"}</a>
        <a href="/carousel/${isEn ? "en/" : ""}">${isEn ? "Magic Carousel" : "小咩魔法轮播视频"}</a>
        <a href="#support">${isEn ? "Support" : "客服与接入"}</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary btn-sm" href="${isEn ? "/" : "/en/"}">${isEn ? "🇨🇳 简体中文" : "🌐 English"}</a>
        <button type="button" id="btnOpenAccountPortal" class="btn btn-primary btn-sm">👤 Account / 账号中心</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge-pill">${isEn ? "Official Software Hub · xiaomie.tools" : "官方总站 · xiaomie.tools 系列效率矩阵"}</span>
          <h1>${isEn ? "One Magical Suite for Global E-Commerce Sellers" : "小咩魔法系列软件 · 跨境卖家一站式 AI 生产力工具"}</h1>
          <p class="hero-sub">${escapeHtml(desc)}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="/collector/${isEn ? "en/" : ""}">🧩 ${isEn ? "Explore Magic Collector" : "进入小咩魔法采集"}</a>
            <a class="btn btn-secondary" href="https://carousel.xiaomie.tools/" target="_blank" rel="noopener">🎬 ${isEn ? "Launch Magic Carousel" : "打开轮播视频工作台"} ↗</a>
          </div>
          <ul class="trust-list">
            <li>${isEn ? "Unified Login: api.xiaomie.tools" : "全系列统一登录与账本：api.xiaomie.tools"}</li>
            <li>${isEn ? "Global Checkout: Airwallex (USD)" : "支持 Airwallex 全球外币收单（微信/支付宝预留中）"}</li>
            <li>${isEn ? "Official Support: info@xiaomie.tools" : "唯一官方客服邮箱：info@xiaomie.tools"}</li>
          </ul>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/assets/cat-logo.jpg" alt="Xiaomie Magic Mascot" width="148" height="148" />
          <div class="mini-stat-grid">
            <div class="mini-stat"><strong>2</strong><span>${isEn ? "Live Flagship Apps" : "已上线旗舰软件"}</span></div>
            <div class="mini-stat"><strong>30+</strong><span>${isEn ? "Supported Languages" : "覆盖语种市场"}</span></div>
            <div class="mini-stat"><strong>100%</strong><span>${isEn ? "Isolated App Quotas" : "按 app_id 独立计费"}</span></div>
            <div class="mini-stat"><strong>24/7</strong><span>${isEn ? "Smart Dispatch Support" : "智能分单客服响应"}</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section id="suite" class="section">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Our Software Suite" : "全系列软件矩阵"}</h2>
          <p>${isEn ? "Each tool runs independently on its own subdomain while sharing unified authentication and billing." : "各软件独立运行、独立定价，共用统一邮箱账号体系与全球收款通道。"}</p>
        </div>
        <div class="features-grid">
          <article class="feature-card">
            <div class="feature-icon">🧩</div>
            <h3>${isEn ? "Xiaomie Magic Collector (v1.0.8)" : "小咩魔法采集 (v1.0.8)"}</h3>
            <p>${isEn
              ? "Chrome & Edge extension for 1688, Taobao, Amazon & Shopify. Local WASM long-image OCR, 4-level carton lookup, AI image filtering, and 10-language copywriting."
              : "Chrome/Edge 通用采集扩展：支持 1688、淘宝、亚马逊、Shopify 与图文博客；内置防卡死长图 OCR、四级箱规补查与纯正单语种文案。"}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
              <a class="btn btn-primary btn-sm" href="/collector/${isEn ? "en/" : ""}">${isEn ? "10-Lang Landing" : "查看详情 (10语种)"}</a>
              <a class="btn btn-secondary btn-sm" href="https://collector.xiaomie.tools/" target="_blank" rel="noopener">${isEn ? "Download .zip" : "下载扩展包"} ↗</a>
            </div>
          </article>

          <article class="feature-card">
            <div class="feature-icon">🎬</div>
            <h3>${isEn ? "Xiaomie Magic Carousel (v15.55)" : "小咩魔法轮播视频 (v15.55)"}</h3>
            <p>${isEn
              ? "Turn product photos into 30-language shoppable videos in 5–10 seconds using WebCodecs hardware acceleration, Edge Neural voices, and auto .srt subtitles."
              : "几张商品实拍图 5–10 秒直出 30 国母语带货成片：WebCodecs 本地硬编码、微软原生配音、自动滤杂图与同名 .srt 同步落盘。"}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
              <a class="btn btn-primary btn-sm" href="https://carousel.xiaomie.tools/" target="_blank" rel="noopener">${isEn ? "Open Studio" : "进入在线工作台"} ↗</a>
              <a class="btn btn-secondary btn-sm" href="/carousel/${isEn ? "en/" : ""}">${isEn ? "Product Overview" : "功能与定价"}</a>
            </div>
          </article>

          <article class="feature-card">
            <div class="feature-icon">✨</div>
            <h3>${isEn ? "More Magic Tools Coming Soon" : "更多魔法系列软件敬请期待"}</h3>
            <p>${isEn
              ? "New cross-border AI tools will plug directly into api.xiaomie.tools with isolated app_id quotas and unified global support."
              : "后续新工具将直接接入 api.xiaomie.tools 共用登录、发信与收款体系，按 app_id 独立管理权益，敬请期待。"}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="support" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Unified Account, Billing & Support" : "统一服务与客服支持"}</h2>
          <p>${isEn
            ? "Verification codes are sent automatically from noreply@xiaomie.tools. For sales or technical support, email info@xiaomie.tools."
            : "系统登录验证码由 noreply@xiaomie.tools 自动发出；售前咨询、售后支持与商务合作请发送至官方唯一客服邮箱 info@xiaomie.tools。"}</p>
        </div>
        <div class="stats-grid">
          <div class="stat-card"><div class="stat-num">noreply@</div><div class="stat-label">xiaomie.tools (${isEn ? "System OTP" : "系统验证码"})</div></div>
          <div class="stat-card"><div class="stat-num">info@</div><div class="stat-label">xiaomie.tools (${isEn ? "Official Support" : "官方客服总入口"})</div></div>
          <div class="stat-card"><div class="stat-num">api.</div><div class="stat-label">xiaomie.tools (${isEn ? "Shared API Hub" : "全系列共用接口"})</div></div>
          <div class="stat-card"><div class="stat-num">Airwallex</div><div class="stat-label">${isEn ? "Global USD Checkout" : "空中云汇国际收单"}</div></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2026 Xiaomie Magic Tools · <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a></div>
      <div class="footer-langs">
        <a href="/">简体中文</a>
        <a href="/en/">English</a>
        <a href="/collector/">Collector</a>
        <a href="/carousel/">Carousel</a>
      </div>
    </div>
  </footer>
  ${renderSharedModals({
    appId: "site",
    plansHtmlOptions: `<option value="pack100">Collector VIP — $69 USD</option>`,
  })}
  <script src="/assets/app.js" defer></script>
</body>
</html>
`;
}

function buildCarouselHtml(isEn = false) {
  const langCode = isEn ? "en" : "zh-CN";
  const canonical = isEn ? `${HUB_BASE_URL}/carousel/en/` : `${HUB_BASE_URL}/carousel/`;
  const title = isEn
    ? "Xiaomie Magic Carousel v15.55 — AI 30-Language Product Video Generator"
    : "小咩魔法轮播视频 v15.55 — 30 国母语 AI 带货视频批量直出";
  const desc = isEn
    ? "Create 1080×1920, 16:9, or 1:1 shoppable product videos in 5–10 seconds with local WebCodecs, Edge Neural TTS, and synchronized .srt subtitles."
    : "几张商品实拍图，5–10 秒直出 30 国母语带货成片。支持 9:16 / 16:9 / 1:1 三画幅、WebCodecs 硬件加速、自动过滤杂图与同名 .srt 同步落盘。";

  return `<!doctype html>
<html lang="${langCode}" data-app-id="carousel">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="zh-CN" href="${HUB_BASE_URL}/carousel/" />
  <link rel="alternate" hreflang="en" href="${HUB_BASE_URL}/carousel/en/" />
  <link rel="alternate" hreflang="x-default" href="${HUB_BASE_URL}/carousel/en/" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/">
        <img src="/assets/cat-logo.jpg" alt="Xiaomie Magic Carousel" width="38" height="38" />
        <span>${isEn ? "Xiaomie Carousel" : "小咩魔法轮播视频"}</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="/">${isEn ? "All Tools" : "系列总站"}</a>
        <a href="#features">${isEn ? "Features" : "核心绝技"}</a>
        <a href="#pricing">${isEn ? "Pricing" : "商业定价"}</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary btn-sm" href="${isEn ? "/carousel/" : "/carousel/en/"}">${isEn ? "🇨🇳 简体中文" : "🌐 English"}</a>
        <button type="button" id="btnOpenAccountPortal" class="btn btn-secondary btn-sm">👤 Account / 账号中心</button>
        <a class="btn btn-primary btn-sm" href="https://carousel.xiaomie.tools/" target="_blank" rel="noopener">${isEn ? "Open Studio ↗" : "打开工作台 ↗"}</a>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge-pill">v15.55 · WebCodecs · 30 Languages · app_id: carousel</span>
          <h1>${isEn ? "Turn Product Photos into 30-Language Shoppable Videos in 10s" : "做跨境带货视频，几张商品实拍图 10 秒直出 30 国母语成片"}</h1>
          <p class="hero-sub">${escapeHtml(desc)}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="https://carousel.xiaomie.tools/" target="_blank" rel="noopener">🚀 ${isEn ? "Launch Online Studio" : "立即进入在线工作台"} ↗</a>
            <a class="btn btn-secondary" href="#pricing">${isEn ? "View Pricing" : "查看定价方案"}</a>
          </div>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/assets/cat-logo.jpg" alt="Xiaomie Magic Carousel" width="148" height="148" />
          <div class="mini-stat-grid">
            <div class="mini-stat"><strong>5–10s</strong><span>${isEn ? "Hardware Export" : "单条硬件加速直出"}</span></div>
            <div class="mini-stat"><strong>30</strong><span>${isEn ? "Native TTS Voices" : "国母语原生口播"}</span></div>
            <div class="mini-stat"><strong>3 Ratios</strong><span>9:16 · 16:9 · 1:1</span></div>
            <div class="mini-stat"><strong>.mp4+.srt</strong><span>${isEn ? "Zero Image Upload" : "原图本地零上传"}</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section id="features" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Why Xiaomie Magic Carousel" : "五大核心绝技"}</h2>
        </div>
        <div class="features-grid">
          <article class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>${isEn ? "WebCodecs 5–10s Hardware Export" : "WebCodecs 本地硬件加速直出"}</h3>
            <p>${isEn ? "Encode 1080×1920, 1280×720, or 1080×1080 MP4 locally in seconds with zero server queue." : "浏览器原生硬件编码，5–10 秒导出一条高清 MP4，原图不上传云端。"}</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon">🎙️</div>
            <h3>${isEn ? "30-Language Edge Neural TTS" : "30 国母语 AI 编导与原生配音"}</h3>
            <p>${isEn ? "Built-in GLM-4V vision copywriting paired with Microsoft Edge Neural male/female voices and .srt export." : "内置免 Key 视觉看图写词 + 微软原生男女声配音 + 同名 .srt 字幕同步落盘。"}</p>
          </article>
          <article class="feature-card">
            <div class="feature-icon">🧹</div>
            <h3>${isEn ? "Smart Clutter Filtering & BGM Pitch" : "杂图自动过滤与 BGM 变调防重"}</h3>
            <p>${isEn ? "Automatically filters platform watermarks/tiny icons and applies BGM pitch variation to avoid duplicate penalties." : "自动剔除微标与平台杂图，支持多种转场运镜与 BGM 变调防限流。"}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="pricing" class="section">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Simple One-Time Pricing" : "透明一次性授权方案"}</h2>
          <p>${isEn ? "Isolated under app_id: carousel via api.xiaomie.tools." : "权益按 (邮箱, carousel) 独立记账，与系列其他软件互不干扰。"}</p>
        </div>
        <div class="pricing-grid">
          <article class="price-card">
            <div>
              <div class="price-name">${isEn ? "50-Video Pack" : "50 次视频包"}</div>
              <div class="price-amount">$49.9 <span style="font-size:1rem;font-weight:700;color:var(--primary)">(USD)</span></div>
              <div class="price-sub">${isEn ? "50 exports · stackable" : "50 条成片额度 · 可叠加"}</div>
            </div>
            <button type="button" class="btn btn-secondary" data-open-airwallex data-plan="pack50">${isEn ? "Buy 50 Pack" : "购买 50 次包"}</button>
          </article>
          <article class="price-card featured">
            <span class="popular-badge">${isEn ? "Popular" : "热门之选"}</span>
            <div>
              <div class="price-name">${isEn ? "100-Video Pack" : "100 次视频包"}</div>
              <div class="price-amount">$69.9 <span style="font-size:1rem;font-weight:700;color:var(--primary)">(USD)</span></div>
              <div class="price-sub">${isEn ? "100 exports · stackable" : "100 条成片额度 · 可叠加"}</div>
            </div>
            <button type="button" class="btn btn-primary" data-open-airwallex data-plan="pack100">${isEn ? "Buy 100 Pack" : "购买 100 次包"}</button>
          </article>
          <article class="price-card">
            <div>
              <div class="price-name">${isEn ? "SVIP Lifetime" : "SVIP 终身不限量"}</div>
              <div class="price-amount">$139.9 <span style="font-size:1rem;font-weight:700;color:var(--primary)">(USD)</span></div>
              <div class="price-sub">${isEn ? "Unlimited exports forever" : "终身不限次数 · 全功能开放"}</div>
            </div>
            <button type="button" class="btn btn-secondary" data-open-airwallex data-plan="lifetime">${isEn ? "Get Lifetime" : "解锁终身版"}</button>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2026 Xiaomie Magic Carousel · <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a></div>
      <div class="footer-langs">
        <a href="/">Hub</a>
        <a href="/carousel/">简体中文</a>
        <a href="/carousel/en/">English</a>
        <a href="https://carousel.xiaomie.tools/" target="_blank" rel="noopener">Studio ↗</a>
      </div>
    </div>
  </footer>
  ${renderSharedModals({
    appId: "carousel",
    plansHtmlOptions: `
      <option value="pack50">⭐ 50-Video Pack — $49.90 USD</option>
      <option value="pack100">🔥 100-Video Pack — $69.90 USD</option>
      <option value="lifetime">👑 SVIP Lifetime Unlimited — $139.90 USD</option>`,
  })}
  <script src="/assets/app.js" defer></script>
</body>
</html>
`;
}

function buildCollectorJsonLd(lang, t) {
  const url = pageUrlFor(lang);
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "小咩魔法采集 (Xiaomie Magic Collector)",
    alternateName: "Xiaomie Magic Collector",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Chrome, Microsoft Edge (Manifest V3, Windows / macOS)",
    softwareVersion: "1.0.8",
    url,
    downloadUrl: DOWNLOAD_URL,
    image: `${SITE_BASE_URL}/assets/cat-logo.jpg`,
    description: t.description,
    inLanguage: lang.code,
    offers: [
      { "@type": "Offer", name: t.plans[0].name, price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: t.plans[1].name, price: "69", priceCurrency: "USD" },
      { "@type": "Offer", name: t.plans[2].name, price: "139", priceCurrency: "USD" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return `${JSON.stringify(softwareSchema)}\n</script>\n<script type="application/ld+json">\n${JSON.stringify(faqSchema)}`;
}

function renderCollectorHtml(lang, t) {
  const canonical = pageUrlFor(lang);
  const pay = PAYMENTS_BY_LANG[lang.code] || PAYMENTS_BY_LANG["en"];
  const hreflangTags =
    LANGUAGES.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${pageUrlFor(l)}" />`).join("\n") +
    `\n  <link rel="alternate" hreflang="x-default" href="${SITE_BASE_URL}/en/" />`;

  const langOptions = LANGUAGES.map(
    (l) =>
      `<option value="${relPathFor(l)}"${l.code === lang.code ? " selected" : ""}>🌐 ${escapeHtml(l.label)}</option>`
  ).join("\n            ");

  const statsHtml = t.stats
    .map(
      (s) => `
        <div class="stat-card">
          <div class="stat-num">${escapeHtml(s.num)}</div>
          <div class="stat-label">${escapeHtml(s.label)}</div>
        </div>`
    )
    .join("");

  const featuresHtml = t.features
    .map(
      (f) => `
        <article class="feature-card">
          <div class="feature-icon" aria-hidden="true">${f.icon}</div>
          <h3>${escapeHtml(f.title)}</h3>
          <p>${escapeHtml(f.desc)}</p>
        </article>`
    )
    .join("");

  const compareRowsHtml = t.compareRows
    .map(
      (r) => `
        <tr>
          <td><strong>${escapeHtml(r[0])}</strong></td>
          <td>${escapeHtml(r[1])}</td>
          <td>✓ ${escapeHtml(r[2])}</td>
        </tr>`
    )
    .join("");

  const pricingHtml = t.plans
    .map(
      (p, idx) => `
        <article class="price-card${p.highlight ? " featured" : ""}">
          ${p.badge ? `<span class="popular-badge">${escapeHtml(p.badge)}</span>` : ""}
          <div>
            <div class="price-name">${escapeHtml(p.name)}</div>
            <div class="price-amount">${escapeHtml(p.price)} <span style="font-size:1rem;font-weight:700;color:var(--primary)">(${escapeHtml(p.usd)})</span></div>
            <div class="price-sub">${escapeHtml(p.period)}</div>
            <p class="price-desc">${escapeHtml(p.desc)}</p>
            <ul class="price-bullets">
              ${p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
          </div>
          ${idx === 0
            ? `<a class="btn btn-secondary" href="${DOWNLOAD_URL}" download>${escapeHtml(p.cta)}</a>`
            : `<button type="button" class="btn ${p.highlight ? "btn-primary" : "btn-secondary"}" data-open-airwallex data-plan="${idx === 1 ? "pack100" : "lifetime"}">${escapeHtml(p.cta)}</button>`}
        </article>`
    )
    .join("");

  const stepsHtml = t.installSteps
    .map(
      (s) => `
        <div class="step-card">
          <div class="step-num">${escapeHtml(s.step)}</div>
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.desc)}</p>
        </div>`
    )
    .join("");

  const faqsHtml = t.faqs
    .map(
      (q) => `
        <details class="faq-item">
          <summary>${escapeHtml(q.q)}</summary>
          <p>${escapeHtml(q.a)}</p>
        </details>`
    )
    .join("");

  const footerLangLinks = LANGUAGES.map(
    (l) => `<a href="${relPathFor(l)}" hreflang="${l.code}">${escapeHtml(l.label)}</a>`
  ).join("\n          ");

  return `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}" data-app-id="collector">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(t.title)}</title>
  <meta name="description" content="${escapeHtml(t.description)}" />
  <meta name="keywords" content="${escapeHtml(t.keywords)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${canonical}" />
${hreflangTags}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(t.title)}" />
  <meta property="og:description" content="${escapeHtml(t.description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:locale" content="${lang.ogLocale}" />
  <meta property="og:image" content="${SITE_BASE_URL}/assets/cat-logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(t.title)}" />
  <meta name="twitter:description" content="${escapeHtml(t.description)}" />
  <meta name="twitter:image" content="${SITE_BASE_URL}/assets/cat-logo.jpg" />
  <link rel="icon" type="image/jpeg" href="/collector/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/collector/assets/style.css" />
  <script type="application/ld+json">
${buildCollectorJsonLd(lang, t)}
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/">
        <img src="/collector/assets/cat-logo.jpg" alt="Xiaomie Magic Collector Logo" width="38" height="38" />
        <span>小咩魔法采集 · Xiaomie</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="#features">${escapeHtml(t.nav.features)}</a>
        <a href="#compare">${escapeHtml(t.nav.compare)}</a>
        <a href="#pricing">${escapeHtml(t.nav.pricing)}</a>
        <a href="#install">${escapeHtml(t.nav.install)}</a>
        <a href="#faq">${escapeHtml(t.nav.faq)}</a>
      </nav>
      <div class="header-actions">
        <label for="langSwitcher" class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Language</label>
        <select id="langSwitcher" class="lang-select" aria-label="Language">
          ${langOptions}
        </select>
        <button type="button" id="btnOpenAccountPortal" class="btn btn-secondary btn-sm">👤 Account / 账号中心</button>
        <a class="btn btn-primary btn-sm" href="${DOWNLOAD_URL}" download>${escapeHtml(t.nav.cta)}</a>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge-pill">${escapeHtml(t.hero.badge)}</span>
          <h1>${escapeHtml(t.hero.h1)}</h1>
          <p class="hero-sub">${escapeHtml(t.hero.sub)}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="${DOWNLOAD_URL}" download>⬇ ${escapeHtml(t.hero.ctaPrimary)}</a>
            <a class="btn btn-secondary" href="#features">${escapeHtml(t.hero.ctaSecondary)}</a>
          </div>
          <ul class="trust-list">
            ${t.hero.trust.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/collector/assets/cat-logo.jpg" alt="Xiaomie Magic Collector v1.0.8" width="148" height="148" />
          <div class="mini-stat-grid">
            ${t.stats.map((s) => `<div class="mini-stat"><strong>${escapeHtml(s.num)}</strong><span>${escapeHtml(s.label)}</span></div>`).join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="stats-grid">${statsHtml}
        </div>
      </div>
    </section>

    <section id="features" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.featuresTitle)}</h2>
          <p>${escapeHtml(t.featuresSub)}</p>
        </div>
        <div class="features-grid">${featuresHtml}
        </div>
      </div>
    </section>

    <section id="compare" class="section">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.compareTitle)}</h2>
        </div>
        <div class="compare-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th>${escapeHtml(t.compareHeaders[0])}</th>
                <th>${escapeHtml(t.compareHeaders[1])}</th>
                <th>${escapeHtml(t.compareHeaders[2])}</th>
              </tr>
            </thead>
            <tbody>${compareRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="pricing" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.pricingTitle)}</h2>
          <p>${escapeHtml(t.pricingSub)}</p>
        </div>
        <div class="pricing-grid">${pricingHtml}
        </div>
        <div class="payment-strip">
          <div style="width:100%;font-weight:800;font-size:0.9rem;color:var(--ink)">${escapeHtml(pay.title)}</div>
          <span class="pay-badge">🌐 ${escapeHtml(pay.global)}</span>
          <span class="pay-badge">💬 ${escapeHtml(pay.local)}</span>
          <div style="width:100%;font-size:0.82rem;color:var(--muted)">${escapeHtml(pay.note)}</div>
        </div>
      </div>
    </section>

    <section id="install" class="section">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.installTitle)}</h2>
        </div>
        <div class="steps-grid">${stepsHtml}
        </div>
      </div>
    </section>

    <section id="faq" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.faqTitle)}</h2>
        </div>
        <div class="faq-list">${faqsHtml}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>${escapeHtml(t.footer)} · <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a></div>
      <div class="footer-langs">
        ${footerLangLinks}
      </div>
    </div>
  </footer>
  ${renderSharedModals({
    appId: "collector",
    plansHtmlOptions: `
      <option value="pack100">⭐ VIP 100-Product Pack — $69.00 USD</option>
      <option value="lifetime">👑 SVIP Lifetime Unlimited — $139.00 USD</option>`,
  })}
  <script src="/collector/assets/app.js" defer></script>
</body>
</html>
`;
}

function buildRootSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const collectorUrls = LANGUAGES.map((lang) => {
    const loc = pageUrlFor(lang);
    const links = LANGUAGES.map(
      (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.code}" href="${pageUrlFor(alt)}" />`
    ).join("\n");
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang.slug === "" ? "0.95" : "0.9"}</priority>
${links}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_BASE_URL}/en/" />
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${HUB_BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${HUB_BASE_URL}/en/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${HUB_BASE_URL}/carousel/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${HUB_BASE_URL}/carousel/en/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${collectorUrls}
</urlset>
`;
}

function buildRobotsTxt(sitemapUrl) {
  return `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${sitemapUrl}
`;
}

function buildRootLlmsTxt() {
  return `# Xiaomie Magic Tools (小咩魔法系列软件)

> Official suite of AI productivity tools for cross-border e-commerce sellers.

## Core Products
- **Xiaomie Magic Collector (小咩魔法采集)**: ${HUB_BASE_URL}/collector/ (Download: ${DOWNLOAD_URL})
- **Xiaomie Magic Carousel (小咩魔法轮播视频)**: ${HUB_BASE_URL}/carousel/ (Studio: https://carousel.xiaomie.tools/)

## Shared Infrastructure
- **API Endpoint**: ${API_BASE_URL} (isolated by \`app_id\`)
- **System Notification Email**: noreply@xiaomie.tools
- **Official Support Email**: info@xiaomie.tools
`;
}

function buildHeaders() {
  return `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=86400

/collector/assets/*
  Cache-Control: public, max-age=86400
`;
}

function main() {
  fs.mkdirSync(WEB_DIR, { recursive: true });
  fs.mkdirSync(path.join(WEB_DIR, "assets"), { recursive: true });
  fs.mkdirSync(COLLECTOR_DIR, { recursive: true });
  fs.mkdirSync(path.join(COLLECTOR_DIR, "assets"), { recursive: true });
  fs.mkdirSync(CAROUSEL_DIR, { recursive: true });
  fs.mkdirSync(path.join(CAROUSEL_DIR, "en"), { recursive: true });
  fs.mkdirSync(path.join(WEB_DIR, "en"), { recursive: true });

  // Copy static assets to both /assets and /collector/assets
  for (const assetName of ["style.css", "app.js", "cat-logo.jpg"]) {
    const src = path.join(ASSETS_SRC_DIR, assetName);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(WEB_DIR, "assets", assetName));
      fs.copyFileSync(src, path.join(COLLECTOR_DIR, "assets", assetName));
    }
  }

  // Root Hub pages
  fs.writeFileSync(path.join(WEB_DIR, "index.html"), buildHubHtml(false), "utf8");
  fs.writeFileSync(path.join(WEB_DIR, "en", "index.html"), buildHubHtml(true), "utf8");

  // Carousel landing pages
  fs.writeFileSync(path.join(CAROUSEL_DIR, "index.html"), buildCarouselHtml(false), "utf8");
  fs.writeFileSync(path.join(CAROUSEL_DIR, "en", "index.html"), buildCarouselHtml(true), "utf8");

  // Collector 10-language landing pages
  for (const lang of LANGUAGES) {
    const t = TRANSLATIONS[lang.code];
    const outDir = lang.slug ? path.join(COLLECTOR_DIR, lang.slug) : COLLECTOR_DIR;
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), renderCollectorHtml(lang, t), "utf8");
  }

  // Sitemap, robots, llms, headers
  fs.writeFileSync(path.join(WEB_DIR, "sitemap.xml"), buildRootSitemap(), "utf8");
  fs.writeFileSync(path.join(WEB_DIR, "robots.txt"), buildRobotsTxt(`${HUB_BASE_URL}/sitemap.xml`), "utf8");
  fs.writeFileSync(path.join(WEB_DIR, "llms.txt"), buildRootLlmsTxt(), "utf8");
  fs.writeFileSync(path.join(WEB_DIR, "_headers"), buildHeaders(), "utf8");

  fs.writeFileSync(path.join(COLLECTOR_DIR, "sitemap.xml"), buildRootSitemap(), "utf8");
  fs.writeFileSync(path.join(COLLECTOR_DIR, "robots.txt"), buildRobotsTxt(`${SITE_BASE_URL}/sitemap.xml`), "utf8");
  fs.writeFileSync(path.join(COLLECTOR_DIR, "llms.txt"), buildRootLlmsTxt(), "utf8");

  console.log(`Built xiaomie-site in ${WEB_DIR} (Hub + Carousel + ${LANGUAGES.length} Collector pages)`);
}

main();
