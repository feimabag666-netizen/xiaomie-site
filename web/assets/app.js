(function () {
  "use strict";

  const APP_ID = document.documentElement.getAttribute("data-app-id") || "catalog";

  const langSelect = document.getElementById("langSwitcher");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      if (this.value) window.location.href = this.value;
    });
  }

  // User state (localStorage backed per app_id + API verified)
  const STORAGE_KEY = `xm_web_account_${APP_ID}_v1`;
  let otpToken = "";

  async function apiPost(path, payload) {
    const body = JSON.stringify({ app_id: APP_ID, ...payload });
    try {
      const r = await fetch(`https://api.xiaomie.tools${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      return await r.json();
    } catch {
      const r2 = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      return await r2.json();
    }
  }

  function defaultQuotaForApp() {
    if (APP_ID === "carousel") return 1;
    if (APP_ID === "catalog") return 20;
    return 0;
  }

  function loadAccount() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    const q = defaultQuotaForApp();
    return {
      loggedIn: false,
      email: "",
      app_id: APP_ID,
      plan: "trial",
      quotaLimit: q,
      usedCount: 0,
      ledger: q > 0
        ? [{ time: new Date().toISOString().slice(0, 10), desc: "Free Trial / 免费试用额度", delta: `+${q}`, balance: String(q) }]
        : [],
    };
  }

  function saveAccount(acc) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(acc)); } catch {}
  }

  function renderAccountUI() {
    const acc = loadAccount();
    const btnOpen = document.getElementById("btnOpenAccountPortal");
    const emailEl = document.getElementById("portalUserEmail");
    const planEl = document.getElementById("portalUserPlan");
    const quotaEl = document.getElementById("portalUserQuota");
    const ledgerEl = document.getElementById("portalLedgerList");
    const loginBox = document.getElementById("portalLoginBox");
    const dashBox = document.getElementById("portalDashBox");

    if (btnOpen) {
      btnOpen.textContent = acc.loggedIn ? `👤 ${acc.email}` : "👤 Account / 账号中心";
    }
    if (!loginBox || !dashBox) return;

    if (acc.loggedIn) {
      loginBox.style.display = "none";
      dashBox.style.display = "block";
      if (emailEl) emailEl.textContent = `${acc.email} (${APP_ID})`;
      if (planEl) {
        planEl.textContent =
          acc.plan === "annual"
            ? "👑 Annual Pro"
            : acc.plan === "lifetime"
            ? "👑 Lifetime Pro"
            : acc.plan === "pack100"
            ? "⭐ Growth Pack (100)"
            : acc.plan === "starter" || acc.plan === "monthly"
            ? "⭐ Starter SaaS"
            : acc.plan === "pack50"
            ? "⭐ Studio Pack (50)"
            : "🎁 Free Trial";
      }
      if (quotaEl) {
        quotaEl.textContent =
          acc.plan === "lifetime" || acc.plan === "annual"
            ? "Active Unlimited"
            : `${Math.max(0, (acc.quotaLimit || 0) - (acc.usedCount || 0))} / ${acc.quotaLimit || 0}`;
      }
      if (ledgerEl) {
        ledgerEl.innerHTML = (acc.ledger || [])
          .map(
            (item) =>
              `<div class="ledger-item"><span>${item.time} · ${item.desc}</span><strong>${item.delta} (bal: ${item.balance})</strong></div>`
          )
          .join("");
      }
    } else {
      loginBox.style.display = "block";
      dashBox.style.display = "none";
    }
  }

  const accountModal = document.getElementById("accountPortalModal");
  const btnOpenPortal = document.getElementById("btnOpenAccountPortal");
  const btnClosePortal = document.getElementById("btnCloseAccountPortal");
  if (btnOpenPortal && accountModal) {
    btnOpenPortal.addEventListener("click", () => {
      renderAccountUI();
      accountModal.showModal();
    });
  }
  if (btnClosePortal && accountModal) {
    btnClosePortal.addEventListener("click", () => accountModal.close());
  }

  const btnSendOtp = document.getElementById("btnWebSendOtp");
  const btnVerifyOtp = document.getElementById("btnWebVerifyOtp");
  const btnLogout = document.getElementById("btnWebLogout");
  const otpStatus = document.getElementById("webOtpStatus");

  if (btnSendOtp) {
    btnSendOtp.addEventListener("click", async () => {
      const email = (document.getElementById("webOtpEmail")?.value || "").trim();
      if (!email) {
        if (otpStatus) otpStatus.textContent = "Please enter your email address.";
        return;
      }
      btnSendOtp.disabled = true;
      if (otpStatus) otpStatus.textContent = "Sending verification code from noreply@xiaomie.tools...";
      try {
        const data = await apiPost("/api/send-otp", {
          email,
          lang: document.documentElement.lang || "en",
        });
        if (data.ok && data.token) {
          otpToken = data.token;
          if (otpStatus) otpStatus.textContent = "✅ Code sent from noreply@xiaomie.tools! Check your inbox.";
        } else {
          if (otpStatus) otpStatus.textContent = `⚠️ ${data.error || "Failed to send code"}`;
        }
      } catch (e) {
        if (otpStatus) otpStatus.textContent = `⚠️ Network error: ${e.message}`;
      } finally {
        btnSendOtp.disabled = false;
      }
    });
  }

  if (btnVerifyOtp) {
    btnVerifyOtp.addEventListener("click", async () => {
      const email = (document.getElementById("webOtpEmail")?.value || "").trim();
      const code = (document.getElementById("webOtpCode")?.value || "").trim();
      if (!email || !code || !otpToken) {
        if (otpStatus) otpStatus.textContent = "Please send & enter the 6-digit verification code.";
        return;
      }
      btnVerifyOtp.disabled = true;
      try {
        const data = await apiPost("/api/verify-otp", { email, code, token: otpToken });
        if (data.ok) {
          const acc = loadAccount();
          acc.loggedIn = true;
          acc.email = data.email;
          acc.app_id = data.app_id || APP_ID;
          if (data.account) {
            acc.plan = data.account.plan || acc.plan;
            acc.quotaLimit = data.account.quotaLimit ?? acc.quotaLimit;
            acc.usedCount = data.account.usedCount ?? acc.usedCount;
          }
          saveAccount(acc);
          if (otpStatus) otpStatus.textContent = "✅ Verified & Signed In!";
          renderAccountUI();
        } else {
          if (otpStatus) otpStatus.textContent = `❌ ${data.error || "Invalid code"}`;
        }
      } catch (e) {
        if (otpStatus) otpStatus.textContent = `❌ ${e.message}`;
      } finally {
        btnVerifyOtp.disabled = false;
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      const acc = loadAccount();
      acc.loggedIn = false;
      saveAccount(acc);
      renderAccountUI();
    });
  }

  // Global Card & SaaS Checkout Modal (Creem MoR Ready)
  const checkoutModal = document.getElementById("saasCheckoutModal");
  const openCheckoutBtns = document.querySelectorAll("[data-open-checkout]");
  const btnCloseCheckout = document.getElementById("btnCloseCheckoutModal");
  const btnSubmitCheckout = document.getElementById("btnSubmitSaasCheckout");
  const checkoutStatus = document.getElementById("saasCheckoutStatus");

  openCheckoutBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!checkoutModal) return;
      const plan = btn.getAttribute("data-plan") || "starter";
      const planSel = document.getElementById("checkoutPlanSelect");
      if (planSel) {
        const hasOpt = [...planSel.options].some((o) => o.value === plan);
        if (hasOpt) planSel.value = plan;
      }
      const acc = loadAccount();
      const emailInput = document.getElementById("checkoutBuyerEmail");
      if (emailInput && acc.email) emailInput.value = acc.email;
      if (checkoutStatus) checkoutStatus.textContent = "";
      checkoutModal.showModal();
    });
  });

  if (btnCloseCheckout && checkoutModal) {
    btnCloseCheckout.addEventListener("click", () => checkoutModal.close());
  }

  if (btnSubmitCheckout) {
    btnSubmitCheckout.addEventListener("click", async () => {
      const planId = document.getElementById("checkoutPlanSelect")?.value || "starter";
      const email = (document.getElementById("checkoutBuyerEmail")?.value || "").trim();
      if (!email) {
        if (checkoutStatus) checkoutStatus.textContent = "Please enter your email for instant account activation via api.xiaomie.tools.";
        return;
      }
      btnSubmitCheckout.disabled = true;
      if (checkoutStatus) checkoutStatus.textContent = "Preparing Global Card & SaaS Checkout session...";
      try {
        const data = await apiPost("/api/checkout", { planId, email });
        if (data.ok && data.checkoutUrl) {
          if (checkoutStatus) checkoutStatus.textContent = "✅ Redirecting to secure SaaS checkout...";
          window.open(data.checkoutUrl, "_blank", "noopener");
        } else {
          if (checkoutStatus) {
            checkoutStatus.textContent = `ℹ️ ${data.error || "Global SaaS Checkout is being finalized. Contact info@xiaomie.tools for instant invoice & activation."}`;
          }
        }
      } catch {
        if (checkoutStatus) checkoutStatus.textContent = "ℹ️ Contact info@xiaomie.tools for immediate checkout & api.xiaomie.tools activation.";
      } finally {
        btnSubmitCheckout.disabled = false;
      }
    });
  }

  renderAccountUI();
})();
