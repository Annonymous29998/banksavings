const AUTH_KEY = "hsbcLoggedIn";
const PROFILE_NAME = "Corey Kohlman";
const PROFILE_INITIALS = "CK";
const BANK_NAME = "HSBC Bank USA, N.A.";
const ROUTING = "021001088";
const ACCOUNT = "850487014";
const BALANCE = 2159450;
const txs = [
  { id: 1, name: "Management", date: "Jan 15, 2020", iso: "2020-01-15", amount: 24500, iban: "0210 0108 8504", ref: "MAN-202001" },
  { id: 2, name: "Management", date: "Feb 15, 2020", iso: "2020-02-15", amount: 31200, iban: "0210 0108 8504", ref: "MAN-202002" },
  { id: 3, name: "Management", date: "Mar 15, 2020", iso: "2020-03-15", amount: 18750, iban: "0210 0108 8504", ref: "MAN-202003" },
  { id: 4, name: "Management", date: "Apr 15, 2020", iso: "2020-04-15", amount: 27600, iban: "0210 0108 8504", ref: "MAN-202004" },
  { id: 5, name: "Management", date: "May 15, 2020", iso: "2020-05-15", amount: 35400, iban: "0210 0108 8504", ref: "MAN-202005" },
  { id: 6, name: "Management", date: "Jun 15, 2020", iso: "2020-06-15", amount: 22800, iban: "0210 0108 8504", ref: "MAN-202006" },
  { id: 7, name: "Management", date: "Jul 15, 2020", iso: "2020-07-15", amount: 16500, iban: "0210 0108 8504", ref: "MAN-202007" },
  { id: 8, name: "Management", date: "Aug 15, 2020", iso: "2020-08-15", amount: 29700, iban: "0210 0108 8504", ref: "MAN-202008" },
  { id: 9, name: "Management", date: "Sep 15, 2020", iso: "2020-09-15", amount: 38200, iban: "0210 0108 8504", ref: "MAN-202009" },
  { id: 10, name: "Management", date: "Oct 15, 2020", iso: "2020-10-15", amount: 21900, iban: "0210 0108 8504", ref: "MAN-202010" },
  { id: 11, name: "Management", date: "Nov 15, 2020", iso: "2020-11-15", amount: 33500, iban: "0210 0108 8504", ref: "MAN-202011" },
  { id: 12, name: "Management", date: "Dec 15, 2020", iso: "2020-12-15", amount: 26400, iban: "0210 0108 8504", ref: "MAN-202012" },
  { id: 13, name: "Management", date: "Jan 15, 2021", iso: "2021-01-15", amount: 19800, iban: "0210 0108 8504", ref: "MAN-202101" },
  { id: 14, name: "Management", date: "Feb 15, 2021", iso: "2021-02-15", amount: 36700, iban: "0210 0108 8504", ref: "MAN-202102" },
  { id: 15, name: "Management", date: "Mar 15, 2021", iso: "2021-03-15", amount: 25300, iban: "0210 0108 8504", ref: "MAN-202103" },
  { id: 16, name: "Management", date: "Apr 15, 2021", iso: "2021-04-15", amount: 14600, iban: "0210 0108 8504", ref: "MAN-202104" },
  { id: 17, name: "Management", date: "May 15, 2021", iso: "2021-05-15", amount: 32800, iban: "0210 0108 8504", ref: "MAN-202105" },
  { id: 18, name: "Management", date: "Jun 15, 2021", iso: "2021-06-15", amount: 28400, iban: "0210 0108 8504", ref: "MAN-202106" },
  { id: 19, name: "Management", date: "Jul 15, 2021", iso: "2021-07-15", amount: 17900, iban: "0210 0108 8504", ref: "MAN-202107" },
  { id: 20, name: "Management", date: "Aug 15, 2021", iso: "2021-08-15", amount: 39100, iban: "0210 0108 8504", ref: "MAN-202108" },
  { id: 21, name: "Management", date: "Sep 15, 2021", iso: "2021-09-15", amount: 23600, iban: "0210 0108 8504", ref: "MAN-202109" },
  { id: 22, name: "Management", date: "Oct 15, 2021", iso: "2021-10-15", amount: 30500, iban: "0210 0108 8504", ref: "MAN-202110" },
  { id: 23, name: "Management", date: "Nov 15, 2021", iso: "2021-11-15", amount: 20700, iban: "0210 0108 8504", ref: "MAN-202111" },
  { id: 24, name: "Management", date: "Dec 15, 2021", iso: "2021-12-15", amount: 34900, iban: "0210 0108 8504", ref: "MAN-202112" },
  { id: 25, name: "Management", date: "Jan 15, 2022", iso: "2022-01-15", amount: 26800, iban: "0210 0108 8504", ref: "MAN-202201" },
  { id: 26, name: "Management", date: "Feb 15, 2022", iso: "2022-02-15", amount: 15700, iban: "0210 0108 8504", ref: "MAN-202202" },
  { id: 27, name: "Management", date: "Mar 15, 2022", iso: "2022-03-15", amount: 37500, iban: "0210 0108 8504", ref: "MAN-202203" },
  { id: 28, name: "Management", date: "Apr 15, 2022", iso: "2022-04-15", amount: 24200, iban: "0210 0108 8504", ref: "MAN-202204" },
  { id: 29, name: "Management", date: "May 15, 2022", iso: "2022-05-15", amount: 29600, iban: "0210 0108 8504", ref: "MAN-202205" },
  { id: 30, name: "Management", date: "Jun 15, 2022", iso: "2022-06-15", amount: 18400, iban: "0210 0108 8504", ref: "MAN-202206" },
  { id: 31, name: "Management", date: "Jul 15, 2022", iso: "2022-07-15", amount: 35700, iban: "0210 0108 8504", ref: "MAN-202207" },
  { id: 32, name: "Management", date: "Aug 15, 2022", iso: "2022-08-15", amount: 22100, iban: "0210 0108 8504", ref: "MAN-202208" },
  { id: 33, name: "Management", date: "Sep 15, 2022", iso: "2022-09-15", amount: 31900, iban: "0210 0108 8504", ref: "MAN-202209" },
  { id: 34, name: "Management", date: "Oct 15, 2022", iso: "2022-10-15", amount: 16800, iban: "0210 0108 8504", ref: "MAN-202210" },
  { id: 35, name: "Management", date: "Nov 15, 2022", iso: "2022-11-15", amount: 38600, iban: "0210 0108 8504", ref: "MAN-202211" },
  { id: 36, name: "Management", date: "Dec 15, 2022", iso: "2022-12-15", amount: 27300, iban: "0210 0108 8504", ref: "MAN-202212" },
  { id: 37, name: "Management", date: "Jan 15, 2023", iso: "2023-01-15", amount: 20400, iban: "0210 0108 8504", ref: "MAN-202301" },
  { id: 38, name: "Management", date: "Feb 15, 2023", iso: "2023-02-15", amount: 33700, iban: "0210 0108 8504", ref: "MAN-202302" },
  { id: 39, name: "Management", date: "Mar 15, 2023", iso: "2023-03-15", amount: 25900, iban: "0210 0108 8504", ref: "MAN-202303" },
  { id: 40, name: "Management", date: "Apr 15, 2023", iso: "2023-04-15", amount: 17200, iban: "0210 0108 8504", ref: "MAN-202304" },
  { id: 41, name: "Management", date: "May 15, 2023", iso: "2023-05-15", amount: 39400, iban: "0210 0108 8504", ref: "MAN-202305" },
  { id: 42, name: "Management", date: "Jun 15, 2023", iso: "2023-06-15", amount: 28700, iban: "0210 0108 8504", ref: "MAN-202306" },
  { id: 43, name: "Management", date: "Jul 15, 2023", iso: "2023-07-15", amount: 14900, iban: "0210 0108 8504", ref: "MAN-202307" },
  { id: 44, name: "Management", date: "Aug 15, 2023", iso: "2023-08-15", amount: 34200, iban: "0210 0108 8504", ref: "MAN-202308" },
  { id: 45, name: "Management", date: "Sep 15, 2023", iso: "2023-09-15", amount: 23500, iban: "0210 0108 8504", ref: "MAN-202309" },
  { id: 46, name: "Management", date: "Oct 15, 2023", iso: "2023-10-15", amount: 30800, iban: "0210 0108 8504", ref: "MAN-202310" },
  { id: 47, name: "Management", date: "Nov 15, 2023", iso: "2023-11-15", amount: 18900, iban: "0210 0108 8504", ref: "MAN-202311" },
  { id: 48, name: "Management", date: "Dec 15, 2023", iso: "2023-12-15", amount: 36300, iban: "0210 0108 8504", ref: "MAN-202312" },
  { id: 49, name: "Amazon", date: "Jan 15, 2024", iso: "2024-01-15", amount: 26500, iban: "4111 0012 8890", ref: "AMA-202401" },
  { id: 50, name: "Management", date: "Feb 15, 2024", iso: "2024-02-15", amount: 19300, iban: "0210 0108 8504", ref: "MAN-202402" },
  { id: 51, name: "Management", date: "Mar 15, 2024", iso: "2024-03-15", amount: 32600, iban: "0210 0108 8504", ref: "MAN-202403" },
  { id: 52, name: "Management", date: "Apr 15, 2024", iso: "2024-04-15", amount: 15400, iban: "0210 0108 8504", ref: "MAN-202404" },
  { id: 53, name: "Management", date: "May 15, 2024", iso: "2024-05-15", amount: 37800, iban: "0210 0108 8504", ref: "MAN-202405" },
  { id: 54, name: "Management", date: "Jun 15, 2024", iso: "2024-06-15", amount: 24700, iban: "0210 0108 8504", ref: "MAN-202406" },
  { id: 55, name: "Management", date: "Jul 15, 2024", iso: "2024-07-15", amount: 29300, iban: "0210 0108 8504", ref: "MAN-202407" },
  { id: 56, name: "Management", date: "Aug 15, 2024", iso: "2024-08-15", amount: 17600, iban: "0210 0108 8504", ref: "MAN-202408" },
  { id: 57, name: "Management", date: "Sep 15, 2024", iso: "2024-09-15", amount: 35100, iban: "0210 0108 8504", ref: "MAN-202409" },
  { id: 58, name: "Management", date: "Oct 15, 2024", iso: "2024-10-15", amount: 22900, iban: "0210 0108 8504", ref: "MAN-202410" },
  { id: 59, name: "Management", date: "Nov 15, 2024", iso: "2024-11-15", amount: 31400, iban: "0210 0108 8504", ref: "MAN-202411" },
  { id: 60, name: "Management", date: "Dec 15, 2024", iso: "2024-12-15", amount: 27700, iban: "0210 0108 8504", ref: "MAN-202412" },
  { id: 61, name: "Amazon", date: "Jan 15, 2025", iso: "2025-01-15", amount: 18600, iban: "4111 0012 8890", ref: "AMA-202501" },
  { id: 62, name: "Management", date: "Feb 15, 2025", iso: "2025-02-15", amount: 34800, iban: "0210 0108 8504", ref: "MAN-202502" },
  { id: 63, name: "Management", date: "Mar 15, 2025", iso: "2025-03-15", amount: 25100, iban: "0210 0108 8504", ref: "MAN-202503" },
  { id: 64, name: "Management", date: "Apr 15, 2025", iso: "2025-04-15", amount: 16300, iban: "0210 0108 8504", ref: "MAN-202504" },
  { id: 65, name: "Management", date: "May 15, 2025", iso: "2025-05-15", amount: 38900, iban: "0210 0108 8504", ref: "MAN-202505" },
  { id: 66, name: "Management", date: "Jun 15, 2025", iso: "2025-06-15", amount: 28200, iban: "0210 0108 8504", ref: "MAN-202506" },
  { id: 67, name: "Management", date: "Jul 15, 2025", iso: "2025-07-15", amount: 21500, iban: "0210 0108 8504", ref: "MAN-202507" },
  { id: 68, name: "Management", date: "Aug 15, 2025", iso: "2025-08-15", amount: 36600, iban: "0210 0108 8504", ref: "MAN-202508" },
  { id: 69, name: "Management", date: "Sep 15, 2025", iso: "2025-09-15", amount: 23800, iban: "0210 0108 8504", ref: "MAN-202509" },
  { id: 70, name: "Management", date: "Oct 15, 2025", iso: "2025-10-15", amount: 30200, iban: "0210 0108 8504", ref: "MAN-202510" },
  { id: 71, name: "Management", date: "Nov 15, 2025", iso: "2025-11-15", amount: 17500, iban: "0210 0108 8504", ref: "MAN-202511" },
  { id: 72, name: "Management", date: "Dec 15, 2025", iso: "2025-12-15", amount: 39500, iban: "0210 0108 8504", ref: "MAN-202512" },
  { id: 73, name: "Management", date: "Jan 15, 2026", iso: "2026-01-15", amount: 26900, iban: "0210 0108 8504", ref: "MAN-202601" },
  { id: 74, name: "Management", date: "Feb 15, 2026", iso: "2026-02-15", amount: 18700, iban: "0210 0108 8504", ref: "MAN-202602" },
  { id: 75, name: "Management", date: "Mar 15, 2026", iso: "2026-03-15", amount: 33400, iban: "0210 0108 8504", ref: "MAN-202603" },
  { id: 76, name: "Management", date: "Apr 15, 2026", iso: "2026-04-15", amount: 24600, iban: "0210 0108 8504", ref: "MAN-202604" },
  { id: 77, name: "Management", date: "May 15, 2026", iso: "2026-05-15", amount: 37200, iban: "0210 0108 8504", ref: "MAN-202605" },
  { id: 78, name: "Management", date: "Jun 15, 2026", iso: "2026-06-15", amount: 15800, iban: "0210 0108 8504", ref: "MAN-202606" },
  { id: 79, name: "Management", date: "Jul 15, 2026", iso: "2026-07-15", amount: 29900, iban: "0210 0108 8504", ref: "MAN-202607" },
  { id: 80, name: "Management", date: "Aug 15, 2026", iso: "2026-08-15", amount: 22400, iban: "0210 0108 8504", ref: "MAN-202608" }
];
txs.sort((a, b) => b.iso.localeCompare(a.iso));

