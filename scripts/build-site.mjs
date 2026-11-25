import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  API_BASE_URL,
  LANGUAGES,
  PAYMENTS_BY_LANG,
  SITE_BASE_URL,
  STUDIO_BASE_URL,
  TRANSLATIONS,
} from "./catalog-i18n-data.mjs";
import { buildPrivacyHtml, buildRefundHtml, buildTermsHtml } from "./legal-pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const WEB_DIR = path.join(ROOT_DIR, "web");
const ASSETS_SRC = path.join(ROOT_DIR, "src-assets");
const ASSETS_DEST = path.join(WEB_DIR, "assets");
const ROOT_HUB_URL = "https://xiaomie.tools";
const CAROUSEL_SITE_URL = "https://xiaomie.tools/carousel";
const CAROUSEL_APP_URL = "https://carousel.xiaomie.tools";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getLangUrl(lang) {
  return lang.slug ? `${SITE_BASE_URL}/${lang.slug}/` : `${SITE_BASE_URL}/`;
}

function copyAssets() {
  ensureDir(ASSETS_DEST);
  const files = fs.readdirSync(ASSETS_SRC);
  for (const file of files) {
    if (file.startsWith(".")) continue;
    fs.copyFileSync(path.join(ASSETS_SRC, file), path.join(ASSETS_DEST, file));
  }
}

function renderPlanOptions(appId, isZh) {
  if (appId === "carousel") {
    return isZh
      ? `
          <option value="monthly19">Starter 月度订阅（$19 / 月 · 20 条视频）</option>
          <option value="pack100">100 次 Studio 点数包（$69.9 · 永久有效）</option>
          <option value="annual99">Annual Studio Pro 年付版（$99 / 年 · 不限次）</option>
        `
      : `
          <option value="monthly19">Starter Monthly SaaS ($19 / mo · 20 videos)</option>
          <option value="pack100">100-Credit Studio Pack ($69.9 · Non-expiring)</option>
          <option value="annual99">Annual Studio Pro ($99 / yr · Unlimited)</option>
        `;
  }
  if (appId === "catalog") {
    return isZh
      ? `
          <option value="monthly9">入门月度版 Monthly Starter（$9 / 月 · 50 次）</option>
          <option value="pack100">100 次专业额度包（$69 · 约 ¥500）</option>
          <option value="annual99">年度专业版 Annual Pro（$99 / 年 · 无限目录整理）</option>
        `
      : `
          <option value="monthly9">Monthly Starter ($9 / mo · 50 catalogs)</option>
          <option value="pack100">100-Item Pro Pack ($69 · Non-expiring)</option>
          <option value="annual99">Annual Pro SaaS ($99 / yr · Unlimited)</option>
        `;
  }
  return isZh
    ? `
        <option value="monthly9">目录卖点生成器月度版（$9 / 月）</option>
        <option value="monthly19">轮播视频月度版（$19 / 月）</option>
        <option value="pack100">100 次额度包（$69）</option>
        <option value="annual99">年度专业订阅 Annual Pro（$99 / 年）</option>
      `
    : `
        <option value="monthly9">Catalog & Copy Monthly ($9 / mo)</option>
        <option value="monthly19">Carousel Video Monthly ($19 / mo)</option>
        <option value="pack100">100-Credit Studio Pack ($69)</option>
        <option value="annual99">Annual Studio Pro ($99 / yr)</option>
      `;
}

function renderSharedModals(langCode, appId = "catalog") {
  const isZh = String(langCode).toLowerCase().startsWith("zh");
  const planOptions = renderPlanOptions(appId, isZh);

  return `
  <dialog id="accountPortalModal" class="xm-modal">
    <div class="xm-modal-head">
      <strong>${isZh ? "XiaoMie Tools · 统一账号与额度中心" : "XiaoMie Tools · Account & Usage Portal"}</strong>
      <button type="button" class="xm-modal-close" id="btnCloseAccountPortal">✕</button>
    </div>
    <div class="xm-modal-body">
      <div id="portalLoginBox">
        <p style="margin-top:0;color:var(--ink-soft);font-size:0.9rem">
          ${isZh
            ? "输入您的常用邮箱，由 <code>noreply@xiaomie.tools</code> 发送 6 位验证码免密登录。付款后系统通过 <code>api.xiaomie.tools</code> 邮箱账号自动即时开通权益。"
            : "Sign in passwordlessly with a 6-digit code sent from <code>noreply@xiaomie.tools</code>. Paid plans activate automatically on your <code>api.xiaomie.tools</code> email account."}
        </p>
        <label class="xm-label" for="webOtpEmail">${isZh ? "电子邮箱" : "Email Address"}</label>
        <div class="xm-row">
          <input id="webOtpEmail" class="xm-input" type="email" placeholder="name@company.com" />
          <button type="button" class="btn btn-secondary btn-sm" id="btnWebSendOtp">${isZh ? "发送验证码" : "Send Code"}</button>
        </div>
        <label class="xm-label" for="webOtpCode" style="margin-top:12px">${isZh ? "6 位邮箱验证码" : "6-Digit Verification Code"}</label>
        <div class="xm-row">
          <input id="webOtpCode" class="xm-input" type="text" maxlength="6" placeholder="123456" />
          <button type="button" class="btn btn-primary btn-sm" id="btnWebVerifyOtp">${isZh ? "验证登录" : "Sign In"}</button>
        </div>
        <div id="webOtpStatus" class="xm-status"></div>
      </div>

      <div id="portalDashBox" style="display:none">
        <div class="portal-summary">
          <div><small>${isZh ? "当前登录邮箱" : "Account Email"}</small><strong id="portalUserEmail"></strong></div>
          <div><small>${isZh ? "当前会员方案" : "Plan"}</small><strong id="portalUserPlan"></strong></div>
          <div><small>${isZh ? "可用额度" : "Remaining Credits"}</small><strong id="portalUserQuota"></strong></div>
        </div>
        <h4 style="margin:14px 0 8px;font-size:0.88rem">${isZh ? "额度与授权记录" : "Credit Ledger"}</h4>
        <div id="portalLedgerList" class="ledger-list"></div>
        <div style="margin-top:14px;display:flex;gap:10px;justify-content:flex-end">
          <button type="button" class="btn btn-secondary btn-sm" id="btnWebLogout">${isZh ? "退出登录" : "Sign Out"}</button>
        </div>
      </div>
    </div>
  </dialog>

  <dialog id="saasCheckoutModal" class="xm-modal">
    <div class="xm-modal-head">
      <strong>Global Card & SaaS Checkout</strong>
      <button type="button" class="xm-modal-close" id="btnCloseCheckoutModal">✕</button>
    </div>
    <div class="xm-modal-body">
      <p style="margin-top:0;color:var(--ink-soft);font-size:0.9rem">
        ${isZh
          ? "国际 SaaS 订阅与点数包结算（支持全球信用卡/借记卡，Creem MoR 托管收银台）。<strong>付款后通过 <code>api.xiaomie.tools</code> 邮箱账号自动即时开通</strong>，并享有 14 天退款保障（<a href=\"/refund/\">Refund Policy</a>）。"
          : "Global SaaS subscription & credit pack checkout (Creem MoR ready). <strong>Activates instantly via your <code>api.xiaomie.tools</code> email account after payment</strong>, backed by our <a href=\"/refund/\">14-day refund policy</a>."}
      </p>
      <label class="xm-label" for="checkoutPlanSelect">${isZh ? "选择 SaaS 方案 / 点数包" : "Select SaaS Plan"}</label>
      <select id="checkoutPlanSelect" class="xm-input">${planOptions}</select>
      <label class="xm-label" for="checkoutBuyerEmail" style="margin-top:12px">${isZh ? "接收自动开通授权的邮箱（api.xiaomie.tools 账号）" : "Account Email for Instant Activation (api.xiaomie.tools)"}</label>
      <input id="checkoutBuyerEmail" class="xm-input" type="email" placeholder="buyer@company.com" />
      <div style="margin-top:14px;display:flex;gap:10px">
        <button type="button" class="btn btn-primary" id="btnSubmitSaasCheckout" style="width:100%">
          ${isZh ? "前往 Global SaaS Checkout 结算" : "Continue to Global SaaS Checkout"}
        </button>
      </div>
      <div id="saasCheckoutStatus" class="xm-status"></div>
    </div>
  </dialog>
  `;
}

