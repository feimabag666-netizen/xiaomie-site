# xiaomie-site · XiaoMie Tools Official Website & Shared SaaS API

本仓库负责：
1. **系列软件总官网**（`https://xiaomie.tools/`）与产品落地页：
   - `/carousel/` — 小咩魔法轮播视频（Xiaomie Carousel Video Studio）
   - `/catalog/` — 小咩商品目录卖点生成器（Xiaomie Product Catalog & Selling Point Generator，10 语种）
   - `/terms/`、`/privacy/`、`/refund/` — 国际 SaaS 合规条款页（14-day refund policy）
2. **全系列共用后端接口**（`https://api.xiaomie.tools/`）：统一邮箱验证码登录（`noreply@xiaomie.tools` 发信，`Reply-To: info@xiaomie.tools`）、按 `(email, app_id)` 隔离的额度账本、以及 Global Card & SaaS Checkout（Creem MoR Ready）。

Operated by Limei Chen · Contact: `info@xiaomie.tools`

详细接入规范见 [INTEGRATION.md](./INTEGRATION.md)。

## 本地构建

```bash
npm run build
```

构建产物输出至 `web/` 目录，推送至 `main` 分支后由 GitHub Actions 自动部署至 Cloudflare Pages。
