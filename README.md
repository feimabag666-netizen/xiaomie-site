# xiaomie-site · 小咩魔法系列软件总官网与共用接口

本仓库负责：
1. **系列软件总官网**（`https://xiaomie.tools/`）与各软件多语种落地页（`/collector/`、`/carousel/`）
2. **全系列共用后端接口**（`https://api.xiaomie.tools/`）：统一邮箱验证码登录（`noreply@xiaomie.tools` 发信，`Reply-To: info@xiaomie.tools`）、按 `(email, app_id)` 隔离的额度账本、以及统一 Airwallex 空中云汇收款（预留微信/支付宝通道）

详细接入规范见 [INTEGRATION.md](./INTEGRATION.md)。

## 本地构建

```bash
npm run build
```

构建产物输出至 `web/` 目录，推送至 `main` 分支后由 GitHub Actions 自动部署至 Cloudflare Pages。