const PUBLIC = new Set(["index.html", "login.html", "forgot.html", "activate.html", ""]);

const usd = (n) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const money = (n) => (n < 0 ? "-" : n > 0 ? "+" : "") + "$" + usd(Math.abs(n));
const pageName = () => location.pathname.split("/").pop() || "index.html";
const isLoggedIn = () => localStorage.getItem(AUTH_KEY) === "1";
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function injectHead() {
  if (!document.querySelector('link[rel="icon"]')) {
    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/svg+xml";
    icon.href = "favicon.svg";
    document.head.appendChild(icon);
  }
  if (!document.querySelector('meta[name="theme-color"]')) {
    const theme = document.createElement("meta");
    theme.name = "theme-color";
    theme.content = "#e31b24";
    document.head.appendChild(theme);
  }
  if (!document.querySelector('meta[name="description"]')) {
    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content = "HSBC business banking for Mediterranean Investment Capital Ltd.";
    document.head.appendChild(desc);
  }
  if (!document.querySelector('meta[name="robots"]')) {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow, noarchive";
    document.head.appendChild(robots);
  }
}

function injectSkip() {
  if (document.querySelector(".skip")) return;
  const skip = document.createElement("a");
  skip.className = "skip";
  skip.href = "#main";
  skip.textContent = "Skip to content";
  document.body.prepend(skip);
}

