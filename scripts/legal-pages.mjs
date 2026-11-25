function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderLegalShell({ slug, title, description, bodyHtml }) {
  const canonical = `https://xiaomie.tools/${slug}/`;
  return `<!doctype html>
<html lang="en" data-app-id="site">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} — XiaoMie Tools</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" type="image/jpeg" href="/assets/cat-logo.jpg" />
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/en/">
        <img src="/assets/cat-logo.jpg" alt="XiaoMie Tools Logo" width="38" height="38" />
        <span>XiaoMie Tools</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="/en/#suite">Products</a>
        <a href="/en/#pricing">Pricing</a>
        <a href="/terms/">Terms</a>
        <a href="/privacy/">Privacy</a>
        <a href="/refund/">Refund Policy</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary btn-sm" href="/">🇨🇳 简体中文首页</a>
        <a class="btn btn-primary btn-sm" href="/en/">🌐 English Home</a>
      </div>
    </div>
  </header>

  <main class="section">
    <div class="container">
      <article class="legal-card">
        ${bodyHtml}
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a></div>
      <div class="footer-langs">
        <a href="/terms/">Terms of Service</a>
        <a href="/privacy/">Privacy Policy</a>
        <a href="/refund/">Refund Policy</a>
        <a href="/en/">English</a>
        <a href="/">简体中文</a>
      </div>
    </div>
  </footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>
`;
}

export function buildTermsHtml() {
  return renderLegalShell({
    slug: "terms",
    title: "Terms of Service",
    description: "Terms of Service for XiaoMie Tools (Operated by Limei Chen): instant digital SaaS delivery, BYOK desktop license usage, and acceptable use.",
    bodyHtml: `
      <h1>Terms of Service</h1>
      <div class="legal-meta">
        <strong>Service Provider:</strong> XiaoMie Tools (Operated by Limei Chen)<br />
        <strong>Effective Date:</strong> January 1, 2026 · <strong>Official Support:</strong> <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a>
      </div>

      <h2>1. Scope of Services</h2>
      <p>These Terms of Service govern your access to and use of the websites, web SaaS workspaces, browser productivity extensions, and desktop software applications operated by <strong>XiaoMie Tools (Operated by Limei Chen)</strong> at <code>xiaomie.tools</code> and <code>api.xiaomie.tools</code>, including <strong>Xiaomie Carousel Video Studio</strong>, <strong>Xiaomie Product Catalog &amp; Selling Point Generator</strong>, and upcoming tools such as <strong>Xiaomie Magic Image Translator</strong>.</p>
      <p><strong>中文摘要：</strong>本服务条款适用于由 <strong>XiaoMie Tools（运营主体：Limei Chen）</strong> 运营的官网及旗下 SaaS/桌面端软件产品，涵盖小咩魔法轮播视频、小咩商品目录卖点生成器及即将上线的小咩魔法图片翻译。</p>

      <h2>2. Instant Digital Delivery &amp; Account Activation</h2>
      <p>All XiaoMie Tools subscriptions, credit packs, and software licenses are delivered digitally with no physical shipment. Immediately after payment confirmation, entitlements are automatically provisioned and bound to the customer's registered email account via <code>api.xiaomie.tools</code>.</p>
      <p><strong>中文摘要：</strong>所有 SaaS 订阅、点数包与软件授权均为纯数字产品（无实物寄送），付款成功后通过 <code>api.xiaomie.tools</code> 邮箱账号自动即时开通对应权益。</p>

      <h2>3. BYOK (Bring Your Own Key) Software Licenses &amp; Fair Use</h2>
      <ul>
        <li><strong>BYOK Desktop &amp; Custom API Licenses:</strong> Certain plans (including credit packs, Pro unlocks, and upcoming Xiaomie Magic Image Translator 1,000-Image Pack / Lifetime desktop licenses) allow or require users to configure their own third-party AI model API Key (<em>Bring Your Own Key / BYOK</em>). Software license fees pay solely for XiaoMie Tools software functionality and do not include third-party API usage credits or fees charged directly by third-party AI providers.</li>
        <li><strong>Acceptable &amp; Fair Use:</strong> You agree to use XiaoMie Tools only for lawful commercial content creation, OCR text extraction from authorized product sheets, product catalog organization, video rendering, and image localization. You may not resell accounts, share single-user credentials commercially, attempt to bypass quota metering, or use the software in violation of applicable laws or third-party rights.</li>
      </ul>

      <h2>4. Availability, Updates &amp; Intellectual Property</h2>
      <p>We continuously improve software stability, OCR accuracy, and localization workflows. All software code, user interfaces, brand assets, and documentation remain the intellectual property of XiaoMie Tools (Operated by Limei Chen). Output catalogs, videos, and translated images generated from your own source assets remain yours.</p>

      <h2>5. Refunds &amp; Support</h2>
      <p>Purchases are covered by our <a href="/refund/" style="color:var(--primary);font-weight:700">14-Day Refund Policy</a>. For licensing questions, technical support, or billing inquiries, contact <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a>.</p>
    `,
  });
}