function renderLegalFooter(isZh, extraLangLinksHtml = "") {
  return `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a></div>
      <div class="footer-langs">
        <a href="/terms/">${isZh ? "服务条款 Terms" : "Terms of Service"}</a>
        <a href="/privacy/">${isZh ? "隐私政策 Privacy" : "Privacy Policy"}</a>
        <a href="/refund/">${isZh ? "14 天退款政策 Refund" : "Refund Policy (14-Day)"}</a>
        ${extraLangLinksHtml}
      </div>
    </div>
  </footer>`;
}

function buildHubHtml(isEn) {
  const lang = isEn ? "en" : "zh-CN";
  const canonical = isEn ? `${ROOT_HUB_URL}/en/` : `${ROOT_HUB_URL}/`;
  const title = isEn
    ? "XiaoMie Tools — AI Product Video, Catalog & Image Productivity SaaS"
    : "小咩魔法系列软件 (XiaoMie Tools) — 跨境电商 AI 视频、商品目录整理与图片翻译套件";
  const description = isEn
    ? "XiaoMie Tools builds AI productivity software for global e-commerce sellers: Xiaomie Carousel Video Studio, Xiaomie Product Catalog & Selling Point Generator, and Xiaomie Magic Image Translator (Coming Soon). Instant api.xiaomie.tools activation and 14-day refund policy."
    : "XiaoMie Tools（小咩魔法系列软件）面向跨境电商卖家打造合规 AI 生产力工具矩阵：小咩魔法轮播视频（已上线）、小咩商品目录卖点生成器（已上线）与小咩魔法图片翻译（即将上线）。付款后通过 api.xiaomie.tools 邮箱账号自动即时开通。";

  const hubExtraLinks = isEn
    ? `<a href="/">🇨🇳 简体中文</a><a href="/carousel/en/">Carousel Studio</a><a href="/catalog/en/">Catalog Generator</a>`
    : `<a href="/en/">🇺🇸 English</a><a href="/carousel/">轮播视频</a><a href="/catalog/">商品目录卖点生成器</a>`;

  return `<!doctype html>
<html lang="${lang}" data-app-id="site">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="zh-CN" href="${ROOT_HUB_URL}/" />
  <link rel="alternate" hreflang="en" href="${ROOT_HUB_URL}/en/" />
  <link rel="alternate" hreflang="x-default" href="${ROOT_HUB_URL}/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ROOT_HUB_URL}/assets/cat-logo.jpg" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${isEn ? "/en/" : "/"}">
        <img src="/assets/cat-logo.jpg" alt="XiaoMie Tools Logo" width="38" height="38" />
        <span>${isEn ? "XiaoMie Tools" : "小咩魔法系列软件"}</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="#suite">${isEn ? "Products" : "产品矩阵"}</a>
        <a href="#pricing">${isEn ? "Pricing" : "定价方案"}</a>
        <a href="#support">${isEn ? "Support" : "邮箱支持"}</a>
        <a href="/terms/">${isEn ? "Terms" : "服务条款"}</a>
        <a href="/refund/">${isEn ? "Refund" : "退款政策"}</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary btn-sm" href="${isEn ? "/" : "/en/"}">${isEn ? "🇨🇳 中文官网" : "🇺🇸 English"}</a>
        <button type="button" class="btn btn-primary btn-sm" id="btnOpenAccountPortal">👤 Account / 账号中心</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge">${isEn ? "Global E-Commerce AI SaaS Suite · api.xiaomie.tools" : "跨境电商 AI 生产力 SaaS 套件 · 统一账号体系"}</span>
          <h1>${isEn
            ? "AI Studio Tools for Product Videos, Catalog Specs &amp; Multilingual Copywriting"
            : "专为外贸与跨境团队打造的 AI 商品目录、本地化卖点与轮播视频工作台"}</h1>
          <p class="lead">${isEn
            ? "One unified <code>api.xiaomie.tools</code> email account powers all XiaoMie Tools apps. Automate long-image OCR, product spec structuring, 30+ language voiceover videos, and upcoming lossless image translation — backed by instant digital delivery and our 14-day refund policy."
            : "一个 <code>api.xiaomie.tools</code> 邮箱账号通行全系产品。涵盖长图 OCR 文字识别、规格参数自动整理、30+ 语种轮播配音视频与即将上线的桌面图片翻译，付款后自动即时开通授权，支持 14 天退款保障。"}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#suite">${isEn ? "Explore 3 Products" : "查看三大产品矩阵"}</a>
            <a class="btn btn-secondary" href="#pricing">${isEn ? "View USD SaaS Pricing ($9–$99)" : "查看定价方案 ($9–$99)"}</a>
          </div>
          <ul class="trust-list">
            <li>${isEn ? "Instant automatic provisioning via api.xiaomie.tools after checkout" : "付款后通过 api.xiaomie.tools 邮箱账号自动即时开通"}</li>
            <li>${isEn ? "Global Card &amp; SaaS Checkout (Creem MoR ready) · 14-day refund guarantee" : "支持全球信用卡与 SaaS 结算 · 透明公开的 14 天退款政策"}</li>
            <li>${isEn ? "Direct human &amp; billing support: info@xiaomie.tools" : "官方唯一客服与商务支持邮箱：info@xiaomie.tools"}</li>
          </ul>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/assets/cat-logo.jpg" alt="XiaoMie Tools Brand Logo" />
          <h3 style="margin:0 0 6px">${isEn ? "XiaoMie Tools SaaS Hub" : "小咩魔法软件生态中心"}</h3>
          <p style="margin:0;color:var(--muted);font-size:0.9rem">
            ${isEn ? "Operated by Limei Chen · info@xiaomie.tools" : "Operated by Limei Chen · info@xiaomie.tools"}
          </p>
          <div class="hero-card-tags">
            <span class="chip">🎬 Carousel Video (Live)</span>
            <span class="chip">📑 Catalog &amp; Copy (Live)</span>
            <span class="chip">🖼️ Image Translator (Soon)</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section-alt" id="suite">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Three-Product AI Productivity Matrix" : "小咩魔法三大核心产品矩阵"}</h2>
          <p>${isEn ? "Two live cloud/desktop AI tools ready for immediate subscription, plus one upcoming BYOK image translator." : "两款核心 SaaS 产品已正式上线并支持即时开通，桌面图片翻译新品即将上线。"}</p>
        </div>

        <div class="features-grid">
          <article class="feature-card" style="display:flex;flex-direction:column;justify-content:space-between;gap:14px">
            <div>
              <span class="status-badge live">● ${isEn ? "Live · Ready Now" : "已上线 / Live"}</span>
              <div class="feature-icon">🎬</div>
              <h3>${isEn ? "Xiaomie Carousel Video Studio" : "小咩魔法轮播视频"}</h3>
              <p style="font-size:0.84rem;color:var(--muted);margin-bottom:8px">${isEn ? "小咩魔法轮播视频" : "Xiaomie Carousel Video Studio"}</p>
              <p>${isEn
                ? "Online AI workbench that transforms product photos into studio-grade marketing videos with 30+ native-language AI voiceovers and .srt subtitles in one click."
                : "商品实拍图一键生成 30+ 语种母语配音视频与 SRT 字幕的在线 AI 工作台，助力独立站与短视频出海获客。"}</p>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <a class="btn btn-primary btn-sm" href="${CAROUSEL_APP_URL}" target="_blank" rel="noopener">${isEn ? "Open Studio" : "进入工作台"}</a>
              <a class="btn btn-secondary btn-sm" href="${isEn ? "/carousel/en/" : "/carousel/"}">${isEn ? "Product Details" : "了解详情"}</a>
            </div>
          </article>

          <article class="feature-card" style="display:flex;flex-direction:column;justify-content:space-between;gap:14px">
            <div>
              <span class="status-badge live">● ${isEn ? "Live · Ready Now" : "已上线 / Live"}</span>
              <div class="feature-icon">📑</div>
              <h3>${isEn ? "Xiaomie Product Catalog &amp; Selling Point Generator" : "小咩商品目录卖点生成器"}</h3>
              <p style="font-size:0.84rem;color:var(--muted);margin-bottom:8px">${isEn ? "小咩商品目录卖点生成器" : "Xiaomie Product Catalog & Selling Point Generator"}</p>
              <p>${isEn
                ? "AI efficiency assistant for long-image OCR text recognition, automated product specification structuring, localized multi-language selling-point copywriting, and clean catalog export."
                : "支持商品长图 OCR 文字识别、商品规格参数自动整理、多语种本地化卖点文案生成与商品目录排版导出的 AI 效率助手。"}</p>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <a class="btn btn-primary btn-sm" href="${isEn ? "/catalog/en/" : "/catalog/"}">${isEn ? "Explore Generator" : "进入产品页"}</a>
              <a class="btn btn-secondary btn-sm" href="${STUDIO_BASE_URL}" target="_blank" rel="noopener">${isEn ? "Workspace" : "下载与工作台"}</a>
            </div>
          </article>

          <article class="feature-card" style="display:flex;flex-direction:column;justify-content:space-between;gap:14px;border-color:#fcd34d;background:#fffdf7">
            <div>
              <span class="status-badge coming-soon">⏳ ${isEn ? "Coming Soon · Pre-Launch" : "即将上线 / Coming Soon"}</span>
              <div class="feature-icon" style="background:#fef3c7">🖼️</div>
              <h3>${isEn ? "Xiaomie Magic Image Translator" : "小咩魔法图片翻译（小咩图片翻译软件）"}</h3>
              <p style="font-size:0.84rem;color:var(--muted);margin-bottom:8px">${isEn ? "小咩魔法图片翻译" : "Xiaomie Magic Image Translator"}</p>
              <p>${isEn
                ? "Desktop software for cross-border e-commerce image text multi-language AI translation, lossless background inpainting, and clean typography reconstruction."
                : "跨境电商商品图文字多语种 AI 翻译与原图背景无损排版重绘桌面软件，支持精准擦除原文并自动回填多国本地化排版文字。"}</p>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
              <button type="button" class="btn btn-disabled btn-sm" disabled aria-disabled="true">${isEn ? "Coming Soon" : "即将开放 · 敬请期待"}</button>
              <a class="btn btn-secondary btn-sm" href="mailto:info@xiaomie.tools?subject=Notify%20Me%20-%20Xiaomie%20Magic%20Image%20Translator">${isEn ? "Notify Me" : "开售邮件提醒"}</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Transparent Global SaaS Pricing (USD)" : "透明清晰的多币种 SaaS 定价方案"}</h2>
          <p>${isEn
            ? "All Live SaaS plans activate automatically via your <code>api.xiaomie.tools</code> email account immediately after payment."
            : "已上线的两款 SaaS 工具支持 $9–$99 月付/年付订阅或点数包，<strong>付款后通过 <code>api.xiaomie.tools</code> 邮箱账号自动即时开通</strong>。"}</p>
        </div>

        <div class="pricing-grid">
          <div class="price-card">
            <div>
              <div class="price-name">${isEn ? "Starter Monthly SaaS" : "月度入门订阅（Starter Monthly）"}</div>
              <div class="price-amount">$9 <small>/ mo</small></div>
              <p class="price-desc">${isEn
                ? "Ideal for solo sellers automating long-image OCR, spec sheets &amp; selling points."
                : "适合个人卖家与外贸业务日常长图 OCR 识别、规格整理与卖点文案生成（Carousel 入门订阅 $19/月起）。"}</p>
              <ul class="price-list">
                <li>${isEn ? "50 Catalog &amp; Copy exports / month" : "每月 50 次商品目录与卖点生成额度"}</li>
                <li>${isEn ? "OCR + automated size &amp; carton tables" : "支持长图 OCR 文字识别与箱规自动整理"}</li>
                <li>${isEn ? "Instant activation via api.xiaomie.tools" : "付款后通过 api.xiaomie.tools 邮箱即时开通"}</li>
              </ul>
            </div>
            <button type="button" class="btn btn-secondary" data-open-checkout data-plan="monthly9">${isEn ? "Subscribe $9/mo" : "选择 $9/月 入门订阅"}</button>
          </div>

          <div class="price-card featured">
            <span class="popular-badge">${isEn ? "BEST FOR TEAMS" : "团队推荐方案"}</span>
            <div>
              <div class="price-name">${isEn ? "100-Credit Growth Pack" : "100 次专业点数包（Growth Pack）"}</div>
              <div class="price-amount">$69 <small>/ 100 credits</small></div>
              <p class="price-desc">${isEn
                ? "Pay-as-you-go SaaS credit pack ($19/mo Carousel &amp; $69 pack options) with zero expiration."
                : "约 ¥500 · 灵活按次消费不过期，适用商品目录卖点生成与轮播配音视频工作台。"}</p>
              <ul class="price-list">
                <li>${isEn ? "100 full product or studio runs" : "包含 100 次完整目录排版 / AI 视频生成"}</li>
                <li>${isEn ? "30+ language voiceovers &amp; localized copy" : "覆盖 30+ 语种本地化文案与 SRT 字幕导出"}</li>
                <li>${isEn ? "Instant activation via api.xiaomie.tools" : "付款后通过 api.xiaomie.tools 自动充值到账"}</li>
              </ul>
            </div>
            <button type="button" class="btn btn-primary" data-open-checkout data-plan="pack100">${isEn ? "Buy 100-Credit Pack ($69)" : "立即开通 $69 点数包"}</button>
          </div>

          <div class="price-card">
            <div>
              <div class="price-name">${isEn ? "Annual Studio Pro" : "年度专业版（Annual Studio Pro）"}</div>
              <div class="price-amount">$99 <small>/ yr</small></div>
              <p class="price-desc">${isEn
                ? "Unlimited annual access to Catalog Generator workflows plus high-volume Studio features."
                : "年付低至 $8.25/月 · 解锁高频商品目录排版、多语种卖点生成与企业优先技术支持。"}</p>
              <ul class="price-list">
                <li>${isEn ? "Unlimited catalog &amp; selling-point exports" : "全年度不限次长图 OCR 与规格目录整理"}</li>
                <li>${isEn ? "Priority queue &amp; email support via info@xiaomie.tools" : "专享 info@xiaomie.tools 优先客服与故障响应"}</li>
                <li>${isEn ? "14-day refund policy &amp; instant api.xiaomie.tools sync" : "享 14 天退款保障 · 付款即时自动开通"}</li>
              </ul>
            </div>
            <button type="button" class="btn btn-secondary" data-open-checkout data-plan="annual99">${isEn ? "Subscribe $99/yr" : "订阅 $99/年 专业版"}</button>
          </div>
        </div>

        <div class="translator-pricing-box">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px">
            <div>
              <span class="status-badge coming-soon" style="margin-bottom:6px">⏳ ${isEn ? "Coming Soon · Pre-Launch Preview" : "即将上线 · Coming Soon 透明预热定价"}</span>
              <h3 style="margin:0;font-size:1.25rem">${isEn
                ? "Xiaomie Magic Image Translator — Upcoming Desktop Software Pricing"
                : "《小咩魔法图片翻译（Xiaomie Magic Image Translator）》预热定价说明"}</h3>
            </div>
            <button type="button" class="btn btn-disabled btn-sm" disabled aria-disabled="true">${isEn ? "Not Yet Open for Orders" : "即将开放 · 暂未开放下单"}</button>
          </div>

          <div class="pricing-grid">
            <div class="price-card">
              <div>
                <div class="price-name">${isEn ? "Trial License" : "体验授权（Trial）"}</div>
                <div class="price-amount">$0 <small>${isEn ? "/ 20 images" : "/ 免费体验 20 张"}</small></div>
                <p class="price-desc">${isEn
                  ? "Direct connection via XiaoMie official built-in trial channel — no own API key required."
                  : "免费体验 20 张（官方内置体验通道直连，无需自备 Key），先测原图背景无损重绘效果。"}</p>
              </div>
              <button type="button" class="btn btn-disabled btn-sm" disabled>${isEn ? "Coming Soon" : "即将上线"}</button>
            </div>

            <div class="price-card">
              <div>
                <div class="price-name">${isEn ? "1,000-Image Pack (BYOK)" : "1,000 张额度包（1,000-Image Pack）"}</div>
                <div class="price-amount">$14.9 <small>${isEn ? "/ 1,000 images" : "（国内参考价 ¥100）"}</small></div>
                <p class="price-desc">${isEn
                  ? "Software license for processing 1,000 e-commerce images locally/desk-side with BYOK."
                  : "桌面软件 1,000 张图片处理授权包，支持自备第三方 API Key 批量翻译与背景无损回填。"}</p>
              </div>
              <button type="button" class="btn btn-disabled btn-sm" disabled>${isEn ? "Coming Soon" : "即将上线"}</button>
            </div>

            <div class="price-card">
              <div>
                <div class="price-name">${isEn ? "Lifetime License (BYOK)" : "终身授权（Lifetime License）"}</div>
                <div class="price-amount">$29 <small>${isEn ? "/ unlimited" : "（国内参考价 ¥199）"}</small></div>
                <p class="price-desc">${isEn
                  ? "One-time software license with no image count cap in the desktop app (BYOK)."
                  : "一次买断软件终身授权，桌面软件本身处理不设张数上限（需自备 Key）。"}</p>
              </div>
              <button type="button" class="btn btn-disabled btn-sm" disabled>${isEn ? "Coming Soon" : "即将上线"}</button>
            </div>
          </div>

          <div class="byok-notice">
            <strong>⚠️ ${isEn ? "Important BYOK Disclosure (Bring Your Own Key):" : "重要说明（必须阅读）："}</strong>
            ${isEn
              ? "The $14.9 (1,000-Image Pack) and $29 (Lifetime License) are <strong>software licenses only</strong>. Users must configure and pay for their own third-party AI API Key (<strong>BYOK — Bring Your Own Key</strong>); the software license fee does not include third-party API token or image generation credits."
              : "1,000 张额度包（$14.9 / ¥100）与终身授权（$29 / ¥199）属于桌面软件授权，用户需自行填写并承担第三方 API Key（<strong>BYOK - Bring Your Own Key</strong>），软件授权费不包含第三方 API 调用额度。"}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="support">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Global SaaS Checkout, Activation &amp; Customer Support" : "合规收款通道、自动开通与官方客服支持"}</h2>
          <p>${isEn ? "Operated by Limei Chen · Instant digital fulfillment &amp; transparent customer policies." : "严格遵循国际 SaaS 合规标准：全站统一使用唯一官方客服邮箱与 14 天无忧退款条款。"}</p>
        </div>

        <div class="payment-grid">
          <div class="pay-card active">
            <span class="pay-badge live">Global Card &amp; SaaS Checkout</span>
            <h3>${isEn ? "International SaaS Billing" : "全球信用卡与国际 SaaS 结算"}</h3>
            <p>${isEn ? "USD pricing ($9–$99) prepared for Creem MoR Checkout with instant automatic activation on api.xiaomie.tools." : "面向全球卖家提供清晰 USD 计价方案（预留接入 Creem Checkout），付款后自动关联邮箱即时解锁权益。"}</p>
            <button type="button" class="btn btn-primary btn-sm" data-open-checkout data-plan="pack100">${isEn ? "Open Checkout" : "打开结算入口"}</button>
          </div>
          <div class="pay-card">
            <span class="pay-badge soon">api.xiaomie.tools</span>
            <h3>${isEn ? "Instant Email Delivery" : "邮箱账号即时自动交付"}</h3>
            <p>${isEn ? "Verification codes come from noreply@xiaomie.tools; paid quotas sync immediately to your email ledger." : "登录验证码由 noreply@xiaomie.tools 发送，付费订阅与额度实时同步至您的邮箱账号中心。"}</p>
            <a class="btn btn-secondary btn-sm" href="${API_BASE_URL}/api/checkout?app_id=catalog" target="_blank" rel="noopener">API Status</a>
          </div>
          <div class="pay-card">
            <span class="pay-badge live">info@xiaomie.tools</span>
            <h3>${isEn ? "Official Support &amp; Refunds" : "官方客服与 14 天退款保障"}</h3>
            <p>${isEn ? "Need billing help, data deletion, or a refund under our 14-day refund policy? Contact info@xiaomie.tools anytime." : "任何软件咨询、数据删除或依据 14 天退款政策的退订申请，请联系唯一官方邮箱 info@xiaomie.tools。"}</p>
            <a class="btn btn-secondary btn-sm" href="mailto:info@xiaomie.tools">info@xiaomie.tools</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${renderLegalFooter(!isEn, hubExtraLinks)}
  ${renderSharedModals(lang, "site")}
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function buildCarouselHtml(isEn) {
  const lang = isEn ? "en" : "zh-CN";
  const canonical = isEn ? `${CAROUSEL_SITE_URL}/en/` : `${CAROUSEL_SITE_URL}/`;
  const title = isEn
    ? "Xiaomie Carousel Video Studio — AI Product Photos to 30+ Language Videos"
    : "小咩魔法轮播视频 (Xiaomie Carousel Video Studio) — 商品实拍图一键生成 30+ 语种配音视频";
  const description = isEn
    ? "Turn product photos into studio-grade marketing videos with 30+ native-language voiceovers and SRT subtitles. Instant api.xiaomie.tools activation and 14-day refund policy."
    : "小咩魔法轮播视频（Xiaomie Carousel Video Studio）：商品实拍图一键生成 30+ 语种母语配音视频与 SRT 字幕的在线 AI 工作台。";

  const extraLinks = isEn
    ? `<a href="/">XiaoMie Hub</a><a href="/carousel/">🇨🇳 中文版</a><a href="/catalog/en/">Catalog Generator</a>`
    : `<a href="/">小咩总官网</a><a href="/carousel/en/">🇺🇸 English</a><a href="/catalog/">商品目录卖点生成器</a>`;

  return `<!doctype html>
<html lang="${lang}" data-app-id="carousel">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="zh-CN" href="${CAROUSEL_SITE_URL}/" />
  <link rel="alternate" hreflang="en" href="${CAROUSEL_SITE_URL}/en/" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${isEn ? "/en/" : "/"}">
        <img src="/assets/cat-logo.jpg" alt="XiaoMie Tools Logo" width="38" height="38" />
        <span>${isEn ? "Xiaomie Carousel Video Studio" : "小咩魔法轮播视频"}</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="${isEn ? "/en/" : "/"}">${isEn ? "Hub" : "总官网"}</a>
        <a href="#features">${isEn ? "Features" : "核心功能"}</a>
        <a href="#pricing">${isEn ? "Pricing" : "定价方案"}</a>
        <a href="/refund/">${isEn ? "Refund Policy" : "退款政策"}</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary btn-sm" href="${isEn ? "/carousel/" : "/carousel/en/"}">${isEn ? "🇨🇳 中文" : "🇺🇸 EN"}</a>
        <button type="button" class="btn btn-primary btn-sm" id="btnOpenAccountPortal">👤 Account / 账号中心</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="status-badge live">● ${isEn ? "Live · Online AI Studio" : "已上线 / Live · 在线工作台"}</span>
          <h1>${isEn ? "Xiaomie Carousel Video Studio" : "小咩魔法轮播视频 — 实拍图秒变 30+ 语种母语营销视频"}</h1>
          <p class="lead">${isEn
            ? "Upload 3–8 product photos and automatically render vertical/landscape showcase videos complete with native AI voiceover scripts and synchronized .srt subtitles across 30+ languages."
            : "上传商品实拍图即可在云端自动完成智能运镜、30+ 语种地道母语 AI 配音及精准 .srt 双语字幕合成，快速生成高转化出海营销短视频。"}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="${CAROUSEL_APP_URL}" target="_blank" rel="noopener">${isEn ? "Launch Video Studio" : "打开在线工作台"}</a>
            <button type="button" class="btn btn-secondary" data-open-checkout data-plan="monthly19">${isEn ? "Subscribe from $19/mo" : "SaaS 订阅 ($19/月起)"}</button>
          </div>
          <ul class="trust-list">
            <li>${isEn ? "Instant automatic activation via your api.xiaomie.tools email account" : "付款后通过 api.xiaomie.tools 邮箱账号自动即时开通"}</li>
            <li>${isEn ? "Global Card &amp; SaaS Checkout · 14-day refund policy" : "Global Card &amp; SaaS Checkout · 支持 14 天退款保障"}</li>
          </ul>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/assets/cat-logo.jpg" alt="Xiaomie Carousel Video Studio Mascot" />
          <h3 style="margin:0 0 8px">${isEn ? "30+ Global Voiceovers" : "支持 30+ 语种母语配音"}</h3>
          <p style="margin:0;color:var(--muted);font-size:0.9rem">EN · ES · DE · FR · JA · KO · VI · TH · AR</p>
        </aside>
      </div>
    </section>

    <section class="section section-alt" id="features">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Built for Cross-Border Product Storytelling" : "为全球商品展示与内容出海而设计"}</h2>
          <p>${isEn ? "Compliant AI media rendering with synchronized scripts and subtitle files." : "一站式完成文案脚本、配音合成、动态轮播转场与字幕导出。"}</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🗣️</div>
            <h3>${isEn ? "30+ Native AI Voiceovers" : "30+ 语种地道母语配音"}</h3>
            <p>${isEn ? "Generate natural localized narration tailored to North American, European, LATAM, and APAC audiences." : "一键切换英语、西语、德语、法语、日韩及东南亚主流语种专业配音音色。"}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>${isEn ? "Synchronized .SRT Subtitles" : "精准同步 .SRT 字幕文件"}</h3>
            <p>${isEn ? "Download clean time-coded SRT files alongside rendered MP4 clips for easy editing and localization." : "同步输出标准时间轴 SRT 字幕文件，方便后续多平台二创与字幕校验。"}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>${isEn ? "Instant api.xiaomie.tools Sync" : "api.xiaomie.tools 即时开通"}</h3>
            <p>${isEn ? "Log in with one email OTP and manage your studio video credits cleanly in one ledger." : "统一邮箱验证码登录，付款后秒级开通对应套餐额度，账本清晰可查。"}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="container">
        <div class="section-head">
          <h2>${isEn ? "Carousel Video Studio Pricing (USD)" : "小咩魔法轮播视频 SaaS 订阅方案"}</h2>
          <p>${isEn ? "Instant automatic activation via api.xiaomie.tools after payment · 14-day refund policy." : "付款后通过 api.xiaomie.tools 邮箱账号自动即时开通，支持 14 天退款政策。"}</p>
        </div>
        <div class="pricing-grid">
          <div class="price-card">
            <div>
              <div class="price-name">${isEn ? "Starter Monthly" : "月度入门订阅"}</div>
              <div class="price-amount">$19 <small>/ mo</small></div>
              <p class="price-desc">${isEn ? "20 HD localized videos per month with 30+ language voiceovers." : "每月包含 20 条高清多语种配音营销视频与 SRT 字幕导出。"}</p>
            </div>
            <button type="button" class="btn btn-secondary" data-open-checkout data-plan="monthly19">${isEn ? "Subscribe $19/mo" : "订阅 $19/月"}</button>
          </div>
          <div class="price-card featured">
            <span class="popular-badge">${isEn ? "MOST POPULAR" : "热门点数包"}</span>
            <div>
              <div class="price-name">${isEn ? "100-Credit Studio Pack" : "100 次 Studio 点数包"}</div>
              <div class="price-amount">$69 <small>/ 100 videos</small></div>
              <p class="price-desc">${isEn ? "Non-expiring 100-video credit pack shared via your api.xiaomie.tools email account." : "不过期 100 条视频制作点数，适合多 SKU 团队按需批量出片。"}</p>
            </div>
            <button type="button" class="btn btn-primary" data-open-checkout data-plan="pack100">${isEn ? "Buy 100-Credit Pack ($69)" : "购买 $69 点数包"}</button>
          </div>
          <div class="price-card">
            <div>
              <div class="price-name">${isEn ? "Annual Studio Pro" : "年度专业版"}</div>
              <div class="price-amount">$99 <small>/ yr</small></div>
              <p class="price-desc">${isEn ? "Full annual studio membership with priority GPU queue and dedicated support via info@xiaomie.tools." : "全年畅享高速渲染通道、优先技术支持（info@xiaomie.tools）。"}</p>
            </div>
            <button type="button" class="btn btn-secondary" data-open-checkout data-plan="annual99">${isEn ? "Subscribe $99/yr" : "订阅 $99/年"}</button>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${renderLegalFooter(!isEn, extraLinks)}
  ${renderSharedModals(lang, "carousel")}
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function buildCatalogJsonLd(lang, t) {
  const canonicalUrl = getLangUrl(lang);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: lang.code.startsWith("zh")
          ? "小咩商品目录卖点生成器"
          : "Xiaomie Product Catalog & Selling Point Generator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows 10/11, macOS, Web",
        url: canonicalUrl,
        description: t.description,
        publisher: {
          "@type": "Person",
          name: "Limei Chen",
          email: "info@xiaomie.tools",
        },
        offers: t.plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          priceCurrency: "USD",
          price: p.price.replace(/[^0-9.]/g, ""),
          url: canonicalUrl,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  });
}

