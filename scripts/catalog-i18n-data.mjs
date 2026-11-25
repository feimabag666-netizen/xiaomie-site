export const SITE_BASE_URL = "https://xiaomie.tools/catalog";
export const STUDIO_BASE_URL = "https://catalog.xiaomie.tools";
export const API_BASE_URL = "https://api.xiaomie.tools";

export const LANGUAGES = [
  { code: "zh-CN", slug: "", label: "简体中文", short: "简中", dir: "ltr", ogLocale: "zh_CN", market: "中国大陆及全球华人跨境商家" },
  { code: "zh-TW", slug: "zh-tw", label: "繁體中文", short: "繁中", dir: "ltr", ogLocale: "zh_TW", market: "台灣、香港與全球華語跨境商家" },
  { code: "en", slug: "en", label: "English", short: "EN", dir: "ltr", ogLocale: "en_US", market: "Global E-Commerce Teams & SaaS Sellers" },
  { code: "ja", slug: "ja", label: "日本語", short: "JP", dir: "ltr", ogLocale: "ja_JP", market: "日本市場向けEC・カタログ制作チーム" },
  { code: "ko", slug: "ko", label: "한국어", short: "KR", dir: "ltr", ogLocale: "ko_KR", market: "글로벌 커머스 및 상품 카탈로그 셀러" },
  { code: "es", slug: "es", label: "Español", short: "ES", dir: "ltr", ogLocale: "es_ES", market: "Equipos de catálogos y comercio internacional" },
  { code: "de", slug: "de", label: "Deutsch", short: "DE", dir: "ltr", ogLocale: "de_DE", market: "DACH E-Commerce & Produktkatalog-Teams" },
  { code: "fr", slug: "fr", label: "Français", short: "FR", dir: "ltr", ogLocale: "fr_FR", market: "Équipes catalogue & e-commerce international" },
  { code: "vi", slug: "vi", label: "Tiếng Việt", short: "VI", dir: "ltr", ogLocale: "vi_VN", market: "Đội ngũ thương mại điện tử & tạo catalog" },
  { code: "th", slug: "th", label: "ภาษาไทย", short: "TH", dir: "ltr", ogLocale: "th_TH", market: "ทีมทำแคตตาล็อกสินค้าและอีคอมเมิร์ซ" },
];