export function buildPrivacyHtml() {
  return renderLegalShell({
    slug: "privacy",
    title: "Privacy Policy",
    description: "Privacy Policy for XiaoMie Tools (Operated by Limei Chen): minimal account email & billing data collection, local browser/desktop processing, zero data selling.",
    bodyHtml: `
      <h1>Privacy Policy</h1>
      <div class="legal-meta">
        <strong>Data Controller:</strong> XiaoMie Tools (Operated by Limei Chen)<br />
        <strong>Effective Date:</strong> January 1, 2026 · <strong>Privacy Contact:</strong> <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a>
      </div>

      <h2>1. Data We Collect</h2>
      <p>We practice strict data minimization and only collect information strictly necessary to authenticate your account and deliver paid entitlements:</p>
      <ul>
        <li><strong>Login Email Address:</strong> Used for passwordless OTP verification via <code>noreply@xiaomie.tools</code> and account lookup under <code>api.xiaomie.tools</code>.</li>
        <li><strong>Entitlement &amp; Usage Ledger Data:</strong> Plan tier, activation timestamps, remaining credit counts, and deduction ledger entries scoped by <code>(email, app_id)</code>.</li>
        <li><strong>Essential Billing Metadata:</strong> Transaction IDs, currency, plan identifier, and payment status provided by our Merchant of Record / payment processor to verify orders and issue instant access. Full payment card numbers are never stored on our servers.</li>
      </ul>

      <h2>2. Local-First Processing</h2>
      <p>Product long-image OCR, specification formatting, and WebCodecs video encoding run primarily locally inside your browser or desktop application. If you configure a personal third-party AI API Key (BYOK), requests go directly to your chosen provider under your own credentials.</p>

      <h2>3. No Sale of Personal Data</h2>
      <p><strong>XiaoMie Tools does NOT sell, rent, lease, or trade user personal data or email addresses to third parties, data brokers, or advertisers.</strong></p>
      <p><strong>中文说明：</strong>我们仅收集登录验证邮箱、权益账本与必要账单确认信息，绝不向任何第三方出售或出租用户隐私数据。</p>

      <h2>4. Data Retention &amp; Deletion Requests</h2>
      <p>You may request access to, correction of, or complete deletion of your account email and usage ledger at any time by emailing <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a>. Verified deletion requests are completed within 7 business days.</p>
    `,
  });
}

export function buildRefundHtml() {
  return renderLegalShell({
    slug: "refund",
    title: "Refund Policy",
    description: "14-day refund policy for XiaoMie Tools (Operated by Limei Chen): straightforward refund eligibility and fast processing via info@xiaomie.tools.",
    bodyHtml: `
      <h1>Refund Policy</h1>
      <div class="legal-meta">
        <strong>Merchant / Operator:</strong> XiaoMie Tools (Operated by Limei Chen)<br />
        <strong>Refund Guarantee:</strong> 14-Day Refund Policy · <strong>Support Email:</strong> <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a>
      </div>

      <h2>1. 14-Day Refund Policy</h2>
      <p>We stand behind our products and offer a transparent <strong>14-day refund policy</strong> for purchases made through our official checkout channels:</p>
      <ul>
        <li>You may request a full refund within <strong>14 calendar days</strong> of your original purchase date if the software does not meet your expectations, experiences unresolved technical issues on your supported device, or was purchased in error.</li>
        <li>This 14-day refund policy applies to our SaaS subscriptions, credit packs, and desktop software licenses sold by XiaoMie Tools.</li>
      </ul>
      <p><strong>中文说明：</strong>我们提供标准 <strong>14 天无忧退款保障（14-day refund policy）</strong>。自付款之日起 14 个自然日内，如产品未达到预期、遇到未解决的兼容性问题或误购，均可申请全额退款。</p>

      <h2>2. How to Request a Refund</h2>
      <ol>
        <li>Send an email to <a href="mailto:info@xiaomie.tools" style="color:var(--primary);font-weight:700">info@xiaomie.tools</a> with the subject line <code>Refund Request</code>.</li>
        <li>Include the <strong>email address used at checkout</strong>, your <strong>order / receipt ID</strong>, and a brief reason (optional, helps us improve).</li>
        <li>Our team will verify and approve eligible requests within 1–2 business days and issue the refund back to your original payment method via our Merchant of Record / payment processor. Depending on your card issuer or bank, funds typically appear within 5–10 business days.</li>
      </ol>

      <h2>3. Scope &amp; BYOK Third-Party Costs</h2>
      <p>Refunds apply directly to software fees, subscriptions, and licenses paid to XiaoMie Tools. Any third-party API usage charges incurred under a Bring-Your-Own-Key (BYOK) configuration are billed independently by your third-party API provider and are outside XiaoMie Tools' billing scope.</p>
    `,
  });
}