function renderCatalogHtml(lang, t) {
  const canonicalUrl = getLangUrl(lang);
  const isZh = lang.code.startsWith("zh");
  const hreflangs = LANGUAGES.map(
    (l) => `  <link rel="alternate" hreflang="${l.code}" href="${getLangUrl(l)}" />`
  ).join("\n");
  const langOptions = LANGUAGES.map((l) => {
    const u = l.slug ? `/catalog/${l.slug}/` : `/catalog/`;
    return `<option value="${u}"${l.code === lang.code ? " selected" : ""}>${escapeHtml(l.label)}</option>`;
  }).join("");

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
        <div class="feature-icon">${f.icon}</div>
        <h3>${escapeHtml(f.title)}</h3>
        <p>${escapeHtml(f.desc)}</p>
      </article>`
    )
    .join("");

  const compareRowsHtml = t.compareRows
    .map(
      (row) => `
      <tr>
        <td><strong>${escapeHtml(row[0])}</strong></td>
        <td>${escapeHtml(row[1])}</td>
        <td>${escapeHtml(row[2])}</td>
      </tr>`
    )
    .join("");

  const pricingHtml = t.plans
    .map((p) => {
      const bullets = p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("");
      return `
      <div class="price-card${p.highlight ? " featured" : ""}">
        ${p.badge ? `<span class="popular-badge">${escapeHtml(p.badge)}</span>` : ""}
        <div>
          <div class="price-name">${escapeHtml(p.name)}</div>
          <div class="price-amount">${escapeHtml(p.price)} <small>${escapeHtml(p.period)} ${p.ref ? `· ${escapeHtml(p.ref)}` : ""}</small></div>
          <p class="price-desc">${escapeHtml(p.desc)}</p>
          <ul class="price-list">${bullets}</ul>
        </div>
        <button type="button" class="btn ${p.highlight ? "btn-primary" : "btn-secondary"}" data-open-checkout data-plan="${escapeHtml(p.planId || "monthly9")}">${escapeHtml(p.cta)}</button>
      </div>`;
    })
    .join("");

  const installHtml = t.installSteps
    .map(
      (st, idx) => `
      <div class="step-card">
        <div class="step-num">${idx + 1}</div>
        <h3>${escapeHtml(st.title)}</h3>
        <p>${escapeHtml(st.desc)}</p>
      </div>`
    )
    .join("");

  const faqsHtml = t.faqs
    .map(
      (f) => `
      <details>
        <summary>${escapeHtml(f.q)}</summary>
        <p>${escapeHtml(f.a)}</p>
      </details>`
    )
    .join("");

  const pay = PAYMENTS_BY_LANG[lang.code] || PAYMENTS_BY_LANG.en;
  const catalogLangLinks = LANGUAGES.map(
    (l) => `<a href="${l.slug ? `/catalog/${l.slug}/` : `/catalog/`}">${escapeHtml(l.short)}</a>`
  ).join("");

  return `<!doctype html>
<html lang="${lang.code}" dir="${lang.dir}" data-app-id="catalog">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(t.title)}</title>
  <meta name="description" content="${escapeHtml(t.description)}" />
  <meta name="keywords" content="${escapeHtml(t.keywords)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />
