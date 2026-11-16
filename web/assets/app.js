(function () {
  "use strict";

  const APP_ID = document.documentElement.getAttribute("data-app-id") || "collector";

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
    if (APP_ID === "collector") return 20;
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
          acc.plan === "lifetime"
            ? "👑 SVIP Lifetime"
            : acc.plan === "pack100"
            ? "⭐ VIP (100 Pack)"
            : acc.plan === "pack50"
            ? "⭐ VIP (50 Pack)"
            : "🎁 Free Trial";
      }
      if (quotaEl) {
        quotaEl.textContent =
          acc.plan === "lifetime"
            ? "∞ Unlimited"
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

  // Airwallex Checkout Modal
  const awxModal = document.getElementById("airwallexModal");
  const btnOpenAwx = document.querySelectorAll("[data-open-airwallex]");
  const btnCloseAwx = document.getElementById("btnCloseAwxModal");
  const btnSubmitAwx = document.getElementById("btnSubmitAwxCheckout");
  const awxStatus = document.getElementById("awxCheckoutStatus");

  btnOpenAwx.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!awxModal) return;
      const plan = btn.getAttribute("data-plan") || "pack100";
      const planSel = document.getElementById("awxPlanSelect");
      if (planSel) planSel.value = plan;
      const acc = loadAccount();
      const emailInput = document.getElementById("awxBuyerEmail");
      if (emailInput && acc.email) emailInput.value = acc.email;
      if (awxStatus) awxStatus.textContent = "";
      awxModal.showModal();
    });
  });

  if (btnCloseAwx && awxModal) {
    btnCloseAwx.addEventListener("click", () => awxModal.close());
  }

  if (btnSubmitAwx) {
    btnSubmitAwx.addEventListener("click", async () => {
      const planId = document.getElementById("awxPlanSelect")?.value || "pack100";
      const email = (document.getElementById("awxBuyerEmail")?.value || "").trim();
      if (!email) {
        if (awxStatus) awxStatus.textContent = "Please enter your email for License Key delivery.";
        return;
      }
      btnSubmitAwx.disabled = true;
      if (awxStatus) awxStatus.textContent = "Creating secure Airwallex checkout session...";
      try {
        const data = await apiPost("/api/airwallex-checkout", { planId, email });
        if (data.ok && data.checkoutUrl) {
          if (awxStatus) awxStatus.textContent = "✅ Redirecting to Airwallex...";
          window.open(data.checkoutUrl, "_blank", "noopener");
        } else {
          if (awxStatus) {
            awxStatus.textContent = `ℹ️ ${data.error || "Please contact info@xiaomie.tools for instant Airwallex link."}`;
          }
        }
      } catch (e) {
        if (awxStatus) awxStatus.textContent = `ℹ️ ${e.message}`;
      } finally {
        btnSubmitAwx.disabled = false;
      }
    });
  }

  renderAccountUI();
})();
