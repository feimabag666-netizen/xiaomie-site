# 小咩魔法系列软件 · 共用接口接入指南 (`api.xiaomie.tools`)

> 本文档仅供系列软件内部集成使用，**不含任何密钥或敏感凭据**。所有密钥统一由 Cloudflare Pages / Workers 加密环境变量注入。

---

## 1. 域名与服务分工

| 域名 / 路径 | 用途 | 所属项目 |
| --- | --- | --- |
| `https://xiaomie.tools/` | 系列软件总官网 & 统一入口 | `xiaomie-site` |
| `https://xiaomie.tools/collector/` | 小咩魔法采集 10 语种落地页 | `xiaomie-site` |
| `https://xiaomie.tools/carousel/` | 小咩魔法轮播视频 多语种落地页 | `xiaomie-site` |
| `https://collector.xiaomie.tools/` | 小咩魔法采集安装包下载站 | `小咩魔法采集` |
| `https://carousel.xiaomie.tools/` | 小咩魔法轮播视频在线工作台 | `小咩魔法轮播视频` |
| `https://api.xiaomie.tools/` | **全系列共用 API（登录、邮箱、收款、账本）** | `xiaomie-site` |

---

## 2. `app_id` 规范与数据隔离

所有接入 `api.xiaomie.tools` 的软件必须在请求体中传入 `app_id`：

| `app_id` | 软件名称 | 默认试用额度 | 套餐 `planId` |
| --- | --- | --- | --- |
| `collector` | 小咩魔法采集 (Xiaomie Magic Collector) | `20` 次 | `pack100` (\$69 / ¥500, 100次) · `lifetime` (\$139 / ¥999, 终身) |
| `carousel` | 小咩魔法轮播视频 (Xiaomie Magic Carousel) | `1` 次 | `pack50` (\$49.9, 50次) · `pack100` (\$69.9, 100次) · `lifetime` (\$139.9, 终身) |
| `site` | 官网账号中心（兜底） | `0` 次 | — |

- **账本严格隔离**：Cloudflare KV 中用户权益按 `acct:<app_id>:<email>` 存储，同一邮箱在不同软件下的试用额度、付费次数与终身会员完全独立，互不串台。
- **新增软件接入**：在 `functions/api/_shared.js` 的 `APP_REGISTRY` 中新增一个 `app_id` 条目即可立即复用全部登录、发信与收款能力。

---

## 3. 共用接口清单

### 3.1 发送邮箱验证码：`POST /api/send-otp`
系统自动通过 `noreply@xiaomie.tools` 发信，并自动携带 `Reply-To: info@xiaomie.tools` 及对应软件名抬头（如 `【小咩魔法采集】`）。

```json
// Request
{
  "email": "user@example.com",
  "app_id": "collector",
  "lang": "zh-CN"
}

// Response (200)
{
  "ok": true,
  "app_id": "collector",
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
  "app_id": "collector"
}

// Response (200)
{
  "ok": true,
  "email": "user@example.com",
  "app_id": "collector",
  "provider": "email_otp",
  "verifiedAt": "2026-11-16T09:00:00.000Z",
  "account": {
    "plan": "trial",
    "quotaLimit": 20,
    "usedCount": 0,
    "remaining": 20
  }
}
```

### 3.3 查询 / 扣减软件额度：`POST /api/account`
```json
// 查询账本
{
  "action": "get",
  "email": "user@example.com",
  "app_id": "collector"
}

// 扣减 1 次额度
{
  "action": "consume",
  "email": "user@example.com",
  "app_id": "collector",
  "count": 1
}
```

### 3.4 统一收款下单：`POST /api/airwallex-checkout`
自动根据 `(app_id, planId)` 读取对应软件的价目表并生成 Airwallex 支付链接（`metadata` 自动携带 `app_id`、`planId`、`buyerEmail`）。

```json
// Request
{
  "app_id": "collector",
  "planId": "pack100",
  "email": "user@example.com"
}

// Response (200)
{
  "ok": true,
  "app_id": "collector",
  "planId": "pack100",
  "checkoutUrl": "https://checkout.airwallex.com/...",
  "paymentLinkId": "pl_..."
}
```

`GET /api/airwallex-checkout?app_id=collector` 可查询当前软件的可用套餐与支付通道状态（Airwallex 已接入，微信支付 / 支付宝预留位就绪）。

---

## 4. Cloudflare 环境变量清单（仅在后台配置，严禁写入代码）

- `PURELYMAIL_NOREPLY_PASSWORD`（或兼容 `PURELYMAIL_PASSWORD`）：`noreply@xiaomie.tools` SMTP 密码
- `OTP_SECRET`：OTP 令牌签名密钥
- `AIRWALLEX_CLIENT_ID`：空中云汇 Client ID
- `AIRWALLEX_API_KEY`：空中云汇 API Key
- `XIAOMIE_KV`（可选 KV 绑定）：用于 `(email, app_id)` 持久化账本