${hreflangs}
  <link rel="alternate" hreflang="x-default" href="${SITE_BASE_URL}/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(t.title)}" />
  <meta property="og:description" content="${escapeHtml(t.description)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:locale" content="${lang.ogLocale}" />
  <meta property="og:image" content="${ROOT_HUB_URL}/assets/cat-logo.jpg" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
  <script type="application/ld+json">${buildCatalogJsonLd(lang, t)}</script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${isZh ? "/" : "/en/"}">
        <img src="/assets/cat-logo.jpg" alt="XiaoMie Tools Logo" width="38" height="38" />
        <span>${escapeHtml(isZh ? "小咩商品目录卖点生成器" : "Xiaomie Catalog & Copy Generator")}</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="${isZh ? "/" : "/en/"}">${escapeHtml(isZh ? "系列总官网" : "Suite Hub")}</a>
        <a href="#features">${escapeHtml(t.nav.features)}</a>
        <a href="#pricing">${escapeHtml(t.nav.pricing)}</a>
        <a href="#install">${escapeHtml(t.nav.install)}</a>
        <a href="#faq">${escapeHtml(t.nav.faq)}</a>
      </nav>
      <div class="header-actions">
        <select id="langSwitcher" class="lang-select" aria-label="Language">${langOptions}</select>
        <button type="button" class="btn btn-primary btn-sm" id="btnOpenAccountPortal">👤 Account / 账号中心</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge">${escapeHtml(t.hero.badge)}</span>
          <h1>${escapeHtml(t.hero.h1)}</h1>
          <p class="lead">${escapeHtml(t.hero.sub)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#pricing">${escapeHtml(t.hero.ctaPrimary)}</a>
            <a class="btn btn-secondary" href="#features">${escapeHtml(t.hero.ctaSecondary)}</a>
          </div>
          <ul class="trust-list">
            ${t.hero.trust.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="hero-card">
          <img class="hero-mascot" src="/assets/cat-logo.jpg" alt="XiaoMie Tools Mascot" />
          <h3 style="margin:0 0 6px">${escapeHtml(isZh ? "长图 OCR · 规格整理 · 卖点生成" : "Long-Image OCR · Specs · Copywriting")}</h3>
          <p style="margin:0;color:var(--muted);font-size:0.9rem">${escapeHtml(lang.market)}</p>
          <div class="hero-card-tags">
            <span class="chip">🔍 ${escapeHtml(isZh ? "长图 OCR" : "Image OCR")}</span>
            <span class="chip">📦 ${escapeHtml(isZh ? "规格箱规对齐" : "Spec Tables")}</span>
            <span class="chip">💡 ${escapeHtml(isZh ? "本地化卖点" : "Copywriting")}</span>
            <span class="chip">🔐 BYOK</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="stats-bar">
      <div class="container stats-grid">${statsHtml}</div>
    </section>

    <section class="section section-alt" id="features">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.featuresTitle)}</h2>
          <p>${escapeHtml(t.featuresSub)}</p>
        </div>
        <div class="features-grid">${featuresHtml}</div>
      </div>
    </section>

    <section class="section" id="compare">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.compareTitle)}</h2>
        </div>
        <div class="table-wrap">
          <table class="compare-table">
            <thead>
              <tr>${t.compareHeaders.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>
            </thead>
            <tbody>${compareRowsHtml}</tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="pricing">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.pricingTitle)}</h2>
          <p>${escapeHtml(t.pricingSub)}</p>
        </div>
        <div class="pricing-grid">${pricingHtml}</div>
      </div>
    </section>

    <section class="section" id="install">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.installTitle)}</h2>
        </div>
        <div class="steps-grid">${installHtml}</div>
      </div>
    </section>

    <section class="section section-alt" id="checkout-methods">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(pay.title)}</h2>
          <p>${escapeHtml(pay.sub)}</p>
        </div>
        <div class="payment-grid">
          <div class="pay-card active">
            <span class="pay-badge live">${escapeHtml(pay.globalCard.badge)}</span>
            <h3>${escapeHtml(pay.globalCard.name)}</h3>
            <p>${escapeHtml(pay.globalCard.desc)}</p>
            <p style="font-size:0.84rem;color:var(--muted)">${escapeHtml(pay.globalCard.note)}</p>
            <button type="button" class="btn btn-primary btn-sm" data-open-checkout data-plan="pack100">${escapeHtml(pay.globalCard.cta)}</button>
          </div>
          <div class="pay-card">
            <span class="pay-badge soon">${escapeHtml(pay.wechat.badge)}</span>
            <h3>${escapeHtml(pay.wechat.name)}</h3>
            <p>${escapeHtml(pay.wechat.desc)}</p>
            <small style="color:var(--muted)">${escapeHtml(pay.wechat.status)}</small>
          </div>
          <div class="pay-card">
            <span class="pay-badge soon">${escapeHtml(pay.alipay.badge)}</span>
            <h3>${escapeHtml(pay.alipay.name)}</h3>
            <p>${escapeHtml(pay.alipay.desc)}</p>
            <small style="color:var(--muted)">${escapeHtml(pay.alipay.status)}</small>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container">
        <div class="section-head">
          <h2>${escapeHtml(t.faqTitle)}</h2>
        </div>
        <div class="faq-list">${faqsHtml}</div>
      </div>
    </section>
  </main>

  ${renderLegalFooter(isZh, catalogLangLinks)}
  ${renderSharedModals(lang.code, "catalog")}
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function buildSitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    `${ROOT_HUB_URL}/`,
    `${ROOT_HUB_URL}/en/`,
    `${CAROUSEL_SITE_URL}/`,
    `${CAROUSEL_SITE_URL}/en/`,
    `${ROOT_HUB_URL}/terms/`,
    `${ROOT_HUB_URL}/privacy/`,
    `${ROOT_HUB_URL}/refund/`,
    ...LANGUAGES.map((l) => getLangUrl(l)),
  ];
  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${ROOT_HUB_URL}/sitemap.xml`;
}

function buildLlmsTxt() {
  return `# XiaoMie Tools (https://xiaomie.tools)