export const TRANSLATIONS = {
  "zh-CN": {
    title: "小咩商品目录卖点生成器 — 长图OCR、规格整理与多语种商品目录AI效率助手",
    description: "专为跨境商家与品牌选品团队打造的 AI 生产力工具：支持商品长图 OCR 文字识别、商品规格与外箱参数自动整理、多语种本地化卖点文案生成及结构化商品目录排版导出，免费体验 20 款。",
    keywords: "小咩商品目录卖点生成器,长图OCR文字识别,商品规格参数整理,多语种卖点文案生成,商品目录排版导出,AI电商效率工具",
    nav: { features: "核心能力", compare: "效率对比", pricing: "SaaS 定价", install: "快速上手", faq: "常见问题", cta: "立即开通体验" },
    hero: {
      badge: "已上线 · XiaoMie Tools AI 生产力引擎 · 免费体验 20 款",
      h1: "商品长图识别、规格整理与多语种目录排版，30 秒一站生成",
      sub: "告别繁琐手工制表与反复核对：内置本地高精度长图 OCR 文字识别、产品尺寸/重量/箱规/价格多规格自动对齐整理、B2B 与 ToC 多语种本地化卖点生成，以及可直接归档导出的标准商品目录文档。",
      ctaPrimary: "查看 SaaS 定价与开通",
      ctaSecondary: "了解 6 大核心能力",
      trust: ["本地长图 OCR 引擎，运行流畅不卡顿", "支持中/英等 10 种语种纯净目录排版输出", "付款后通过 api.xiaomie.tools 邮箱账号自动即时开通"]
    },
    stats: [
      { num: "20 款", label: "新账号免费体验额度" },
      { num: "全维对齐", label: "尺寸·重量·箱规·价格联动整理" },
      { num: "0 卡顿", label: "长图 OCR 本地高精度文字识别" },
      { num: "100% 纯净", label: "多语种本地化卖点无混杂" }
    ],
    featuresTitle: "为什么商家团队都使用「小咩商品目录卖点生成器」？",
    featuresSub: "传统手工整理需要逐张看图手打规格与翻译文案，现在一步完成「长图 OCR 识字 + 规格参数对齐 + 多语种卖点写作 + 目录排版导出」。",
    features: [
      { icon: "🔍", title: "商品长图 OCR 文字识别", desc: "内置本地 WASM SIMD 离线 OCR 引擎，精准识别超长详情图中的材质、容量、尺寸表、电压功率及包装文字，直接转化为可编辑参数。" },
      { icon: "📦", title: "多规格尺寸·重量·箱规自动对齐整理", desc: "智能关联产品尺寸、单件重量、容量、每箱数量、外箱毛净重与立方数，多规格商品自动分组匹配，告别数据错位。" },
      { icon: "💡", title: "多语种本地化卖点与真实案例文案", desc: "一键切换 B2B 外贸批发与 ToC 真实种草风格，输出纯正单一语种卖点与服务细节案例，绝不出现中英混杂。" },
      { icon: "🗂️", title: "结构化商品目录一键排版导出", desc: "自动区分产品主图、SKU 规格图、详情图与说明文档，按统一编号目录一键归档导出，可直接用于内部汇报与上架审核。" },
      { icon: "🤖", title: "智能过滤冗余徽标与低质图标", desc: "自动识别并剔除微标、空白占位线框图与无关营销角标，确保商品目录画面干净整洁、专业度一致。" },
      { icon: "🔐", title: "支持 BYOK 自填 API Key 与邮箱账本", desc: "通过 api.xiaomie.tools 邮箱验证码即可管理权限；升级套餐后开放自定义 API Key 设置，成本透明可控。" }
    ],
    compareTitle: "传统手工整理 vs 小咩商品目录卖点生成器",
    compareHeaders: ["效率环节", "传统人工整理制表", "小咩商品目录卖点生成器"],
    compareRows: [
      ["长图里的规格文字", "人工肉眼对照长图手敲，极易错漏", "本地长图 OCR 自动识别提取文本"],
      ["多规格参数与箱规", "尺寸、单重、箱规经常错位混乱", "多规格一一对齐联动适配整理"],
      ["目录配图质检筛选", "导出后逐张手动排查无用图标", "像素识别 + OCR 过滤，保留清晰产品图"],
      ["多语种卖点与故事", "另开多个工具翻译复制拼接", "内置 B2B/ToC 多语种卖点排版一键导出"],
      ["目录输出语言纯净度", "中英混杂，交付前需二次校对", "严格单语种纯净输出，直接交付"]
    ],
    pricingTitle: "透明 SaaS 定价 · 付款后即时开通",
    pricingSub: "支持 $9–$99 月付/年付 SaaS 订阅及点数包；付款后通过 api.xiaomie.tools 邮箱账号自动即时开通，无隐藏费用。",
    plans: [
      {
        name: "🚀 入门月付版 (Starter)",
        price: "$9",
        ref: "约 ¥68 / 月",
        period: "/ 月 · SaaS 订阅",
        highlight: false,
        planId: "monthly9",
        desc: "适合个人卖家与日常选品制表，每月自动补充目录生成额度。",
        bullets: ["每月 30 套商品目录排版生成", "商品长图 OCR 文字识别", "多规格参数与箱规自动对齐", "付款后 api.xiaomie.tools 自动即时开通"],
        cta: "开通月付版 ($9/mo)"
      },
      {
        name: "⭐ 100 套专业点数包",
        price: "$69",
        ref: "约 ¥500 / 一次性",
        period: "/ 100 套目录（可叠加）",
        highlight: true,
        badge: "团队推荐",
        planId: "pack100",
        desc: "额度永久有效不过期，支持配置自有 API Key（BYOK），适合活跃运营团队。",
        bullets: ["100 套完整商品目录与卖点生成", "解锁自定义 API Key（BYOK）配置", "B2B/ToC 多语种卖点与案例输出", "付款后 api.xiaomie.tools 自动即时开通"],
        cta: "购买专业点数包 ($69)"
      },
      {
        name: "👑 年付工作室版 (Annual Pro)",
        price: "$99",
        ref: "约 ¥699 / 年",
        period: "/ 年 · 全功能高配",
        highlight: false,
        planId: "annual99",
        desc: "高频使用性价比之选，全年畅享目录排版、OCR 识别与全套更新。",
        bullets: ["全年无限次标准目录格式化与导出", "支持 BYOK 与全语种本地化文案", "优先享受新功能与客户支持", "付款后 api.xiaomie.tools 自动即时开通"],
        cta: "升级年付版 ($99/yr)"
      }
    ],
    installTitle: "三步完成商品目录与卖点生成",
    installSteps: [
      { step: "1", title: "邮箱登录授权账号", desc: "点击右上角账号中心输入邮箱，通过 noreply@xiaomie.tools 验证码登录并同步 api.xiaomie.tools 权益。" },
      { step: "2", title: "导入长图与基础资料", desc: "载入产品实拍图、参数表格或详情长图，选择目标输出语种（中文/英文）与文案风格（B2B / ToC）。" },
      { step: "3", title: "一键排版导出成品目录", desc: "系统自动完成 OCR 识字、规格箱规对齐与本地化卖点写作，导出整洁的标准商品目录包。" }
    ],
    faqTitle: "常见问题与使用说明 (FAQ)",
    faqs: [
      { q: "「小咩商品目录卖点生成器」主要解决什么问题？", a: "专注于电商商品资料处理自动化：通过本地长图 OCR 识别图片里的规格文字、把杂乱的尺寸/单重/箱规/价格参数整理成结构化表格，并一键生成地道的多语种卖点文案与产品目录。" },
      { q: "付款后如何开通使用权限？", a: "采用国际 SaaS 自动发卡体系，付款完成后权益会自动绑定到您的邮箱账号（api.xiaomie.tools），在工作台输入同一邮箱验证码登录即可立即生效。" },
      { q: "是否支持退款保障？", a: "支持。我们提供标准 14 天退款政策（14-day refund policy），如有任何问题请随时联系官方唯一客服邮箱 info@xiaomie.tools。" }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "zh-TW": {
    title: "小咩商品目錄賣點生成器 — 長圖OCR、規格整理與多語種目錄 AI 效率助手",
    description: "專為電商賣家與選品團隊打造的 AI 效率工具：商品長圖 OCR 文字辨識、產品規格與外箱參數自動對齊整理、多語種在地化賣點文案生成與目錄排版匯出。",
    keywords: "小咩商品目錄賣點生成器,長圖OCR,商品規格整理,多語種賣點文案,商品目錄排版匯出,AI電商工具",
    nav: { features: "核心功能", compare: "效率對比", pricing: "SaaS 定價", install: "使用步驟", faq: "常見問題", cta: "立即開通" },
    hero: {
      badge: "已上線 · XiaoMie Tools AI 生產力引擎 · 免費體驗 20 款",
      h1: "商品長圖識別、規格參數整理與多語種目錄排版，30 秒一站生成",
      sub: "內建本地高精度長圖 OCR 文字辨識、尺寸/重量/箱規/價格多規格自動對齊整理、B2B 與 ToC 在地化賣點文案生成，以及可直接歸檔匯出的標準商品目錄。",
      ctaPrimary: "查看 SaaS 定價方案",
      ctaSecondary: "查看 6 大核心功能",
      trust: ["本地長圖 OCR 引擎，瀏覽器流暢執行", "嚴格保持單一語種純淨目錄排版輸出", "付款後透過 api.xiaomie.tools 帳號自動即時開通"]
    },
    stats: [
      { num: "20 款", label: "新帳號免費體驗額度" },
      { num: "全維對齊", label: "尺寸·重量·箱規·價格聯動整理" },
      { num: "0 卡頓", label: "本地 WASM SIMD 長圖 OCR" },
      { num: "純淨輸出", label: "多語種文案絕不混雜" }
    ],
    featuresTitle: "為什麼專業電商團隊選擇「小咩商品目錄賣點生成器」？",
    featuresSub: "一次完成「長圖 OCR 識字 + 多規格參數對齊 + 在地化賣點寫作 + 商品目錄排版匯出」。",
    features: [
      { icon: "🔍", title: "商品長圖 OCR 文字識別", desc: "內建 Tesseract WASM SIMD 本地離線引擎，將長圖中的材質、尺寸與規格表精準轉為文字參數。" },
      { icon: "📦", title: "多規格尺寸·重量·箱規自動整理", desc: "自動關聯尺寸、單件重量、裝箱數與外箱毛淨重，多規格商品逐組對應整理，不混淆不錯位。" },
      { icon: "💡", title: "多語種在地化賣點與案例文案", desc: "一鍵切換 B2B 批發或 ToC 種草語氣，保持純淨英文或中文輸出，省去人工校對。" },
      { icon: "🗂️", title: "結構化商品目錄排版匯出", desc: "自動區分主圖、SKU 規格圖與說明文件，一鍵建立整齊的本地商品目錄資料夾。" },
      { icon: "🤖", title: "智慧過濾冗餘角標與雜圖", desc: "自動辨識並剔除無關圖示與空白佔位線框圖，維持商品目錄畫面一致專業。" },
      { icon: "🔐", title: "支援 BYOK 與統一信箱權益中心", desc: "透過 api.xiaomie.tools 帳號體系管理授權，支援填入自有 API Key，成本清晰可控。" }
    ],
    compareTitle: "傳統手工製表 vs 小咩商品目錄賣點生成器",
    compareHeaders: ["比較項目", "傳統人工製表", "小咩商品目錄賣點生成器"],
    compareRows: [
      ["長圖內的規格文字", "人工查看並手動輸入", "本地 WASM OCR 自動辨識轉換"],
      ["多規格尺寸與箱規", "容易錯位或遺漏", "多規格一一對齊聯動整理"],
      ["冗餘角標過濾", "匯出後逐張人工刪除", "像素與 OCR 智慧過濾"],
      ["多語種賣點文案", "需手動複製翻譯潤飾", "內建 B2B/ToC 在地化一鍵生成"]
    ],
    pricingTitle: "透明 SaaS 訂閱與授權方案",
    pricingSub: "付款後透過 api.xiaomie.tools 信箱帳號自動即時開通，享有 14 天退款保障。",
    plans: [
      { name: "🚀 入門月付版", price: "$9", ref: "約 ¥68 / 月", period: "/ 月 · SaaS 訂閱", highlight: false, planId: "monthly9", desc: "適合個人賣家與日常目錄製作。", bullets: ["每月 30 套目錄整理生成", "本地長圖 OCR 文字辨識", "多規格參數與箱規自動對齊", "付款後 api.xiaomie.tools 即時開通"], cta: "開通月付版 ($9/mo)" },
      { name: "⭐ 100 套專業點數包", price: "$69", ref: "約 ¥500 / 一次性", period: "/ 100 套（永久有效）", highlight: true, badge: "團隊首選", planId: "pack100", desc: "額度可疊加且解鎖自訂 API Key（BYOK）。", bullets: ["100 套完整目錄與賣點生成", "解鎖自訂 API Key（BYOK）設定", "B2B/ToC 多語種賣點輸出", "付款後 api.xiaomie.tools 即時開通"], cta: "購買專業包 ($69)" },
      { name: "👑 年付工作室版", price: "$99", ref: "約 ¥699 / 年", period: "/ 年 · 高頻專業版", highlight: false, planId: "annual99", desc: "全年暢享標準目錄排版匯出與版本更新。", bullets: ["全年高配額目錄整理匯出", "支援 BYOK 與多語種文案生成", "優先技術支援（info@xiaomie.tools）", "付款後 api.xiaomie.tools 即時開通"], cta: "升級年付版 ($99/yr)" }
    ],
    installTitle: "三步完成商品目錄製作",
    installSteps: [
      { step: "1", title: "信箱登入授權帳號", desc: "使用電子信箱透過 noreply@xiaomie.tools 驗證碼登入 api.xiaomie.tools 帳戶。" },
      { step: "2", title: "匯入長圖與商品資料", desc: "載入實拍圖或規格圖片，設定目標語言與賣點風格。" },
      { step: "3", title: "一鍵排版匯出目錄", desc: "自動完成 OCR、規格對齊與文案生成，產出完整標準商品目錄。" }
    ],
    faqTitle: "常見問題 (FAQ)",
    faqs: [
      { q: "付款後多久可以開通？", a: "付款完成後會透過 api.xiaomie.tools 信箱帳號自動即時開通，重新登入即可使用。" },
      { q: "支援退款嗎？", a: "支援 14 天退款政策（14-day refund policy），如有需要請寄信至 info@xiaomie.tools。" }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "en": {
    title: "Xiaomie Product Catalog & Selling Point Generator — Long-Image OCR & Multi-Language AI Catalog Studio",
    description: "AI productivity tool for global e-commerce teams: long-image OCR text recognition, automated product specification & packaging alignment, localized multi-language selling-point copywriting, and structured catalog export.",
    keywords: "product catalog generator, long image OCR text recognition, product specification organizer, multi-language selling point copywriting, catalog formatting export, SaaS ecommerce productivity",
    nav: { features: "Capabilities", compare: "Comparison", pricing: "Pricing", install: "How It Works", faq: "FAQ", cta: "View Plans" },
    hero: {
      badge: "Live · XiaoMie Tools SaaS · 20 Free Trial Credits",
      h1: "Turn Product Long Images & Spec Sheets Into Clean Multi-Language Catalogs in 30 Seconds",
      sub: "Built for global merchants and catalog teams: high-speed local WASM long-image OCR text recognition, automated dimension/weight/carton/price alignment, localized B2B & ToC selling-point generation, and ready-to-publish structured catalog export.",
      ctaPrimary: "View SaaS Pricing ($9–$99)",
      ctaSecondary: "Explore Core Capabilities",
      trust: ["Local WASM SIMD OCR — fast and privacy-first", "Automatic 1-to-1 spec, carton & price alignment", "Instant automatic activation via api.xiaomie.tools after payment"]
    },
    stats: [
      { num: "20 Items", label: "Free Trial Quota" },
      { num: "1-to-1", label: "Spec & Carton Alignment" },
      { num: "0 Lag", label: "Local Long-Image OCR" },
      { num: "100% Pure", label: "Clean Single-Language Copy" }
    ],
    featuresTitle: "Why Teams Use Xiaomie Product Catalog & Selling Point Generator",
    featuresSub: "Replace manual spreadsheet typing and fragmented translations with an integrated pipeline: OCR recognition + spec alignment + localized copywriting + structured catalog export.",
    features: [
      { icon: "🔍", title: "Product Long-Image OCR Recognition", desc: "Built-in Tesseract WASM SIMD engine reads dense specifications, materials, capacities, and dimensions from ultra-long product detail images without freezing your browser." },
      { icon: "📦", title: "Automated Spec & Packaging Alignment", desc: "Automatically aligns multi-variant product sizes, unit weights, capacities, carton quantities, gross/net carton weights, and prices with zero mismatches." },
      { icon: "💡", title: "Localized Multi-Language Selling Points", desc: "Switch between B2B Wholesale and ToC Consumer tones to generate crisp, natural selling points and service stories in clean English or Chinese." },
      { icon: "🗂️", title: "Structured Catalog Layout & Export", desc: "Automatically organizes main visuals, variant photos, and formatted specification documents into clean numbered folders ready for sharing or listing review." },
      { icon: "🤖", title: "Smart Visual Clutter & Icon Filtering", desc: "Detects and filters out tiny promo badges, wireframe placeholders, and redundant icons so every exported catalog stays visually consistent." },
      { icon: "🔐", title: "BYOK Support & Email Ledger Portal", desc: "Sign in seamlessly via api.xiaomie.tools OTP verification. Paid tiers support Bring Your Own API Key (BYOK) for transparent cost control." }
    ],
    compareTitle: "Manual Catalog Prep vs. Xiaomie Catalog & Selling Point Generator",
    compareHeaders: ["Workflow Step", "Manual Spreadsheets", "Xiaomie Catalog Generator"],
    compareRows: [
      ["Specs inside long images", "Read & transcribe manually by hand", "Local WASM OCR extracts specs automatically"],
      ["Multi-spec & carton math", "Misaligned weights, sizes & box counts", "Strict 1-to-1 alignment & carton consistency"],
      ["Catalog image cleanup", "Sort and delete bad icons manually", "Pixel & OCR filtering keeps clean product shots"],
      ["Localized copy & stories", "Copy-paste across separate AI tools", "Built-in B2B/ToC multi-language generation"],
      ["Language consistency", "Mixed-language formatting errors", "Strict single-language clean catalog export"]
    ],
    pricingTitle: "Simple Transparent SaaS Pricing (USD)",
    pricingSub: "Choose a monthly/annual SaaS plan or stackable credit pack ($9–$99). Activated automatically and instantaneously under your email account via api.xiaomie.tools upon payment.",
    plans: [
      {
        name: "🚀 Starter Monthly",
        price: "$9",
        ref: "USD / month",
        period: "/ month · SaaS Subscription",
        highlight: false,
        planId: "monthly9",
        desc: "Great for solo sellers needing steady monthly OCR & catalog formatting.",
        bullets: ["30 structured product catalog exports/mo", "Local long-image OCR text recognition", "Spec & carton 1-to-1 alignment", "Instant activation via api.xiaomie.tools"],
        cta: "Subscribe Starter ($9/mo)"
      },
      {
        name: "⭐ 100-Item Pro Pack",
        price: "$69",
        ref: "USD · one-time",
        period: "/ 100 catalogs (never expires)",
        highlight: true,
        badge: "Most Popular",
        planId: "pack100",
        desc: "Stackable credits plus custom API Key (BYOK) support with no monthly commitment.",
        bullets: ["100 full catalog & selling-point exports", "Unlocks custom API Key (BYOK)", "B2B & ToC localized copywriting", "Instant activation via api.xiaomie.tools"],
        cta: "Buy Pro Pack ($69)"
      },
      {
        name: "👑 Annual Studio Pro",
        price: "$99",
        ref: "USD / year",
        period: "/ year · Annual SaaS Plan",
        highlight: false,
        planId: "annual99",
        desc: "Best annual value for e-commerce catalog managers and cross-border teams.",
        bullets: ["High-volume annual catalog formatting", "Full BYOK & multi-language copy tools", "Priority email support (info@xiaomie.tools)", "Instant activation via api.xiaomie.tools"],
        cta: "Go Annual Pro ($99/yr)"
      }
    ],
    installTitle: "Get Started in 3 Simple Steps",
    installSteps: [
      { step: "1", title: "Sign In With Email OTP", desc: "Verify your email via noreply@xiaomie.tools to sync your free trial or paid entitlements on api.xiaomie.tools." },
      { step: "2", title: "Load Product Images & Specs", desc: "Open your product sheets or long detail images, choose target language (EN/ZH), and pick B2B or ToC tone." },
      { step: "3", title: "Export Clean Catalog Package", desc: "Get aligned multi-spec tables, carton metrics, localized selling points, and cleaned visuals in one organized folder." }
    ],
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqs: [
      { q: "What does Xiaomie Product Catalog & Selling Point Generator do?", a: "It is an AI productivity workspace that reads text inside long product images using local OCR, organizes multi-variant dimensions, weights, packaging specs and pricing 1-to-1, generates localized selling-point copy, and exports clean structured catalogs." },
      { q: "How fast is my plan activated after checkout?", a: "Activation is completely automatic and instantaneous via your api.xiaomie.tools email account immediately after payment completes." },
      { q: "Do you offer a refund policy?", a: "Yes! All plans are covered by our standard 14-day refund policy. Contact info@xiaomie.tools anytime for prompt assistance." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "ja": {
    title: "Xiaomie 商品カタログ・訴求文ジェネレーター — 長尺画像OCR＆多言語カタログ作成AI",
    description: "越境EC・商品企画チーム向けのAI生産性ツール：長尺画像OCR文字認識、商品仕様・梱包サイズの自動整理、多言語ローカライズ訴求文の生成、整った商品カタログ書き出しを実現。",
    keywords: "商品カタログ作成,長尺画像OCR,スペック自動整理,多言語商品説明生成,AI業務効率化ツール",
    nav: { features: "主な機能", compare: "効率比較", pricing: "料金プラン", install: "利用手順", faq: "FAQ", cta: "プランを見る" },
    hero: {
      badge: "提供中 · XiaoMie Tools SaaS · 20件無料体験",
      h1: "商品長尺画像のOCR認識・仕様整理・多言語カタログ作成を30秒で完了",
      sub: "ローカルWASM高精度OCRによる画像内テキスト抽出、サイズ・重量・梱包仕様の1対1整理、B2B/ToC向け多言語アピール文生成とカタログ出力を一つのワークフローで提供します。",
      ctaPrimary: "料金プランを見る ($9–$99)",
      ctaSecondary: "コア機能を確認",
      trust: ["高速ローカルWASM OCR処理", "サイズ・重量・梱包仕様を自動整合", "決済後 api.xiaomie.tools アカウントへ即時自動反映"]
    },
    stats: [
      { num: "20件", label: "無料トライアル枠" },
      { num: "1対1整合", label: "仕様・梱包データの自動整理" },
      { num: "高速OCR", label: "長尺画像テキスト抽出" },
      { num: "純粋翻訳", label: "単一言語カタログ出力" }
    ],
    featuresTitle: "選ばれる理由",
    featuresSub: "画像文字起こし・仕様整理・訴求文作成・カタログ出力を自動化します。",
    features: [
      { icon: "🔍", title: "商品長尺画像 OCR 文字認識", desc: "ブラウザ内Tesseract WASM SIMDエンジンが長尺画像内の素材・寸法・仕様表を高精度でテキスト化します。" },
      { icon: "📦", title: "複数規格・梱包仕様の自動整合", desc: "サイズ・単体重量・容量・入数・外箱サイズ・価格を規格ごとに正確に紐付け整理します。" },
      { icon: "💡", title: "多言語ローカライズ訴求文作成", desc: "B2B卸売向け・ToC消費者向けのトーンを切り替え、言語混在のない自然な説明文を生成します。" },
      { icon: "🗂️", title: "構造化カタログ一括書き出し", desc: "整理済みの仕様テキストと商品画像をフォルダ分けして即座に出力できます。" }
    ],
    compareTitle: "手作業 vs Xiaomie カタログジェネレーター",
    compareHeaders: ["比較項目", "従来の手作業", "Xiaomie カタログジェネレーター"],
    compareRows: [
      ["長尺画像内テキスト", "目視確認して手入力", "ローカルWASM OCRで自動文字起こし"],
      ["複数規格・梱包計算", "ミスやズレが発生しやすい", "規格ごとに1対1で自動整合"],
      ["多言語訴求文", "別ツールで都度翻訳・調整", "B2B/ToC対応の統一カタログ出力"]
    ],
    pricingTitle: "透明な SaaS 料金プラン (USD)",
    pricingSub: "決済完了後、api.xiaomie.tools のメールアドレス宛に即時自動アクティベートされます。",
    plans: [
      { name: "🚀 Starter 月額プラン", price: "$9", ref: "USD / 月", period: "/ 月 · SaaS サブスク", highlight: false, planId: "monthly9", desc: "個人の日々のカタログ整備・OCR抽出に最適。", bullets: ["月30件のカタログ整理出力", "ローカル長尺画像OCR", "規格・梱包仕様の自動整理", "api.xiaomie.tools 即時自動有効化"], cta: "Starter を開始 ($9/mo)" },
      { name: "⭐ 100件プロパック", price: "$69", ref: "USD · 買い切り", period: "/ 100件（無期限）", highlight: true, badge: "人気プラン", planId: "pack100", desc: "有効期限なしのクレジットパック。独自APIキー(BYOK)にも対応。", bullets: ["100件分のカタログ＆訴求文生成", "独自APIキー(BYOK)設定を解放", "B2B/ToC多言語コピー出力", "api.xiaomie.tools 即時自動有効化"], cta: "プロパック購入 ($69)" },
      { name: "👑 年間スタジオ版", price: "$99", ref: "USD / 年", period: "/ 年 · 年間プラン", highlight: false, planId: "annual99", desc: "チームや高頻度運用に最適な年間パッケージ。", bullets: ["年間高容量カタログ生成", "BYOK＆全言語対応コピー機能", "メール優先サポート", "api.xiaomie.tools 即時自動有効化"], cta: "年間プラン契約 ($99/yr)" }
    ],
    installTitle: "簡単 3 ステップ",
    installSteps: [
      { step: "1", title: "メールOTPでログイン", desc: "noreply@xiaomie.tools からの認証コードで api.xiaomie.tools にサインイン。" },
      { step: "2", title: "商品画像・仕様を読み込む", desc: "対象の商品画像や仕様シートを選択し、言語とトーンを設定。" },
      { step: "3", title: "整ったカタログを出力", desc: "OCR抽出・仕様整理・訴求文生成済みのカタログフォルダを保存します。" }
    ],
    faqTitle: "よくある質問 (FAQ)",
    faqs: [
      { q: "決済後はどのくらいで有効になりますか？", a: "決済完了直後、api.xiaomie.tools のご登録メールアドレスに即時自動で反映されます。" },
      { q: "返金ポリシーはありますか？", a: "はい、14日間の返金保証（14-day refund policy）に対応しています。info@xiaomie.tools までご連絡ください。" }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "ko": {
    title: "Xiaomie 상품 카탈로그 & 셀링포인트 생성기 — 긴 이미지 OCR·스펙 정리 AI 도구",
    description: "글로벌 커머스 팀을 위한 AI 생산성 솔루션: 긴 상품 이미지 OCR 텍스트 인식, 규격·포장 스펙 자동 정렬, 다국어 셀링포인트 생성 및 카탈로그 레이아웃 내보내기.",
    keywords: "상품 카탈로그 생성기,긴 이미지 OCR,상품 스펙 정리,다국어 상세설명,이커머스 AI 도구",
    nav: { features: "핵심 기능", compare: "비교", pricing: "요금제", install: "사용 방법", faq: "FAQ", cta: "플랜 보기" },
    hero: {
      badge: "서비스 중 · XiaoMie Tools SaaS · 20건 무료 체험",
      h1: "긴 이미지 OCR 인식부터 스펙 정리, 다국어 카탈로그 제작까지 30초 완성",
      sub: "로컬 WASM 기반 고정밀 OCR 문자 추출, 규격별 사이즈·무게·포장 정보 1:1 정렬, B2B/ToC 다국어 카피라이팅 및 깔끔한 카탈로그 내보내기를 한 번에 제공합니다.",
      ctaPrimary: "SaaS 요금제 보기 ($9–$99)",
      ctaSecondary: "핵심 기능 살펴보기",
      trust: ["고속 로컬 WASM 긴 이미지 OCR", "규격·무게·박스 스펙 자동 정렬", "결제 후 api.xiaomie.tools 이메일 계정으로 즉시 자동 활성화"]
    },
    stats: [
      { num: "20건", label: "무료 체험 크레딧" },
      { num: "1:1 정렬", label: "규격·포장 파라미터 매칭" },
      { num: "0 지연", label: "로컬 장문 이미지 OCR" },
      { num: "100% 순수", label: "단일 언어 카탈로그 출력" }
    ],
    featuresTitle: "주요 기능",
    featuresSub: "OCR 문자 인식 + 규격 자동 정렬 + 다국어 카피 생성 + 카탈로그 내보내기를 통합 제공합니다.",
    features: [
      { icon: "🔍", title: "상품 긴 이미지 OCR 텍스트 인식", desc: "내장 Tesseract WASM SIMD 엔진이 긴 상세 이미지 속 재질, 크기, 사양표를 텍스트로 정확히 변환합니다." },
      { icon: "📦", title: "규격·무게·박스 사양 자동 정렬", desc: "옵션별 치수, 단품 중량, 박스 입수량과 총중량을 1:1로 맞춰 정리합니다." },
      { icon: "💡", title: "다국어 현지화 셀링포인트 생성", desc: "B2B 도매 및 ToC 소비자 톤으로 깔끔한 단일 언어 상품 설명을 작성합니다." },
      { icon: "🗂️", title: "구조화된 카탈로그 내보내기", desc: "정리된 이미지와 사양 문서를 깔끔한 폴더 구조로 내보냅니다." }
    ],
    compareTitle: "수동 작업 vs Xiaomie 카탈로그 생성기",
    compareHeaders: ["항목", "기존 수동 작업", "Xiaomie 카탈로그 생성기"],
    compareRows: [
      ["이미지 내 사양 문자", "눈으로 보고 수동 입력", "로컬 WASM OCR 자동 인식"],
      ["옵션별 치수·박스 규격", "누락 및 불일치 빈번", "옵션별 1:1 자동 정렬 매칭"],
      ["다국어 카피라이팅", "별도 번역기 복붙", "B2B/ToC 맞춤 단일 언어 생성"]
    ],
    pricingTitle: "투명한 SaaS 요금제 (USD)",
    pricingSub: "결제 완료 후 api.xiaomie.tools 이메일 계정으로 즉시 자동 활성화됩니다.",
    plans: [
      { name: "🚀 Starter 월간 플랜", price: "$9", ref: "USD / 월", period: "/ 월 · SaaS 구독", highlight: false, planId: "monthly9", desc: "개인 셀러의 정기 카탈로그 정리에 적합.", bullets: ["월 30건 카탈로그 생성", "로컬 긴 이미지 OCR 인식", "스펙·박스 규격 자동 정렬", "api.xiaomie.tools 즉시 자동 활성화"], cta: "Starter 시작 ($9/mo)" },
      { name: "⭐ 100건 프로 팩", price: "$69", ref: "USD · 일회성", period: "/ 100건 (무기한)", highlight: true, badge: "인기 플랜", planId: "pack100", desc: "만료 없는 크레딧 팩 및 개인 API Key(BYOK) 지원.", bullets: ["100건 카탈로그 및 카피 생성", "사용자 정의 API Key(BYOK) 지원", "B2B/ToC 다국어 출력", "api.xiaomie.tools 즉시 자동 활성화"], cta: "프로 팩 구매 ($69)" },
      { name: "👑 연간 스튜디오 플랜", price: "$99", ref: "USD / 년", period: "/ 년 · 연간 구독", highlight: false, planId: "annual99", desc: "지속적인 대량 카탈로그 관리 팀을 위한 연간 플랜.", bullets: ["연간 대용량 카탈로그 정리", "BYOK 및 전체 언어 기능 포함", "이메일 우선 지원", "api.xiaomie.tools 즉시 자동 활성화"], cta: "연간 플랜 업그레이드 ($99/yr)" }
    ],
    installTitle: "간편한 3단계 워크플로",
    installSteps: [
      { step: "1", title: "이메일 OTP 로그인", desc: "noreply@xiaomie.tools 인증 코드로 api.xiaomie.tools 계정에 로그인합니다." },
      { step: "2", title: "상품 이미지·사양 불러오기", desc: "이미지 및 기본 스펙을 불러온 뒤 출력 언어와 톤을 선택합니다." },
      { step: "3", title: "카탈로그 일괄 내보내기", desc: "OCR, 규격 정렬, 현지화 카피가 완성된 카탈로그 패키지를 저장합니다." }
    ],
    faqTitle: "자주 묻는 질문 (FAQ)",
    faqs: [
      { q: "결제 후 언제부터 사용할 수 있나요?", a: "결제 즉시 api.xiaomie.tools 이메일 계정으로 권한이 자동 활성화됩니다." },
      { q: "환불 정책이 있나요?", a: "네, 14일 환불 정책(14-day refund policy)을 지원합니다. info@xiaomie.tools 로 문의해 주세요." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "es": {
    title: "Generador de Catálogos y Puntos de Venta Xiaomie — OCR de Imágenes Largas y Catálogos IA",
    description: "Herramienta SaaS de productividad para equipos e-commerce: reconocimiento OCR en imágenes largas, alineación automática de especificaciones y empaque, redacción multilingüe y exportación estructurada de catálogos.",
    keywords: "generador catalogos productos, OCR imagenes largas, organizador especificaciones, copywriting multilingue, herramienta SaaS ecommerce",
    nav: { features: "Funciones", compare: "Comparativa", pricing: "Precios", install: "Cómo funciona", faq: "FAQ", cta: "Ver Planes" },
    hero: {
      badge: "Disponible · XiaoMie Tools SaaS · 20 Pruebas Gratis",
      h1: "Convierte Imágenes Largas y Fichas Técnicas en Catálogos Multilingües en 30 Segundos",
      sub: "Diseñado para equipos de catálogo: OCR local rápido para imágenes largas, alineación 1 a 1 de medidas, pesos y cajas, textos B2B/ToC localizados y exportación ordenada.",
      ctaPrimary: "Ver Precios SaaS ($9–$99)",
      ctaSecondary: "Explorar Funciones",
      trust: ["OCR local WASM SIMD de alto rendimiento", "Alineación automática de dimensiones, peso y cajas", "Activación instantánea vía api.xiaomie.tools tras el pago"]
    },
    stats: [
      { num: "20 Items", label: "Créditos de Prueba Gratis" },
      { num: "1 a 1", label: "Alineación Técnica" },
      { num: "0 Lag", label: "OCR Local Sin Bloqueos" },
      { num: "100% Puro", label: "Texto Limpio Sin Mezclas" }
    ],
    featuresTitle: "Capacidades Principales",
    featuresSub: "OCR en imágenes largas + alineación de especificaciones + textos localizados + exportación de catálogo.",
    features: [
      { icon: "🔍", title: "Reconocimiento OCR en Imágenes Largas", desc: "Motor local Tesseract WASM SIMD que extrae medidas, materiales y voltajes desde imágenes largas." },
      { icon: "📦", title: "Alineación Automática de Specs y Cajas", desc: "Empareja tallas, capacidades, pesos unitarios, medidas de cartón y precios variante por variante." },
      { icon: "💡", title: "Copywriting Localizado B2B y ToC", desc: "Genera puntos de venta e historias claras en español, inglés o chino sin mezclar idiomas." },
      { icon: "🗂️", title: "Exportación Estructurada de Catálogos", desc: "Organiza imágenes limpias y fichas técnicas en carpetas listas para compartir o publicar." }
    ],
    compareTitle: "Trabajo Manual vs. Generador de Catálogos Xiaomie",
    compareHeaders: ["Proceso", "Hojas Manuales", "Generador Xiaomie"],
    compareRows: [
      ["Texto en imágenes largas", "Transcribir manualmente", "OCR local WASM automático"],
      ["Medidas y cajas por variante", "Datos desalineados", "Alineación automática 1 a 1"],
      ["Textos multilingües", "Traducir y copiar aparte", "Generación integrada B2B/ToC"]
    ],
    pricingTitle: "Precios SaaS Transparentes (USD)",
    pricingSub: "Activación automática e inmediata mediante tu cuenta de correo api.xiaomie.tools tras realizar el pago.",
    plans: [
      { name: "🚀 Plan Mensual Starter", price: "$9", ref: "USD / mes", period: "/ mes · Suscripción SaaS", highlight: false, planId: "monthly9", desc: "Ideal para uso individual continuo.", bullets: ["30 catálogos al mes", "OCR local de imágenes largas", "Alineación automática de specs", "Activación inmediata vía api.xiaomie.tools"], cta: "Suscribir Starter ($9/mo)" },
      { name: "⭐ Pack Pro 100 Catálogos", price: "$69", ref: "USD · pago único", period: "/ 100 catálogos (sin caducidad)", highlight: true, badge: "Más Popular", planId: "pack100", desc: "Créditos acumulables y soporte BYOK (API Key propia).", bullets: ["100 exportaciones completas", "Desbloquea API Key propia (BYOK)", "Copywriting multilingüe B2B/ToC", "Activación inmediata vía api.xiaomie.tools"], cta: "Comprar Pack Pro ($69)" },
      { name: "👑 Plan Anual Studio Pro", price: "$99", ref: "USD / año", period: "/ año · Suscripción Anual", highlight: false, planId: "annual99", desc: "Máximo valor anual para equipos de producto.", bullets: ["Formateo anual de alto volumen", "BYOK y todos los idiomas incluidos", "Soporte prioritario por correo", "Activación inmediata vía api.xiaomie.tools"], cta: "Elegir Plan Anual ($99/yr)" }
    ],
    installTitle: "Empieza en 3 Pasos",
    installSteps: [
      { step: "1", title: "Accede con Código OTP", desc: "Verifica tu correo vía noreply@xiaomie.tools para sincronizar tu cuenta api.xiaomie.tools." },
      { step: "2", title: "Carga Imágenes y Specs", desc: "Selecciona idioma de salida y tono de venta (B2B o ToC)." },
      { step: "3", title: "Exporta tu Catálogo", desc: "Obtén fichas alineadas, textos localizados e imágenes depuradas al instante." }
    ],
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqs: [
      { q: "¿Cuándo se activa mi plan?", a: "Al instante de completar el pago mediante tu correo en api.xiaomie.tools." },
      { q: "¿Tienen garantía de reembolso?", a: "Sí, contamos con política de reembolso de 14 días (14-day refund policy). Escríbenos a info@xiaomie.tools." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "de": {
    title: "Xiaomie Produktkatalog- & Verkaufsargument-Generator — Langbild-OCR & KI-Katalogstudio",
    description: "KI-Produktivitätssoftware für E-Commerce-Teams: lokale Langbild-OCR-Texterkennung, automatische Abgleichung von Maßen, Gewichten & Kartondaten, mehrsprachige Verkaufsargumente und sauberer Katalogexport.",
    keywords: "Produktkatalog Generator, Langbild OCR, Spezifikationen abgleichen, mehrsprachige Produkttexte, SaaS Produktivität",
    nav: { features: "Funktionen", compare: "Vergleich", pricing: "Preise", install: "Ablauf", faq: "FAQ", cta: "Pläne ansehen" },
    hero: {
      badge: "Live · XiaoMie Tools SaaS · 20 Gratis-Tests",
      h1: "Lange Produktbilder & Datenblätter in 30 Sekunden in saubere Kataloge verwandeln",
      sub: "Lokale WASM-OCR-Texterkennung für lange Bilder, präzise 1:1-Zuordnung von Maßen, Gewichten & Kartondaten sowie einsprachige B2B/ToC-Texte in einem Workflow.",
      ctaPrimary: "SaaS-Preise ansehen ($9–$99)",
      ctaSecondary: "Funktionen entdecken",
      trust: ["Schnelle lokale WASM SIMD OCR", "Automatischer 1:1-Abgleich von Maßen & Kartons", "Sofortige Aktivierung über api.xiaomie.tools nach Zahlung"]
    },
    stats: [
      { num: "20 Artikel", label: "Kostenloser Test" },
      { num: "1:1 Match", label: "Daten- & Kartonabgleich" },
      { num: "0 Freeze", label: "Lokale Langbild-OCR" },
      { num: "100 % Rein", label: "Saubere Textausgabe" }
    ],
    featuresTitle: "Kernfunktionen",
    featuresSub: "Langbild-OCR + automatischer Spezifikationsabgleich + lokalisierte Texte + Katalogexport.",
    features: [
      { icon: "🔍", title: "Langbild-OCR-Texterkennung", desc: "Integrierte Tesseract WASM SIMD Engine liest Material-, Maß- und Leistungsdaten aus langen Produktgrafiken." },
      { icon: "📦", title: "1:1 Varianten- & Kartonabgleich", desc: "Ordnet Maße, Stückgewichte, Kapazitäten, Verpackungseinheiten und Preise sauber jeder Variante zu." },
      { icon: "💡", title: "Mehrsprachige Verkaufsargumente", desc: "Erzeugt B2B- oder ToC-Texte in klarem Englisch, Chinesisch oder Zielsprachen ohne Sprachmix." },
      { icon: "🗂️", title: "Strukturierter Katalogexport", desc: "Exportiert bereinigte Grafiken und formatierte Produktdatenblätter direkt in geordnete Ordner." }
    ],
    compareTitle: "Manuell vs. Xiaomie Katalog-Generator",
    compareHeaders: ["Aufgabe", "Manuelle Pflege", "Xiaomie Katalog-Generator"],
    compareRows: [
      ["Text in langen Bildern", "Mühsam abtippen", "Lokale WASM OCR liest automatisch aus"],
      ["Varianten & Kartondaten", "Häufige Zuordnungsfehler", "Exakter 1:1-Abgleich je Variante"],
      ["Lokalisierte Texte", "Manuelles Kopieren & Übersetzen", "Integrierter B2B/ToC-Textgenerator"]
    ],
    pricingTitle: "Transparente SaaS-Preise (USD)",
    pricingSub: "Automatische Sofortaktivierung über Ihr api.xiaomie.tools E-Mail-Konto direkt nach Zahlungseingang.",
    plans: [
      { name: "🚀 Starter Monatlich", price: "$9", ref: "USD / Monat", period: "/ Monat · SaaS-Abo", highlight: false, planId: "monthly9", desc: "Ideal für regelmäßige Katalogerstellung.", bullets: ["30 Katalogexporte pro Monat", "Lokale Langbild-OCR", "Automatischer Datenabgleich", "Sofortaktivierung über api.xiaomie.tools"], cta: "Starter wählen ($9/mo)" },
      { name: "⭐ 100er Pro-Paket", price: "$69", ref: "USD · Einmalig", period: "/ 100 Kataloge (ohne Verfall)", highlight: true, badge: "Beliebt", planId: "pack100", desc: "Stapelbare Credits inkl. eigenem API-Key (BYOK).", bullets: ["100 vollständige Katalogexporte", "Eigener API-Key (BYOK) nutzbar", "B2B/ToC-Verkaufstexte", "Sofortaktivierung über api.xiaomie.tools"], cta: "Pro-Paket kaufen ($69)" },
      { name: "👑 Studio Jahresplan", price: "$99", ref: "USD / Jahr", period: "/ Jahr · Jahresabo", highlight: false, planId: "annual99", desc: "Bestes Preis-Leistungs-Verhältnis für aktive Teams.", bullets: ["Hohes Jahresvolumen für Kataloge", "BYOK & alle Zielsprachen", "Bevorzugter E-Mail-Support", "Sofortaktivierung über api.xiaomie.tools"], cta: "Jahresplan wählen ($99/yr)" }
    ],
    installTitle: "In 3 Schritten startklar",
    installSteps: [
      { step: "1", title: "Per E-Mail-OTP anmelden", desc: "Über noreply@xiaomie.tools verifizieren und Konto auf api.xiaomie.tools verknüpfen." },
      { step: "2", title: "Produktdaten & Bilder laden", desc: "Ausgabesprache und gewünschten B2B/ToC-Stil auswählen." },
      { step: "3", title: "Katalog sauber exportieren", desc: "Abgeglichene Spezifikationen, Texte und bereinigte Bilder in einem Ordner sichern." }
    ],
    faqTitle: "Häufige Fragen (FAQ)",
    faqs: [
      { q: "Wie schnell erfolgt die Freischaltung?", a: "Sofort automatisch nach Zahlungsabschluss auf Ihre E-Mail-Adresse bei api.xiaomie.tools." },
      { q: "Gibt es ein Rückgaberecht?", a: "Ja, wir bieten eine 14-tägige Geld-zurück-Garantie (14-day refund policy) über info@xiaomie.tools." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "fr": {
    title: "Générateur de Catalogues & Arguments Xiaomie — OCR Images Longues & Studio IA",
    description: "Outil SaaS de productivité pour équipes e-commerce : reconnaissance OCR d'images longues, alignement automatique des dimensions/colisage, rédaction multilingue et exportation de catalogues structurés.",
    keywords: "générateur catalogue produit, OCR image longue, alignement fiches techniques, rédaction multilingue, outil SaaS productivité",
    nav: { features: "Fonctions", compare: "Comparatif", pricing: "Tarifs", install: "Fonctionnement", faq: "FAQ", cta: "Voir les offres" },
    hero: {
      badge: "Disponible · XiaoMie Tools SaaS · 20 Essais Offerts",
      h1: "Transformez vos Images Longues et Fiches en Catalogues Multilingues en 30 Secondes",
      sub: "OCR local rapide sur images longues, alignement exact dimensions/poids/colisage, rédaction B2B/ToC localisée et exportation de catalogues propres.",
      ctaPrimary: "Voir les Tarifs SaaS ($9–$99)",
      ctaSecondary: "Découvrir les Fonctions",
      trust: ["OCR local WASM SIMD performant", "Alignement 1-à-1 dimensions, poids et colisage", "Activation automatique instantanée via api.xiaomie.tools après paiement"]
    },
    stats: [
      { num: "20 Items", label: "Essai Gratuit" },
      { num: "1 à 1", label: "Alignement Fiches" },
      { num: "0 Gel", label: "OCR Local Rapide" },
      { num: "100 % Pur", label: "Langue Unique Propre" }
    ],
    featuresTitle: "Fonctionnalités Clés",
    featuresSub: "OCR sur images longues + alignement des fiches + rédaction localisée + export catalogue.",
    features: [
      { icon: "🔍", title: "Reconnaissance OCR Images Longues", desc: "Moteur local Tesseract WASM SIMD extrayant matériaux, dimensions et caractéristiques depuis les visuels longs." },
      { icon: "📦", title: "Alignement Automatique Variantes & Colis", desc: "Associe tailles, poids unitaires, capacités, colisage et tarifs sans erreur de correspondance." },
      { icon: "💡", title: "Arguments & Récits B2B / ToC Localisés", desc: "Rédaction propre dans une seule langue choisie sans mélange linguistique." },
      { icon: "🗂️", title: "Export de Catalogues Structurés", desc: "Classe visuels nettoyés et fiches structurées dans des dossiers prêts à partager." }
    ],
    compareTitle: "Saisie Manuelle vs. Générateur Xiaomie",
    compareHeaders: ["Étape", "Tableurs Manuels", "Générateur Xiaomie"],
    compareRows: [
      ["Texte dans images longues", "Recopie manuelle lente", "OCR local WASM automatique"],
      ["Variantes et colisage", "Erreurs d'alignement fréquentes", "Correspondance exacte 1 à 1"],
      ["Textes multilingues", "Allers-retours entre outils", "Génération B2B/ToC intégrée"]
    ],
    pricingTitle: "Tarifs SaaS Transparents (USD)",
    pricingSub: "Activation automatique instantanée sur votre compte email via api.xiaomie.tools dès le paiement confirmé.",
    plans: [
      { name: "🚀 Starter Mensuel", price: "$9", ref: "USD / mois", period: "/ mois · Abonnement SaaS", highlight: false, planId: "monthly9", desc: "Idéal pour un besoin mensuel régulier.", bullets: ["30 exports catalogue / mois", "OCR local images longues", "Alignement automatique des fiches", "Activation instantanée via api.xiaomie.tools"], cta: "Choisir Starter ($9/mo)" },
      { name: "⭐ Pack Pro 100 Catalogues", price: "$69", ref: "USD · paiement unique", period: "/ 100 catalogues (sans expiration)", highlight: true, badge: "Le plus choisi", planId: "pack100", desc: "Crédits cumulables avec compatibilité API Key personnelle (BYOK).", bullets: ["100 exports complets", "Clé API personnelle (BYOK) activable", "Rédaction multilingue B2B/ToC", "Activation instantanée via api.xiaomie.tools"], cta: "Acheter Pack Pro ($69)" },
      { name: "👑 Studio Annuel Pro", price: "$99", ref: "USD / an", period: "/ an · Offre Annuelle", highlight: false, planId: "annual99", desc: "Meilleur rapport qualité-prix annuel pour les équipes produit.", bullets: ["Volume annuel élevé d'exports", "BYOK & rédaction multilingue complète", "Support prioritaire par email", "Activation instantanée via api.xiaomie.tools"], cta: "Passer à l'Annuel ($99/yr)" }
    ],
    installTitle: "Démarrage en 3 Étapes",
    installSteps: [
      { step: "1", title: "Connexion Email OTP", desc: "Validez votre email via noreply@xiaomie.tools sur api.xiaomie.tools." },
      { step: "2", title: "Importer Visuels & Fiches", desc: "Sélectionnez la langue cible et le style rédactionnel B2B ou ToC." },
      { step: "3", title: "Exporter le Catalogue", desc: "Obtenez fiches alignées, textes localisés et images propres en un clic." }
    ],
    faqTitle: "Questions Fréquentes (FAQ)",
    faqs: [
      { q: "Quand mon compte est-il activé ?", a: "Automatiquement et instantanément après paiement via votre email api.xiaomie.tools." },
      { q: "Proposez-vous un remboursement ?", a: "Oui, une politique de remboursement de 14 jours (14-day refund policy) est garantie via info@xiaomie.tools." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "vi": {
    title: "Trình Tạo Danh Mục & Điểm Bán Hàng Xiaomie — OCR Ảnh Dài & Soạn Catalog Đa Ngôn Ngữ",
    description: "Công cụ SaaS AI cho đội ngũ thương mại điện tử: nhận diện chữ OCR trên ảnh dài, sắp xếp đồng bộ kích thước/trọng lượng/quy cách thùng, viết điểm bán hàng đa ngôn ngữ và xuất danh mục sản phẩm chuẩn.",
    keywords: "trình tạo danh mục sản phẩm,OCR ảnh dài,sắp xếp thông số sản phẩm,viết mô tả đa ngôn ngữ,công cụ SaaS",
    nav: { features: "Tính năng", compare: "So sánh", pricing: "Bảng giá", install: "Quy trình", faq: "FAQ", cta: "Xem bảng giá" },
    hero: {
      badge: "Đang hoạt động · XiaoMie Tools SaaS · Dùng thử 20 mẫu",
      h1: "Nhận Diện OCR Ảnh Dài, Sắp Xếp Thông Số & Xuất Danh Mục Đa Ngôn Ngữ Trong 30 Giây",
      sub: "Tích hợp OCR WASM cục bộ đọc chữ từ ảnh dài, căn chỉnh kích thước/trọng lượng/quy cách thùng 1-1, viết nội dung bán hàng B2B/ToC và xuất bộ danh mục hoàn chỉnh.",
      ctaPrimary: "Xem Bảng Giá SaaS ($9–$99)",
      ctaSecondary: "Khám Phá Tính Năng",
      trust: ["OCR cục bộ WASM SIMD mượt mà", "Căn chỉnh thông số & quy cách thùng 1-1", "Kích hoạt tự động ngay qua email api.xiaomie.tools sau thanh toán"]
    },
    stats: [
      { num: "20 Mẫu", label: "Dùng Thử Miễn Phí" },
      { num: "1-1", label: "Đồng Bộ Thông Số" },
      { num: "0 Lag", label: "OCR Ảnh Dài Cục Bộ" },
      { num: "100% Sạch", label: "Đơn Ngữ Chuẩn Xác" }
    ],
    featuresTitle: "Tính Năng Cốt Lõi",
    featuresSub: "OCR ảnh dài + đồng bộ quy cách + viết điểm bán hàng đa ngôn ngữ + xuất danh mục.",
    features: [
      { icon: "🔍", title: "Nhận Diện Chữ OCR Ảnh Dài", desc: "Engine Tesseract WASM SIMD trích xuất chất liệu, kích thước và thông số từ ảnh dài nhanh chóng." },
      { icon: "📦", title: "Đồng Bộ Kích Thước, Trọng Lượng & Thùng", desc: "Sắp xếp chính xác từng biến thể kích thước, khối lượng đơn chiếc, quy cách thùng và giá tương ứng." },
      { icon: "💡", title: "Viết Điểm Bán Hàng B2B / ToC Đa Ngôn Ngữ", desc: "Tạo nội dung thuần tiếng Anh hoặc tiếng Trung tự nhiên, không bị trộn chữ." },
      { icon: "🗂️", title: "Xuất Thư Mục Danh Mục Chuẩn Hóa", desc: "Phân loại ảnh sạch và tài liệu thông số theo cấu trúc thư mục đánh số gọn gàng." }
    ],
    compareTitle: "Làm Thủ Công vs. Trình Tạo Danh Mục Xiaomie",
    compareHeaders: ["Hạng mục", "Bảng tính thủ công", "Trình tạo danh mục Xiaomie"],
    compareRows: [
      ["Chữ trong ảnh dài", "Tự đọc và gõ tay mất thời gian", "OCR WASM cục bộ trích xuất tự động"],
      ["Biến thể & quy cách thùng", "Dễ sai lệch giữa các kích thước", "Căn chỉnh 1-1 tự động cho từng biến thể"],
      ["Viết nội dung đa ngôn ngữ", "Dịch tay qua nhiều công cụ", "Tạo sẵn B2B/ToC sạch đẹp chỉ 1 bước"]
    ],
    pricingTitle: "Bảng Giá SaaS Minh Bạch (USD)",
    pricingSub: "Kích hoạt tự động tức thì qua tài khoản email api.xiaomie.tools ngay sau khi thanh toán thành công.",
    plans: [
      { name: "🚀 Gói Tháng Starter", price: "$9", ref: "USD / tháng", period: "/ tháng · Gói SaaS", highlight: false, planId: "monthly9", desc: "Phù hợp cá nhân làm danh mục sản phẩm hằng tháng.", bullets: ["30 bộ danh mục sản phẩm/tháng", "OCR ảnh dài cục bộ", "Căn chỉnh thông số & thùng 1-1", "Kích hoạt ngay qua api.xiaomie.tools"], cta: "Đăng ký Starter ($9/mo)" },
      { name: "⭐ Gói Pro 100 Danh Mục", price: "$69", ref: "USD · một lần", period: "/ 100 danh mục (không hết hạn)", highlight: true, badge: "Phổ biến nhất", planId: "pack100", desc: "Cộng dồn không giới hạn thời gian và hỗ trợ API Key riêng (BYOK).", bullets: ["100 lượt xuất danh mục hoàn chỉnh", "Mở khóa API Key riêng (BYOK)", "Viết điểm bán hàng B2B/ToC đa ngôn ngữ", "Kích hoạt ngay qua api.xiaomie.tools"], cta: "Mua Gói Pro ($69)" },
      { name: "👑 Studio Năm (Annual Pro)", price: "$99", ref: "USD / năm", period: "/ năm · Gói Năm", highlight: false, planId: "annual99", desc: "Tiết kiệm tối đa cho đội ngũ vận hành chuyên nghiệp.", bullets: ["Xuất danh mục dung lượng lớn cả năm", "Hỗ trợ BYOK & mọi ngôn ngữ", "Hỗ trợ ưu tiên qua email", "Kích hoạt ngay qua api.xiaomie.tools"], cta: "Nâng cấp Gói Năm ($99/yr)" }
    ],
    installTitle: "3 Bước Bắt Đầu Nhanh",
    installSteps: [
      { step: "1", title: "Đăng Nhập Email OTP", desc: "Xác thực qua noreply@xiaomie.tools để đồng bộ quyền trên api.xiaomie.tools." },
      { step: "2", title: "Tải Ảnh & Thông Số", desc: "Chọn ngôn ngữ đích và văn phong B2B hoặc ToC." },
      { step: "3", title: "Xuất Danh Mục Hoàn Chỉnh", desc: "Nhận bảng quy cách đồng bộ, bài viết bán hàng và bộ ảnh sạch." }
    ],
    faqTitle: "Câu Hỏi Thường Gặp (FAQ)",
    faqs: [
      { q: "Thanh toán xong bao lâu thì dùng được?", a: "Hệ thống tự động kích hoạt ngay lập tức vào email đăng ký trên api.xiaomie.tools." },
      { q: "Có chính sách hoàn tiền không?", a: "Có, áp dụng chính sách hoàn tiền 14 ngày (14-day refund policy). Liên hệ info@xiaomie.tools bất cứ lúc nào." }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  },

  "th": {
    title: "เครื่องมือสร้างแคตตาล็อกและจุดขาย Xiaomie — OCR ภาพยาวและจัดสเปกสินค้า AI",
    description: "ซอฟต์แวร์ SaaS สำหรับทีมอีคอมเมิร์ซ: อ่านข้อความ OCR ในภาพยาว จัดเรียงขนาด/น้ำหนัก/สเปกกล่องอัตโนมัติ สร้างจุดขายหลายภาษา และส่งออกแคตตาล็อกสินค้าอย่างเป็นระบบ",
    keywords: "สร้างแคตตาล็อกสินค้า,OCR ภาพยาว,จัดเรียงสเปกสินค้า,เขียนจุดขายหลายภาษา,เครื่องมือ SaaS",
    nav: { features: "ความสามารถ", compare: "เปรียบเทียบ", pricing: "ราคา", install: "วิธีใช้งาน", faq: "FAQ", cta: "ดูแพ็กเกจ" },
    hero: {
      badge: "เปิดให้บริการแล้ว · XiaoMie Tools SaaS · ทดลองฟรี 20 รายการ",
      h1: "อ่าน OCR ภาพยาว จัดเรียงสเปกและสร้างแคตตาล็อกหลายภาษาใน 30 วินาที",
      sub: "ผสานระบบ OCR ความเร็วสูงในเครื่อง จัดระเบียบขนาด น้ำหนัก และข้อมูลกล่อง 1 ต่อ 1 พร้อมสร้างคำบรรยาย B2B/ToC และส่งออกแคตตาล็อกสินค้าครบชุด",
      ctaPrimary: "ดูแพ็กเกจ SaaS ($9–$99)",
      ctaSecondary: "ดูฟีเจอร์หลัก",
      trust: ["OCR ภาพยาว WASM SIMD ทำงานรวดเร็ว", "จัดคู่ขนาด น้ำหนัก และสเปกกล่องอัตโนมัติ", "เปิดใช้งานอัตโนมัติทันทีผ่านอีเมล api.xiaomie.tools หลังชำระเงิน"]
    },
    stats: [
      { num: "20 รายการ", label: "โควตาทดลองใช้ฟรี" },
      { num: "1 ต่อ 1", label: "จัดคู่สเปกแม่นยำ" },
      { num: "ไม่ค้าง", label: "OCR ภาพยาวในเครื่อง" },
      { num: "สะอาด 100%", label: "ส่งออกภาษาเดียวชัดเจน" }
    ],
    featuresTitle: "ฟีเจอร์หลัก",
    featuresSub: "OCR ภาพยาว + จัดคู่สเปกสินค้า + จุดขายหลายภาษา + ส่งออกแคตตาล็อก",
    features: [
      { icon: "🔍", title: "ระบบอ่านข้อความ OCR ภาพยาว", desc: "ใช้เอนจิน Tesseract WASM SIMD ดึงข้อมูลวัสดุ ขนาด และสเปกจากภาพรายละเอียดแบบยาวได้ทันที" },
      { icon: "📦", title: "จัดเรียงขนาด น้ำหนัก และสเปกกล่อง 1:1", desc: "จับคู่ขนาด ความจุ น้ำหนักต่อชิ้น ข้อมูลกล่อง และราคาให้ตรงกันทุกตัวเลือก" },
      { icon: "💡", title: "สร้างจุดขาย B2B / ToC หลายภาษา", desc: "สร้างข้อความขายส่ง B2B หรือรีวิว ToC ในภาษาเดียวล้วนไม่มีภาษาปน" },
      { icon: "🗂️", title: "จัดระเบียบและส่งออกแคตตาล็อก", desc: "จัดหมวดหมู่รูปภาพสะอาดและเอกสารข้อมูลสินค้าลงโฟลเดอร์พร้อมใช้งาน" }
    ],
    compareTitle: "ทำมือ vs. เครื่องมือสร้างแคตตาล็อก Xiaomie",
    compareHeaders: ["ขั้นตอน", "ทำด้วยมือ", "Xiaomie Catalog Generator"],
    compareRows: [
      ["ข้อความในภาพยาว", "อ่านและพิมพ์เองทีละบรรทัด", "OCR ในเครื่องอ่านให้อัตโนมัติ"],
      ["ขนาดและสเปกกล่อง", "ข้อมูลคลาดเคลื่อนบ่อย", "จัดคู่ 1 ต่อ 1 ทุกตัวเลือกอัตโนมัติ"],
      ["ข้อความขายหลายภาษา", "แปลและคัดลอกข้ามหลายโปรแกรม", "สร้าง B2B/ToC พร้อมส่งออกในจุดเดียว"]
    ],
    pricingTitle: "แพ็กเกจ SaaS โปร่งใส (USD)",
    pricingSub: "เปิดสิทธิ์ใช้งานอัตโนมัติทันทีผ่านบัญชีอีเมล api.xiaomie.tools หลังชำระเงินเสร็จสิ้น",
    plans: [
      { name: "🚀 แพ็กเกจรายเดือน Starter", price: "$9", ref: "USD / เดือน", period: "/ เดือน · สมาชิก SaaS", highlight: false, planId: "monthly9", desc: "เหมาะสำหรับผู้ขายเดี่ยวที่ใช้งานประจำทุกเดือน", bullets: ["สร้างแคตตาล็อก 30 ชุด/เดือน", "OCR ภาพยาวในเครื่อง", "จัดคู่สเปกสินค้าอัตโนมัติ", "เปิดสิทธิ์ทันทีผ่าน api.xiaomie.tools"], cta: "สมัคร Starter ($9/mo)" },
      { name: "⭐ แพ็กเกจ Pro 100 ชุด", price: "$69", ref: "USD · จ่ายครั้งเดียว", period: "/ 100 ชุด (ไม่มีวันหมดอายุ)", highlight: true, badge: "ยอดนิยม", planId: "pack100", desc: "สะสมโควตาได้ตลอดชีพ รองรับการใช้ API Key ส่วนตัว (BYOK)", bullets: ["ส่งออกแคตตาล็อกครบชุด 100 รายการ", "รองรับการใส่ API Key ส่วนตัว (BYOK)", "สร้างจุดขาย B2B/ToC หลายภาษา", "เปิดสิทธิ์ทันทีผ่าน api.xiaomie.tools"], cta: "ซื้อแพ็กเกจ Pro ($69)" },
      { name: "👑 แพ็กเกจรายปี Studio Pro", price: "$99", ref: "USD / ปี", period: "/ ปี · แพ็กเกจรายปี", highlight: false, planId: "annual99", desc: "คุ้มค่าสูงสุดสำหรับทีมจัดการแคตตาล็อกสินค้า", bullets: ["จัดรูปแบบแคตตาล็อกปริมาณมากตลอดปี", "รองรับ BYOK และทุกภาษา", "บริการซัพพอร์ตพิเศษทางอีเมล", "เปิดสิทธิ์ทันทีผ่าน api.xiaomie.tools"], cta: "อัปเกรดรายปี ($99/yr)" }
    ],
    installTitle: "เริ่มต้นใน 3 ขั้นตอน",
    installSteps: [
      { step: "1", title: "เข้าสู่ระบบด้วย Email OTP", desc: "ยืนยันอีเมลผ่าน noreply@xiaomie.tools เพื่อซิงก์สิทธิ์บน api.xiaomie.tools" },
      { step: "2", title: "นำเข้าภาพและข้อมูลสินค้า", desc: "เลือกภาษาปลายทางและโทนการเขียน B2B หรือ ToC" },
      { step: "3", title: "ส่งออกแคตตาล็อกครบชุด", desc: "รับตารางสเปกที่จัดคู่แล้ว จุดขายหลายภาษา และรูปภาพที่คัดกรองเรียบร้อย" }
    ],
    faqTitle: "คำถามที่พบบ่อย (FAQ)",
    faqs: [
      { q: "เปิดใช้งานนานแค่ไหนหลังชำระเงิน?", a: "ระบบจะเปิดสิทธิ์ให้อัตโนมัติทันทีในบัญชีอีเมล api.xiaomie.tools ของคุณ" },
      { q: "มีนโยบายคืนเงินหรือไม่?", a: "มีครับ เรามีนโยบายคืนเงินภายใน 14 วัน (14-day refund policy) ติดต่อ info@xiaomie.tools ได้เลย" }
    ],
    footer: "© 2026 XiaoMie Tools. Operated by Limei Chen. Contact: info@xiaomie.tools"
  }
};

export const PAYMENTS_BY_LANG = {
  "zh-CN": {
    title: "全球 SaaS 收款与即时自动开通",
    sub: "由 Global Card & SaaS Checkout（Creem MoR 国际商户结算体系）提供安全支付支持，支持 Visa / MasterCard / Apple Pay / Google Pay。付款后通过 api.xiaomie.tools 邮箱账号自动即时开通。",
    globalCard: {
      badge: "国际 SaaS 通道 · 美元结算",
      name: "🌐 Global Card & SaaS Checkout (USD)",
      desc: "支持 Visa / MasterCard / Amex / Apple Pay / Google Pay；付款后系统自动向您的 api.xiaomie.tools 邮箱账号开通对应权益。",
      cta: "进入 SaaS 在线结算 (USD)",
      note: "运营主体：XiaoMie Tools (Operated by Limei Chen) · 官方唯一客服：info@xiaomie.tools"
    },
    wechat: {
      badge: "本土通道 · 接入预留中",
      name: "💚 微信支付（CNY 参考）",
      desc: "国内本土扫码支付通道持续完善，支持通过 api.xiaomie.tools 邮箱自动发放授权。",
      status: "⏳ 预留接入口 · 联系 info@xiaomie.tools"
    },
    alipay: {
      badge: "本土通道 · 接入预留中",
      name: "💙 支付宝（CNY 参考）",
      desc: "国内本土账单通道预留，支持通过 api.xiaomie.tools 邮箱自动发放授权。",
      status: "⏳ 预留接入口 · 联系 info@xiaomie.tools"
    }
  },
  "en": {
    title: "Global SaaS Checkout & Instant Account Provisioning",
    sub: "Powered by Global Card & SaaS Checkout (Visa, MasterCard, Apple Pay, Google Pay). Entitlements are activated automatically and instantaneously under your email via api.xiaomie.tools after payment.",
    globalCard: {
      badge: "Global SaaS · USD",
      name: "🌐 Global Card & SaaS Checkout (USD)",
      desc: "Pay securely with Visa, MasterCard, Amex, Apple Pay, or Google Pay. Automatic instant activation under your email via api.xiaomie.tools.",
      cta: "Proceed to Global SaaS Checkout",
      note: "Operated by XiaoMie Tools (Limei Chen) · Support: info@xiaomie.tools"
    },
    wechat: {
      badge: "Local Method · Reserved",
      name: "💚 WeChat Pay (CNY Ref)",
      desc: "Regional CNY payment option reserved alongside automatic api.xiaomie.tools provisioning.",
      status: "⏳ Reserved Slot · info@xiaomie.tools"
    },
    alipay: {
      badge: "Local Method · Reserved",
      name: "💙 Alipay (CNY Ref)",
      desc: "Regional CNY payment option reserved alongside automatic api.xiaomie.tools provisioning.",
      status: "⏳ Reserved Slot · info@xiaomie.tools"
    }
  }
};

for (const code of ["zh-TW", "ja", "ko", "es", "de", "fr", "vi", "th"]) {
  if (!PAYMENTS_BY_LANG[code]) {
    PAYMENTS_BY_LANG[code] = PAYMENTS_BY_LANG[code === "zh-TW" ? "zh-CN" : "en"];
  }
}
