# XiaoMie Tools · 共用接口接入指南 (`api.xiaomie.tools`)

> 本文档仅供系列软件内部集成使用，**不含任何密钥或敏感凭据**。所有密钥统一由 Cloudflare Pages / Workers 加密环境变量注入。

---

## 1. 域名与服务分工

| 域名 / 路径 | 用途 | 所属项目 |
| --- | --- | --- |
| `https://xiaomie.tools/` | 系列软件总官网 & 统一入口（含 Terms / Privacy / Refund） | `xiaomie-site` |
| `https://xiaomie.tools/catalog/` | 小咩商品目录卖点生成器 10 语种落地页 | `xiaomie-site` |
| `https://xiaomie.tools/carousel/` | 小咩魔法轮播视频 多语种落地页 | `xiaomie-site` |
| `https://catalog.xiaomie.tools/` | 小咩商品目录卖点生成器下载与工作台入口 | `XiaoMie Tools` |
| `https://carousel.xiaomie.tools/` | 小咩魔法轮播视频在线工作台 | `XiaoMie Tools` |
| `https://api.xiaomie.tools/` | **全系列共用 API（登录、邮箱、SaaS 结算、账本）** | `xiaomie-site` |

---

## 2. `app_id` 规范与数据隔离

所有接入 `api.xiaomie.tools` 的软件必须在请求体中传入 `app_id`：

| `app_id` | 软件名称 | 默认试用额度 | 套餐 `planId` |
| --- | --- | --- | --- |
| `catalog` | 小咩商品目录卖点生成器 (`Xiaomie Product Catalog & Selling Point Generator`) | `20` 次 | `monthly9` (\$9/mo) · `pack100` (\$69, 100次) · `annual99` (\$99/yr) |
| `carousel` | 小咩魔法轮播视频 (`Xiaomie Carousel Video Studio`) | `1` 次 | `monthly19` (\$19/mo) · `pack50` (\$49.9) · `pack100` (\$69.9) · `annual99` (\$99/yr) |
| `site` | 官网账号中心（兜底） | `0` 次 | `monthly9` · `monthly19` · `pack100` · `annual99` |

- **账本严格隔离**：Cloudflare KV 中用户权益按 `acct:<app_id>:<email>` 存储，同一邮箱在不同软件下的试用额度、付费次数与年度订阅完全独立，互不串台。
- **新增软件接入**：在 `functions/api/_shared.js` 的 `APP_REGISTRY` 中新增一个 `app_id` 条目即可立即复用全部登录、发信与结算能力。

---

## 3. 共用接口清单

### 3.1 发送邮箱验证码：`POST /api/send-otp`
系统自动通过 `noreply@xiaomie.tools` 发信，并自动携带 `Reply-To: info@xiaomie.tools` 及对应软件名抬头。

```json
// Request
{
  "email": "user@example.com",
  "app_id": "catalog",
  "lang": "zh-CN"
}

// Response (200)
{
  "ok": true,
  "app_id": "catalog",
  "token": "<payload>.<hmac_signature>",
  "expiresIn": 600
}
```

### 3.2 校验邮箱验证码：`POST /api/verify-otp`
```json
// Request
{
  "email": "user@example.com",
  "code": "123456",
  "token": "<payload>.<hmac_signature>",
  "app_id": "catalog"
}
```

### 3.3 查询 / 扣减软件额度：`POST /api/account`
```json
{
  "action": "get",
  "email": "user@example.com",
  "app_id": "catalog"
}
```

### 3.4 统一 SaaS 结算：`POST /api/checkout` & `GET /api/checkout?app_id=catalog`
自动根据 `(app_id, planId)` 返回 Creem MoR 结算配置或跳转链接，付款后通过 `api.xiaomie.tools` 邮箱账号自动即时开通权益。

---

## 4. Cloudflare 环境变量清单（仅在后台配置，严禁写入代码）

- `PURELYMAIL_NOREPLY_PASSWORD`（或兼容 `PURELYMAIL_PASSWORD`）：`noreply@xiaomie.tools` SMTP 密码
- `OTP_SECRET`：OTP 令牌签名密钥
- `CREEM_API_KEY`：Creem MoR API 密钥
- `CREEM_CHECKOUT_URL`：Creem Checkout 托管收银台基础链接
- `XIAOMIE_KV`（可选 KV 绑定）：用于 `(email, app_id)` 持久化账本
