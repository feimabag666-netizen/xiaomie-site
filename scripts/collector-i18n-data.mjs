export const SITE_BASE_URL = "https://xiaomie.tools/collector";
export const DOWNLOAD_BASE_URL = "https://collector.xiaomie.tools";
export const API_BASE_URL = "https://api.xiaomie.tools";

export const LANGUAGES = [
  { code: "zh-CN", slug: "", label: "简体中文", short: "简中", dir: "ltr", ogLocale: "zh_CN", market: "中国大陆及全球华人跨境卖家" },
  { code: "zh-TW", slug: "zh-tw", label: "繁體中文", short: "繁中", dir: "ltr", ogLocale: "zh_TW", market: "台灣、香港、澳門與東南亞華語賣家" },
  { code: "en", slug: "en", label: "English", short: "EN", dir: "ltr", ogLocale: "en_US", market: "US, UK, CA, AU, EU & Global Dropshippers" },
  { code: "ja", slug: "ja", label: "日本語", short: "JP", dir: "ltr", ogLocale: "ja_JP", market: "Amazon JP / 楽天市場 / メルカリ輸入セラー" },
  { code: "ko", slug: "ko", label: "한국어", short: "KR", dir: "ltr", ogLocale: "ko_KR", market: "쿠팡 / 네이버 스마트스토어 해외소싱 셀러" },
  { code: "es", slug: "es", label: "Español", short: "ES", dir: "ltr", ogLocale: "es_ES", market: "Mercado Libre / Amazon ES & MX / Shopify" },
  { code: "de", slug: "de", label: "Deutsch", short: "DE", dir: "ltr", ogLocale: "de_DE", market: "Amazon DE / Otto / DACH E-Commerce" },
  { code: "fr", slug: "fr", label: "Français", short: "FR", dir: "ltr", ogLocale: "fr_FR", market: "Amazon FR / Cdiscount / Shopify France" },
  { code: "vi", slug: "vi", label: "Tiếng Việt", short: "VI", dir: "ltr", ogLocale: "vi_VN", market: "Shopee / TikTok Shop / Lazada Việt Nam" },
  { code: "th", slug: "th", label: "ภาษาไทย", short: "TH", dir: "ltr", ogLocale: "th_TH", market: "Shopee / Lazada / TikTok Shop Thailand" }
];