function injectLogoutModal() {
  if (document.querySelector(".auth-screen") || document.getElementById("logoutModal")) return;
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "logoutModal";
  modal.innerHTML = `
    <div class="sheet">
      <h2 id="logoutTitle">Sign out?</h2>
      <p>You will need to authenticate again to access this account.</p>
      <button class="primary" type="button" id="confirmLogout">Sign out</button>
      <button class="ghost" type="button" id="cancelLogout">Cancel</button>
    </div>`;
  document.querySelector(".app")?.appendChild(modal);
}

function runSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return false;
  if (isLoggedIn()) {
    location.replace("overview.html");
    return true;
  }
  const go = () => location.replace("login.html");
  let done = false;
  const leave = () => {
    if (done) return;
    done = true;
    splash.classList.add("out");
    document.documentElement.style.background = "#f4f4f4";
    document.body.style.background = "#f4f4f4";
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", "#f4f4f4");
    setTimeout(go, 420);
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  splash.addEventListener("click", leave);
  splash.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") leave(); });
  splash.tabIndex = 0;
  setTimeout(leave, reduce ? 1400 : 2600);
  return true;
}

function markMain() {
  const main = document.querySelector(".content, .form, .success, .hsbc-login");
  if (main && !main.id) main.id = "main";
}

const iconAttrs = 'width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"';
const outIcon = `<svg ${iconAttrs}><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/></svg>`;
const inIcon = `<svg ${iconAttrs}><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13"/></svg>`;