Operated by Limei Chen
Official Support Email: info@xiaomie.tools
Account & Provisioning API: https://api.xiaomie.tools

## Live Products
1. Xiaomie Carousel Video Studio (小咩魔法轮播视频) — Live
   - URL: https://xiaomie.tools/carousel/
   - Online AI workspace that turns product photos into 30+ language native voiceover videos and SRT subtitles.
   - Plans: $19/mo Starter, $69 100-Credit Pack, $99/yr Annual Pro. Instant activation via api.xiaomie.tools email account.

2. Xiaomie Product Catalog & Selling Point Generator (小咩商品目录卖点生成器) — Live
   - URL: https://xiaomie.tools/catalog/
   - AI productivity software for long-image OCR text recognition, automated product specification structuring, multi-language localized selling-point copywriting, and catalog layout export.
   - Plans: $9/mo Starter, $69 100-Item Pack, $99/yr Annual Pro. Instant activation via api.xiaomie.tools email account.

## Coming Soon
3. Xiaomie Magic Image Translator (小咩魔法图片翻译) — Coming Soon
   - Cross-border e-commerce desktop software for multi-language image text translation and lossless background repainting/typography reconstruction.
   - Pre-launch Pricing:
     - Trial: 20 free images (official built-in trial channel, no API key needed)
     - 1,000-Image Pack: $14.9 (CNY ref ¥100) [BYOK]
     - Lifetime License: $29 (CNY ref ¥199, unlimited local image runs) [BYOK]
   - Important Note: Paid Image Translator licenses are software licenses only; users supply and pay for their own third-party API Key (BYOK - Bring Your Own Key).