export const TRANSLATIONS = {
  "zh-CN": {
    title: "小咩魔法采集 v1.0.8 — 全网商品与图文智能采集 Chrome/Edge 扩展 | 1688/亚马逊/独立站一键采集",
    description: "全网通用商品与图文素材智能采集插件：AI智能筛图、防卡死本地长图OCR、四级箱规参数补查、B2B/ToC独家卖点与故事生成、纯正单语种输出。支持1688、淘宝、亚马逊、速卖通、Shopify及博客图文，免费试用20款。",
    keywords: "小咩魔法采集,商品采集插件,1688采集工具,亚马逊选品采集,长图OCR插件,箱规参数提取,跨境电商采集,Chrome扩展",
    nav: { features: "核心卖点", compare: "效果对比", pricing: "授权方案", install: "安装指南", faq: "常见问题", cta: "免费下载 v1.0.8" },
    hero: {
      badge: "v1.0.8 正式版 · Chrome & Edge (Manifest V3) · 免费试用 20 款",
      h1: "把 1688、亚马逊与全网商品资料，30 秒变成可直接上架的本地素材库",
      sub: "专为跨境电商、选品团队与独立站卖家打造的智能采集工作台：AI 自动区分主图/SKU图/详情图、内置防卡死本地长图 OCR、四级箱规参数补查、并自动生成 B2B 外贸或 ToC 种草独家卖点与品牌故事。",
      ctaPrimary: "立即免费下载 v1.0.8 (.zip)",
      ctaSecondary: "查看 6 大核心黑科技",
      trust: ["无需配置服务器，纯本地浏览器运行", "智能识别电商页 vs 普通图文/博客页", "支持微信 / 支付宝 / Airwallex / 国际信用卡"]
    },
    stats: [
      { num: "20 款", label: "新用户免费全功能试用" },
      { num: "4 级漏斗", label: "箱规与核心参数深度补查" },
      { num: "0 卡顿", label: "本地 WASM SIMD 长图 OCR" },
      { num: "100% 纯净", label: "单语种输出绝不中英混杂" }
    ],
    featuresTitle: "为什么专业卖家都在换用「小咩魔法采集」？",
    featuresSub: "普通采集器只能抓几张零散图片，小咩魔法采集直接帮你完成「抓图 + 筛图 + 识字 + 查箱规 + 写卖点 + 归档」。",
    features: [
      { icon: "💡", title: "采集并提炼「独特卖点」与「独特故事」", desc: "自动抓取并提炼商品核心卖点，一键切换「B2B 外贸批发」或「ToC 真实种草」风格生成独家品牌故事，支持纯正单一语言输出，彻底杜绝中英混杂。" },
      { icon: "📦", title: "全网找箱规 · 四级参数补查漏斗", desc: "针对 FBA 与外贸痛点，全网跨区块自动核验 5 项必填核心参数，并通过四级漏斗深挖装箱数、外箱尺寸、毛净重等箱规参数，告别反复问工厂。" },
      { icon: "🤖", title: "智能过滤不想要的图片与视频内容", desc: "自动过滤广告图、水印杂图、无效小图标与无关视频；AI 精准区分主图/SKU图/详情图，纯净抓取高清图、视频及 GIF/WebP/APNG/Canvas/Lottie 动图。" },
      { icon: "⚡", title: "全流程异步操作 · 防卡死本地长图 OCR", desc: "采用异步并发架构与内置 Tesseract WASM SIMD 本地离线 OCR 引擎，后台静默解析数万像素超长详情图文字，浏览器全程丝滑不卡死。" },
      { icon: "🚀", title: "多链接批量操作 + 防风控限速归档", desc: "支持粘贴多条链接或导入 TXT 批量队列采集，自动跳过已采链接，内置分/时/天频率保护；每个商品按编号自动创建独立本地文件夹归档。" },
      { icon: "🛒", title: "全网通用采集 · 电商/博客自动切换", desc: "支持 1688、淘宝、天猫、亚马逊、速卖通、Shopify 独立站；打开博客或评测文章时自动切换纯净图文模式，只抓正文与高清素材。" }
    ],
    compareTitle: "传统人工 / 普通采集插件 vs 小咩魔法采集",
    compareHeaders: ["对比维度", "传统人工 / 普通插件", "小咩魔法采集 v1.0.8"],
    compareRows: [
      ["长图里的参数文字", "人工肉眼看图手敲，极易出错", "内置防卡死本地 WASM OCR 自动提取"],
      ["杂图与广告图过滤", "全部打包下载，手动一张张删", "AI 智能筛图 + 像素阈值，仅留纯净商品图"],
      ["箱规 / 5项必填参数", "经常缺失，需反复联系工厂确认", "四级参数补查漏斗，自动核验并补全"],
      ["产品卖点与故事文案", "无此功能，另开 ChatGPT 逐个粘贴", "内置 B2B/ToC 双风格卖点与故事一键生成"],
      ["多语言输出纯净度", "经常中英混杂，上架前还要二次清洗", "严格单一语言输出（中文或英文纯净输出）"]
    ],
    pricingTitle: "透明双币种授权方案 · 24 小时自助秒激活",
    pricingSub: "先免费试用 20 个产品满意再升级；VIP / SVIP 激活后立即开放自有 API Key 区域，无任何隐藏月费。",
    plans: [
      {
        name: "🎁 免费试用版",
        price: "¥0",
        usd: "$0 USD",
        period: "/ 20 个产品",
        highlight: false,
        desc: "零门槛体验全流程智能采集，内置官方试用 API，装好即用。",
        bullets: ["20 个完整商品/网页采集额度", "AI 智能筛图 & 视频/动图抓取", "防卡死本地长图 OCR 识别", "四级箱规参数核验与本地归档"],
        cta: "下载并免费试用 20 款"
      },
      {
        name: "⭐ VIP 百品采集包",
        price: "¥500",
        usd: "$69 USD",
        period: "/ 100 个产品（可叠加）",
        highlight: true,
        badge: "跨境卖家首选",
        desc: "适合日常选品上架与中小团队，额度支持续购叠加，永不过期。",
        bullets: ["100 个产品全功能采集额度（可叠加）", "解锁自有 API Key 配置区", "B2B 外贸 / ToC 种草卖点故事生成", "支持微信 / 支付宝 / Airwallex / 国际信用卡"],
        cta: "获取 VIP 百品包 (¥500 / $69)"
      },
      {
        name: "👑 SVIP 终身至尊版",
        price: "¥999",
        usd: "$139 USD",
        period: "/ 终身不限量",
        highlight: false,
        desc: "一次买断终身畅享，全网不限量采集，适合铺货团队与供应链公司。",
        bullets: ["全网不限量永久采集权限", "解锁自有 API Key，成本完全可控", "包含后续版本免费更新升级", "24 小时双币种收银台付款秒出卡密"],
        cta: "升级 SVIP 终身版 (¥999 / $139)"
      }
    ],
    installTitle: "30 秒极速安装与使用流程",
    installSteps: [
      { step: "1", title: "下载并解压安装包", desc: "点击下载 v1.0.8 压缩包并完整解压到本地固定文件夹。" },
      { step: "2", title: "一键同步或加载扩展", desc: "Windows 用户可直接双击「一键安装或更新到Edge.bat」；或在 Chrome/Edge 扩展页开启开发者模式加载解压文件夹。" },
      { step: "3", title: "打开商品页点击小咩图标", desc: "在 1688、亚马逊、独立站等页面点击扩展图标，选择「预览配置」或「一键立即采集」，自动生成完整本地产品文件夹。" }
    ],
    faqTitle: "常见问题与 AI 检索问答 (FAQ)",
    faqs: [
      { q: "小咩魔法采集支持哪些电商平台和网页？", a: "支持 1688、淘宝、天猫、亚马逊 (Amazon)、速卖通 (AliExpress)、Shopify 等独立站，以及任意博客、新闻评测等非电商图文网页，插件会自动识别页面类型。" },
      { q: "为什么说它的长图 OCR「防卡死」？", a: "插件内置了基于 Tesseract WASM SIMD 的本地离线 OCR 引擎，针对电商超长详情图做了分片与内存控制优化，不会像普通网页脚本那样把浏览器标签页卡死。" },
      { q: "什么是「四级箱规参数补查漏斗」？", a: "做亚马逊 FBA 或 B2B 外贸时，单品尺寸、装箱数、外箱尺寸、毛净重经常藏在详情页不同位置或长图里。四级漏斗会依次从页面结构、规格表、详情文本和 OCR 结果中逐层补全。" },
      { q: "免费试用 20 个产品用完后怎么付费？支持海外付款吗？", a: "扩展内集成了官方双币种收银台：中国大陆用户支持微信支付与支付宝；海外买家支持 Airwallex、Visa、MasterCard、Amex、Apple Pay 与 Google Pay（$69 / $139 USD），付款后屏幕秒出激活码。" },
      { q: "升级 VIP 或 SVIP 后，还需要额外付平台月费吗？", a: "不需要。VIP 为 100 款一次性额度（可叠加），SVIP 为终身买断不限量；激活后系统开放底部 API 配置区，您可填入自己的 API Key，无任何隐藏订阅费。" }
    ],
    footer: "© 2026 小咩魔法采集 (Xiaomie Magic Collector) · 专为全球跨境电商与选品团队打造"
  },

  "zh-TW": {
    title: "小咩魔法採集 v1.0.8 — 全網商品與圖文智能採集 Chrome/Edge 擴充功能",
    description: "專為台灣、香港與全球華語跨境賣家打造：支援 1688、淘寶、蝦皮選品來源、Amazon、Shopify。具備 AI 智慧篩圖、防卡死本地長圖 OCR、四級箱規參數補查與 B2B/ToC 賣點生成。",
    keywords: "小咩魔法採集,1688採集工具,蝦皮選品,Amazon採集擴充功能,長圖OCR,箱規提取,跨境電商工具",
    nav: { features: "核心賣點", compare: "效果對比", pricing: "授權方案", install: "安裝指南", faq: "常見問題", cta: "免費下載 v1.0.8" },
    hero: {
      badge: "v1.0.8 正式版 · Chrome & Edge (Manifest V3) · 免費試用 20 款",
      h1: "把 1688、Amazon 與全網商品資料，30 秒整理成可直接上架的本地素材庫",
      sub: "AI 自動區分主圖 / SKU 圖 / 詳情圖、內建防卡死本地長圖 OCR、四級箱規參數補查，並自動生成 B2B 外貿批發或 ToC 真實種草賣點與品牌故事。",
      ctaPrimary: "立即免費下載 v1.0.8 (.zip)",
      ctaSecondary: "查看 6 大核心功能",
      trust: ["純本地瀏覽器執行，無需架設伺服器", "自動區分電商商品頁與一般圖文部落格", "支援 Airwallex / 國際信用卡 / 微信 / 支付寶"]
    },
    stats: [
      { num: "20 款", label: "免費全功能試用額度" },
      { num: "4 級漏斗", label: "箱規與核心規格深度補查" },
      { num: "0 卡頓", label: "本地 WASM SIMD 長圖 OCR" },
      { num: "純淨輸出", label: "單一語種絕不中英混雜" }
    ],
    featuresTitle: "為什麼專業選品與電商團隊都選擇「小咩魔法採集」？",
    featuresSub: "一次完成「抓圖 + 篩圖 + 長圖辨識 + 查箱規 + 寫賣點 + 自動建資料夾歸檔」。",
    features: [
      { icon: "🛒", title: "全網通用採集 · 智慧辨識頁面類型", desc: "支援 1688、淘寶、天貓、Amazon、AliExpress、Shopify 獨立站；瀏覽文章或評測頁時自動切換純淨圖文模式。" },
      { icon: "🤖", title: "AI 智慧篩圖 · 影片與動圖一併抓取", desc: "自動過濾廣告與雜圖，支援最小尺寸門檻設定，並可擷取影片、GIF、WebP、APNG、Canvas 與 Lottie 動畫。" },
      { icon: "🔍", title: "防卡死本地長圖 OCR · 圖片文字秒提取", desc: "內建 Tesseract WASM SIMD 本地離線辨識引擎，將長圖中的材質、尺寸、規格表精準轉為純文字寫入商品資料。" },
      { icon: "📦", title: "四級箱規參數補查漏斗", desc: "自動核驗 5 項必填商品規格，逐層補全外箱尺寸、裝箱數、毛重與淨重，大幅減少向供應商反覆確認的時間。" },
      { icon: "💡", title: "B2B 外貿 / ToC 種草 · 賣點與故事生成", desc: "自由切換 B2B 批發或 ToC 種草語氣，嚴格保持單一語言輸出（中文或英文），上架前無需再次人工清洗。" },
      { icon: "⚡", title: "批量採集佇列與防風控限速", desc: "支援貼上多行連結或匯入 TXT 檔批量採集，自動跳過已採連結，並依設定編號自動建立獨立產品資料夾。" }
    ],
    compareTitle: "傳統人工 / 一般採集外掛 vs 小咩魔法採集",
    compareHeaders: ["比較項目", "傳統人工 / 一般外掛", "小咩魔法採集 v1.0.8"],
    compareRows: [
      ["長圖內的規格文字", "人工肉眼查看並手動輸入", "內建防卡死本地 WASM OCR 自動擷取"],
      ["雜圖與廣告圖過濾", "全部下載後手動一張張刪除", "AI 智慧篩圖 + 像素過濾，只留純淨商品圖"],
      ["箱規與必填參數", "經常遺漏，需反覆聯繫工廠", "四級參數補查漏斗自動核驗補全"],
      ["賣點與品牌故事", "需另外複製貼上到 AI 工具", "內建 B2B / ToC 雙模式一鍵生成"]
    ],
    pricingTitle: "透明雙幣種授權方案 · 24 小時自助秒開通",
    pricingSub: "先免費試用 20 款商品再決定；VIP / SVIP 啟用後開放自有 API Key 設定，無任何隱藏月費。",
    plans: [
      { name: "🎁 免費試用版", price: "¥0", usd: "$0 USD", period: "/ 20 款商品", highlight: false, desc: "內建官方試用 API，安裝後即可體驗完整採集與 OCR 流程。", bullets: ["20 款完整商品/網頁採集額度", "AI 智慧篩圖 & 影片動圖擷取", "防卡死本地長圖 OCR", "四級箱規參數核驗"], cta: "免費下載試用" },
      { name: "⭐ VIP 百品採集包", price: "¥500", usd: "$69 USD", period: "/ 100 款（可疊加）", highlight: true, badge: "熱門方案", desc: "適合日常選品上架與電商團隊，額度可續購疊加且永久有效。", bullets: ["100 款商品採集額度（可疊加）", "解鎖自有 API Key 設定區", "B2B / ToC 賣點與故事生成", "支援 Airwallex / 國際信用卡 / 微信 / 支付寶"], cta: "升級 VIP ($69 / ¥500)" },
      { name: "👑 SVIP 終身至尊版", price: "¥999", usd: "$139 USD", period: "/ 終身不限量", highlight: false, desc: "一次買斷終身不限量採集，適合大量鋪貨與供應鏈採購團隊。", bullets: ["全網不限量永久採集權限", "解鎖自有 API Key 完全自主控管", "包含後續版本免費更新", "付款完成螢幕立即顯示啟動碼"], cta: "升級 SVIP ($139 / ¥999)" }
    ],
    installTitle: "30 秒快速安裝步驟",
    installSteps: [
      { step: "1", title: "下載並解壓縮", desc: "下載 v1.0.8 壓縮檔並完整解壓縮至固定資料夾。" },
      { step: "2", title: "載入 Chrome / Edge 擴充功能", desc: "開啟擴充功能管理頁並啟用「開發人員模式」，點擊「載入未封裝項目」選擇該資料夾。" },
      { step: "3", title: "一鍵採集並本地歸檔", desc: "在任意商品頁點擊小咩圖示，即可預覽設定或一鍵儲存完整素材資料夾。" }
    ],
    faqTitle: "常見問題 (FAQ)",
    faqs: [
      { q: "支援哪些電商網站？", a: "支援 1688、淘寶、天貓、Amazon、AliExpress、Shopify 獨立站以及各類文章部落格，並能自動辨識電商頁與一般圖文頁。" },
      { q: "台灣或海外買家如何付款開通？", a: "擴充功能內建雙幣種收銀台，支援 Airwallex、Visa、MasterCard、Amex、Apple Pay 與 Google Pay（$69 / $139 USD），付款後立即取得 License Key。" },
      { q: "什麼是單一語言純淨輸出？", a: "可設定工作台與匯出文件統一使用中文或英文，避免翻譯後出現中英夾雜，省去整理資料的時間。" }
    ],
    footer: "© 2026 小咩魔法採集 (Xiaomie Magic Collector) · All Rights Reserved"
  },

  "en": {
    title: "Xiaomie Magic Collector v1.0.8 — AI Product & Media Scraper Extension for 1688, Amazon, Shopify",
    description: "Universal Chrome & Edge extension for e-commerce sourcing: AI image filtering, anti-freeze local long-image OCR, 4-level carton spec lookup funnel, B2B/ToC copy & story generator, and pure single-language output. Try 20 products free.",
    keywords: "1688 product scraper, ecommerce image downloader, chrome extension product collector, long image OCR extension, carton spec extractor, Amazon FBA sourcing tool, dropshipping product scraper",
    nav: { features: "Features", compare: "Comparison", pricing: "Pricing", install: "Install", faq: "FAQ", cta: "Download Free v1.0.8" },
    hero: {
      badge: "v1.0.8 Release · Chrome & Edge (Manifest V3) · 20 Products Free Trial",
      h1: "Turn Any 1688, Taobao, Amazon, or Shopify Page Into a Ready-to-List Product Folder in 30 Seconds",
      sub: "Built for cross-border sellers, Amazon FBA teams, and dropshippers: AI smart image filtering (Main / SKU / Detail), anti-freeze local WASM long-image OCR, 4-level carton spec lookup, and instant B2B/ToC selling point & story generation.",
      ctaPrimary: "Download v1.0.8 Free (.zip)",
      ctaSecondary: "Explore 6 Breakthroughs",
      trust: ["100% browser-local execution — no server required", "Auto-detects e-commerce vs article/blog pages", "Airwallex, Visa, MasterCard, Apple Pay, Google Pay & WeChat/Alipay"]
    },
    stats: [
      { num: "20 Items", label: "Full-Featured Free Trial" },
      { num: "4-Level", label: "Carton & Spec Lookup Funnel" },
      { num: "0 Freeze", label: "Local WASM SIMD Long-Image OCR" },
      { num: "100% Pure", label: "Zero Mixed-Language Output" }
    ],
    featuresTitle: "Why Serious Sourcing Teams Switch to Xiaomie Magic Collector",
    featuresSub: "Ordinary scrapers dump messy image folders. Xiaomie delivers cleaned images, OCR-extracted specs, carton dimensions, and conversion-ready copy in one click.",
    features: [
      { icon: "💡", title: "Extract Unique Selling Points & Generate Brand Stories", desc: "Automatically extracts core USPs and generates unique B2B Wholesale or ToC Authentic product stories in pure English or Chinese with zero mixed-language mess." },
      { icon: "📦", title: "Global 4-Level Carton & Spec Lookup Funnel", desc: "Hunts across DOM, spec tables, descriptions, and OCR text to verify 5 mandatory specs and recover carton dimensions, weight, and packing quantities." },
      { icon: "🤖", title: "Smart Filtering of Unwanted Images & Videos", desc: "Automatically filters out ad banners, clutter icons, and unwanted videos; separates Main, SKU, and Detail images plus clean GIF, WebP, APNG, Canvas & Lottie." },
      { icon: "⚡", title: "Async Non-Blocking Execution + Local Long-Image OCR", desc: "Asynchronous pipeline with built-in Tesseract WASM SIMD OCR extracts text from ultra-long supplier images in the background without freezing your browser." },
      { icon: "🚀", title: "Batch Multi-URL Queue & Anti-Ban Rate Limiting", desc: "Paste multiple URLs or import .txt files, auto-skip collected links, enforce per-minute/hour/day limits, and archive into auto-numbered local folders." },
      { icon: "🛒", title: "Universal E-Commerce & Content Auto-Detection", desc: "Works on 1688, Taobao, Tmall, Amazon, AliExpress, and Shopify; automatically switches to clean Article & Media mode on blogs and review pages." }
    ],
    compareTitle: "Manual Sourcing / Basic Scrapers vs. Xiaomie Magic Collector",
    compareHeaders: ["Capability", "Manual / Basic Scrapers", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["Specs inside long images", "Read images manually & type by hand", "Anti-freeze local WASM OCR extracts automatically"],
      ["Ad & clutter image removal", "Download everything, delete manually", "AI Smart Filter + pixel threshold keeps only product shots"],
      ["Carton & 5 required specs", "Often missing; slow back-and-forth with factories", "4-level lookup funnel verifies & backfills specs"],
      ["Selling points & stories", "Copy-paste manually into separate AI tools", "Built-in B2B/ToC copy & story generator per product"],
      ["Output language cleanliness", "Mixed Chinese/English mess", "Strict single-language output (pure English or Chinese)"]
    ],
    pricingTitle: "Simple Dual-Currency Plans · Instant License Delivery",
    pricingSub: "Start with 20 free products. Upgrade once to unlock your own API Key slot with zero recurring monthly subscription fees.",
    plans: [
      { name: "🎁 Free Trial", price: "$0", usd: "¥0", period: "/ 20 products", highlight: false, desc: "Includes built-in trial API so you can test the full workflow immediately.", bullets: ["20 full product/page collections", "AI image filtering & video/GIF capture", "Anti-freeze local long-image OCR", "4-level carton spec verification"], cta: "Download & Try 20 Free" },
      { name: "⭐ VIP 100-Product Pack", price: "$69", usd: "¥500", period: "/ 100 products (stackable)", highlight: true, badge: "Most Popular", desc: "Ideal for active Amazon/Shopify sellers. Credits stack and never expire.", bullets: ["100 product collection credits (stackable)", "Unlocks your own custom API Key slot", "B2B & ToC selling point/story generator", "Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "Get VIP Pack ($69 USD)" },
      { name: "👑 SVIP Lifetime Unlimited", price: "$139", usd: "¥999", period: "/ Lifetime", highlight: false, desc: "One-time payment for unlimited scraping across the entire web forever.", bullets: ["Unlimited lifetime collections across all sites", "Unlocks custom API Key for full cost control", "All future v1.x updates included", "24/7 automated checkout with instant License Key"], cta: "Get SVIP Lifetime ($139 USD)" }
    ],
    installTitle: "Install & Start Collecting in 30 Seconds",
    installSteps: [
      { step: "1", title: "Download & Unzip", desc: "Download the v1.0.8 zip archive and extract it to a permanent folder on your computer." },
      { step: "2", title: "Load Unpacked in Chrome or Edge", desc: "Open chrome://extensions or edge://extensions, enable Developer Mode, and click 'Load unpacked' to select the folder." },
      { step: "3", title: "Click Xiaomie on Any Product Page", desc: "Open 1688, Amazon, or any store, click the Xiaomie icon, and save your structured product folder in one click." }
    ],
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqs: [
      { q: "Which e-commerce platforms does Xiaomie Magic Collector support?", a: "It works on 1688, Taobao, Tmall, Amazon, AliExpress, Shopify, and virtually any independent store or blog/article page." },
      { q: "How does the Anti-Freeze Long-Image OCR work?", a: "It runs a local Tesseract WASM SIMD engine inside your browser with chunked memory handling, extracting text from ultra-long supplier detail images without freezing your tab." },
      { q: "What is the 4-Level Carton & Spec Lookup Funnel?", a: "It systematically checks structured DOM fields, spec tables, product descriptions, and OCR text from detail images to recover carton dimensions, weight, and 5 mandatory product specs." },
      { q: "Are there any recurring monthly fees?", a: "No. VIP ($69) is a stackable 100-product pack and SVIP ($139) is a one-time lifetime license. Both unlock the custom API Key field so you control your own API usage." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · Built for Global E-Commerce & Sourcing Teams"
  },

  "ja": {
    title: "Xiaomie Magic Collector v1.0.8 — 1688・タオバオ・Amazon対応 AI商品データ＆画像一括収集拡張機能",
    description: "中国輸入（1688/タオバオ）やAmazon/楽天セラー向けのChrome/Edge拡張機能。AI画像選別、フリーズ防止ローカル長尺画像OCR、4段階梱包仕様検索、B2B/ToC訴求文生成をワンクリックで実現。20商品まで無料体験可能。",
    keywords: "1688 画像ダウンロード,タオバオ 商品データ収集,中国輸入 拡張機能,長尺画像 OCR,Amazon セラー ツール,梱包サイズ 抽出",
    nav: { features: "主な機能", compare: "従来との比較", pricing: "料金プラン", install: "導入手順", faq: "よくある質問", cta: "無料版をダウンロード" },
    hero: {
      badge: "v1.0.8 最新版 · Chrome & Edge (MV3) · 20商品まで無料トライアル",
      h1: "1688・タオバオ・Amazonの商品ページを、わずか30秒で出品可能なローカル素材フォルダへ",
      sub: "AIによるメイン/SKU/詳細画像の自動仕分け、ブラウザが固まらないローカルWASM長尺画像OCR、4段階の梱包サイズ（箱規）補完、そして英語/中国語の純粋な単一言語での訴求ポイント・ストーリー生成を搭載。",
      ctaPrimary: "v1.0.8 を無料ダウンロード (.zip)",
      ctaSecondary: "6つの強みを見る",
      trust: ["サーバー不要・ブラウザ内で完結する安全設計", "EC商品ページとブログ/記事ページを自動判別", "Airwallex・クレジットカード・Apple Pay・Google Pay対応"]
    },
    stats: [
      { num: "20商品", label: "全機能無料トライアル" },
      { num: "4段階", label: "梱包仕様・必須スペック補完" },
      { num: "フリーズ0", label: "ローカルWASM SIMD長尺OCR" },
      { num: "純粋出力", label: "言語混在なしのクリーンなテキスト" }
    ],
    featuresTitle: "なぜ多くの中国輸入・越境ECセラーが選んでいるのか",
    featuresSub: "単なる画像ダウンローダーではなく、「画像選別 + OCR文字起こし + 梱包仕様調査 + 訴求文作成 + フォルダ整理」を自動化します。",
    features: [
      { icon: "🛒", title: "全サイト対応・ページ種別の自動判別", desc: "1688、タオバオ、Tmall、Amazon、AliExpress、Shopifyなどに対応。通常のブログやレビュー記事では記事モードへ自動切替します。" },
      { icon: "🤖", title: "AIスマート画像選別＆動画・アニメ保存", desc: "広告や不要なアイコンを除外し、商品画像・SKU画像・詳細画像を分類。動画やGIF、WebP、APNG、Lottieも保存可能。" },
      { icon: "🔍", title: "フリーズ防止ローカル長尺画像OCR", desc: "1688の縦長詳細画像に埋め込まれた材質・サイズ表を、内蔵のTesseract WASMエンジンでブラウザを固まらせずテキスト化。" },
      { icon: "📦", title: "4段階の梱包仕様（箱規）検索ファネル", desc: "FBA納品や国際輸送に不可欠な5つの必須項目と外箱サイズ・重量・入数を4段階の検索で自動補完します。" },
      { icon: "💡", title: "B2B卸売 / ToC向け 訴求文・ストーリー生成", desc: "B2B卸向け・ToC消費者向けのトーンを切り替え、言語混在のないクリーンな商品資料テキストを自動生成します。" },
      { icon: "⚡", title: "一括URL収集＆アクセス制限対策", desc: "複数URLの貼り付けやTXT読み込みに対応。取得済みURLのスキップや分/時間/日単位のレート制限でアカウントを保護。" }
    ],
    compareTitle: "手作業・従来ツール vs Xiaomie Magic Collector",
    compareHeaders: ["比較項目", "手作業・従来ツール", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["縦長画像内のスペック文字", "画像を見ながら手入力", "ローカルWASM OCRで自動テキスト抽出"],
      ["不要なバナー・広告画像", "全保存してから手動削除", "AI選別＋解像度フィルタで商品画像のみ保存"],
      ["梱包サイズ・必須仕様", "欠損が多く仕入先へ都度確認", "4段階ファネルで自動検証・補完"],
      ["訴求ポイント・商品説明", "別AIツールへ手動コピペ", "B2B/ToCモードで商品ごとに自動生成"]
    ],
    pricingTitle: "買い切り型の明確な料金プラン",
    pricingSub: "まずは20商品まで無料でお試しください。VIP/SVIP有効化後はご自身のAPIキーを設定でき、月額課金は一切ありません。",
    plans: [
      { name: "🎁 無料トライアル", price: "$0", usd: "¥0", period: "/ 20商品", highlight: false, desc: "試用API内蔵で、インストール直後から全機能をお試しいただけます。", bullets: ["20商品・ページのフル収集", "AI画像選別＆動画/GIF保存", "ローカル長尺画像OCR", "4段階梱包仕様チェック"], cta: "無料で20商品試す" },
      { name: "⭐ VIP 100商品パック", price: "$69", usd: "¥500", period: "/ 100商品（追加購入可）", highlight: true, badge: "人気プラン", desc: "日常のリサーチ・出品に最適。クレジットは合算可能で期限なし。", bullets: ["100商品分の収集クレジット", "独自APIキー設定エリアを解放", "B2B/ToC訴求文・ストーリー生成", "Airwallex / Visa / MasterCard / Apple Pay対応"], cta: "VIPパックを購入 ($69)" },
      { name: "👑 SVIP 永久無制限版", price: "$139", usd: "¥999", period: "/ 永久ライセンス", highlight: false, desc: "1回のお支払いで全サイト無制限。チームや大量出品に最適。", bullets: ["全サイト永久無制限の収集権限", "独自APIキーでコストを完全管理", "v1.xの今後のアップデート無料", "決済完了後すぐにライセンスキー発行"], cta: "SVIP永久版を購入 ($139)" }
    ],
    installTitle: "30秒で完了する導入ステップ",
    installSteps: [
      { step: "1", title: "ZIPをダウンロード＆解凍", desc: "v1.0.8のZIPファイルをダウンロードし、任意の固定フォルダへ解凍します。" },
      { step: "2", title: "Chrome / Edgeへ読み込み", desc: "拡張機能ページで「デベロッパーモード」をONにし、「パッケージ化されていない拡張機能を読み込む」からフォルダを選択。" },
      { step: "3", title: "商品ページでアイコンをクリック", desc: "1688やAmazonなどのページでアイコンを押すだけで、整理された商品フォルダがローカルに保存されます。" }
    ],
    faqTitle: "よくある質問 (FAQ)",
    faqs: [
      { q: "どのECサイトに対応していますか？", a: "1688、タオバオ、Tmall、Amazon、AliExpress、Shopifyをはじめとする各種ECサイトおよび一般的なブログ・記事ページに対応しています。" },
      { q: "月額料金はかかりますか？", a: "いいえ、月額制ではありません。VIP（$69）は100商品パック、SVIP（$139）は永久無制限の買い切りライセンスです。" },
      { q: "海外決済には対応していますか？", a: "はい、Airwallex、Visa、MasterCard、Amex、Apple Pay、Google Payに対応しており、決済後すぐにライセンスキーが発行されます。" }
    ],
    footer: "© 2026 Xiaomie Magic Collector · All Rights Reserved"
  },

  "ko": {
    title: "Xiaomie Magic Collector v1.0.8 — 1688·타오바오·아마존 AI 상품 이미지 및 상세페이지 수집 확장프로그램",
    description: "쿠팡·스마트스토어·아마존 셀러를 위한 올인원 소싱 확장프로그램: AI 이미지 필터링, 멈춤 없는 로컬 긴 이미지 OCR, 4단계 박스 규격(패킹) 조회, B2B/ToC 셀링포인트 자동 생성. 20개 상품 무료 체험.",
    keywords: "1688 이미지 다운로드,타오바오 상세페이지 수집,중국 구매대행 크롬 확장프로그램,긴 이미지 OCR,쿠팡 소싱 툴,박스 규격 추출",
    nav: { features: "핵심 기능", compare: "비교", pricing: "요금제", install: "설치 방법", faq: "자주 묻는 질문", cta: "무료 다운로드 v1.0.8" },
    hero: {
      badge: "v1.0.8 정식 출시 · Chrome & Edge (MV3) · 20개 상품 무료 체험",
      h1: "1688, 타오바오, 아마존 상품 페이지를 30초 만에 바로 등록 가능한 로컬 폴더로",
      sub: "AI 대표/옵션/상세 이미지 자동 분류, 브라우저 멈춤 없는 로컬 WASM 긴 이미지 OCR, 4단계 박스 규격(물류 스펙) 보완, B2B 도매 및 ToC 마케팅 문구 자동 생성까지 한 번에 해결하세요.",
      ctaPrimary: "v1.0.8 무료 다운로드 (.zip)",
      ctaSecondary: "6가지 핵심 기능 보기",
      trust: ["별도 서버 없이 브라우저 로컬에서 즉시 실행", "쇼핑몰 상품 페이지 vs 일반 블로그 자동 구분", "Airwallex · 해외카드(Visa/Master) · Apple/Google Pay 지원"]
    },
    stats: [
      { num: "20개", label: "모든 기능 무료 체험" },
      { num: "4단계", label: "박스 규격 및 필수 스펙 조회" },
      { num: "멈춤 0", label: "로컬 WASM SIMD 긴 이미지 OCR" },
      { num: "100% 순수", label: "언어 혼용 없는 깔끔한 출력" }
    ],
    featuresTitle: "해외소싱·구매대행 셀러들이 선택하는 이유",
    featuresSub: "단순 이미지 저장을 넘어 ‘이미지 선별 + OCR 텍스트 추출 + 박스 규격 확인 + 셀링포인트 작성 + 폴더 정리’를 자동화합니다.",
    features: [
      { icon: "🛒", title: "전 세계 사이트 지원 · 페이지 유형 자동 감지", desc: "1688, 타오바오, 티몰, 아마존, 알리익스프레스, 쇼피파이 지원. 블로그나 리뷰 페이지에서는 자동으로 순수 콘텐츠 모드로 전환됩니다." },
      { icon: "🤖", title: "AI 스마트 이미지 필터링 & 영상/움짤 수집", desc: "광고 배너와 작은 아이콘을 자동 제외하고 상품/옵션/상세 이미지만 추출하며, 동영상·GIF·WebP·APNG·Lottie 애니메이션까지 저장합니다." },
      { icon: "🔍", title: "멈춤 방지 로컬 긴 이미지 OCR", desc: "내장된 Tesseract WASM SIMD 엔진으로 수만 픽셀의 1688 상세페이지 이미지 속 재질·사이즈 텍스트를 브라우저 멈춤 없이 추출합니다." },
      { icon: "📦", title: "4단계 박스 규격(물류 스펙) 보완 퍼널", desc: "5가지 필수 상품 스펙을 검증하고 외박스 크기, 중량, 입수량 정보를 4단계로 추적해 공장에 일일이 묻는 시간을 줄여줍니다." },
      { icon: "💡", title: "B2B 도매 / ToC 리뷰 스타일 카피 & 스토리 생성", desc: "B2B 도매 또는 ToC 구매 전환용 문구 스타일을 선택해 한·영 혼용 없는 순수 단일 언어로 상품 자료를 생성합니다." },
      { icon: "⚡", title: "대량 URL 수집 & 차단 방지 속도 제한", desc: "여러 링크 붙여넣기 및 TXT 파일 가져오기를 지원하며, 수집 완료 링크 건너뛰기와 분/시간/일 단위 속도 제어로 계정을 보호합니다." }
    ],
    compareTitle: "수작업 / 일반 수집기 vs Xiaomie Magic Collector",
    compareHeaders: ["비교 항목", "수작업 / 일반 수집기", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["긴 상세 이미지 속 스펙", "이미지를 보며 수동 타이핑", "멈춤 없는 로컬 WASM OCR 자동 추출"],
      ["광고·잡다한 이미지 제거", "전체 다운로드 후 일일이 삭제", "AI 스마트 필터 + 최소 해상도 설정으로 자동 정제"],
      ["박스 규격 / 필수 파라미터", "누락이 잦아 공급처에 재문의", "4단계 퍼널로 자동 검증 및 보완"],
      ["셀링포인트 및 상품 스토리", "별도 AI 툴에 복사·붙여넣기", "B2B/ToC 맞춤 문구 원클릭 자동 생성"]
    ],
    pricingTitle: "합리적인 일회성 요금제 · 24시간 즉시 발급",
    pricingSub: "먼저 20개 상품을 무료로 체험해 보세요. VIP/SVIP 활성화 시 개인 API 키 입력란이 열리며 매월 결제되는 구독료가 없습니다.",
    plans: [
      { name: "🎁 무료 체험판", price: "$0", usd: "¥0", period: "/ 20개 상품", highlight: false, desc: "기본 체험용 API가 내장되어 설치 즉시 전체 기능을 테스트할 수 있습니다.", bullets: ["20개 상품/페이지 전체 수집", "AI 이미지 필터링 & 영상/GIF 저장", "로컬 긴 이미지 OCR 추출", "4단계 박스 규격 검증"], cta: "20개 무료 체험하기" },
      { name: "⭐ VIP 100개 패키지", price: "$69", usd: "¥500", period: "/ 100개 상품 (누적 가능)", highlight: true, badge: "인기 플랜", desc: "소싱 및 상품 등록 실무에 최적화. 잔여 수량은 만료 없이 누적됩니다.", bullets: ["100개 상품 수집 크레딧 (누적)", "개인 커스텀 API 키 영역 잠금 해제", "B2B/ToC 셀링포인트·스토리 생성", "Airwallex · 해외카드 · Apple/Google Pay 지원"], cta: "VIP 패키지 구매 ($69)" },
      { name: "👑 SVIP 평생 무제한", price: "$139", usd: "¥999", period: "/ 평생 소장", highlight: false, desc: "단 한 번의 결제로 모든 사이트 무제한 수집. 대량 등록 셀러 및 팀에 추천.", bullets: ["전 세계 사이트 평생 무제한 수집", "개인 API 키로 비용 완벽 통제", "향후 v1.x 업데이트 무료 제공", "결제 완료 즉시 라이선스 키 화면 출력"], cta: "SVIP 평생권 구매 ($139)" }
    ],
    installTitle: "30초 초간단 설치 방법",
    installSteps: [
      { step: "1", title: "다운로드 및 압축 해제", desc: "v1.0.8 ZIP 파일을 다운로드하여 고정된 로컬 폴더에 압축을 풉니다." },
      { step: "2", title: "Chrome / Edge 확장프로그램 로드", desc: "확장프로그램 관리 페이지에서 ‘개발자 모드’를 켜고 ‘압축해제된 확장 프로그램을 로드합니다’로 폴더를 선택하세요." },
      { step: "3", title: "상품 페이지에서 클릭 한 번으로 수집", desc: "1688, 타오바오, 아마존 등에서 아이콘을 누르면 정리된 상품 폴더가 자동 저장됩니다." }
    ],
    faqTitle: "자주 묻는 질문 (FAQ)",
    faqs: [
      { q: "어떤 쇼핑몰을 지원하나요?", a: "1688, 타오바오, 티몰, 아마존, 알리익스프레스, 쇼피파이 등 대부분의 쇼핑몰과 일반 블로그·기사 페이지를 지원합니다." },
      { q: "매월 정기 결제가 발생하나요?", a: "아니요. VIP($69)는 100개 크레딧 팩이며 SVIP($139)는 평생 무제한 라이선스입니다. 추가 구독료가 전혀 없습니다." },
      { q: "해외 결제가 가능한가요?", a: "네, Airwallex, Visa, MasterCard, Amex, Apple Pay, Google Pay를 지원하며 결제 즉시 라이선스 키가 발급됩니다." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · All Rights Reserved"
  },

  "es": {
    title: "Xiaomie Magic Collector v1.0.8 — Extractor IA de Productos, Imágenes y Especificaciones para 1688, Amazon y Shopify",
    description: "Extensión para Chrome y Edge diseñada para vendedores de Mercado Libre, Amazon y Shopify: filtrado IA de imágenes, OCR local anti-bloqueo para imágenes largas, búsqueda de medidas de caja en 4 niveles y generador de copy B2B/ToC. 20 productos gratis.",
    keywords: "extractor productos 1688, descargar imagenes amazon shopify, extension chrome dropshipping, OCR imagenes largas, medidas de caja FBA, herramienta sourcing china",
    nav: { features: "Funciones", compare: "Comparativa", pricing: "Precios", install: "Instalación", faq: "FAQ", cta: "Descargar Gratis v1.0.8" },
    hero: {
      badge: "Versión v1.0.8 · Chrome & Edge (MV3) · Prueba Gratis 20 Productos",
      h1: "Convierte cualquier página de 1688, Amazon o Shopify en una carpeta lista para publicar en 30 segundos",
      sub: "Diseñada para vendedores de Mercado Libre, Amazon FBA y Shopify: filtrado inteligente de imágenes por IA, OCR local sin congelar el navegador, búsqueda de empaque en 4 niveles y textos B2B/ToC en un solo idioma puro.",
      ctaPrimary: "Descargar v1.0.8 Gratis (.zip)",
      ctaSecondary: "Ver las 6 ventajas clave",
      trust: ["100% local en tu navegador, sin servidores", "Detecta automáticamente tiendas vs blogs/artículos", "Acepta Airwallex, Visa, MasterCard, Apple Pay y Google Pay"]
    },
    stats: [
      { num: "20 Items", label: "Prueba Gratuita Completa" },
      { num: "4 Niveles", label: "Búsqueda de Caja y Specs" },
      { num: "0 Bloqueos", label: "OCR Local WASM SIMD" },
      { num: "100% Puro", label: "Salida en un Solo Idioma" }
    ],
    featuresTitle: "¿Por qué los vendedores profesionales eligen Xiaomie Magic Collector?",
    featuresSub: "No solo descarga fotos: limpia imágenes, extrae texto de infografías largas con OCR, completa datos de empaque y redacta argumentos de venta.",
    features: [
      { icon: "🛒", title: "Extractor Universal con Detección Inteligente", desc: "Compatible con 1688, Taobao, Tmall, Amazon, AliExpress, Shopify y blogs. Cambia automáticamente a modo artículo cuando navegas noticias o reseñas." },
      { icon: "🤖", title: "Filtrado IA de Imágenes + Videos y Animaciones", desc: "Separa fotos principales, SKU y detalle eliminando anuncios. También captura videos, GIF, WebP, APNG, Canvas y Lottie." },
      { icon: "🔍", title: "OCR Local Anti-Bloqueo para Imágenes Largas", desc: "Motor Tesseract WASM SIMD integrado que extrae medidas y materiales de imágenes largas de proveedores sin congelar tu pestaña." },
      { icon: "📦", title: "Embudo de 4 Niveles para Medidas de Caja", desc: "Verifica 5 especificaciones obligatorias y recupera dimensiones de cartón, peso y unidades por caja para calcular envíos FBA o importación." },
      { icon: "💡", title: "Generador de Copy e Historias B2B y ToC", desc: "Elige tono Mayorista B2B o Recomendación ToC con salida estrictamente en inglés o chino puro, sin mezclas de idiomas." },
      { icon: "⚡", title: "Cola por Lotes, Control de Velocidad y Carpetas", desc: "Importa listas TXT, omite enlaces ya capturados, controla límites por minuto/hora/día y guarda cada producto en carpetas numeradas." }
    ],
    compareTitle: "Trabajo Manual / Extractores Básicos vs. Xiaomie Magic Collector",
    compareHeaders: ["Criterio", "Manual / Extractores Básicos", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["Texto dentro de imágenes largas", "Leer y transcribir a mano", "OCR local WASM anti-bloqueo automático"],
      ["Eliminación de banners", "Descargar todo y borrar a mano", "Filtro IA + tamaño mínimo de píxeles"],
      ["Medidas de caja y specs", "Faltan datos y toca preguntar al proveedor", "Embudo de 4 niveles verifica y completa"],
      ["Textos de venta e historia", "Copiar y pegar en otra herramienta IA", "Generación B2B/ToC integrada en 1 clic"]
    ],
    pricingTitle: "Planes Transparentes · Sin Suscripciones Mensuales",
    pricingSub: "Prueba 20 productos gratis. Al activar VIP o SVIP desbloqueas tu propia clave API sin pagos recurrentes.",
    plans: [
      { name: "🎁 Prueba Gratis", price: "$0", usd: "¥0", period: "/ 20 productos", highlight: false, desc: "Incluye API de prueba integrada para evaluar todo el flujo al instante.", bullets: ["20 capturas completas de producto/web", "Filtro IA y descarga de videos/GIF", "OCR local anti-bloqueo", "Verificación de empaque en 4 niveles"], cta: "Probar 20 Productos Gratis" },
      { name: "⭐ Pack VIP 100 Productos", price: "$69", usd: "¥500", period: "/ 100 productos (acumulables)", highlight: true, badge: "Más Popular", desc: "Ideal para vendedores activos en Amazon, Mercado Libre y Shopify.", bullets: ["100 créditos acumulables sin caducidad", "Desbloquea tu propia API Key", "Generador de copy e historias B2B/ToC", "Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "Comprar VIP ($69 USD)" },
      { name: "👑 SVIP Ilimitado de por Vida", price: "$139", usd: "¥999", period: "/ Pago único", highlight: false, desc: "Pago único para capturas ilimitadas en toda la web para siempre.", bullets: ["Capturas ilimitadas de por vida", "Control total con tu propia API Key", "Actualizaciones v1.x incluidas", "Entrega automática de licencia 24/7"], cta: "Comprar SVIP ($139 USD)" }
    ],
    installTitle: "Instala y Empieza en 30 Segundos",
    installSteps: [
      { step: "1", title: "Descarga y Descomprime", desc: "Descarga el archivo .zip v1.0.8 y extráelo en una carpeta fija." },
      { step: "2", title: "Carga en Chrome o Edge", desc: "Activa el Modo Desarrollador en chrome://extensions o edge://extensions y selecciona 'Cargar descomprimida'." },
      { step: "3", title: "Captura en 1 Clic", desc: "Abre 1688, Amazon o Shopify, pulsa el icono de Xiaomie y guarda tu carpeta organizada." }
    ],
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqs: [
      { q: "¿Qué plataformas soporta?", a: "1688, Taobao, Tmall, Amazon, AliExpress, Shopify, tiendas independientes y páginas de artículos o blogs." },
      { q: "¿Tiene pagos mensuales?", a: "No. VIP ($69) es un paquete de 100 productos acumulables y SVIP ($139) es un pago único de por vida." },
      { q: "¿Cómo se paga desde fuera de China?", a: "Con Airwallex, Visa, MasterCard, Amex, Apple Pay o Google Pay directamente desde el checkout integrado." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · Todos los derechos reservados"
  },

  "de": {
    title: "Xiaomie Magic Collector v1.0.8 — KI-Produkt- & Medien-Scraper für 1688, Amazon & Shopify",
    description: "Chrome- & Edge-Erweiterung für Amazon FBA, Otto & Shopify-Händler: KI-Bildfilterung, absturzsichere lokale Langbild-OCR, 4-Stufen-Kartonmaß-Suche und B2B/ToC-Textgenerierung. 20 Produkte kostenlos testen.",
    keywords: "1688 Produkt Scraper, Amazon FBA Tool Chrome, Langbild OCR Erweiterung, Kartonmaße extrahieren, Shopify Produkt Import",
    nav: { features: "Funktionen", compare: "Vergleich", pricing: "Preise", install: "Installation", faq: "FAQ", cta: "Gratis laden v1.0.8" },
    hero: {
      badge: "Version v1.0.8 · Chrome & Edge (MV3) · 20 Produkte kostenlos testen",
      h1: "Verwandeln Sie jede 1688-, Amazon- oder Shopify-Seite in 30 Sekunden in einen verkaufsfertigen Produktordner",
      sub: "Entwickelt für FBA-Händler, Einkaufsteams und Dropshipper: KI-Bildsortierung, lokale WASM-OCR ohne Browser-Freeze, 4-Stufen-Kartonmaß-Recherche und reine einsprachige B2B/ToC-Verkaufstexte.",
      ctaPrimary: "v1.0.8 kostenlos laden (.zip)",
      ctaSecondary: "6 Kernfunktionen entdecken",
      trust: ["Läuft 100 % lokal im Browser", "Erkennt automatisch Shops vs. Blog-Artikel", "Airwallex, Visa, MasterCard, Apple Pay & Google Pay"]
    },
    stats: [
      { num: "20 Artikel", label: "Vollwertiger Gratis-Test" },
      { num: "4-Stufen", label: "Karton- & Spezifikationssuche" },
      { num: "0 Freeze", label: "Lokale WASM SIMD OCR" },
      { num: "100 % Rein", label: "Keine Sprachmischung" }
    ],
    featuresTitle: "Warum Einkaufsteams auf Xiaomie Magic Collector setzen",
    featuresSub: "Statt unsortierter Bilder erhalten Sie gefilterte Medien, OCR-Spezifikationen, Kartonmaße und fertige Verkaufstexte.",
    features: [
      { icon: "🛒", title: "Universeller Scraper mit Seitenerkennung", desc: "Unterstützt 1688, Taobao, Amazon, AliExpress, Shopify und erkennt automatisch reine Artikel- oder Blogseiten." },
      { icon: "🤖", title: "KI-Bildfilter + Video- & Animations-Download", desc: "Trennt Haupt-, SKU- und Detailbilder und speichert Videos, GIF, WebP, APNG, Canvas und Lottie-Animationen." },
      { icon: "🔍", title: "Absturzsichere lokale Langbild-OCR", desc: "Integrierte Tesseract WASM SIMD Engine liest Spezifikationen aus extrem langen Lieferantenbildern ohne Tab-Absturz." },
      { icon: "📦", title: "4-Stufen-Kartonmaß- & Pflichtfeld-Suche", desc: "Prüft 5 Pflichtparameter und ergänzt Kartonmaße, Gewicht und Verpackungseinheiten für präzise FBA-Kalkulation." },
      { icon: "💡", title: "B2B-Großhandel & ToC-Copy-Generator", desc: "Erzeugt Verkaufsargumente und Storys wahlweise im B2B- oder ToC-Stil in sauberer Einzelsprache." },
      { icon: "⚡", title: "Stapelverarbeitung & Rate-Limit-Schutz", desc: "Mehrere URLs per TXT importieren, Duplikate überspringen und automatisch nummerierte lokale Ordner anlegen." }
    ],
    compareTitle: "Manuell / Standard-Scraper vs. Xiaomie Magic Collector",
    compareHeaders: ["Kriterium", "Manuell / Standard-Scraper", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["Text in langen Detailbildern", "Mühsam abtippen", "Lokale WASM OCR extrahiert automatisch"],
      ["Werbebanner entfernen", "Alles laden & manuell löschen", "KI-Filter + Mindestauflösung"],
      ["Kartonmaße & Pflichtdaten", "Oft fehlend; Rückfragen nötig", "4-Stufen-Funnel vervollständigt Daten"],
      ["Verkaufstexte & Story", "Manuell in KI-Tools kopieren", "Integrierter B2B/ToC-Generator"]
    ],
    pricingTitle: "Faire Einmalpreise · Kein Abo-Zwang",
    pricingSub: "Testen Sie 20 Produkte kostenlos. VIP & SVIP schalten Ihr eigenes API-Key-Feld ohne monatliche Gebühren frei.",
    plans: [
      { name: "🎁 Kostenloser Test", price: "$0", usd: "¥0", period: "/ 20 Produkte", highlight: false, desc: "Inklusive integrierter Test-API zum sofortigen Ausprobieren.", bullets: ["20 vollständige Produkt-Exporte", "KI-Bildfilter & Video/GIF-Capture", "Lokale Langbild-OCR", "4-Stufen-Kartonmaß-Check"], cta: "20 Produkte gratis testen" },
      { name: "⭐ VIP 100er-Paket", price: "$69", usd: "¥500", period: "/ 100 Produkte (stapelbar)", highlight: true, badge: "Bestseller", desc: "Optimal für aktive Amazon- und Shopify-Händler.", bullets: ["100 Produkt-Credits ohne Ablauf", "Eigener API-Key freigeschaltet", "B2B/ToC-Text- & Story-Generator", "Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "VIP-Paket wählen ($69)" },
      { name: "👑 SVIP Lifetime Unbegrenzt", price: "$139", usd: "¥999", period: "/ Lebenslang", highlight: false, desc: "Einmalzahlung für unbegrenzte Exporte auf allen Websites.", bullets: ["Lebenslang unbegrenzte Exporte", "Volle Kostenkontrolle per eigenem API-Key", "Alle v1.x-Updates inklusive", "Sofortiger Lizenzschlüssel rund um die Uhr"], cta: "SVIP Lifetime wählen ($139)" }
    ],
    installTitle: "In 30 Sekunden einsatzbereit",
    installSteps: [
      { step: "1", title: "Herunterladen & Entpacken", desc: "ZIP-Archiv v1.0.8 herunterladen und in einen festen Ordner entpacken." },
      { step: "2", title: "In Chrome/Edge laden", desc: "Entwicklermodus unter chrome://extensions aktivieren und 'Entpackte Erweiterung laden' wählen." },
      { step: "3", title: "Auf jeder Produktseite starten", desc: "Xiaomie-Icon anklicken und den strukturierten Produktordner mit einem Klick speichern." }
    ],
    faqTitle: "Häufige Fragen (FAQ)",
    faqs: [
      { q: "Welche Plattformen werden unterstützt?", a: "1688, Taobao, Tmall, Amazon, AliExpress, Shopify sowie beliebige Online-Shops und Blog-Artikel." },
      { q: "Gibt es monatliche Folgekosten?", a: "Nein. VIP ($69) und SVIP ($139) sind Einmalzahlungen ohne Abo." },
      { q: "Wie funktioniert die Bezahlung?", a: "Weltweit per Airwallex, Visa, MasterCard, Amex, Apple Pay oder Google Pay mit sofortiger Lizenzschlüssel-Anzeige." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · Alle Rechte vorbehalten"
  },

  "fr": {
    title: "Xiaomie Magic Collector v1.0.8 — Extracteur IA Produits, Images & OCR pour 1688, Amazon et Shopify",
    description: "Extension Chrome & Edge pour vendeurs Amazon, Cdiscount et Shopify : filtrage d'images par IA, OCR local anti-gel pour images longues, recherche de dimensions carton sur 4 niveaux et génération de textes B2B/ToC. 20 produits gratuits.",
    keywords: "extracteur 1688, scraper produit amazon shopify, extension chrome ecommerce, OCR image longue, dimensions carton FBA",
    nav: { features: "Fonctionnalités", compare: "Comparatif", pricing: "Tarifs", install: "Installation", faq: "FAQ", cta: "Télécharger v1.0.8" },
    hero: {
      badge: "Version v1.0.8 · Chrome & Edge (MV3) · 20 produits offerts",
      h1: "Transformez n'importe quelle fiche 1688, Amazon ou Shopify en dossier produit prêt à publier en 30 secondes",
      sub: "Conçu pour les vendeurs e-commerce et équipes sourcing : tri d'images par IA, OCR local WASM sans bloquer le navigateur, recherche de colisage en 4 niveaux et rédaction B2B/ToC en langue pure.",
      ctaPrimary: "Télécharger v1.0.8 Gratuit (.zip)",
      ctaSecondary: "Découvrir les 6 atouts",
      trust: ["Exécution 100 % locale dans votre navigateur", "Détection auto boutique vs article/blog", "Airwallex, Visa, MasterCard, Apple Pay & Google Pay"]
    },
    stats: [
      { num: "20 Produits", label: "Essai Gratuit Complet" },
      { num: "4 Niveaux", label: "Recherche Colisage & Specs" },
      { num: "0 Gel", label: "OCR Local WASM SIMD" },
      { num: "100 % Pur", label: "Zéro Mélange de Langues" }
    ],
    featuresTitle: "Pourquoi les équipes sourcing adoptent Xiaomie Magic Collector",
    featuresSub: "Bien plus qu'un simple téléchargeur d'images : tri IA, OCR sur visuels longs, colisage et arguments de vente prêts à l'emploi.",
    features: [
      { icon: "🛒", title: "Collecte Universelle & Détection de Page", desc: "Fonctionne sur 1688, Taobao, Amazon, AliExpress, Shopify et bascule en mode article pur sur les blogs." },
      { icon: "🤖", title: "Filtrage IA + Vidéos & Animations", desc: "Sépare photos principales, SKU et détails tout en capturant vidéos, GIF, WebP, APNG, Canvas et Lottie." },
      { icon: "🔍", title: "OCR Local Anti-Gel sur Images Longues", desc: "Moteur Tesseract WASM SIMD intégré pour extraire les caractéristiques des longues fiches fournisseurs sans figer l'onglet." },
      { icon: "📦", title: "Entonnoir 4 Niveaux pour Dimensions Carton", desc: "Vérifie 5 champs obligatoires et retrouve dimensions carton, poids et colisage pour vos calculs FBA ou import." },
      { icon: "💡", title: "Rédaction B2B Grossiste & ToC Authentique", desc: "Génère arguments uniques et storytelling dans une seule langue propre, sans mélange chinois/anglais." },
      { icon: "⚡", title: "File par Lots & Dossiers Numérotés", desc: "Importez vos URLs par TXT, ignorez les doublons, régulez la cadence et archivez automatiquement chaque produit." }
    ],
    compareTitle: "Méthode Manuelle / Scrapers Basiques vs. Xiaomie Magic Collector",
    compareHeaders: ["Critère", "Manuel / Scrapers Basiques", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["Textes dans images longues", "Saisie manuelle fastidieuse", "OCR local WASM automatique sans gel"],
      ["Tri des bannières pub", "Tout télécharger puis trier à la main", "Filtre IA + seuil de résolution"],
      ["Colisage & 5 specs requises", "Souvent incomplets", "Entonnoir 4 niveaux automatisé"],
      ["Arguments & storytelling", "Copier-coller vers un autre outil IA", "Générateur B2B/ToC intégré en 1 clic"]
    ],
    pricingTitle: "Tarifs Transparents · Sans Abonnement Mensuel",
    pricingSub: "Testez 20 produits gratuitement. Les offres VIP et SVIP débloquent votre propre clé API sans frais récurrents.",
    plans: [
      { name: "🎁 Essai Gratuit", price: "$0", usd: "¥0", period: "/ 20 produits", highlight: false, desc: "API de test intégrée pour essayer l'outil dès l'installation.", bullets: ["20 collectes complètes", "Filtre IA & capture vidéo/GIF", "OCR local anti-gel", "Vérification colisage 4 niveaux"], cta: "Essayer 20 produits gratis" },
      { name: "⭐ Pack VIP 100 Produits", price: "$69", usd: "¥500", period: "/ 100 produits (cumulables)", highlight: true, badge: "Le plus choisi", desc: "Idéal pour vendeurs actifs Amazon & Shopify.", bullets: ["100 crédits cumulables sans expiration", "Débloque votre propre clé API", "Générateur arguments/histoires B2B & ToC", "Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "Choisir VIP ($69)" },
      { name: "👑 SVIP À Vie Illimité", price: "$139", usd: "¥999", period: "/ Paiement unique", highlight: false, desc: "Paiement unique pour des collectes illimitées sur tout le web.", bullets: ["Collectes illimitées à vie", "Contrôle total via votre propre clé API", "Mises à jour v1.x incluses", "Clé de licence affichée immédiatement 24/7"], cta: "Choisir SVIP ($139)" }
    ],
    installTitle: "Installation en 30 Secondes",
    installSteps: [
      { step: "1", title: "Télécharger et décompresser", desc: "Téléchargez l'archive .zip v1.0.8 et extrayez-la dans un dossier fixe." },
      { step: "2", title: "Charger dans Chrome ou Edge", desc: "Activez le Mode développeur dans chrome://extensions puis cliquez sur 'Charger l'extension non empaquetée'." },
      { step: "3", title: "Collecter en 1 clic", desc: "Ouvrez 1688, Amazon ou Shopify, cliquez sur Xiaomie et enregistrez votre dossier produit." }
    ],
    faqTitle: "Questions Fréquentes (FAQ)",
    faqs: [
      { q: "Quels sites sont compatibles ?", a: "1688, Taobao, Tmall, Amazon, AliExpress, Shopify, boutiques indépendantes et blogs." },
      { q: "Y a-t-il un abonnement mensuel ?", a: "Non. VIP ($69) est un pack de 100 produits et SVIP ($139) est une licence à vie." },
      { q: "Quels moyens de paiement sont acceptés ?", a: "Airwallex, Visa, MasterCard, Amex, Apple Pay et Google Pay avec livraison instantanée de la clé." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · Tous droits réservés"
  },

  "vi": {
    title: "Xiaomie Magic Collector v1.0.8 — Tiện ích AI Lấy Dữ Liệu & Ảnh 1688, Taobao, Amazon, Shopee",
    description: "Tiện ích Chrome & Edge dành cho nhà bán hàng Shopee, TikTok Shop, Lazada & Dropshipping: lọc ảnh bằng AI, OCR ảnh dài chống đơ trình duyệt, tra cứu quy cách thùng 4 cấp và tạo nội dung bán hàng B2B/ToC. Dùng thử miễn phí 20 sản phẩm.",
    keywords: "tải ảnh 1688, lấy dữ liệu sản phẩm taobao, extension lấy ảnh shopee tiktok, OCR ảnh dài 1688, tra cứu quy cách thùng hàng",
    nav: { features: "Tính năng", compare: "So sánh", pricing: "Bảng giá", install: "Cài đặt", faq: "Hỏi đáp", cta: "Tải miễn phí v1.0.8" },
    hero: {
      badge: "Phiên bản v1.0.8 · Chrome & Edge (MV3) · Miễn phí 20 sản phẩm",
      h1: "Biến mọi trang sản phẩm 1688, Taobao, Amazon thành thư mục tài nguyên sẵn sàng đăng bán trong 30 giây",
      sub: "Công cụ chuyên biệt cho dân nhập hàng Trung Quốc, Shopee, TikTok Shop & Dropshipping: AI tự lọc ảnh chính/SKU/chi tiết, OCR ảnh dài không lag máy, tra cứu kích thước thùng 4 cấp và viết USP B2B/ToC.",
      ctaPrimary: "Tải miễn phí v1.0.8 (.zip)",
      ctaSecondary: "Xem 6 tính năng đột phá",
      trust: ["Chạy 100% trực tiếp trên trình duyệt, không cần server", "Tự nhận diện trang bán hàng vs bài viết blog", "Hỗ trợ Airwallex, Visa, MasterCard, Apple Pay, Google Pay"]
    },
    stats: [
      { num: "20 SP", label: "Dùng thử miễn phí đầy đủ" },
      { num: "4 Cấp", label: "Tra cứu quy cách & kích thước thùng" },
      { num: "0 Lag", label: "OCR ảnh dài WASM SIMD cục bộ" },
      { num: "100% Sạch", label: "Xuất đơn ngữ không lẫn tạp" }
    ],
    featuresTitle: "Tại sao các shop nhập hàng chuyên nghiệp chọn Xiaomie Magic Collector?",
    featuresSub: "Không chỉ tải ảnh thô, Xiaomie tự động lọc ảnh sạch, đọc chữ trong ảnh dài bằng OCR, tìm quy cách đóng thùng và viết nội dung bán hàng.",
    features: [
      { icon: "🛒", title: "Thu thập đa sàn · Tự nhận diện loại trang", desc: "Hỗ trợ 1688, Taobao, Tmall, Amazon, AliExpress, Shopify. Tự động chuyển sang chế độ bài viết sạch khi bạn mở blog hoặc trang tin." },
      { icon: "🤖", title: "AI Lọc ảnh thông minh + Tải Video & Ảnh động", desc: "Tách riêng ảnh chính, ảnh SKU, ảnh chi tiết, loại bỏ banner rác. Lưu cả Video, GIF, WebP, APNG, Canvas và Lottie." },
      { icon: "🔍", title: "OCR Ảnh dài chống đơ trình duyệt", desc: "Tích hợp Tesseract WASM SIMD chạy cục bộ giúp bóc tách thông số kỹ thuật từ ảnh chi tiết siêu dài mà không làm treo tab." },
      { icon: "📦", title: "Phễu tra cứu quy cách thùng 4 cấp", desc: "Kiểm tra 5 thông số bắt buộc và tự động tìm kích thước thùng carton, trọng lượng, số lượng/thùng để tính phí vận chuyển." },
      { icon: "💡", title: "Viết USP & Câu chuyện B2B / ToC chuẩn chỉnh", desc: "Chuyển đổi linh hoạt giọng văn Bán sỉ B2B hoặc Review ToC, xuất hoàn toàn 1 ngôn ngữ sạch sẽ không bị trộn chữ." },
      { icon: "⚡", title: "Chạy hàng loạt & Giới hạn tốc độ chống khóa", desc: "Dán nhiều link hoặc nhập file TXT, tự bỏ qua link đã lấy, kiểm soát tần suất và tự tạo thư mục đánh số thứ tự." }
    ],
    compareTitle: "Làm thủ công / Tool thường vs. Xiaomie Magic Collector",
    compareHeaders: ["Tiêu chí", "Thủ công / Tool thường", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["Chữ thông số trong ảnh dài", "Nhìn ảnh và gõ lại bằng tay", "OCR WASM cục bộ tự động trích xuất không lag"],
      ["Lọc ảnh quảng cáo rác", "Tải hết về rồi xóa từng ảnh", "AI lọc ảnh + ngưỡng pixel giữ lại ảnh sạch"],
      ["Quy cách thùng & 5 thông số", "Hay thiếu, phải hỏi lại xưởng", "Phễu 4 cấp tự động kiểm tra và bổ sung"],
      ["Nội dung bán hàng & USP", "Copy sang ChatGPT từng sản phẩm", "Tạo sẵn B2B/ToC chỉ với 1 cú nhấp"]
    ],
    pricingTitle: "Bảng giá minh bạch · Không thu phí hàng tháng",
    pricingSub: "Dùng thử miễn phí 20 sản phẩm. Khi nâng cấp VIP hoặc SVIP bạn được mở khóa ô nhập API Key riêng, không mất phí duy trì tháng.",
    plans: [
      { name: "🎁 Dùng thử miễn phí", price: "$0", usd: "¥0", period: "/ 20 sản phẩm", highlight: false, desc: "Tích hợp sẵn API dùng thử để trải nghiệm toàn bộ quy trình ngay lập tức.", bullets: ["20 lượt lấy dữ liệu đầy đủ", "AI lọc ảnh & tải video/GIF", "OCR ảnh dài chống đơ", "Kiểm tra quy cách thùng 4 cấp"], cta: "Tải & Dùng thử 20 SP" },
      { name: "⭐ Gói VIP 100 Sản phẩm", price: "$69", usd: "¥500", period: "/ 100 SP (cộng dồn)", highlight: true, badge: "Phổ biến nhất", desc: "Phù hợp cho shop Shopee, TikTok Shop & Dropshipper.", bullets: ["100 lượt sản phẩm (cộng dồn không hết hạn)", "Mở khóa ô nhập API Key riêng", "Tạo USP & câu chuyện B2B/ToC", "Thanh toán Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "Mua gói VIP ($69)" },
      { name: "👑 SVIP Trọn đời Không giới hạn", price: "$139", usd: "¥999", period: "/ Vĩnh viễn", highlight: false, desc: "Thanh toán 1 lần dùng trọn đời không giới hạn số lượng trên mọi website.", bullets: ["Lấy dữ liệu không giới hạn vĩnh viễn", "Toàn quyền dùng API Key riêng", "Miễn phí mọi bản cập nhật v1.x", "Nhận License Key tự động 24/7 ngay sau thanh toán"], cta: "Mua SVIP Trọn đời ($139)" }
    ],
    installTitle: "Cài đặt & Sử dụng trong 30 Giây",
    installSteps: [
      { step: "1", title: "Tải về & Giải nén", desc: "Tải file .zip v1.0.8 và giải nén ra một thư mục cố định trên máy tính." },
      { step: "2", title: "Nạp vào Chrome / Edge", desc: "Bật Chế độ nhà phát triển (Developer mode) tại chrome://extensions rồi chọn 'Load unpacked' trỏ tới thư mục vừa giải nén." },
      { step: "3", title: "Bấm thu thập trên trang sản phẩm", desc: "Mở 1688, Taobao, Amazon hoặc Shopify, bấm biểu tượng Xiaomie để lưu trọn bộ thư mục sản phẩm." }
    ],
    faqTitle: "Câu hỏi thường gặp (FAQ)",
    faqs: [
      { q: "Tiện ích hỗ trợ những sàn nào?", a: "Hỗ trợ 1688, Taobao, Tmall, Amazon, AliExpress, Shopify, website bán hàng độc lập và các trang bài viết blog." },
      { q: "Có phải đóng phí gia hạn hàng tháng không?", a: "Không. VIP ($69) là gói 100 sản phẩm cộng dồn và SVIP ($139) là bản quyền trọn đời thanh toán 1 lần." },
      { q: "Thanh toán quốc tế bằng cách nào?", a: "Hỗ trợ Airwallex, thẻ Visa, MasterCard, Amex, Apple Pay và Google Pay, nhận mã kích hoạt ngay lập tức." }
    ],
    footer: "© 2026 Xiaomie Magic Collector · All Rights Reserved"
  },

  "th": {
    title: "Xiaomie Magic Collector v1.0.8 — ส่วนขยาย AI ดูดข้อมูลสินค้าและรูปภาพจาก 1688, Taobao, Amazon, Shopify",
    description: "ส่วนขยาย Chrome & Edge สำหรับผู้ขาย Shopee, Lazada, TikTok Shop และนำเข้าสินค้าจากจีน: คัดกรองรูปด้วย AI, OCR ภาพยาวแบบไม่ค้าง, ค้นหาขนาดกล่อง 4 ระดับ และสร้างจุดขาย B2B/ToC ทดลองใช้ฟรี 20 รายการ",
    keywords: "ดูดรูป 1688, ดึงข้อมูลสินค้า taobao, ส่วนขยาย chrome ขายของออนไลน์, OCR ภาพยาว, ขนาดกล่องสินค้าจีน",
    nav: { features: "ฟีเจอร์เด่น", compare: "เปรียบเทียบ", pricing: "แพ็กเกจ", install: "วิธีติดตั้ง", faq: "คำถามที่พบบ่อย", cta: "ดาวน์โหลดฟรี v1.0.8" },
    hero: {
      badge: "เวอร์ชัน v1.0.8 · Chrome & Edge (MV3) · ทดลองใช้ฟรี 20 สินค้า",
      h1: "เปลี่ยนหน้าสินค้า 1688, Taobao หรือ Amazon ให้เป็นโฟลเดอร์พร้อมลงขายใน 30 วินาที",
      sub: "ออกแบบมาเพื่อแม่ค้าออนไลน์และผู้นำเข้าสินค้าจีน: AI แยกรูปหลัก/SKU/รายละเอียด, OCR อ่านข้อความในภาพยาวแบบเบราว์เซอร์ไม่ค้าง, ค้นหาขนาดลัง 4 ระดับ และสร้างจุดขาย B2B/ToC",
      ctaPrimary: "ดาวน์โหลด v1.0.8 ฟรี (.zip)",
      ctaSecondary: "ดู 6 จุดเด่นหลัก",
      trust: ["ทำงานบนเบราว์เซอร์ 100% ไม่ต้องใช้เซิร์ฟเวอร์", "แยกหน้าสินค้าอีคอมเมิร์ซกับบทความอัตโนมัติ", "รองรับ Airwallex, Visa, MasterCard, Apple Pay, Google Pay"]
    },
    stats: [
      { num: "20 ชิ้น", label: "ทดลองใช้งานฟรีเต็มรูปแบบ" },
      { num: "4 ระดับ", label: "ค้นหาสเปกและขนาดลังสินค้า" },
      { num: "ไม่ค้าง", label: "OCR ภาพยาว WASM SIMD ในเครื่อง" },
      { num: "สะอาด 100%", label: "ส่งออกภาษาเดียวไม่ปนกัน" }
    ],
    featuresTitle: "ทำไมทีมจัดซื้อและผู้ขายมืออาชีพถึงเลือก Xiaomie Magic Collector?",
    featuresSub: "ไม่ได้แค่เซฟรูป แต่ช่วยคัดรูปเสีย อ่านสเปกจากภาพยาว หาขนาดลัง และเขียนจุดขายให้ครบในคลิกเดียว",
    features: [
      { icon: "🛒", title: "ดูดข้อมูลได้ทุกเว็บ · แยกประเภทหน้าอัตโนมัติ", desc: "รองรับ 1688, Taobao, Tmall, Amazon, AliExpress, Shopify และสลับเป็นโหมดบทความสะอาดเมื่อเปิดหน้าบล็อกหรือรีวิว" },
      { icon: "🤖", title: "AI คัดกรองรูปภาพ + บันทึกวิดีโอและภาพเคลื่อนไหว", desc: "แยกรูปหลัก รูป SKU และรูปละเอียด ตัดแบนเนอร์โฆษณาออก พร้อมเก็บวิดีโอ GIF, WebP, APNG, Canvas และ Lottie" },
      { icon: "🔍", title: "OCR ภาพยาวในเครื่องแบบไม่ค้าง", desc: "ใช้เอนจิน Tesseract WASM SIMD ดึงข้อความสเปกสินค้าจากภาพรายละเอียดแบบยาวของโรงงานโดยไม่ทำให้แท็บค้าง" },
      { icon: "📦", title: "ระบบค้นหาขนาดลังและสเปก 4 ระดับ", desc: "ตรวจสอบ 5 ข้อมูลจำเป็น และดึงขนาดกล่อง น้ำหนัก และจำนวนต่อกล่องเพื่อคำนวณค่าขนส่งได้อย่างแม่นยำ" },
      { icon: "💡", title: "สร้างจุดขายและเรื่องราว B2B / ToC", desc: "เลือกสไตล์ขายส่ง B2B หรือรีวิว ToC ได้ทันที พร้อมส่งออกภาษาเดียวล้วนไม่มีภาษาปนกัน" },
      { icon: "⚡", title: "คิวดูดข้อมูลจำนวนมาก & ป้องกันการบล็อก", desc: "วางหลายลิงก์หรือนำเข้าไฟล์ TXT ข้ามลิงก์ซ้ำ ควบคุมความเร็ว และสร้างโฟลเดอร์เรียงเลขสินค้าอัตโนมัติ" }
    ],
    compareTitle: "ทำมือ / ปลั๊กอินทั่วไป vs. Xiaomie Magic Collector",
    compareHeaders: ["หัวข้อ", "ทำมือ / ปลั๊กอินทั่วไป", "Xiaomie Magic Collector v1.0.8"],
    compareRows: [
      ["ข้อความในภาพยาว", "ต้องอ่านและพิมพ์เองทีละบรรทัด", "OCR WASM ในเครื่องดึงข้อความอัตโนมัติ"],
      ["การลบรูปโฆษณา", "โหลดทั้งหมดแล้วมานั่งลบเอง", "AI คัดกรอง + ตั้งขนาดพิกเซลขั้นต่ำ"],
      ["ขนาดลังและสเปกหลัก", "ข้อมูลขาดบ่อย ต้องถามโรงงานซ้ำ", "ระบบค้นหา 4 ระดับช่วยเติมข้อมูลครบ"],
      ["ข้อความจุดขายสินค้า", "ต้องก๊อปไปวางใน AI ทีละตัว", "สร้างจุดขาย B2B/ToC ในคลิกเดียว"]
    ],
    pricingTitle: "แพ็กเกจราคาชัดเจน · ไม่มีค่ารายเดือน",
    pricingSub: "ทดลองใช้ฟรี 20 สินค้าก่อนตัดสินใจ เมื่ออัปเกรด VIP หรือ SVIP สามารถใส่ API Key ของตนเองได้ทันที",
    plans: [
      { name: "🎁 ทดลองใช้ฟรี", price: "$0", usd: "¥0", period: "/ 20 สินค้า", highlight: false, desc: "มี API ทดลองในตัว ใช้งานได้ทันทีหลังติดตั้ง", bullets: ["ดูดข้อมูลครบ 20 สินค้า/หน้า", "AI คัดรูปและเซฟวิดีโอ/GIF", "OCR ภาพยาวแบบไม่ค้าง", "ตรวจสอบขนาดลัง 4 ระดับ"], cta: "ทดลองใช้ฟรี 20 ชิ้น" },
      { name: "⭐ VIP แพ็กเกจ 100 สินค้า", price: "$69", usd: "¥500", period: "/ 100 ชิ้น (สะสมได้)", highlight: true, badge: "ยอดนิยม", desc: "เหมาะสำหรับร้านค้า Shopee, Lazada และ TikTok Shop", bullets: ["โควตา 100 สินค้า (ซื้อเพิ่มสะสมได้ไม่มีหมดอายุ)", "ปลดล็อกช่องใส่ API Key ของตัวเอง", "สร้างจุดขาย B2B และ ToC", "รองรับ Airwallex, Visa, MasterCard, Apple/Google Pay"], cta: "เลือก VIP ($69)" },
      { name: "👑 SVIP ตลอดชีพ ไม่จำกัด", price: "$139", usd: "¥999", period: "/ จ่ายครั้งเดียว", highlight: false, desc: "จ่ายครั้งเดียวใช้งานได้ไม่จำกัดตลอดชีพ เหมาะสำหรับทีมและผู้นำเข้า", bullets: ["ดูดข้อมูลไม่จำกัดตลอดชีพทุกเว็บไซต์", "ใช้ API Key ส่วนตัวควบคุมต้นทุนได้เอง", "อัปเดตเวอร์ชัน v1.x ฟรีทั้งหมด", "รับ License Key ทันทีหลังชำระเงิน 24/7"], cta: "เลือก SVIP ($139)" }
    ],
    installTitle: "ติดตั้งและเริ่มใช้งานใน 30 วินาที",
    installSteps: [
      { step: "1", title: "ดาวน์โหลดและแตกไฟล์", desc: "ดาวน์โหลดไฟล์ .zip v1.0.8 และแตกไฟล์ไว้ในโฟลเดอร์ถาวร" },
      { step: "2", title: "โหลดเข้า Chrome หรือ Edge", desc: "เปิด Developer Mode ในหน้า chrome://extensions แล้วกด 'Load unpacked' เลือกโฟลเดอร์ที่แตกไว้" },
      { step: "3", title: "คลิกดูดข้อมูลในหน้าสินค้า", desc: "เปิดหน้า 1688, Taobao หรือ Amazon กดไอคอน Xiaomie เพื่อบันทึกโฟลเดอร์สินค้าทันที" }
    ],
    faqTitle: "คำถามที่พบบ่อย (FAQ)",
    faqs: [
      { q: "รองรับเว็บไซต์ไหนบ้าง?", a: "รองรับ 1688, Taobao, Tmall, Amazon, AliExpress, Shopify ร้านค้าอิสระ และหน้าบทความทั่วไป" },
      { q: "ต้องจ่ายรายเดือนไหม?", a: "ไม่ต้องครับ VIP ($69) เป็นแพ็กเกจ 100 ชิ้น และ SVIP ($139) เป็นสิทธิ์ใช้งานตลอดชีพ" },
      { q: "ชำระเงินจากต่างประเทศอย่างไร?", a: "รองรับ Airwallex, Visa, MasterCard, Amex, Apple Pay และ Google Pay รับรหัสใช้งานทันทีหลังชำระเงิน" }
    ],
    footer: "© 2026 Xiaomie Magic Collector · All Rights Reserved"
  }
};


export const PAYMENTS_BY_LANG = {
  "zh-CN": {
    title: "官方双币种收款通道",
    sub: "外币结算由 Airwallex（空中云汇）提供企业级全球收单；微信支付与支付宝商户通道正在申请审核中，已预留官方接入位。",
    airwallex: {
      badge: "已就绪 · 全球外币收款",
      name: "🌐 Airwallex 空中云汇（外币收单）",
      desc: "支持 Visa / MasterCard / Amex 国际信用卡、Apple Pay、Google Pay 及多币种企业收款（VIP $69 USD / SVIP $139 USD）。",
      cta: "联系官方获取 Airwallex 付款链接",
      note: "收款主体：JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · 客服邮箱：info@xiaomie.tools"
    },
    wechat: {
      badge: "预留位 · 申请审核中",
      name: "💚 微信支付（CNY 人民币通道）",
      desc: "官方微信商户号正在申请开通中，即将上线手机扫码秒付自动发卡（VIP ¥500 / SVIP ¥999）。",
      status: "⏳ 商户资质审核中 · 即将接入"
    },
    alipay: {
      badge: "预留位 · 申请审核中",
      name: "💙 支付宝（CNY 人民币通道）",
      desc: "官方支付宝企业收款正在申请开通中，即将上线花呗/余额自动发卡（VIP ¥500 / SVIP ¥999）。",
      status: "⏳ 商户资质审核中 · 即将接入"
    }
  },
  "zh-TW": {
    title: "官方雙幣種收款通道",
    sub: "外幣結算由 Airwallex（空中雲匯）提供企業級全球收單；微信支付與支付寶通道正在申請審核中，已預留官方接入位。",
    airwallex: {
      badge: "已就緒 · 全球外幣收款",
      name: "🌐 Airwallex 空中雲匯（外幣收單）",
      desc: "支援 Visa / MasterCard / Amex 國際信用卡、Apple Pay、Google Pay 與多幣種收款（VIP $69 USD / SVIP $139 USD）。",
      cta: "聯繫官方取得 Airwallex 付款連結",
      note: "收款主體：JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · 客服：info@xiaomie.tools"
    },
    wechat: {
      badge: "預留位 · 申請審核中",
      name: "💚 微信支付（CNY 通道）",
      desc: "官方微信商戶號正在申請開通中，即將上線掃碼秒付自動發卡（VIP ¥500 / SVIP ¥999）。",
      status: "⏳ 商戶資質審核中 · 即將接入"
    },
    alipay: {
      badge: "預留位 · 申請審核中",
      name: "💙 支付寶（CNY 通道）",
      desc: "官方支付寶企業收款正在申請開通中，即將上線自動發卡（VIP ¥500 / SVIP ¥999）。",
      status: "⏳ 商戶資質審核中 · 即將接入"
    }
  },
  "en": {
    title: "Official Global & Local Payment Channels",
    sub: "International multi-currency checkout is powered by Airwallex. WeChat Pay & Alipay merchant channels are currently under review (reserved slots ready).",
    airwallex: {
      badge: "Active · Global Foreign Currency",
      name: "🌐 Airwallex Global Checkout (USD / Multi-Currency)",
      desc: "Pay securely with Visa, MasterCard, Amex, Apple Pay, or Google Pay (VIP $69 USD / SVIP $139 USD).",
      cta: "Request Airwallex Checkout Link",
      note: "Merchant: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · Support: info@xiaomie.tools"
    },
    wechat: {
      badge: "Reserved Slot · Pending Approval",
      name: "💚 WeChat Pay (CNY)",
      desc: "Official WeChat Pay merchant integration is in application review (VIP ¥500 / SVIP ¥999). Coming soon.",
      status: "⏳ Application in progress · Reserved"
    },
    alipay: {
      badge: "Reserved Slot · Pending Approval",
      name: "💙 Alipay (CNY)",
      desc: "Official Alipay merchant integration is in application review (VIP ¥500 / SVIP ¥999). Coming soon.",
      status: "⏳ Application in progress · Reserved"
    }
  },
  "ja": {
    title: "公式決済チャネル（外貨・人民元）",
    sub: "外貨決済は Airwallex（グローバル決済）に対応。WeChat Pay と Alipay は現在加盟店審査中のため予約枠を用意しています。",
    airwallex: {
      badge: "利用可能 · グローバル外貨決済",
      name: "🌐 Airwallex グローバル決済（USD / 多通貨対応）",
      desc: "Visa・MasterCard・Amex・Apple Pay・Google Pay に対応（VIP $69 USD / SVIP $139 USD）。",
      cta: "Airwallex 決済リンクを問い合わせる",
      note: "決済法人：JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "予約枠 · 申請審査中",
      name: "💚 WeChat Pay（人民元 CNY）",
      desc: "公式 WeChat Pay 加盟店申請中（VIP ¥500 / SVIP ¥999）。まもなく公開予定です。",
      status: "⏳ 審査中 · 近日対応予定"
    },
    alipay: {
      badge: "予約枠 · 申請審査中",
      name: "💙 Alipay（人民元 CNY）",
      desc: "公式 Alipay 加盟店申請中（VIP ¥500 / SVIP ¥999）。まもなく公開予定です。",
      status: "⏳ 審査中 · 近日対応予定"
    }
  },
  "ko": {
    title: "공식 글로벌 및 현지 결제 채널",
    sub: "해외 외화 결제는 Airwallex(에어월렉스)를 통해 안전하게 처리됩니다. 위챗페이·알리페이는 가맹점 심사 중이며 연동 슬롯이 예약되어 있습니다.",
    airwallex: {
      badge: "이용 가능 · 글로벌 외화 결제",
      name: "🌐 Airwallex 글로벌 결제 (USD / 다중 통화)",
      desc: "Visa, MasterCard, Amex, Apple Pay, Google Pay 지원 (VIP $69 USD / SVIP $139 USD).",
      cta: "Airwallex 결제 링크 문의하기",
      note: "가맹점: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "예약 슬롯 · 심사 중",
      name: "💚 위챗페이 WeChat Pay (CNY)",
      desc: "공식 위챗페이 가맹점 신청 심사 중입니다 (VIP ¥500 / SVIP ¥999). 곧 오픈 예정입니다.",
      status: "⏳ 심사 진행 중 · 곧 지원 예정"
    },
    alipay: {
      badge: "예약 슬롯 · 심사 중",
      name: "💙 알리페이 Alipay (CNY)",
      desc: "공식 알리페이 가맹점 신청 심사 중입니다 (VIP ¥500 / SVIP ¥999). 곧 오픈 예정입니다.",
      status: "⏳ 심사 진행 중 · 곧 지원 예정"
    }
  },
  "es": {
    title: "Canales Oficiales de Pago Global",
    sub: "Los pagos en divisas internacionales se procesan mediante Airwallex. WeChat Pay y Alipay están en proceso de solicitud (espacios reservados).",
    airwallex: {
      badge: "Activo · Divisas Internacionales",
      name: "🌐 Airwallex Global Checkout (USD / Multidivisa)",
      desc: "Acepta Visa, MasterCard, Amex, Apple Pay y Google Pay (VIP $69 USD / SVIP $139 USD).",
      cta: "Solicitar enlace de pago Airwallex",
      note: "Comercio: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "Espacio Reservado · En Solicitud",
      name: "💚 WeChat Pay (CNY)",
      desc: "Integración oficial de WeChat Pay en revisión (VIP ¥500 / SVIP ¥999). Próximamente.",
      status: "⏳ Solicitud en curso · Reservado"
    },
    alipay: {
      badge: "Espacio Reservado · En Solicitud",
      name: "💙 Alipay (CNY)",
      desc: "Integración oficial de Alipay en revisión (VIP ¥500 / SVIP ¥999). Próximamente.",
      status: "⏳ Solicitud en curso · Reservado"
    }
  },
  "de": {
    title: "Offizielle Globale Zahlungskanäle",
    sub: "Fremdwährungszahlungen laufen über Airwallex. WeChat Pay & Alipay befinden sich aktuell in der Beantragung (reservierte Slots).",
    airwallex: {
      badge: "Aktiv · Globale Fremdwährungen",
      name: "🌐 Airwallex Global Checkout (USD / Multi-Currency)",
      desc: "Unterstützt Visa, MasterCard, Amex, Apple Pay und Google Pay (VIP $69 USD / SVIP $139 USD).",
      cta: "Airwallex-Zahlungslink anfordern",
      note: "Händler: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "Reserviert · In Prüfung",
      name: "💚 WeChat Pay (CNY)",
      desc: "Offizielle WeChat-Pay-Anbindung in Beantragung (VIP ¥500 / SVIP ¥999). Demnächst verfügbar.",
      status: "⏳ Antrag läuft · Reserviert"
    },
    alipay: {
      badge: "Reserviert · In Prüfung",
      name: "💙 Alipay (CNY)",
      desc: "Offizielle Alipay-Anbindung in Beantragung (VIP ¥500 / SVIP ¥999). Demnächst verfügbar.",
      status: "⏳ Antrag läuft · Reserviert"
    }
  },
  "fr": {
    title: "Canaux de Paiement Officiels",
    sub: "Les paiements en devises étrangères sont traités par Airwallex. WeChat Pay et Alipay sont en cours d'approbation (emplacements réservés).",
    airwallex: {
      badge: "Actif · Devises Internationales",
      name: "🌐 Airwallex Global Checkout (USD / Multi-Devises)",
      desc: "Paiement sécurisé par Visa, MasterCard, Amex, Apple Pay et Google Pay (VIP $69 USD / SVIP $139 USD).",
      cta: "Demander un lien de paiement Airwallex",
      note: "Marchand : JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "Emplacement Réservé · En Cours",
      name: "💚 WeChat Pay (CNY)",
      desc: "Intégration officielle WeChat Pay en cours de validation (VIP ¥500 / SVIP ¥999). Bientôt disponible.",
      status: "⏳ Demande en cours · Réservé"
    },
    alipay: {
      badge: "Emplacement Réservé · En Cours",
      name: "💙 Alipay (CNY)",
      desc: "Intégration officielle Alipay en cours de validation (VIP ¥500 / SVIP ¥999). Bientôt disponible.",
      status: "⏳ Demande en cours · Réservé"
    }
  },
  "vi": {
    title: "Kênh Thanh Toán Quốc Tế & Nội Địa Chính Thức",
    sub: "Thanh toán ngoại tệ toàn cầu qua Airwallex. Cổng WeChat Pay & Alipay đang trong quá trình đăng ký duyệt hồ sơ (đã giữ vị trí sẵn).",
    airwallex: {
      badge: "Đang hoạt động · Ngoại tệ toàn cầu",
      name: "🌐 Airwallex Global Checkout (USD / Đa tiền tệ)",
      desc: "Hỗ trợ Visa, MasterCard, Amex, Apple Pay và Google Pay (VIP $69 USD / SVIP $139 USD).",
      cta: "Nhận link thanh toán Airwallex",
      note: "Đơn vị thụ hưởng: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "Vị trí chờ · Đang xét duyệt",
      name: "💚 WeChat Pay (CNY)",
      desc: "Cổng WeChat Pay chính thức đang được đăng ký duyệt (VIP ¥500 / SVIP ¥999). Sắp ra mắt.",
      status: "⏳ Đang xét duyệt · Sắp mở"
    },
    alipay: {
      badge: "Vị trí chờ · Đang xét duyệt",
      name: "💙 Alipay (CNY)",
      desc: "Cổng Alipay chính thức đang được đăng ký duyệt (VIP ¥500 / SVIP ¥999). Sắp ra mắt.",
      status: "⏳ Đang xét duyệt · Sắp mở"
    }
  },
  "th": {
    title: "ช่องทางชำระเงินสากลและท้องถิ่นอย่างเป็นทางการ",
    sub: "การชำระเงินสกุลเงินต่างประเทศรองรับผ่าน Airwallex ส่วน WeChat Pay และ Alipay อยู่ระหว่างยื่นขออนุมัติ (เตรียมช่องรองรับไว้แล้ว)",
    airwallex: {
      badge: "พร้อมใช้งาน · สกุลเงินต่างประเทศ",
      name: "🌐 Airwallex Global Checkout (USD / หลายสกุลเงิน)",
      desc: "รองรับบัตร Visa, MasterCard, Amex, Apple Pay และ Google Pay (VIP $69 USD / SVIP $139 USD)",
      cta: "ติดต่อรับลิงก์ชำระเงิน Airwallex",
      note: "ผู้รับชำระ: JINHUA CREDIT IMPORT AND EXPORT CO.,LTD · info@xiaomie.tools"
    },
    wechat: {
      badge: "เตรียมรองรับ · รอการอนุมัติ",
      name: "💚 WeChat Pay (CNY)",
      desc: "กำลังยื่นขอเปิดระบบร้านค้า WeChat Pay อย่างเป็นทางการ (VIP ¥500 / SVIP ¥999) เร็วๆ นี้",
      status: "⏳ อยู่ระหว่างพิจารณา · เร็วๆ นี้"
    },
    alipay: {
      badge: "เตรียมรองรับ · รอการอนุมัติ",
      name: "💙 Alipay (CNY)",
      desc: "กำลังยื่นขอเปิดระบบร้านค้า Alipay อย่างเป็นทางการ (VIP ¥500 / SVIP ¥999) เร็วๆ นี้",
      status: "⏳ อยู่ระหว่างพิจารณา · เร็วๆ นี้"
    }
  }
};