function txRow(tx) {
  return `<a class="tx" href="transaction.html?id=${tx.id}">
    <div class="tx-icon${tx.amount > 0 ? " in" : ""}">${tx.amount < 0 ? outIcon : inIcon}</div>
    <div class="tx-copy">
      <div class="tx-name">${escapeHtml(tx.name)}</div>
      <div class="tx-date">${escapeHtml(tx.date)}</div>
    </div>
    <div class="tx-amt ${tx.amount > 0 ? "in" : ""}">${money(tx.amount)}</div>
  </a>`;
}

function monthLabel(iso) {
  const [y, m] = iso.split("-");
  return new Date(`${y}-${m}-01T00:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function historyHTML(list = txs) {
  let last = "";
  if (!list.length) return `<p class="tx-date">No matching transactions.</p>`;
  return list.map((tx) => {
    const label = monthLabel(tx.iso);
    const head = label !== last ? `<div class="tx-month">${label}</div>` : "";
    last = label;
    return head + txRow(tx);
  }).join("");
}

function fill(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function showSigningIn() {
  const gate = document.getElementById("loginGate");
  const text = document.getElementById("loginGateText");
  const form = document.getElementById("loginForm");
  const btn = form?.querySelector("[type=submit]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Signing in…";
  }
  form?.querySelectorAll("input, button").forEach((el) => { el.disabled = true; });
  if (!gate) {
    location.href = "overview.html";
    return;
  }
  gate.classList.add("open");
  gate.setAttribute("aria-hidden", "false");
  const steps = ["Verifying your credentials", "Checking your secure session", "Opening your accounts"];
  let i = 0;
  if (text) text.textContent = steps[0];
  const tick = setInterval(() => {
    i += 1;
    if (text && steps[i]) text.textContent = steps[i];
    if (i >= steps.length - 1) clearInterval(tick);
  }, reduce ? 120 : 800);
  setTimeout(() => { location.href = "overview.html"; }, reduce ? 450 : 2600);
}

function showToast(msg) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.id = "toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { el.style.display = "none"; }, 2400);
}

function goSuccess(title, text) {
  sessionStorage.setItem("successTitle", title);
  sessionStorage.setItem("successText", text);
  location.href = "success.html";
}

function tickClock() {
  const timeEl = document.getElementById("clockTime");
  const dateEl = document.getElementById("clockDate");
  if (!timeEl || !dateEl) return;
  const now = new Date();
  const tz = "America/New_York";
  timeEl.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: tz, hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true
  }).format(now);
  dateEl.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: tz, weekday: "long", month: "long", day: "numeric", year: "numeric"
  }).format(now);
  const tzEl = document.getElementById("clockTz");
  if (tzEl) {
    tzEl.textContent = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" })
      .formatToParts(now).find((p) => p.type === "timeZoneName")?.value || "ET";
  }
}

function parseAmount(raw) {
  const n = Number(String(raw).replace(/[$,\s]/g, ""));
  return Number.isFinite(n) ? n : NaN;
}

function validAccount(raw) {
  const v = String(raw).replace(/[\s-]/g, "");
  return /^\d{6,17}$/.test(v);
}

function validRouting(raw) {
  const v = String(raw).replace(/[\s-]/g, "");
  return /^\d{9}$/.test(v);
}

function requiredFilled(el) {
  if (el.type === "checkbox" || el.type === "radio") return el.checked;
  return String(el.value || "").trim() !== "";
}

function wireRequiredButtons() {
  document.querySelectorAll("form").forEach((form) => {
    const btn = form.querySelector("button[type=submit]");
    if (!btn) return;
    const update = () => {
      const fields = [...form.querySelectorAll("input[required], select[required], textarea[required]")];
      const ready = fields.length > 0 && fields.every((el) => !el.disabled && requiredFilled(el));
      btn.disabled = !ready;
    };
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    update();
  });
}

function wireLogout() {
  const modal = document.getElementById("logoutModal");
  const openers = document.querySelectorAll("#logoutBtn, [data-logout]");
  if (!openers.length) return;

  const open = () => {
    if (!modal) {
      localStorage.removeItem(AUTH_KEY);
      location.href = "index.html";
      return;
    }
    modal.classList.add("open");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "logoutTitle");
    document.getElementById("confirmLogout")?.focus();
  };
  const close = () => modal?.classList.remove("open");

  openers.forEach((btn) => btn.addEventListener("click", open));
  document.getElementById("cancelLogout")?.addEventListener("click", close);
  document.getElementById("confirmLogout")?.addEventListener("click", () => {
    localStorage.removeItem(AUTH_KEY);
    location.href = "index.html";
  });
  modal?.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function wireBalance() {
  const value = document.getElementById("balanceValue");
  const btn = document.getElementById("toggleBalance");
  if (!value || !btn) return;
  const shown = "$" + usd(BALANCE);
  value.textContent = shown;
  const moneyEls = [...document.querySelectorAll("[data-mask]")];
  let hidden = false;
  btn.addEventListener("click", () => {
    hidden = !hidden;
    value.textContent = hidden ? "$ ••••••••" : shown;
    moneyEls.forEach((el) => {
      el.textContent = hidden ? "$ ••••••••" : el.getAttribute("data-mask");
    });
    btn.setAttribute("aria-pressed", String(hidden));
    btn.setAttribute("aria-label", hidden ? "Show balance" : "Hide balance");
    document.getElementById("eyeOpen")?.classList.toggle("hidden", hidden);
    document.getElementById("eyeClosed")?.classList.toggle("hidden", !hidden);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = pageName();
  injectHead();
  injectSkip();
  if (runSplash()) return;

  if (!PUBLIC.has(page) && !isLoggedIn()) {
    location.replace("login.html");
    return;
  }

  if (!PUBLIC.has(page) && isLoggedIn()) injectLogoutModal();
  markMain();
  document.querySelectorAll(".avatar").forEach((el) => { el.textContent = PROFILE_INITIALS; });
  const dateEl = document.getElementById("clockDate");
  if (dateEl && !document.querySelector(".clock-city")) {
    const city = document.createElement("div");
    city.className = "clock-city";
    city.textContent = "New York, United States";
    dateEl.after(city);
  }
  const meta = document.querySelector(".header .meta");
  if (meta) {
    meta.innerHTML = `<span>${BANK_NAME}</span><span>Routing: ${ROUTING}</span><span>Account: ${ACCOUNT}</span>`;
  }
  const typeEl = document.querySelector(".account-type");
  if (typeEl) typeEl.textContent = "Business Checking · USD";

  fill("recentList", txs.slice(0, 2).map(txRow).join(""));
  fill("paymentsList", txs.filter(t => t.amount > 0).map(txRow).join(""));
  fill("historyList", historyHTML());
  const historyCount = document.getElementById("historyCount");
  if (historyCount) historyCount.textContent = `(${txs.length})`;
  const debitTxs = txs.filter((t) => t.amount < 0);
  fill("cbSelect", debitTxs
    .map(t => `<option value="${t.id}">${escapeHtml(t.name)} · ${money(t.amount)} · ${escapeHtml(t.date)}</option>`).join(""));
  const cbSelect = document.getElementById("cbSelect");
  if (cbSelect) {
    if (!debitTxs.length) {
      cbSelect.innerHTML = `<option value="">No debit transactions available</option>`;
      cbSelect.disabled = true;
      document.getElementById("cbReason")?.setAttribute("disabled", "disabled");
      document.getElementById("cbDetails")?.setAttribute("disabled", "disabled");
      document.querySelector("#cbForm [type=submit]")?.setAttribute("disabled", "disabled");
    } else {
      const pre = Number(new URLSearchParams(location.search).get("id"));
      if (pre && debitTxs.some((t) => t.id === pre)) cbSelect.value = String(pre);
    }
  }

  const search = document.getElementById("historySearch");
  if (search) {
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const list = q ? txs.filter((t) => `${t.name} ${t.ref} ${t.iban} ${t.date}`.toLowerCase().includes(q)) : txs;
      fill("historyList", historyHTML(list));
      if (historyCount) historyCount.textContent = `(${list.length})`;
    };
    search.addEventListener("input", render);
  }

  tickClock();
  if (document.getElementById("clockTime")) setInterval(tickClock, 1000);
  document.getElementById("refreshClock")?.addEventListener("click", tickClock);
  wireBalance();
  wireLogout();

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const saved = localStorage.getItem("hsbcUser");
    if (saved) {
      document.getElementById("loginUser").value = saved;
      document.getElementById("rememberMe").checked = true;
    }
    document.getElementById("togglePass")?.addEventListener("click", () => {
      const input = document.getElementById("loginPass");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      document.getElementById("togglePass").setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value;
      const err = document.getElementById("loginError");
      if (user !== "Corey23923" || pass !== "kohlman2026$") {
        err.textContent = "The username or password is incorrect.";
        err.classList.add("show");
        return;
      }
      if (document.getElementById("rememberMe").checked) localStorage.setItem("hsbcUser", user);
      else localStorage.removeItem("hsbcUser");
      localStorage.setItem(AUTH_KEY, "1");
      showSigningIn();
    });
  }

  document.getElementById("forgotForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    sessionStorage.setItem("toast", "If this username exists, reset instructions have been sent.");
    location.href = "login.html";
  });

  document.getElementById("activateForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    sessionStorage.setItem("toast", "Card activation request received.");
    location.href = "login.html";
  });

  document.getElementById("payForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const amount = parseAmount(data.amount);
    if (!validAccount(data.iban)) return showToast("Enter a valid account number.");
    if (!(amount > 0)) return showToast("Enter an amount greater than zero.");
    e.target.querySelector("[type=submit]")?.setAttribute("disabled", "disabled");
    goSuccess("Payment submitted", `ACH payment of $${usd(amount)} to ${data.name} has been queued.`);
  });

  document.getElementById("transferForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const amount = parseAmount(data.amount);
    if (!validRouting(data.routing)) return showToast("Enter a valid 9-digit routing number.");
    if (!validAccount(data.iban)) return showToast("Enter a valid destination account number.");
    if (!(amount > 0)) return showToast("Enter an amount greater than zero.");
    const btn = e.target.querySelector("[type=submit]");
    const fail = document.getElementById("transferFailModal");
    const label = btn?.textContent || "Transfer";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Processing…";
    }
    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.textContent = label;
      }
      if (!fail) return showToast("Unable to transfer");
      fail.classList.add("open");
      fail.setAttribute("role", "dialog");
      fail.setAttribute("aria-modal", "true");
      fail.setAttribute("aria-labelledby", "transferFailTitle");
      document.getElementById("transferFailClose")?.focus();
    }, 650);
  });

  const transferFail = document.getElementById("transferFailModal");
  const closeTransferFail = () => transferFail?.classList.remove("open");
  document.getElementById("transferFailClose")?.addEventListener("click", closeTransferFail);
  transferFail?.addEventListener("click", (e) => { if (e.target === transferFail) closeTransferFail(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && transferFail?.classList.contains("open")) closeTransferFail();
  });

  document.getElementById("cbForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = Number(new FormData(e.target).get("tx"));
    const tx = txs.find((t) => t.id === id);
    if (!tx || tx.amount >= 0) {
      showToast("Chargebacks can only be requested for debit transactions.");
      return;
    }
    e.target.querySelector("[type=submit]")?.setAttribute("disabled", "disabled");
    goSuccess("Chargeback requested", "Your dispute has been sent for review. You will be notified within 2–5 business days.");
  });

  document.getElementById("statementForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    if (from && to && from > to) return showToast("The from date must be before the to date.");
    const rows = [["Date", "Category", "Reference", "Amount USD"]];
    txs.filter((t) => (!from || t.iso >= from) && (!to || t.iso <= to))
      .forEach((t) => rows.push([t.iso, t.name, t.ref, t.amount.toFixed(2)]));
    const blob = new Blob([rows.map((r) => r.join(";")).join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `HSBC_Statement_${from || "start"}_${to || "end"}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast(`${rows.length - 1} transactions exported`);
  });

  const txBody = document.getElementById("txDetailBody");
  if (txBody) {
    const id = Number(new URLSearchParams(location.search).get("id"));
    const tx = txs.find((t) => t.id === id) || txs[0];
    const color = tx.amount < 0 ? "var(--red)" : "#1a9d48";
    txBody.innerHTML = `
      <div class="split-2">
        <div class="card tx-hero">
          <div class="tx-date">${escapeHtml(tx.date)}</div>
          <div class="balance" style="color:${color}">${money(tx.amount)}</div>
          <div class="tx-name">${escapeHtml(tx.name)}</div>
        </div>
        <div class="card">
          <div class="detail-row"><span>Status</span><span>Completed</span></div>
          <div class="detail-row"><span>Reference</span><span>${escapeHtml(tx.ref)}</span></div>
          <div class="detail-row"><span>Counterparty account</span><span>${escapeHtml(tx.iban)}</span></div>
          <div class="detail-row"><span>Value date</span><span>${escapeHtml(tx.date)}</span></div>
          <div class="detail-row"><span>Account</span><span>Business Checking · USD</span></div>
        </div>
      </div>
      ${tx.amount < 0 ? `<a class="ghost" href="chargeback.html?id=${tx.id}">Request chargeback</a>` : ""}`;
  }

  const successTitle = document.getElementById("successTitle");
  if (successTitle) {
    successTitle.textContent = sessionStorage.getItem("successTitle") || "Request submitted";
    document.getElementById("successText").textContent = sessionStorage.getItem("successText") || "Your request has been received.";
  }

  const pendingToast = sessionStorage.getItem("toast");
  if (pendingToast) {
    sessionStorage.removeItem("toast");
    showToast(pendingToast);
  }

  wireRequiredButtons();
});