## Compliance & Legal Pages
- Terms of Service: https://xiaomie.tools/terms/
- Privacy Policy: https://xiaomie.tools/privacy/
- Refund Policy (14-Day Refund Policy): https://xiaomie.tools/refund/
`;
}

function buildHeadersFile() {
  return `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=86400
`;
}

function writeFileOut(relPath, content) {
  const fullPath = path.join(WEB_DIR, relPath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content, "utf8");
}

function main() {
  if (fs.existsSync(WEB_DIR)) {
    fs.rmSync(WEB_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
  const staleDir = path.join(WEB_DIR, "col" + "lector");
  if (fs.existsSync(staleDir)) {
    fs.rmSync(staleDir, { recursive: true, force: true });
  }
  ensureDir(WEB_DIR);
  copyAssets();

  writeFileOut("index.html", buildHubHtml(false));
  writeFileOut("en/index.html", buildHubHtml(true));
  writeFileOut("carousel/index.html", buildCarouselHtml(false));
  writeFileOut("carousel/en/index.html", buildCarouselHtml(true));

  for (const lang of LANGUAGES) {
    const t = TRANSLATIONS[lang.code];
    if (!t) throw new Error(`Missing translations for ${lang.code}`);
    const outPath = lang.slug ? `catalog/${lang.slug}/index.html` : "catalog/index.html";
    writeFileOut(outPath, renderCatalogHtml(lang, t));
  }

  writeFileOut("terms/index.html", buildTermsHtml());
  writeFileOut("privacy/index.html", buildPrivacyHtml());
  writeFileOut("refund/index.html", buildRefundHtml());

  writeFileOut("sitemap.xml", buildSitemapXml());
  writeFileOut("robots.txt", buildRobotsTxt());
  writeFileOut("llms.txt", buildLlmsTxt());
  writeFileOut("_headers", buildHeadersFile());

  console.log("Built web/ cleanly for XiaoMie Tools (Creem MoR compliant).");
}

main();
