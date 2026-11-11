const AUTH_KEY = "hsbcLoggedIn_v2";
const AUTH_LEGACY_KEYS = ["hsbcLoggedIn"];
const ACTIVITY_KEY = "hsbcLastActive";
const PROFILE_KEY = "hsbcProfile";
const ACCOUNT_VIEW_KEY = "hsbcAccount";
const SESSION_MS = 10 * 60 * 1000;
const PROFILES = {
  usd: {
    id: "usd",
    user: "Corey23923",
    pass: "Jaywideman78€€",
    name: "Corey Kohlman",
    initials: "CK",
    company: "Mediterranean Investment Capital Ltd",
    email: "corey.kohlman@medinvestcap.com",
    mobile: "+1 (212) 555-0184",
    address: "450 Lexington Ave, New York, NY 10017",
    customerId: "88421906",
    currency: "USD",
    currencySymbol: "$",
    locale: "en-US",
    tz: "America/New_York",
    city: "New York, United States",
    brandName: "HSBC",
    brandSvg: `<svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><polygon fill="#fff" points="24,2 44,13.5 44,34.5 24,46 4,34.5 4,13.5"/><polygon fill="#e31b24" points="24,10 36,17 36,31 24,38 12,31 12,17"/><polygon fill="#fff" points="24,16 31,20 31,28 24,32 17,28 17,20"/></svg>`,
    bank: "HSBC Bank USA, N.A.",
    routingLabel: "Routing",
    routing: "021001088",
    account: "850487014",
    accountMasked: "****7014",
    swift: "MRMDUS33",
    branch: "New York, United States",
    accountType: "Business Checking · USD",
    chequingLabel: "Business Checking",
    balance: 2159450,
    wages: {
      last: "$52,480.00",
      lastDate: "Last paid September 1, 2026",
      next: "Oct 1, 2026",
      ytd: "$472,320.00"
    },
    contactBank: "HSBC Bank USA",
    notifications: [
      { unread: true, title: "Payroll posted", text: "Monthly wages of $52,480.00 were credited to Business Checking.", time: "Sep 1, 2026", datetime: "2026-09-01" },
      { unread: true, title: "Incoming credit", text: "Management payment of $22,400.00 has been applied to your account.", time: "Aug 15, 2026", datetime: "2026-08-15" },
      { unread: true, title: "Statement ready", text: "Your August 2026 Business Checking statement is available to download.", time: "Sep 1, 2026", datetime: "2026-09-01" },
      { unread: false, title: "Signed in from New York", text: "A new online banking session was started from New York, United States.", time: "Today · 8:00 AM ET", datetime: "2026-09-19" },
      { unread: false, title: "Direct deposit active", text: "Monthly payroll is set to credit this account on the 1st of each month.", time: "Sep 1, 2026", datetime: "2026-09-01" }
    ],
    txs: [
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
    ]
  },
  cad: {
    id: "cad",
    name: "Corey Kohlman",
    initials: "CK",
    company: "Singh Builders Ltd.",
    email: "corey.kohlman@medinvestcap.com",
    mobile: "+1 (416) 555-0198",
    address: "151 Karl Clark Road NW, Edmonton, AB T6N 1H5",
    customerId: "88421906",
    currency: "CAD",
    currencySymbol: "$",
    locale: "en-CA",
    tz: "America/Edmonton",
    city: "Edmonton, Canada",
    brandName: "Servus Credit Union",
    brandSvg: `<svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true"><rect width="28" height="28" rx="8" fill="#fff"/><text x="14" y="21" text-anchor="middle" font-size="17" font-weight="800" fill="#e31b24" font-family="Inter,Arial,sans-serif">S</text></svg>`,
    bank: "Servus Credit Union",
    routingLabel: "Transit / Inst.",
    routing: "10202 / 016",
    account: "448219073",
    accountMasked: "****9073",
    swift: "HKBCCATT",
    branch: "Commercial Markets Branch, Edmonton",
    compactOverview: true,
    accountType: "Business Chequing · CAD",
    chequingLabel: "Business Chequing",
    balance: 23037283,
    wages: {
      last: "$41,800.00",
      lastDate: "Last paid November 1, 2026",
      next: "Dec 1, 2026",
      ytd: "$459,800.00"
    },
    contactBank: "Servus Credit Union",
    notifications: [
      { unread: true, title: "Cheque deposit", text: "Cheque 000561 for $24,975.10 was deposited to Business Chequing.", time: "Sep 30, 2026", datetime: "2026-09-30" },
      { unread: true, title: "Statement ready", text: "Your October 2026 Business Chequing statement is available to download.", time: "Nov 1, 2026", datetime: "2026-11-01" },
      { unread: false, title: "Signed in from Edmonton", text: "A new online banking session was started from Edmonton, Canada.", time: "Nov 3, 2026", datetime: "2026-11-03" }
    ],
    txs: [
      { id: 1, name: "Cheque deposit", date: "Sep 30, 2026", iso: "2026-09-30", amount: 24975.10, iban: "0102 0201 4482", ref: "CHQ-000561" },
      { id: 2, name: "Rona Edmonton", date: "Oct 9, 2026", iso: "2026-10-09", amount: -3284.55, iban: "0004 0016 2201", ref: "POS-202610" },
      { id: 3, name: "Sturgeon Contracting", date: "Oct 21, 2026", iso: "2026-10-21", amount: 18640.00, iban: "0001 2345 8810", ref: "DEP-202610" },
      { id: 4, name: "UFA Petroleum", date: "Oct 29, 2026", iso: "2026-10-29", amount: -864.22, iban: "0008 0044 1190", ref: "POS-20261029" }
    ]
  },
  jamie: {
    id: "jamie",
    user: "JamieT06",
    pass: "Tanner10",
    name: "Jamie Tanner",
    initials: "JT",
    company: "Jamie Tanner",
    email: "jamie.tanner@icloud.com",
    mobile: "+1 (210) 555-0144",
    address: "3106 Goldsboro Street, San Antonio Tx 78230 USA",
    customerId: "90218447",
    currency: "USD",
    currencySymbol: "$",
    locale: "en-US",
    tz: "America/Chicago",
    city: "San Antonio, United States",
    brandName: "HSBC",
    brandSvg: `<svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><polygon fill="#fff" points="24,2 44,13.5 44,34.5 24,46 4,34.5 4,13.5"/><polygon fill="#e31b24" points="24,10 36,17 36,31 24,38 12,31 12,17"/><polygon fill="#fff" points="24,16 31,20 31,28 24,32 17,28 17,20"/></svg>`,
    bank: "HSBC Bank USA, N.A.",
    routingLabel: "Routing",
    routing: "021001088",
    account: "772184056",
    accountMasked: "****4056",
    swift: "MRMDUS33",
    branch: "San Antonio, United States",
    accountType: "Personal Checking · USD",
    chequingLabel: "Personal Checking",
    balance: 55868,
    contactBank: "HSBC Bank USA",
    transferHold: {
      title: "Unable to complete transfer",
      html: `<p>Your account is currently restricted. Outgoing transfers cannot be processed until the outstanding balance is paid.</p>
<p class="fail-hold">Outstanding amount: $4,850.00</p>
<p>Please contact us to resolve this.</p>`
    },
    chargebackHold: {
      title: "Unable to complete chargeback",
      html: `<p>Your account is currently restricted. Chargeback requests cannot be processed until the outstanding balance is paid.</p>
<p class="fail-hold">Outstanding amount: $4,850.00</p>
<p>Please contact us to resolve this.</p>`
    },
    notifications: [
      { unread: true, title: "Apple Cash received", text: "You received $86.00 via Apple Cash.", time: "Nov 10, 2026", datetime: "2026-11-10" },
      { unread: true, title: "Statement ready", text: "Your October 2026 Personal Checking statement is available to download.", time: "Nov 1, 2026", datetime: "2026-11-01" },
      { unread: false, title: "Signed in from San Antonio", text: "A new online banking session was started from San Antonio, United States.", time: "Nov 10, 2026", datetime: "2026-11-10" }
    ],
    txs: [
      { id: 1, name: 'Souvla', date: 'Nov 10, 2026', iso: '2026-11-10', amount: -17.41, iban: '4111 0012 8890', ref: 'POS-20261110' },
      { id: 2, name: 'Apple Cash', date: 'Nov 10, 2026', iso: '2026-11-10', amount: 86.00, iban: '0001 8821 4409', ref: 'APC-20261110' },
      { id: 3, name: 'CVS Pharmacy', date: 'Nov 9, 2026', iso: '2026-11-09', amount: -15.85, iban: '4111 0012 8890', ref: 'POS-20261109' },
      { id: 4, name: 'Verizon', date: 'Nov 8, 2026', iso: '2026-11-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20261108' },
      { id: 5, name: 'Nopa', date: 'Nov 7, 2026', iso: '2026-11-07', amount: -79.59, iban: '4111 0012 8890', ref: 'POS-20261107' },
      { id: 6, name: 'Sweetgreen', date: 'Nov 7, 2026', iso: '2026-11-07', amount: -19.11, iban: '4111 0012 8890', ref: 'POS-20261107' },
      { id: 7, name: "Peet's Coffee", date: 'Nov 6, 2026', iso: '2026-11-06', amount: -6.06, iban: '4111 0012 8890', ref: 'POS-20261106' },
      { id: 8, name: 'Madewell', date: 'Nov 5, 2026', iso: '2026-11-05', amount: -130.80, iban: '4111 0012 8890', ref: 'POS-20261105' },
      { id: 9, name: 'Xfinity', date: 'Nov 5, 2026', iso: '2026-11-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20261105' },
      { id: 10, name: 'PG&E', date: 'Nov 3, 2026', iso: '2026-11-03', amount: -72.71, iban: '0003 1190 4420', ref: 'UTIL-20261103' },
      { id: 11, name: 'Transfer from savings', date: 'Nov 3, 2026', iso: '2026-11-03', amount: 1500.00, iban: '0210 0108 9100', ref: 'SAV-20261103' },
      { id: 12, name: 'Pacific Park Rent', date: 'Nov 1, 2026', iso: '2026-11-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20261101' },
      { id: 13, name: 'Netflix', date: 'Nov 1, 2026', iso: '2026-11-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20261101' },
      { id: 14, name: 'Direct deposit', date: 'Nov 1, 2026', iso: '2026-11-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20261101' },
      { id: 15, name: 'Whole Foods', date: 'Oct 31, 2026', iso: '2026-10-31', amount: -74.02, iban: '4111 0012 8890', ref: 'POS-20261031' },
      { id: 16, name: 'Apple Store', date: 'Oct 31, 2026', iso: '2026-10-31', amount: -61.43, iban: '4111 0012 8890', ref: 'POS-20261031' },
      { id: 17, name: 'Target', date: 'Oct 30, 2026', iso: '2026-10-30', amount: -36.87, iban: '4111 0012 8890', ref: 'POS-20261030' },
      { id: 18, name: 'Clipper transit', date: 'Oct 28, 2026', iso: '2026-10-28', amount: -2.62, iban: '4111 0012 8890', ref: 'POS-20261028' },
      { id: 19, name: 'Olive & June nails', date: 'Oct 27, 2026', iso: '2026-10-27', amount: -46.44, iban: '4111 0012 8890', ref: 'POS-20261027' },
      { id: 20, name: 'Transfer from savings', date: 'Oct 27, 2026', iso: '2026-10-27', amount: 2000.00, iban: '0210 0108 9100', ref: 'SAV-20261027' },
      { id: 21, name: 'Liholiho Yacht Club', date: 'Oct 26, 2026', iso: '2026-10-26', amount: -87.66, iban: '4111 0012 8890', ref: 'POS-20261026' },
      { id: 22, name: 'Zara', date: 'Oct 25, 2026', iso: '2026-10-25', amount: -71.30, iban: '4111 0012 8890', ref: 'POS-20261025' },
      { id: 23, name: 'DoorDash', date: 'Oct 25, 2026', iso: '2026-10-25', amount: -40.69, iban: '4111 0012 8890', ref: 'POS-20261025' },
      { id: 24, name: 'Zara', date: 'Oct 24, 2026', iso: '2026-10-24', amount: -92.19, iban: '4111 0012 8890', ref: 'POS-20261024' },
      { id: 25, name: 'Uber', date: 'Oct 24, 2026', iso: '2026-10-24', amount: -23.45, iban: '4111 0012 8890', ref: 'POS-20261024' },
      { id: 26, name: 'Poshmark sale', date: 'Oct 24, 2026', iso: '2026-10-24', amount: 124.50, iban: '0008 4410 2201', ref: 'PPL-20261024' },
      { id: 27, name: 'Nopa', date: 'Oct 23, 2026', iso: '2026-10-23', amount: -90.70, iban: '4111 0012 8890', ref: 'POS-20261023' },
      { id: 28, name: 'GEICO', date: 'Oct 22, 2026', iso: '2026-10-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20261022' },
      { id: 29, name: 'Drybar', date: 'Oct 21, 2026', iso: '2026-10-21', amount: -69.75, iban: '4111 0012 8890', ref: 'POS-20261021' },
      { id: 30, name: 'Apple One', date: 'Oct 20, 2026', iso: '2026-10-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20261020' },
      { id: 31, name: 'Instacart', date: 'Oct 19, 2026', iso: '2026-10-19', amount: -74.60, iban: '4111 0012 8890', ref: 'POS-20261019' },
      { id: 32, name: 'DoorDash', date: 'Oct 18, 2026', iso: '2026-10-18', amount: -29.71, iban: '4111 0012 8890', ref: 'POS-20261018' },
      { id: 33, name: 'Tartine Bakery', date: 'Oct 18, 2026', iso: '2026-10-18', amount: -10.20, iban: '4111 0012 8890', ref: 'POS-20261018' },
      { id: 34, name: 'Ulta Beauty', date: 'Oct 17, 2026', iso: '2026-10-17', amount: -25.30, iban: '4111 0012 8890', ref: 'POS-20261017' },
      { id: 35, name: 'Sweetgreen', date: 'Oct 17, 2026', iso: '2026-10-17', amount: -18.08, iban: '4111 0012 8890', ref: 'POS-20261017' },
      { id: 36, name: 'Lululemon', date: 'Oct 16, 2026', iso: '2026-10-16', amount: -158.00, iban: '4111 0012 8890', ref: 'POS-20261016' },
      { id: 37, name: 'Spotify', date: 'Oct 16, 2026', iso: '2026-10-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20261016' },
      { id: 38, name: 'Rainbow Grocery', date: 'Oct 15, 2026', iso: '2026-10-15', amount: -49.74, iban: '4111 0012 8890', ref: 'POS-20261015' },
      { id: 39, name: 'Direct deposit', date: 'Oct 15, 2026', iso: '2026-10-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20261015' },
      { id: 40, name: 'Uber Eats', date: 'Oct 13, 2026', iso: '2026-10-13', amount: -35.03, iban: '4111 0012 8890', ref: 'POS-20261013' },
      { id: 41, name: 'Equinox', date: 'Oct 12, 2026', iso: '2026-10-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20261012' },
      { id: 42, name: 'Amazon refund', date: 'Oct 12, 2026', iso: '2026-10-12', amount: 42.18, iban: '4111 0012 8890', ref: 'REF-20261012' },
      { id: 43, name: 'Zara', date: 'Oct 11, 2026', iso: '2026-10-11', amount: -62.31, iban: '4111 0012 8890', ref: 'POS-20261011' },
      { id: 44, name: 'Liholiho Yacht Club', date: 'Oct 10, 2026', iso: '2026-10-10', amount: -87.05, iban: '4111 0012 8890', ref: 'POS-20261010' },
      { id: 45, name: 'Rainbow Grocery', date: 'Oct 10, 2026', iso: '2026-10-10', amount: -67.53, iban: '4111 0012 8890', ref: 'POS-20261010' },
      { id: 46, name: 'Verizon', date: 'Oct 8, 2026', iso: '2026-10-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20261008' },
      { id: 47, name: 'PayPal', date: 'Oct 8, 2026', iso: '2026-10-08', amount: 450.00, iban: '0001 8821 4409', ref: 'PPL-20261008' },
      { id: 48, name: 'b. Patisserie', date: 'Oct 6, 2026', iso: '2026-10-06', amount: -10.48, iban: '4111 0012 8890', ref: 'POS-20261006' },
      { id: 49, name: 'Xfinity', date: 'Oct 5, 2026', iso: '2026-10-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20261005' },
      { id: 50, name: 'Uber', date: 'Oct 5, 2026', iso: '2026-10-05', amount: -18.77, iban: '4111 0012 8890', ref: 'POS-20261005' },
      { id: 51, name: 'Olive & June nails', date: 'Oct 4, 2026', iso: '2026-10-04', amount: -47.46, iban: '4111 0012 8890', ref: 'POS-20261004' },
      { id: 52, name: 'Tartine Bakery', date: 'Oct 4, 2026', iso: '2026-10-04', amount: -17.94, iban: '4111 0012 8890', ref: 'POS-20261004' },
      { id: 53, name: 'PG&E', date: 'Oct 3, 2026', iso: '2026-10-03', amount: -107.65, iban: '0003 1190 4420', ref: 'UTIL-20261003' },
      { id: 54, name: 'The Mill', date: 'Oct 3, 2026', iso: '2026-10-03', amount: -13.26, iban: '4111 0012 8890', ref: 'POS-20261003' },
      { id: 55, name: 'Ritual Coffee', date: 'Oct 2, 2026', iso: '2026-10-02', amount: -6.14, iban: '4111 0012 8890', ref: 'POS-20261002' },
      { id: 56, name: 'Pacific Park Rent', date: 'Oct 1, 2026', iso: '2026-10-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20261001' },
      { id: 57, name: 'Netflix', date: 'Oct 1, 2026', iso: '2026-10-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20261001' },
      { id: 58, name: 'Direct deposit', date: 'Oct 1, 2026', iso: '2026-10-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20261001' },
      { id: 59, name: 'Uber Eats', date: 'Sep 29, 2026', iso: '2026-09-29', amount: -36.76, iban: '4111 0012 8890', ref: 'POS-20260929' },
      { id: 60, name: 'State Bird Provisions', date: 'Sep 28, 2026', iso: '2026-09-28', amount: -63.11, iban: '4111 0012 8890', ref: 'POS-20260928' },
      { id: 61, name: 'Instacart', date: 'Sep 27, 2026', iso: '2026-09-27', amount: -72.50, iban: '4111 0012 8890', ref: 'POS-20260927' },
      { id: 62, name: 'Rainbow Grocery', date: 'Sep 27, 2026', iso: '2026-09-27', amount: -39.44, iban: '4111 0012 8890', ref: 'POS-20260927' },
      { id: 63, name: 'Blushington', date: 'Sep 26, 2026', iso: '2026-09-26', amount: -74.50, iban: '4111 0012 8890', ref: 'POS-20260926' },
      { id: 64, name: 'Madewell', date: 'Sep 26, 2026', iso: '2026-09-26', amount: -73.83, iban: '4111 0012 8890', ref: 'POS-20260926' },
      { id: 65, name: 'Venmo from K. Brooks', date: 'Sep 26, 2026', iso: '2026-09-26', amount: 68.40, iban: '0001 8821 4410', ref: 'VEN-20260926' },
      { id: 66, name: "Peet's Coffee", date: 'Sep 25, 2026', iso: '2026-09-25', amount: -7.09, iban: '4111 0012 8890', ref: 'POS-20260925' },
      { id: 67, name: 'The Mill', date: 'Sep 24, 2026', iso: '2026-09-24', amount: -14.13, iban: '4111 0012 8890', ref: 'POS-20260924' },
      { id: 68, name: 'Blushington', date: 'Sep 23, 2026', iso: '2026-09-23', amount: -81.34, iban: '4111 0012 8890', ref: 'POS-20260923' },
      { id: 69, name: 'GEICO', date: 'Sep 22, 2026', iso: '2026-09-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260922' },
      { id: 70, name: 'Apple One', date: 'Sep 20, 2026', iso: '2026-09-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260920' },
      { id: 71, name: 'Nordstrom Anniversary', date: 'Sep 19, 2026', iso: '2026-09-19', amount: -264.80, iban: '4111 0012 8890', ref: 'POS-20260919' },
      { id: 72, name: 'Lyft', date: 'Sep 19, 2026', iso: '2026-09-19', amount: -16.20, iban: '4111 0012 8890', ref: 'POS-20260919' },
      { id: 73, name: 'Rainbow Grocery', date: 'Sep 18, 2026', iso: '2026-09-18', amount: -36.59, iban: '4111 0012 8890', ref: 'POS-20260918' },
      { id: 74, name: 'Nopa', date: 'Sep 17, 2026', iso: '2026-09-17', amount: -89.71, iban: '4111 0012 8890', ref: 'POS-20260917' },
      { id: 75, name: 'Spotify', date: 'Sep 16, 2026', iso: '2026-09-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260916' },
      { id: 76, name: 'Direct deposit', date: 'Sep 15, 2026', iso: '2026-09-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260915' },
      { id: 77, name: 'Ulta rewards', date: 'Sep 14, 2026', iso: '2026-09-14', amount: 25.00, iban: '4111 0012 8890', ref: 'RWD-20260914' },
      { id: 78, name: 'Instacart', date: 'Sep 13, 2026', iso: '2026-09-13', amount: -91.11, iban: '4111 0012 8890', ref: 'POS-20260913' },
      { id: 79, name: 'Souvla', date: 'Sep 13, 2026', iso: '2026-09-13', amount: -28.54, iban: '4111 0012 8890', ref: 'POS-20260913' },
      { id: 80, name: 'Equinox', date: 'Sep 12, 2026', iso: '2026-09-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260912' },
      { id: 81, name: 'Ulta Beauty', date: 'Sep 12, 2026', iso: '2026-09-12', amount: -23.91, iban: '4111 0012 8890', ref: 'POS-20260912' },
      { id: 82, name: 'Ulta Beauty', date: 'Sep 11, 2026', iso: '2026-09-11', amount: -52.20, iban: '4111 0012 8890', ref: 'POS-20260911' },
      { id: 83, name: 'State Bird Provisions', date: 'Sep 9, 2026', iso: '2026-09-09', amount: -57.53, iban: '4111 0012 8890', ref: 'POS-20260909' },
      { id: 84, name: 'Expense reimbursement', date: 'Sep 9, 2026', iso: '2026-09-09', amount: 218.40, iban: '0210 0108 7721', ref: 'EXP-20260909' },
      { id: 85, name: 'Verizon', date: 'Sep 8, 2026', iso: '2026-09-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260908' },
      { id: 86, name: 'Uber', date: 'Sep 7, 2026', iso: '2026-09-07', amount: -10.37, iban: '4111 0012 8890', ref: 'POS-20260907' },
      { id: 87, name: 'Glossier', date: 'Sep 6, 2026', iso: '2026-09-06', amount: -40.64, iban: '4111 0012 8890', ref: 'POS-20260906' },
      { id: 88, name: 'Apple Store', date: 'Sep 6, 2026', iso: '2026-09-06', amount: -32.17, iban: '4111 0012 8890', ref: 'POS-20260906' },
      { id: 89, name: 'Xfinity', date: 'Sep 5, 2026', iso: '2026-09-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260905' },
      { id: 90, name: 'Ulta Beauty', date: 'Sep 5, 2026', iso: '2026-09-05', amount: -46.60, iban: '4111 0012 8890', ref: 'POS-20260905' },
      { id: 91, name: 'Dental copay', date: 'Sep 4, 2026', iso: '2026-09-04', amount: -185.00, iban: '4111 0012 8890', ref: 'MED-20260904' },
      { id: 92, name: 'PG&E', date: 'Sep 3, 2026', iso: '2026-09-03', amount: -99.49, iban: '0003 1190 4420', ref: 'UTIL-20260903' },
      { id: 93, name: 'One Medical', date: 'Sep 2, 2026', iso: '2026-09-02', amount: -43.59, iban: '4111 0012 8890', ref: 'POS-20260902' },
      { id: 94, name: 'Pacific Park Rent', date: 'Sep 1, 2026', iso: '2026-09-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260901' },
      { id: 95, name: 'Netflix', date: 'Sep 1, 2026', iso: '2026-09-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260901' },
      { id: 96, name: 'Direct deposit', date: 'Sep 1, 2026', iso: '2026-09-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260901' },
      { id: 97, name: 'Blushington', date: 'Aug 31, 2026', iso: '2026-08-31', amount: -62.29, iban: '4111 0012 8890', ref: 'POS-20260831' },
      { id: 98, name: 'Drybar blowout', date: 'Aug 30, 2026', iso: '2026-08-30', amount: -55.76, iban: '4111 0012 8890', ref: 'POS-20260830' },
      { id: 99, name: 'Olive & June nails', date: 'Aug 30, 2026', iso: '2026-08-30', amount: -52.30, iban: '4111 0012 8890', ref: 'POS-20260830' },
      { id: 100, name: 'Olive & June nails', date: 'Aug 29, 2026', iso: '2026-08-29', amount: -58.78, iban: '4111 0012 8890', ref: 'POS-20260829' },
      { id: 101, name: 'Tartine Bakery', date: 'Aug 29, 2026', iso: '2026-08-29', amount: -17.41, iban: '4111 0012 8890', ref: 'POS-20260829' },
      { id: 102, name: 'Cash back', date: 'Aug 28, 2026', iso: '2026-08-28', amount: 37.12, iban: '0210 0108 7721', ref: 'CSH-20260828' },
      { id: 103, name: 'Starbucks', date: 'Aug 27, 2026', iso: '2026-08-27', amount: -8.32, iban: '4111 0012 8890', ref: 'POS-20260827' },
      { id: 104, name: 'Starbucks', date: 'Aug 25, 2026', iso: '2026-08-25', amount: -9.40, iban: '4111 0012 8890', ref: 'POS-20260825' },
      { id: 105, name: 'Nopa', date: 'Aug 23, 2026', iso: '2026-08-23', amount: -78.95, iban: '4111 0012 8890', ref: 'POS-20260823' },
      { id: 106, name: 'Drybar', date: 'Aug 23, 2026', iso: '2026-08-23', amount: -65.04, iban: '4111 0012 8890', ref: 'POS-20260823' },
      { id: 107, name: 'GEICO', date: 'Aug 22, 2026', iso: '2026-08-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260822' },
      { id: 108, name: 'Lululemon', date: 'Aug 22, 2026', iso: '2026-08-22', amount: -123.01, iban: '4111 0012 8890', ref: 'POS-20260822' },
      { id: 109, name: 'Crate & Barrel', date: 'Aug 21, 2026', iso: '2026-08-21', amount: -486.00, iban: '4111 0012 8890', ref: 'POS-20260821' },
      { id: 110, name: 'Blue Bottle Coffee', date: 'Aug 21, 2026', iso: '2026-08-21', amount: -7.33, iban: '4111 0012 8890', ref: 'POS-20260821' },
      { id: 111, name: 'Drybar blowout', date: 'Aug 20, 2026', iso: '2026-08-20', amount: -46.36, iban: '4111 0012 8890', ref: 'POS-20260820' },
      { id: 112, name: 'Apple One', date: 'Aug 20, 2026', iso: '2026-08-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260820' },
      { id: 113, name: 'IKEA', date: 'Aug 19, 2026', iso: '2026-08-19', amount: -42.37, iban: '4111 0012 8890', ref: 'POS-20260819' },
      { id: 114, name: 'Uber', date: 'Aug 18, 2026', iso: '2026-08-18', amount: -28.36, iban: '4111 0012 8890', ref: 'POS-20260818' },
      { id: 115, name: 'Olive & June nails', date: 'Aug 16, 2026', iso: '2026-08-16', amount: -59.84, iban: '4111 0012 8890', ref: 'POS-20260816' },
      { id: 116, name: 'Spotify', date: 'Aug 16, 2026', iso: '2026-08-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260816' },
      { id: 117, name: 'Direct deposit', date: 'Aug 15, 2026', iso: '2026-08-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260815' },
      { id: 118, name: 'Lyft', date: 'Aug 14, 2026', iso: '2026-08-14', amount: -18.87, iban: '4111 0012 8890', ref: 'POS-20260814' },
      { id: 119, name: 'DoorDash', date: 'Aug 13, 2026', iso: '2026-08-13', amount: -25.69, iban: '4111 0012 8890', ref: 'POS-20260813' },
      { id: 120, name: 'Equinox', date: 'Aug 12, 2026', iso: '2026-08-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260812' },
      { id: 121, name: "Peet's Coffee", date: 'Aug 11, 2026', iso: '2026-08-11', amount: -6.10, iban: '4111 0012 8890', ref: 'POS-20260811' },
      { id: 122, name: 'Madewell', date: 'Aug 9, 2026', iso: '2026-08-09', amount: -141.11, iban: '4111 0012 8890', ref: 'POS-20260809' },
      { id: 123, name: 'Drybar', date: 'Aug 9, 2026', iso: '2026-08-09', amount: -51.03, iban: '4111 0012 8890', ref: 'POS-20260809' },
      { id: 124, name: 'Verizon', date: 'Aug 8, 2026', iso: '2026-08-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260808' },
      { id: 125, name: 'Venmo', date: 'Aug 8, 2026', iso: '2026-08-08', amount: 275.00, iban: '0001 8821 4409', ref: 'VEN-20260808' },
      { id: 126, name: 'Rainbow Grocery', date: 'Aug 7, 2026', iso: '2026-08-07', amount: -34.26, iban: '4111 0012 8890', ref: 'POS-20260807' },
      { id: 127, name: 'Glossier', date: 'Aug 6, 2026', iso: '2026-08-06', amount: -40.96, iban: '4111 0012 8890', ref: 'POS-20260806' },
      { id: 128, name: 'Xfinity', date: 'Aug 5, 2026', iso: '2026-08-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260805' },
      { id: 129, name: 'Lyft', date: 'Aug 4, 2026', iso: '2026-08-04', amount: -11.23, iban: '4111 0012 8890', ref: 'POS-20260804' },
      { id: 130, name: 'PG&E', date: 'Aug 3, 2026', iso: '2026-08-03', amount: -93.60, iban: '0003 1190 4420', ref: 'UTIL-20260803' },
      { id: 131, name: 'Lululemon', date: 'Aug 2, 2026', iso: '2026-08-02', amount: -95.95, iban: '4111 0012 8890', ref: 'POS-20260802' },
      { id: 132, name: 'Pacific Park Rent', date: 'Aug 1, 2026', iso: '2026-08-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260801' },
      { id: 133, name: 'Netflix', date: 'Aug 1, 2026', iso: '2026-08-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260801' },
      { id: 134, name: 'Direct deposit', date: 'Aug 1, 2026', iso: '2026-08-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260801' },
      { id: 135, name: 'Sweetgreen', date: 'Jul 31, 2026', iso: '2026-07-31', amount: -18.63, iban: '4111 0012 8890', ref: 'POS-20260731' },
      { id: 136, name: 'SoulCycle', date: 'Jul 29, 2026', iso: '2026-07-29', amount: -37.64, iban: '4111 0012 8890', ref: 'POS-20260729' },
      { id: 137, name: "Peet's Coffee", date: 'Jul 27, 2026', iso: '2026-07-27', amount: -8.18, iban: '4111 0012 8890', ref: 'POS-20260727' },
      { id: 138, name: 'Nopa', date: 'Jul 26, 2026', iso: '2026-07-26', amount: -72.91, iban: '4111 0012 8890', ref: 'POS-20260726' },
      { id: 139, name: 'Chipotle', date: 'Jul 26, 2026', iso: '2026-07-26', amount: -16.31, iban: '4111 0012 8890', ref: 'POS-20260726' },
      { id: 140, name: 'Liholiho Yacht Club', date: 'Jul 25, 2026', iso: '2026-07-25', amount: -72.15, iban: '4111 0012 8890', ref: 'POS-20260725' },
      { id: 141, name: 'Target', date: 'Jul 25, 2026', iso: '2026-07-25', amount: -37.78, iban: '4111 0012 8890', ref: 'POS-20260725' },
      { id: 142, name: 'Amazon', date: 'Jul 23, 2026', iso: '2026-07-23', amount: -41.52, iban: '4111 0012 8890', ref: 'POS-20260723' },
      { id: 143, name: 'GEICO', date: 'Jul 22, 2026', iso: '2026-07-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260722' },
      { id: 144, name: 'Mobile check deposit', date: 'Jul 22, 2026', iso: '2026-07-22', amount: 350.00, iban: '0001 8821 4409', ref: 'MCD-20260722' },
      { id: 145, name: 'Blue Bottle Coffee', date: 'Jul 21, 2026', iso: '2026-07-21', amount: -7.56, iban: '4111 0012 8890', ref: 'POS-20260721' },
      { id: 146, name: 'Apple One', date: 'Jul 20, 2026', iso: '2026-07-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260720' },
      { id: 147, name: 'Nopa', date: 'Jul 19, 2026', iso: '2026-07-19', amount: -76.15, iban: '4111 0012 8890', ref: 'POS-20260719' },
      { id: 148, name: 'Apple MacBook payment', date: 'Jul 18, 2026', iso: '2026-07-18', amount: -249.00, iban: '4111 0012 8890', ref: 'POS-20260718' },
      { id: 149, name: 'Sweetgreen', date: 'Jul 18, 2026', iso: '2026-07-18', amount: -22.33, iban: '4111 0012 8890', ref: 'POS-20260718' },
      { id: 150, name: 'Rainbow Grocery', date: 'Jul 17, 2026', iso: '2026-07-17', amount: -36.18, iban: '4111 0012 8890', ref: 'POS-20260717' },
      { id: 151, name: 'Spotify', date: 'Jul 16, 2026', iso: '2026-07-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260716' },
      { id: 152, name: 'Direct deposit', date: 'Jul 15, 2026', iso: '2026-07-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260715' },
      { id: 153, name: 'Target', date: 'Jul 14, 2026', iso: '2026-07-14', amount: -24.12, iban: '4111 0012 8890', ref: 'POS-20260714' },
      { id: 154, name: 'Equinox', date: 'Jul 12, 2026', iso: '2026-07-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260712' },
      { id: 155, name: 'DoorDash', date: 'Jul 12, 2026', iso: '2026-07-12', amount: -38.72, iban: '4111 0012 8890', ref: 'POS-20260712' },
      { id: 156, name: 'Blushington', date: 'Jul 11, 2026', iso: '2026-07-11', amount: -74.85, iban: '4111 0012 8890', ref: 'POS-20260711' },
      { id: 157, name: 'Zara', date: 'Jul 11, 2026', iso: '2026-07-11', amount: -43.16, iban: '4111 0012 8890', ref: 'POS-20260711' },
      { id: 158, name: "Peet's Coffee", date: 'Jul 9, 2026', iso: '2026-07-09', amount: -5.60, iban: '4111 0012 8890', ref: 'POS-20260709' },
      { id: 159, name: 'Verizon', date: 'Jul 8, 2026', iso: '2026-07-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260708' },
      { id: 160, name: 'Airbnb refund', date: 'Jul 8, 2026', iso: '2026-07-08', amount: 80.00, iban: '4111 0012 8890', ref: 'REF-20260708' },
      { id: 161, name: 'Whole Foods', date: 'Jul 7, 2026', iso: '2026-07-07', amount: -59.53, iban: '4111 0012 8890', ref: 'POS-20260707' },
      { id: 162, name: 'Glossier', date: 'Jul 6, 2026', iso: '2026-07-06', amount: -42.97, iban: '4111 0012 8890', ref: 'POS-20260706' },
      { id: 163, name: 'Xfinity', date: 'Jul 5, 2026', iso: '2026-07-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260705' },
      { id: 164, name: 'Amazon', date: 'Jul 5, 2026', iso: '2026-07-05', amount: -21.11, iban: '4111 0012 8890', ref: 'POS-20260705' },
      { id: 165, name: 'Nopa', date: 'Jul 4, 2026', iso: '2026-07-04', amount: -54.66, iban: '4111 0012 8890', ref: 'POS-20260704' },
      { id: 166, name: 'Chipotle', date: 'Jul 4, 2026', iso: '2026-07-04', amount: -13.78, iban: '4111 0012 8890', ref: 'POS-20260704' },
      { id: 167, name: 'Fourth of July dinner', date: 'Jul 3, 2026', iso: '2026-07-03', amount: -156.20, iban: '4111 0012 8890', ref: 'POS-20260703' },
      { id: 168, name: 'PG&E', date: 'Jul 3, 2026', iso: '2026-07-03', amount: -77.23, iban: '0003 1190 4420', ref: 'UTIL-20260703' },
      { id: 169, name: 'Uber', date: 'Jul 2, 2026', iso: '2026-07-02', amount: -26.87, iban: '4111 0012 8890', ref: 'POS-20260702' },
      { id: 170, name: 'Pacific Park Rent', date: 'Jul 1, 2026', iso: '2026-07-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260701' },
      { id: 171, name: 'Netflix', date: 'Jul 1, 2026', iso: '2026-07-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260701' },
      { id: 172, name: 'Direct deposit', date: 'Jul 1, 2026', iso: '2026-07-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260701' },
      { id: 173, name: "Trader Joe's", date: 'Jun 30, 2026', iso: '2026-06-30', amount: -41.85, iban: '4111 0012 8890', ref: 'POS-20260630' },
      { id: 174, name: 'Foreign Cinema', date: 'Jun 28, 2026', iso: '2026-06-28', amount: -114.18, iban: '4111 0012 8890', ref: 'POS-20260628' },
      { id: 175, name: 'Starbucks', date: 'Jun 28, 2026', iso: '2026-06-28', amount: -7.20, iban: '4111 0012 8890', ref: 'POS-20260628' },
      { id: 176, name: 'Madison Reed Color Bar', date: 'Jun 27, 2026', iso: '2026-06-27', amount: -101.93, iban: '4111 0012 8890', ref: 'POS-20260627' },
      { id: 177, name: 'Drybar blowout', date: 'Jun 27, 2026', iso: '2026-06-27', amount: -61.63, iban: '4111 0012 8890', ref: 'POS-20260627' },
      { id: 178, name: 'Glossier', date: 'Jun 26, 2026', iso: '2026-06-26', amount: -18.70, iban: '4111 0012 8890', ref: 'POS-20260626' },
      { id: 179, name: 'Souvla', date: 'Jun 24, 2026', iso: '2026-06-24', amount: -25.30, iban: '4111 0012 8890', ref: 'POS-20260624' },
      { id: 180, name: 'Target', date: 'Jun 23, 2026', iso: '2026-06-23', amount: -24.80, iban: '4111 0012 8890', ref: 'POS-20260623' },
      { id: 181, name: 'GEICO', date: 'Jun 22, 2026', iso: '2026-06-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260622' },
      { id: 182, name: 'Ulta Beauty', date: 'Jun 21, 2026', iso: '2026-06-21', amount: -52.39, iban: '4111 0012 8890', ref: 'POS-20260621' },
      { id: 183, name: 'Tartine Bakery', date: 'Jun 21, 2026', iso: '2026-06-21', amount: -15.86, iban: '4111 0012 8890', ref: 'POS-20260621' },
      { id: 184, name: 'Nopa', date: 'Jun 20, 2026', iso: '2026-06-20', amount: -49.92, iban: '4111 0012 8890', ref: 'POS-20260620' },
      { id: 185, name: 'Apple One', date: 'Jun 20, 2026', iso: '2026-06-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260620' },
      { id: 186, name: 'Sephora', date: 'Jun 18, 2026', iso: '2026-06-18', amount: -63.84, iban: '4111 0012 8890', ref: 'POS-20260618' },
      { id: 187, name: 'PayPal', date: 'Jun 18, 2026', iso: '2026-06-18', amount: 156.00, iban: '0008 4410 2201', ref: 'PPL-20260618' },
      { id: 188, name: 'Nordstrom', date: 'Jun 17, 2026', iso: '2026-06-17', amount: -123.30, iban: '4111 0012 8890', ref: 'POS-20260617' },
      { id: 189, name: 'Spotify', date: 'Jun 16, 2026', iso: '2026-06-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260616' },
      { id: 190, name: 'Direct deposit', date: 'Jun 15, 2026', iso: '2026-06-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260615' },
      { id: 191, name: 'Drybar', date: 'Jun 14, 2026', iso: '2026-06-14', amount: -62.79, iban: '4111 0012 8890', ref: 'POS-20260614' },
      { id: 192, name: 'Ulta Beauty', date: 'Jun 14, 2026', iso: '2026-06-14', amount: -33.31, iban: '4111 0012 8890', ref: 'POS-20260614' },
      { id: 193, name: 'Souvla', date: 'Jun 13, 2026', iso: '2026-06-13', amount: -27.94, iban: '4111 0012 8890', ref: 'POS-20260613' },
      { id: 194, name: 'Tartine Bakery', date: 'Jun 13, 2026', iso: '2026-06-13', amount: -15.89, iban: '4111 0012 8890', ref: 'POS-20260613' },
      { id: 195, name: 'Airbnb Napa', date: 'Jun 12, 2026', iso: '2026-06-12', amount: -640.00, iban: '4111 0012 8890', ref: 'TRV-20260612' },
      { id: 196, name: 'Equinox', date: 'Jun 12, 2026', iso: '2026-06-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260612' },
      { id: 197, name: 'Lyft', date: 'Jun 10, 2026', iso: '2026-06-10', amount: -18.42, iban: '4111 0012 8890', ref: 'POS-20260610' },
      { id: 198, name: 'Ritual Coffee', date: 'Jun 9, 2026', iso: '2026-06-09', amount: -8.31, iban: '4111 0012 8890', ref: 'POS-20260609' },
      { id: 199, name: 'Verizon', date: 'Jun 8, 2026', iso: '2026-06-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260608' },
      { id: 200, name: 'Freelance deposit', date: 'Jun 8, 2026', iso: '2026-06-08', amount: 950.00, iban: '0210 0108 7721', ref: 'FRC-20260608' },
      { id: 201, name: 'Liholiho Yacht Club', date: 'Jun 7, 2026', iso: '2026-06-07', amount: -85.02, iban: '4111 0012 8890', ref: 'POS-20260607' },
      { id: 202, name: 'Chipotle', date: 'Jun 7, 2026', iso: '2026-06-07', amount: -15.65, iban: '4111 0012 8890', ref: 'POS-20260607' },
      { id: 203, name: 'Target', date: 'Jun 6, 2026', iso: '2026-06-06', amount: -64.26, iban: '4111 0012 8890', ref: 'POS-20260606' },
      { id: 204, name: 'Olive & June nails', date: 'Jun 6, 2026', iso: '2026-06-06', amount: -55.82, iban: '4111 0012 8890', ref: 'POS-20260606' },
      { id: 205, name: 'Xfinity', date: 'Jun 5, 2026', iso: '2026-06-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260605' },
      { id: 206, name: 'Delta Airlines', date: 'Jun 4, 2026', iso: '2026-06-04', amount: -428.80, iban: '4111 0012 8890', ref: 'AIR-20260604' },
      { id: 207, name: 'PG&E', date: 'Jun 3, 2026', iso: '2026-06-03', amount: -97.37, iban: '0003 1190 4420', ref: 'UTIL-20260603' },
      { id: 208, name: 'One Medical', date: 'Jun 2, 2026', iso: '2026-06-02', amount: -30.13, iban: '4111 0012 8890', ref: 'POS-20260602' },
      { id: 209, name: 'Pacific Park Rent', date: 'Jun 1, 2026', iso: '2026-06-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260601' },
      { id: 210, name: 'Netflix', date: 'Jun 1, 2026', iso: '2026-06-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260601' },
      { id: 211, name: 'Direct deposit', date: 'Jun 1, 2026', iso: '2026-06-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260601' },
      { id: 212, name: 'Amazon', date: 'May 31, 2026', iso: '2026-05-31', amount: -55.01, iban: '4111 0012 8890', ref: 'POS-20260531' },
      { id: 213, name: 'Tartine Bakery', date: 'May 31, 2026', iso: '2026-05-31', amount: -14.34, iban: '4111 0012 8890', ref: 'POS-20260531' },
      { id: 214, name: 'Zara', date: 'May 30, 2026', iso: '2026-05-30', amount: -68.65, iban: '4111 0012 8890', ref: 'POS-20260530' },
      { id: 215, name: 'Drybar', date: 'May 28, 2026', iso: '2026-05-28', amount: -65.37, iban: '4111 0012 8890', ref: 'POS-20260528' },
      { id: 216, name: 'Olive & June nails', date: 'May 26, 2026', iso: '2026-05-26', amount: -66.56, iban: '4111 0012 8890', ref: 'POS-20260526' },
      { id: 217, name: 'Madison Reed Color Bar', date: 'May 24, 2026', iso: '2026-05-24', amount: -112.13, iban: '4111 0012 8890', ref: 'POS-20260524' },
      { id: 218, name: 'Foreign Cinema', date: 'May 24, 2026', iso: '2026-05-24', amount: -89.06, iban: '4111 0012 8890', ref: 'POS-20260524' },
      { id: 219, name: 'Nordstrom refund', date: 'May 24, 2026', iso: '2026-05-24', amount: 88.00, iban: '4111 0012 8890', ref: 'REF-20260524' },
      { id: 220, name: 'Souvla', date: 'May 23, 2026', iso: '2026-05-23', amount: -21.72, iban: '4111 0012 8890', ref: 'POS-20260523' },
      { id: 221, name: 'The Mill', date: 'May 23, 2026', iso: '2026-05-23', amount: -10.10, iban: '4111 0012 8890', ref: 'POS-20260523' },
      { id: 222, name: 'GEICO', date: 'May 22, 2026', iso: '2026-05-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260522' },
      { id: 223, name: 'Sephora', date: 'May 22, 2026', iso: '2026-05-22', amount: -72.56, iban: '4111 0012 8890', ref: 'POS-20260522' },
      { id: 224, name: 'Uber', date: 'May 21, 2026', iso: '2026-05-21', amount: -19.17, iban: '4111 0012 8890', ref: 'POS-20260521' },
      { id: 225, name: 'Apple One', date: 'May 20, 2026', iso: '2026-05-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260520' },
      { id: 226, name: 'b. Patisserie', date: 'May 19, 2026', iso: '2026-05-19', amount: -14.90, iban: '4111 0012 8890', ref: 'POS-20260519' },
      { id: 227, name: 'Madison Reed Color Bar', date: 'May 17, 2026', iso: '2026-05-17', amount: -162.19, iban: '4111 0012 8890', ref: 'POS-20260517' },
      { id: 228, name: 'Reformation', date: 'May 16, 2026', iso: '2026-05-16', amount: -312.00, iban: '4111 0012 8890', ref: 'POS-20260516' },
      { id: 229, name: 'Spotify', date: 'May 16, 2026', iso: '2026-05-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260516' },
      { id: 230, name: 'Direct deposit', date: 'May 15, 2026', iso: '2026-05-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260515' },
      { id: 231, name: 'Foreign Cinema', date: 'May 14, 2026', iso: '2026-05-14', amount: -117.40, iban: '4111 0012 8890', ref: 'POS-20260514' },
      { id: 232, name: 'DoorDash', date: 'May 13, 2026', iso: '2026-05-13', amount: -40.95, iban: '4111 0012 8890', ref: 'POS-20260513' },
      { id: 233, name: 'Equinox', date: 'May 12, 2026', iso: '2026-05-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260512' },
      { id: 234, name: 'Foreign Cinema', date: 'May 12, 2026', iso: '2026-05-12', amount: -100.99, iban: '4111 0012 8890', ref: 'POS-20260512' },
      { id: 235, name: 'Honor & Folly brunch', date: 'May 10, 2026', iso: '2026-05-10', amount: -94.60, iban: '4111 0012 8890', ref: 'POS-20260510' },
      { id: 236, name: 'Incoming ACH', date: 'May 9, 2026', iso: '2026-05-09', amount: 1200.00, iban: '0001 8821 4409', ref: 'ACH-20260509' },
      { id: 237, name: 'Verizon', date: 'May 8, 2026', iso: '2026-05-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260508' },
      { id: 238, name: 'SoulCycle', date: 'May 7, 2026', iso: '2026-05-07', amount: -37.32, iban: '4111 0012 8890', ref: 'POS-20260507' },
      { id: 239, name: 'Clipper transit', date: 'May 6, 2026', iso: '2026-05-06', amount: -3.15, iban: '4111 0012 8890', ref: 'POS-20260506' },
      { id: 240, name: 'Xfinity', date: 'May 5, 2026', iso: '2026-05-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260505' },
      { id: 241, name: 'Chipotle', date: 'May 4, 2026', iso: '2026-05-04', amount: -12.92, iban: '4111 0012 8890', ref: 'POS-20260504' },
      { id: 242, name: 'PG&E', date: 'May 3, 2026', iso: '2026-05-03', amount: -93.39, iban: '0003 1190 4420', ref: 'UTIL-20260503' },
      { id: 243, name: 'Instacart', date: 'May 2, 2026', iso: '2026-05-02', amount: -93.13, iban: '4111 0012 8890', ref: 'POS-20260502' },
      { id: 244, name: 'Blushington', date: 'May 2, 2026', iso: '2026-05-02', amount: -74.12, iban: '4111 0012 8890', ref: 'POS-20260502' },
      { id: 245, name: 'Pacific Park Rent', date: 'May 1, 2026', iso: '2026-05-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260501' },
      { id: 246, name: 'Netflix', date: 'May 1, 2026', iso: '2026-05-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260501' },
      { id: 247, name: 'Direct deposit', date: 'May 1, 2026', iso: '2026-05-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260501' },
      { id: 248, name: 'Blue Bottle Coffee', date: 'Apr 30, 2026', iso: '2026-04-30', amount: -7.06, iban: '4111 0012 8890', ref: 'POS-20260430' },
      { id: 249, name: 'Starbucks', date: 'Apr 29, 2026', iso: '2026-04-29', amount: -10.77, iban: '4111 0012 8890', ref: 'POS-20260429' },
      { id: 250, name: 'Tartine Bakery', date: 'Apr 28, 2026', iso: '2026-04-28', amount: -17.12, iban: '4111 0012 8890', ref: 'POS-20260428' },
      { id: 251, name: 'Health reimbursement', date: 'Apr 28, 2026', iso: '2026-04-28', amount: 340.00, iban: '0210 0108 7721', ref: 'HRA-20260428' },
      { id: 252, name: 'Nordstrom', date: 'Apr 26, 2026', iso: '2026-04-26', amount: -180.52, iban: '4111 0012 8890', ref: 'POS-20260426' },
      { id: 253, name: 'Ritual Coffee', date: 'Apr 26, 2026', iso: '2026-04-26', amount: -8.72, iban: '4111 0012 8890', ref: 'POS-20260426' },
      { id: 254, name: 'Chipotle', date: 'Apr 25, 2026', iso: '2026-04-25', amount: -15.27, iban: '4111 0012 8890', ref: 'POS-20260425' },
      { id: 255, name: 'Safeway', date: 'Apr 24, 2026', iso: '2026-04-24', amount: -68.49, iban: '4111 0012 8890', ref: 'POS-20260424' },
      { id: 256, name: 'Ritual Coffee', date: 'Apr 23, 2026', iso: '2026-04-23', amount: -9.25, iban: '4111 0012 8890', ref: 'POS-20260423' },
      { id: 257, name: 'One Medical annual', date: 'Apr 22, 2026', iso: '2026-04-22', amount: -199.00, iban: '4111 0012 8890', ref: 'MED-20260422' },
      { id: 258, name: 'GEICO', date: 'Apr 22, 2026', iso: '2026-04-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260422' },
      { id: 259, name: 'Warby Parker', date: 'Apr 21, 2026', iso: '2026-04-21', amount: -96.91, iban: '4111 0012 8890', ref: 'POS-20260421' },
      { id: 260, name: 'Apple One', date: 'Apr 20, 2026', iso: '2026-04-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260420' },
      { id: 261, name: "Trader Joe's", date: 'Apr 19, 2026', iso: '2026-04-19', amount: -48.88, iban: '4111 0012 8890', ref: 'POS-20260419' },
      { id: 262, name: "Trader Joe's", date: 'Apr 18, 2026', iso: '2026-04-18', amount: -30.80, iban: '4111 0012 8890', ref: 'POS-20260418' },
      { id: 263, name: 'Chipotle', date: 'Apr 18, 2026', iso: '2026-04-18', amount: -14.17, iban: '4111 0012 8890', ref: 'POS-20260418' },
      { id: 264, name: 'ClassPass', date: 'Apr 17, 2026', iso: '2026-04-17', amount: -23.05, iban: '4111 0012 8890', ref: 'POS-20260417' },
      { id: 265, name: 'Olive & June nails', date: 'Apr 16, 2026', iso: '2026-04-16', amount: -54.79, iban: '4111 0012 8890', ref: 'POS-20260416' },
      { id: 266, name: 'Spotify', date: 'Apr 16, 2026', iso: '2026-04-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260416' },
      { id: 267, name: 'Direct deposit', date: 'Apr 15, 2026', iso: '2026-04-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260415' },
      { id: 268, name: 'IRS tax refund', date: 'Apr 14, 2026', iso: '2026-04-14', amount: 2840.00, iban: '0009 0012 0001', ref: 'TAX-20260414' },
      { id: 269, name: "Trader Joe's", date: 'Apr 13, 2026', iso: '2026-04-13', amount: -34.92, iban: '4111 0012 8890', ref: 'POS-20260413' },
      { id: 270, name: 'Equinox', date: 'Apr 12, 2026', iso: '2026-04-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260412' },
      { id: 271, name: 'Anthropologie', date: 'Apr 11, 2026', iso: '2026-04-11', amount: -113.99, iban: '4111 0012 8890', ref: 'POS-20260411' },
      { id: 272, name: 'Liholiho Yacht Club', date: 'Apr 11, 2026', iso: '2026-04-11', amount: -101.83, iban: '4111 0012 8890', ref: 'POS-20260411' },
      { id: 273, name: 'State Bird Provisions', date: 'Apr 10, 2026', iso: '2026-04-10', amount: -64.07, iban: '4111 0012 8890', ref: 'POS-20260410' },
      { id: 274, name: 'Verizon', date: 'Apr 8, 2026', iso: '2026-04-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260408' },
      { id: 275, name: 'The Mill', date: 'Apr 8, 2026', iso: '2026-04-08', amount: -11.40, iban: '4111 0012 8890', ref: 'POS-20260408' },
      { id: 276, name: 'Interest paid', date: 'Apr 8, 2026', iso: '2026-04-08', amount: 14.22, iban: '0210 0108 7721', ref: 'INT-20260408' },
      { id: 277, name: 'Glossier', date: 'Apr 6, 2026', iso: '2026-04-06', amount: -42.11, iban: '4111 0012 8890', ref: 'POS-20260406' },
      { id: 278, name: 'Xfinity', date: 'Apr 5, 2026', iso: '2026-04-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260405' },
      { id: 279, name: 'Ulta Beauty', date: 'Apr 5, 2026', iso: '2026-04-05', amount: -49.97, iban: '4111 0012 8890', ref: 'POS-20260405' },
      { id: 280, name: 'Lululemon', date: 'Apr 4, 2026', iso: '2026-04-04', amount: -134.00, iban: '4111 0012 8890', ref: 'POS-20260404' },
      { id: 281, name: 'Zara', date: 'Apr 4, 2026', iso: '2026-04-04', amount: -66.90, iban: '4111 0012 8890', ref: 'POS-20260404' },
      { id: 282, name: 'PG&E', date: 'Apr 3, 2026', iso: '2026-04-03', amount: -91.28, iban: '0003 1190 4420', ref: 'UTIL-20260403' },
      { id: 283, name: 'Chipotle', date: 'Apr 2, 2026', iso: '2026-04-02', amount: -13.29, iban: '4111 0012 8890', ref: 'POS-20260402' },
      { id: 284, name: 'Pacific Park Rent', date: 'Apr 1, 2026', iso: '2026-04-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260401' },
      { id: 285, name: 'Netflix', date: 'Apr 1, 2026', iso: '2026-04-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260401' },
      { id: 286, name: 'Direct deposit', date: 'Apr 1, 2026', iso: '2026-04-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260401' },
      { id: 287, name: 'Instacart', date: 'Mar 31, 2026', iso: '2026-03-31', amount: -91.71, iban: '4111 0012 8890', ref: 'POS-20260331' },
      { id: 288, name: 'Nopa', date: 'Mar 29, 2026', iso: '2026-03-29', amount: -59.30, iban: '4111 0012 8890', ref: 'POS-20260329' },
      { id: 289, name: 'Instacart', date: 'Mar 29, 2026', iso: '2026-03-29', amount: -48.10, iban: '4111 0012 8890', ref: 'POS-20260329' },
      { id: 290, name: 'The Mill', date: 'Mar 28, 2026', iso: '2026-03-28', amount: -10.82, iban: '4111 0012 8890', ref: 'POS-20260328' },
      { id: 291, name: 'CVS Pharmacy', date: 'Mar 27, 2026', iso: '2026-03-27', amount: -10.44, iban: '4111 0012 8890', ref: 'POS-20260327' },
      { id: 292, name: 'Cash App', date: 'Mar 27, 2026', iso: '2026-03-27', amount: 90.00, iban: '0001 8821 4409', ref: 'CSH-20260327' },
      { id: 293, name: 'Target', date: 'Mar 26, 2026', iso: '2026-03-26', amount: -40.07, iban: '4111 0012 8890', ref: 'POS-20260326' },
      { id: 294, name: 'Souvla', date: 'Mar 24, 2026', iso: '2026-03-24', amount: -21.22, iban: '4111 0012 8890', ref: 'POS-20260324' },
      { id: 295, name: 'GEICO', date: 'Mar 22, 2026', iso: '2026-03-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260322' },
      { id: 296, name: 'The Battery spa day', date: 'Mar 21, 2026', iso: '2026-03-21', amount: -285.00, iban: '4111 0012 8890', ref: 'POS-20260321' },
      { id: 297, name: 'Tartine Bakery', date: 'Mar 21, 2026', iso: '2026-03-21', amount: -15.41, iban: '4111 0012 8890', ref: 'POS-20260321' },
      { id: 298, name: 'Apple One', date: 'Mar 20, 2026', iso: '2026-03-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260320' },
      { id: 299, name: 'Target', date: 'Mar 20, 2026', iso: '2026-03-20', amount: -19.77, iban: '4111 0012 8890', ref: 'POS-20260320' },
      { id: 300, name: 'United Airlines', date: 'Mar 18, 2026', iso: '2026-03-18', amount: -687.40, iban: '4111 0012 8890', ref: 'AIR-20260318' },
      { id: 301, name: 'Drybar', date: 'Mar 18, 2026', iso: '2026-03-18', amount: -65.18, iban: '4111 0012 8890', ref: 'POS-20260318' },
      { id: 302, name: 'Spotify', date: 'Mar 16, 2026', iso: '2026-03-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260316' },
      { id: 303, name: 'Direct deposit', date: 'Mar 15, 2026', iso: '2026-03-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260315' },
      { id: 304, name: 'Madewell', date: 'Mar 14, 2026', iso: '2026-03-14', amount: -55.98, iban: '4111 0012 8890', ref: 'POS-20260314' },
      { id: 305, name: 'Equinox', date: 'Mar 12, 2026', iso: '2026-03-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260312' },
      { id: 306, name: 'Starbucks', date: 'Mar 10, 2026', iso: '2026-03-10', amount: -11.74, iban: '4111 0012 8890', ref: 'POS-20260310' },
      { id: 307, name: 'Starbucks', date: 'Mar 9, 2026', iso: '2026-03-09', amount: -6.25, iban: '4111 0012 8890', ref: 'POS-20260309' },
      { id: 308, name: 'Verizon', date: 'Mar 8, 2026', iso: '2026-03-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260308' },
      { id: 309, name: 'Souvla', date: 'Mar 8, 2026', iso: '2026-03-08', amount: -25.46, iban: '4111 0012 8890', ref: 'POS-20260308' },
      { id: 310, name: 'Apple Store', date: 'Mar 7, 2026', iso: '2026-03-07', amount: -86.77, iban: '4111 0012 8890', ref: 'POS-20260307' },
      { id: 311, name: 'Nopa', date: 'Mar 7, 2026', iso: '2026-03-07', amount: -77.04, iban: '4111 0012 8890', ref: 'POS-20260307' },
      { id: 312, name: "Peet's Coffee", date: 'Mar 6, 2026', iso: '2026-03-06', amount: -6.98, iban: '4111 0012 8890', ref: 'POS-20260306' },
      { id: 313, name: 'Annual bonus', date: 'Mar 6, 2026', iso: '2026-03-06', amount: 6500.00, iban: '0210 0108 7721', ref: 'BON-20260306' },
      { id: 314, name: 'Xfinity', date: 'Mar 5, 2026', iso: '2026-03-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260305' },
      { id: 315, name: 'PG&E', date: 'Mar 3, 2026', iso: '2026-03-03', amount: -114.21, iban: '0003 1190 4420', ref: 'UTIL-20260303' },
      { id: 316, name: 'Pacific Park Rent', date: 'Mar 1, 2026', iso: '2026-03-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260301' },
      { id: 317, name: 'Netflix', date: 'Mar 1, 2026', iso: '2026-03-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260301' },
      { id: 318, name: 'Direct deposit', date: 'Mar 1, 2026', iso: '2026-03-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260301' },
      { id: 319, name: 'Foreign Cinema', date: 'Feb 28, 2026', iso: '2026-02-28', amount: -116.80, iban: '4111 0012 8890', ref: 'POS-20260228' },
      { id: 320, name: 'State Bird Provisions', date: 'Feb 28, 2026', iso: '2026-02-28', amount: -58.43, iban: '4111 0012 8890', ref: 'POS-20260228' },
      { id: 321, name: 'Safeway', date: 'Feb 27, 2026', iso: '2026-02-27', amount: -39.84, iban: '4111 0012 8890', ref: 'POS-20260227' },
      { id: 322, name: 'Clipper transit', date: 'Feb 26, 2026', iso: '2026-02-26', amount: -4.73, iban: '4111 0012 8890', ref: 'POS-20260226' },
      { id: 323, name: 'Nopa', date: 'Feb 25, 2026', iso: '2026-02-25', amount: -84.30, iban: '4111 0012 8890', ref: 'POS-20260225' },
      { id: 324, name: 'IKEA', date: 'Feb 24, 2026', iso: '2026-02-24', amount: -39.12, iban: '4111 0012 8890', ref: 'POS-20260224' },
      { id: 325, name: 'GEICO', date: 'Feb 22, 2026', iso: '2026-02-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260222' },
      { id: 326, name: 'State Bird Provisions', date: 'Feb 21, 2026', iso: '2026-02-21', amount: -64.96, iban: '4111 0012 8890', ref: 'POS-20260221' },
      { id: 327, name: 'Venmo from S. Walsh', date: 'Feb 21, 2026', iso: '2026-02-21', amount: 55.00, iban: '0001 8821 4410', ref: 'VEN-20260221' },
      { id: 328, name: 'Apple One', date: 'Feb 20, 2026', iso: '2026-02-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260220' },
      { id: 329, name: 'Amazon', date: 'Feb 19, 2026', iso: '2026-02-19', amount: -49.96, iban: '4111 0012 8890', ref: 'POS-20260219' },
      { id: 330, name: 'Uber', date: 'Feb 17, 2026', iso: '2026-02-17', amount: -14.37, iban: '4111 0012 8890', ref: 'POS-20260217' },
      { id: 331, name: 'Spotify', date: 'Feb 16, 2026', iso: '2026-02-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260216' },
      { id: 332, name: 'Blue Bottle Coffee', date: 'Feb 16, 2026', iso: '2026-02-16', amount: -8.19, iban: '4111 0012 8890', ref: 'POS-20260216' },
      { id: 333, name: 'Direct deposit', date: 'Feb 15, 2026', iso: '2026-02-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260215' },
      { id: 334, name: 'Apple Cash', date: 'Feb 14, 2026', iso: '2026-02-14', amount: 500.00, iban: '0001 8821 4409', ref: 'APC-20260214' },
      { id: 335, name: 'West Elm', date: 'Feb 13, 2026', iso: '2026-02-13', amount: -1248.00, iban: '4111 0012 8890', ref: 'POS-20260213' },
      { id: 336, name: 'Equinox', date: 'Feb 12, 2026', iso: '2026-02-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260212' },
      { id: 337, name: 'SoulCycle', date: 'Feb 12, 2026', iso: '2026-02-12', amount: -37.64, iban: '4111 0012 8890', ref: 'POS-20260212' },
      { id: 338, name: 'Liholiho Yacht Club', date: 'Feb 11, 2026', iso: '2026-02-11', amount: -107.80, iban: '4111 0012 8890', ref: 'POS-20260211' },
      { id: 339, name: 'Rainbow Grocery', date: 'Feb 10, 2026', iso: '2026-02-10', amount: -58.39, iban: '4111 0012 8890', ref: 'POS-20260210' },
      { id: 340, name: 'Verizon', date: 'Feb 8, 2026', iso: '2026-02-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260208' },
      { id: 341, name: 'Rainbow Grocery', date: 'Feb 7, 2026', iso: '2026-02-07', amount: -52.17, iban: '4111 0012 8890', ref: 'POS-20260207' },
      { id: 342, name: 'Target', date: 'Feb 7, 2026', iso: '2026-02-07', amount: -25.26, iban: '4111 0012 8890', ref: 'POS-20260207' },
      { id: 343, name: 'PayPal', date: 'Feb 7, 2026', iso: '2026-02-07', amount: 120.00, iban: '0001 8821 4409', ref: 'PPL-20260207' },
      { id: 344, name: 'Xfinity', date: 'Feb 5, 2026', iso: '2026-02-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260205' },
      { id: 345, name: "Barry's", date: 'Feb 5, 2026', iso: '2026-02-05', amount: -35.46, iban: '4111 0012 8890', ref: 'POS-20260205' },
      { id: 346, name: 'The Mill', date: 'Feb 4, 2026', iso: '2026-02-04', amount: -11.41, iban: '4111 0012 8890', ref: 'POS-20260204' },
      { id: 347, name: 'PG&E', date: 'Feb 3, 2026', iso: '2026-02-03', amount: -95.99, iban: '0003 1190 4420', ref: 'UTIL-20260203' },
      { id: 348, name: 'Safeway', date: 'Feb 2, 2026', iso: '2026-02-02', amount: -36.02, iban: '4111 0012 8890', ref: 'POS-20260202' },
      { id: 349, name: 'Pacific Park Rent', date: 'Feb 1, 2026', iso: '2026-02-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260201' },
      { id: 350, name: 'Netflix', date: 'Feb 1, 2026', iso: '2026-02-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260201' },
      { id: 351, name: 'Direct deposit', date: 'Feb 1, 2026', iso: '2026-02-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260201' },
      { id: 352, name: 'Sephora', date: 'Jan 31, 2026', iso: '2026-01-31', amount: -85.76, iban: '4111 0012 8890', ref: 'POS-20260131' },
      { id: 353, name: "Trader Joe's", date: 'Jan 31, 2026', iso: '2026-01-31', amount: -65.51, iban: '4111 0012 8890', ref: 'POS-20260131' },
      { id: 354, name: 'IKEA', date: 'Jan 29, 2026', iso: '2026-01-29', amount: -61.20, iban: '4111 0012 8890', ref: 'POS-20260129' },
      { id: 355, name: 'Freelance deposit', date: 'Jan 28, 2026', iso: '2026-01-28', amount: 875.00, iban: '0210 0108 7721', ref: 'FRC-20260128' },
      { id: 356, name: 'The Mill', date: 'Jan 27, 2026', iso: '2026-01-27', amount: -8.40, iban: '4111 0012 8890', ref: 'POS-20260127' },
      { id: 357, name: 'Clipper transit', date: 'Jan 26, 2026', iso: '2026-01-26', amount: -3.08, iban: '4111 0012 8890', ref: 'POS-20260126' },
      { id: 358, name: 'Amazon', date: 'Jan 25, 2026', iso: '2026-01-25', amount: -69.90, iban: '4111 0012 8890', ref: 'POS-20260125' },
      { id: 359, name: 'Equinox spa', date: 'Jan 25, 2026', iso: '2026-01-25', amount: -50.49, iban: '4111 0012 8890', ref: 'POS-20260125' },
      { id: 360, name: 'Nopa', date: 'Jan 24, 2026', iso: '2026-01-24', amount: -81.08, iban: '4111 0012 8890', ref: 'POS-20260124' },
      { id: 361, name: 'Apple Store', date: 'Jan 24, 2026', iso: '2026-01-24', amount: -76.82, iban: '4111 0012 8890', ref: 'POS-20260124' },
      { id: 362, name: 'Foreign Cinema', date: 'Jan 23, 2026', iso: '2026-01-23', amount: -104.66, iban: '4111 0012 8890', ref: 'POS-20260123' },
      { id: 363, name: 'GEICO', date: 'Jan 22, 2026', iso: '2026-01-22', amount: -168.20, iban: '0006 2204 1180', ref: 'INS-20260122' },
      { id: 364, name: 'Clipper transit', date: 'Jan 22, 2026', iso: '2026-01-22', amount: -6.29, iban: '4111 0012 8890', ref: 'POS-20260122' },
      { id: 365, name: 'Uber Eats', date: 'Jan 21, 2026', iso: '2026-01-21', amount: -22.68, iban: '4111 0012 8890', ref: 'POS-20260121' },
      { id: 366, name: 'Apple One', date: 'Jan 20, 2026', iso: '2026-01-20', amount: -19.95, iban: '0005 0012 4412', ref: 'SUB-20260120' },
      { id: 367, name: 'Starbucks', date: 'Jan 20, 2026', iso: '2026-01-20', amount: -9.52, iban: '4111 0012 8890', ref: 'POS-20260120' },
      { id: 368, name: 'State Bird Provisions', date: 'Jan 18, 2026', iso: '2026-01-18', amount: -76.56, iban: '4111 0012 8890', ref: 'POS-20260118' },
      { id: 369, name: 'Transfer from savings', date: 'Jan 18, 2026', iso: '2026-01-18', amount: 800.00, iban: '0210 0108 9100', ref: 'SAV-20260118' },
      { id: 370, name: 'Nopa', date: 'Jan 17, 2026', iso: '2026-01-17', amount: -89.04, iban: '4111 0012 8890', ref: 'POS-20260117' },
      { id: 371, name: 'Sweetgreen', date: 'Jan 17, 2026', iso: '2026-01-17', amount: -16.42, iban: '4111 0012 8890', ref: 'POS-20260117' },
      { id: 372, name: 'Spotify', date: 'Jan 16, 2026', iso: '2026-01-16', amount: -11.99, iban: '0005 0012 4411', ref: 'SUB-20260116' },
      { id: 373, name: 'Starbucks', date: 'Jan 16, 2026', iso: '2026-01-16', amount: -11.38, iban: '4111 0012 8890', ref: 'POS-20260116' },
      { id: 374, name: 'Direct deposit', date: 'Jan 15, 2026', iso: '2026-01-15', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260115' },
      { id: 375, name: 'Nopa', date: 'Jan 14, 2026', iso: '2026-01-14', amount: -49.63, iban: '4111 0012 8890', ref: 'POS-20260114' },
      { id: 376, name: 'Souvla', date: 'Jan 13, 2026', iso: '2026-01-13', amount: -20.31, iban: '4111 0012 8890', ref: 'POS-20260113' },
      { id: 377, name: 'Equinox', date: 'Jan 12, 2026', iso: '2026-01-12', amount: -245.00, iban: '0005 8821 0091', ref: 'GYM-20260112' },
      { id: 378, name: 'Blushington', date: 'Jan 11, 2026', iso: '2026-01-11', amount: -87.84, iban: '4111 0012 8890', ref: 'POS-20260111' },
      { id: 379, name: 'Ritual Coffee', date: 'Jan 11, 2026', iso: '2026-01-11', amount: -7.24, iban: '4111 0012 8890', ref: 'POS-20260111' },
      { id: 380, name: 'Olive & June nails', date: 'Jan 10, 2026', iso: '2026-01-10', amount: -38.16, iban: '4111 0012 8890', ref: 'POS-20260110' },
      { id: 381, name: 'b. Patisserie', date: 'Jan 10, 2026', iso: '2026-01-10', amount: -12.79, iban: '4111 0012 8890', ref: 'POS-20260110' },
      { id: 382, name: 'Verizon', date: 'Jan 8, 2026', iso: '2026-01-08', amount: -78.40, iban: '0003 3302 1190', ref: 'MOB-20260108' },
      { id: 383, name: 'Zara', date: 'Jan 8, 2026', iso: '2026-01-08', amount: -56.23, iban: '4111 0012 8890', ref: 'POS-20260108' },
      { id: 384, name: 'Blue Bottle Coffee', date: 'Jan 7, 2026', iso: '2026-01-07', amount: -7.10, iban: '4111 0012 8890', ref: 'POS-20260107' },
      { id: 385, name: 'Starbucks', date: 'Jan 6, 2026', iso: '2026-01-06', amount: -11.28, iban: '4111 0012 8890', ref: 'POS-20260106' },
      { id: 386, name: 'Transfer from savings', date: 'Jan 6, 2026', iso: '2026-01-06', amount: 4000.00, iban: '0210 0108 9100', ref: 'SAV-20260106' },
      { id: 387, name: 'Xfinity', date: 'Jan 5, 2026', iso: '2026-01-05', amount: -89.99, iban: '0003 2201 8810', ref: 'INT-20260105' },
      { id: 388, name: 'Nordstrom', date: 'Jan 4, 2026', iso: '2026-01-04', amount: -140.32, iban: '4111 0012 8890', ref: 'POS-20260104' },
      { id: 389, name: 'Whole Foods', date: 'Jan 4, 2026', iso: '2026-01-04', amount: -127.10, iban: '4111 0012 8890', ref: 'POS-20260104' },
      { id: 390, name: 'PG&E', date: 'Jan 3, 2026', iso: '2026-01-03', amount: -90.62, iban: '0003 1190 4420', ref: 'UTIL-20260103' },
      { id: 391, name: 'Ritual Coffee', date: 'Jan 2, 2026', iso: '2026-01-02', amount: -8.31, iban: '4111 0012 8890', ref: 'POS-20260102' },
      { id: 392, name: 'Pacific Park Rent', date: 'Jan 1, 2026', iso: '2026-01-01', amount: -2450.00, iban: '0002 4481 2201', ref: 'RENT-20260101' },
      { id: 393, name: 'Netflix', date: 'Jan 1, 2026', iso: '2026-01-01', amount: -15.49, iban: '0005 0012 4410', ref: 'SUB-20260101' },
      { id: 394, name: 'Direct deposit', date: 'Jan 1, 2026', iso: '2026-01-01', amount: 3280.00, iban: '0210 0108 7721', ref: 'PAY-20260101' }
    ]
  }
};
Object.values(PROFILES).forEach((p) => p.txs.sort((a, b) => b.iso.localeCompare(a.iso) || b.amount - a.amount));

function profile() {
  if (localStorage.getItem(PROFILE_KEY) === "jamie") return PROFILES.jamie;
  const acc = new URLSearchParams(location.search).get("account");
  if (acc === "cad" || acc === "usd") {
    try { localStorage.setItem(ACCOUNT_VIEW_KEY, acc); } catch (e) {}
  }
  return localStorage.getItem(ACCOUNT_VIEW_KEY) === "usd" ? PROFILES.usd : PROFILES.cad;
}

function homeUrl() {
  return localStorage.getItem(PROFILE_KEY) === "jamie" ? "overview.html" : "overview.html?account=cad";
}

function getTxs() {
  return profile().txs;
}

const PUBLIC = new Set(["index.html", "login.html", "forgot.html", "activate.html", ""]);

function fmtMoney(n, p = profile()) {
  return Number(n).toLocaleString(p.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function moneyAbs(n, p = profile()) {
  return p.currencySymbol + fmtMoney(Math.abs(n), p);
}
function money(n) {
  const sign = n < 0 ? "-" : n > 0 ? "+" : "";
  return sign + moneyAbs(n);
}
const pageName = () => location.pathname.split("/").pop() || "index.html";
function clearSession() {
  localStorage.removeItem(AUTH_KEY);
  AUTH_LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
  localStorage.removeItem(ACTIVITY_KEY);
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(ACCOUNT_VIEW_KEY);
}

function lastActiveAt() {
  const n = parseInt(localStorage.getItem(ACTIVITY_KEY), 10);
  return Number.isFinite(n) ? n : 0;
}

function isSessionFresh() {
  const last = lastActiveAt();
  return last > 0 && Date.now() - last < SESSION_MS;
}

const isLoggedIn = () => localStorage.getItem(AUTH_KEY) === "1" && isSessionFresh();
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
    robots.content = "noindex, nofollow, noarchive, nosnippet, noimageindex";
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
    location.replace(homeUrl());
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

function txRow(tx, extra = "") {
  const href = extra ? `transaction.html?id=${tx.id}&${extra}` : `transaction.html?id=${tx.id}`;
  return `<a class="tx" href="${href}">
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

function historyHTML(list = getTxs(), extra = "") {
  let last = "";
  if (!list.length) return `<p class="tx-date">No matching transactions.</p>`;
  return list.map((tx) => {
    const label = monthLabel(tx.iso);
    const head = label !== last ? `<div class="tx-month">${label}</div>` : "";
    last = label;
    return head + txRow(tx, extra);
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
    location.href = homeUrl();
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
  setTimeout(() => { location.href = homeUrl(); }, reduce ? 450 : 2600);
}

function injectAlertModal() {
  if (document.getElementById("alertModal")) return;
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "alertModal";
  modal.innerHTML = `
    <div class="sheet fail-sheet">
      <div class="fail-icon" aria-hidden="true">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" x2="12" y1="8" y2="12"/>
          <line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg>
      </div>
      <h2 id="alertTitle">Unable to continue</h2>
      <p id="alertText"></p>
      <button class="primary" type="button" id="alertClose">OK</button>
    </div>`;
  (document.querySelector(".app") || document.body).appendChild(modal);
  const close = () => modal.classList.remove("open");
  document.getElementById("alertClose")?.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

function showAlert(text, title) {
  injectAlertModal();
  const modal = document.getElementById("alertModal");
  const titleEl = document.getElementById("alertTitle");
  const textEl = document.getElementById("alertText");
  if (titleEl) titleEl.textContent = title || "Unable to continue";
  if (textEl) textEl.textContent = text;
  modal.classList.remove("open");
  void modal.offsetWidth;
  modal.classList.add("open");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "alertTitle");
  document.getElementById("alertClose")?.focus();
}

function showFailModal(fail, titleId, closeId) {
  if (!fail) return showAlert("Unable to transfer");
  fail.classList.remove("open");
  void fail.offsetWidth;
  fail.classList.add("open");
  fail.setAttribute("role", "dialog");
  fail.setAttribute("aria-modal", "true");
  fail.setAttribute("aria-labelledby", titleId);
  document.getElementById(closeId)?.focus();
}

function processThenFail(form, modalId, titleId, closeId) {
  const btn = form.querySelector("[type=submit]");
  const fail = document.getElementById(modalId);
  const label = btn?.textContent || "Continue";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Processing…";
  }
  setTimeout(() => {
    if (btn) {
      btn.disabled = false;
      btn.textContent = label;
    }
    showFailModal(fail, titleId, closeId);
  }, 650);
}

function wireFailModal(id, closeId) {
  const fail = document.getElementById(id);
  if (!fail) return;
  const close = () => fail.classList.remove("open");
  document.getElementById(closeId)?.addEventListener("click", close);
  fail.addEventListener("click", (e) => { if (e.target === fail) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fail.classList.contains("open")) close();
  });
}

function showToast(msg) {
  showAlert(msg);
}

function goSuccess(title, text) {
  sessionStorage.setItem("successTitle", title);
  sessionStorage.setItem("successText", text);
  location.href = "success.html";
}

let liveTz = (typeof Intl !== "undefined" && Intl.DateTimeFormat().resolvedOptions().timeZone) || "UTC";

function clockLocale() {
  return navigator.language || profile().locale || "en-US";
}

function tickClock() {
  const timeEl = document.getElementById("clockTime");
  const dateEl = document.getElementById("clockDate");
  if (!timeEl || !dateEl) return;
  const now = new Date();
  const locale = clockLocale();
  const tz = liveTz;
  timeEl.textContent = new Intl.DateTimeFormat(locale, {
    timeZone: tz, hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true
  }).format(now);
  dateEl.textContent = new Intl.DateTimeFormat(locale, {
    timeZone: tz, weekday: "long", month: "long", day: "numeric", year: "numeric"
  }).format(now);
  const tzEl = document.getElementById("clockTz");
  if (tzEl) {
    tzEl.textContent = new Intl.DateTimeFormat(locale, { timeZone: tz, timeZoneName: "short" })
      .formatToParts(now).find((part) => part.type === "timeZoneName")?.value || "";
  }
}

function detectUserTimezone() {
  const apply = (tz) => {
    if (!tz || typeof tz !== "string") return;
    liveTz = tz;
    tickClock();
  };
  const fallback = () => apply(Intl.DateTimeFormat().resolvedOptions().timeZone);
  fetch("https://ipwho.is/?fields=success,timezone", { cache: "no-store" })
    .then((r) => r.json())
    .then((data) => {
      const tz = data?.timezone?.id || (typeof data?.timezone === "string" ? data.timezone : "");
      if (data?.success !== false && tz.includes("/")) apply(tz);
      else throw new Error("no timezone");
    })
    .catch(() => fetch("https://ipapi.co/json/", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (data?.timezone) apply(data.timezone);
        else fallback();
      })
      .catch(fallback));
}

function parseAmount(raw) {
  const n = Number(String(raw).replace(/[C$£€,\s]/gi, ""));
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
      clearSession();
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
    clearSession();
    location.href = "index.html";
  });
  modal?.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) close();
  });
}

function expireSession() {
  const hadSession = localStorage.getItem(AUTH_KEY) === "1";
  clearSession();
  if (hadSession) sessionStorage.setItem("toast", "Your session has expired. Please log on again.");
  location.replace("login.html");
}

function wireIdleSession() {
  if (PUBLIC.has(pageName()) || !isLoggedIn()) return;
  let idleTimer;
  let lastWrite = 0;
  const schedule = () => {
    clearTimeout(idleTimer);
    const remaining = SESSION_MS - (Date.now() - lastActiveAt());
    if (remaining <= 0) {
      expireSession();
      return;
    }
    idleTimer = setTimeout(expireSession, remaining);
  };
  const touch = () => {
    if (localStorage.getItem(AUTH_KEY) !== "1") return;
    const now = Date.now();
    if (now - lastWrite < 1000) return;
    lastWrite = now;
    localStorage.setItem(ACTIVITY_KEY, String(now));
    schedule();
  };
  schedule();
  ["pointerdown", "keydown", "click", "touchstart", "scroll"].forEach((ev) => {
    document.addEventListener(ev, touch, { passive: true });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (!isLoggedIn()) expireSession();
    else touch();
  });
  window.addEventListener("storage", (e) => {
    if (e.key !== AUTH_KEY && e.key !== ACTIVITY_KEY) return;
    if (!isLoggedIn()) expireSession();
    else schedule();
  });
}

function wireNotify() {
  const modal = document.getElementById("notifyModal");
  const btn = document.getElementById("notifyBtn");
  if (!modal || !btn) return;
  const open = () => {
    modal.classList.add("open");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "notifyTitle");
    btn.classList.add("read");
    btn.setAttribute("aria-label", "Notifications");
    document.getElementById("notifyClose")?.focus();
  };
  const close = () => modal.classList.remove("open");
  btn.addEventListener("click", open);
  document.getElementById("notifyClose")?.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

function wireBalance() {
  const value = document.getElementById("balanceValue");
  const btn = document.getElementById("toggleBalance");
  if (!value || !btn) return;
  const p = profile();
  const shown = moneyAbs(p.balance, p);
  const masked = p.currencySymbol + " ••••••••";
  value.textContent = shown;
  const moneyEls = [...document.querySelectorAll("[data-mask]")];
  let hidden = false;
  btn.addEventListener("click", () => {
    hidden = !hidden;
    value.textContent = hidden ? masked : shown;
    moneyEls.forEach((el) => {
      el.textContent = hidden ? masked : el.getAttribute("data-mask");
    });
    btn.setAttribute("aria-pressed", String(hidden));
    btn.setAttribute("aria-label", hidden ? "Show balance" : "Hide balance");
    document.getElementById("eyeOpen")?.classList.toggle("hidden", hidden);
    document.getElementById("eyeClosed")?.classList.toggle("hidden", !hidden);
  });
}

function applyProfileChrome(p) {
  document.querySelectorAll(".avatar").forEach((el) => { el.textContent = p.initials; });
  const name = document.querySelector(".account-name");
  if (name) name.textContent = p.company;
  const brand = document.querySelector(".brand");
  if (brand && p.brandName) {
    const brandLabel = brand.querySelector("span");
    if (brandLabel) brandLabel.textContent = p.brandName;
    const brandSvg = brand.querySelector("svg");
    if (brandSvg && p.brandSvg) brandSvg.outerHTML = p.brandSvg;
  }
  if (p.brandName) document.title = `${p.brandName} | ${document.title.split(" | ").pop()}`;
  const typeEl = document.querySelector(".account-type");
  if (typeEl) typeEl.textContent = p.accountType;
  document.querySelectorAll(".clock-city").forEach((el) => { el.remove(); });
  const meta = document.querySelector(".header .meta");
  if (meta) {
    if (p.currency === "CAD" || p.id === "jamie") {
      meta.innerHTML = `<span>${escapeHtml(p.bank)}</span>`;
    } else {
      meta.innerHTML = `<span>${escapeHtml(p.bank)}</span><span>${escapeHtml(p.routingLabel)}: ${escapeHtml(p.routing)}</span><span>Account: ${escapeHtml(p.account)}</span>`;
    }
  }

  const compact = !!p.compactOverview;
  document.body.classList.toggle("cad-view", compact);
  document.querySelectorAll(".wages-card").forEach((el) => { el.hidden = compact || !p.wages; });
  document.querySelectorAll(".clock-card, .overview-grid > .chargeback").forEach((el) => { el.hidden = compact; });
  const wagesAmt = document.querySelector(".wages-amount");
  if (wagesAmt && p.wages && !compact) {
    wagesAmt.textContent = p.wages.last;
    wagesAmt.setAttribute("data-mask", p.wages.last);
  }
  const wagesCaption = document.querySelector(".wages-caption");
  if (wagesCaption && p.wages && !compact) wagesCaption.textContent = p.wages.lastDate;
  const wageStats = document.querySelectorAll(".wages-stats strong");
  if (wageStats[0] && p.wages && !compact) wageStats[0].textContent = p.wages.next;
  if (wageStats[1] && p.wages && !compact) {
    wageStats[1].textContent = p.wages.ytd;
    wageStats[1].setAttribute("data-mask", p.wages.ytd);
  }

  const ovTab = document.querySelector(".tab[href*='overview.html']");
  if (ovTab) ovTab.setAttribute("href", p.id === "jamie" ? "overview.html" : "overview.html?account=cad");

  const accountsMain = document.querySelector(".content.split-2");
  if (accountsMain && pageName() === "accounts.html" && p.id === "jamie") {
    accountsMain.innerHTML = `
        <a class="card account-card" href="overview.html">
          <div>
            <div class="tx-name">${escapeHtml(p.chequingLabel)}</div>
            <div class="tx-date">${escapeHtml(p.currency)} · ${escapeHtml(p.accountMasked)}</div>
            <div class="balance account-balance">${moneyAbs(p.balance, p)}</div>
          </div>
          <span class="pill">Active</span>
        </a>
        <div class="card">
          <div class="detail-row"><span>Account holder</span><span>${escapeHtml(p.name)}</span></div>
          <div class="detail-row"><span>Bank</span><span>${escapeHtml(p.bank)}</span></div>
          <div class="detail-row"><span>Routing number</span><span>${escapeHtml(p.routing)}</span></div>
          <div class="detail-row"><span>Account number</span><span>${escapeHtml(p.account)}</span></div>
          <div class="detail-row"><span>SWIFT</span><span>${escapeHtml(p.swift)}</span></div>
          <div class="detail-row"><span>Branch</span><span>${escapeHtml(p.branch)}</span></div>
          <div class="detail-row"><span>Status</span><span>Secure</span></div>
        </div>`;
  }

  const unread = (p.notifications || []).filter((n) => n.unread).length;
  const notifyBtn = document.getElementById("notifyBtn");
  const notifyBadge = document.getElementById("notifyBadge");
  if (notifyBadge) {
    notifyBadge.textContent = unread ? String(unread) : "";
    notifyBadge.hidden = !unread;
  }
  if (notifyBtn) notifyBtn.setAttribute("aria-label", unread ? `Notifications, ${unread} unread` : "Notifications");

  const notifyLead = document.querySelector("#notifyModal p");
  if (notifyLead) notifyLead.textContent = `Account activity for ${p.company}.`;
  const notifyList = document.querySelector(".notify-list");
  if (notifyList && p.notifications) {
    notifyList.innerHTML = p.notifications.map((n) => `
      <article class="notify-item${n.unread ? " unread" : ""}">
        <span class="notify-dot" aria-hidden="true"></span>
        <div>
          <strong>${escapeHtml(n.title)}</strong>
          <p>${escapeHtml(n.text)}</p>
          <time datetime="${escapeHtml(n.datetime)}">${escapeHtml(n.time)}</time>
        </div>
      </article>`).join("");
  }

  const hero = document.querySelector(".profile-hero");
  if (hero) {
    hero.querySelector(".avatar") && (hero.querySelector(".avatar").textContent = p.initials);
    hero.querySelector(".tx-name") && (hero.querySelector(".tx-name").textContent = p.name);
    hero.querySelector(".tx-date") && (hero.querySelector(".tx-date").textContent = p.company);
    const rows = {
      "Full name": p.name,
      "Username": p.user,
      "Customer ID": p.customerId,
      "Email": p.email,
      "Mobile": p.mobile,
      "Address": p.address,
      "Company": p.company,
      "Account": `${p.chequingLabel} · ${p.accountMasked}`,
      "Branch": p.branch
    };
    document.querySelectorAll(".detail-row").forEach((row) => {
      const key = row.querySelector("span")?.textContent;
      if (key && rows[key]) row.querySelector("span:last-child").textContent = rows[key];
    });
  }

  const payNotice = document.querySelector("#payForm .notice");
  if (payNotice) payNotice.textContent = `Pay a beneficiary from ${p.company} · ${p.currency}.`;
  const payAmount = document.querySelector("label[for=payAmount]");
  if (payAmount) payAmount.textContent = `Amount (${p.currency})`;
  const transferNotice = document.querySelector("#transferForm .notice");
  if (transferNotice) transferNotice.textContent = `Enter the destination ${p.currency === "CAD" ? "transit/institution" : "routing"} and account number to send funds from your ${p.chequingLabel} account.`;
  const transferFrom = document.querySelector("#transferFrom option");
  if (transferFrom) transferFrom.textContent = p.accountType;
  const transferRouting = document.querySelector("label[for=transferRouting]");
  if (transferRouting) transferRouting.textContent = p.currency === "CAD" ? "Transit / institution" : "Routing number";
  const transferAmount = document.querySelector("label[for=transferAmount]");
  if (transferAmount) transferAmount.textContent = `Amount (${p.currency})`;
  const stmtNotice = document.querySelector("#statementForm .notice");
  if (stmtNotice) stmtNotice.textContent = `Export a CSV statement for your ${p.chequingLabel} account (${p.currency}).`;
  if (p.currency === "CAD") {
    const stmtFrom = document.getElementById("stmtFrom");
    const stmtTo = document.getElementById("stmtTo");
    if (stmtFrom) stmtFrom.value = "2024-01-01";
    if (stmtTo) stmtTo.value = "2026-10-31";
  }
  document.querySelectorAll(".fail-sheet").forEach((sheet) => {
    const titleEl = sheet.querySelector("h2");
    const body = sheet.querySelector("p");
    const hold = sheet.closest("#cbFailModal") ? p.chargebackHold : p.transferHold;
    if (hold) {
      if (titleEl) titleEl.textContent = hold.title;
      if (body) body.outerHTML = `<div class="fail-copy">${hold.html}</div>`;
    } else if (body) {
      body.textContent = body.textContent.replace(/HSBC Bank USA/g, p.contactBank);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  AUTH_LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
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
  const p = profile();
  const txs = getTxs();
  if (!PUBLIC.has(page) && isLoggedIn()) applyProfileChrome(p);

  if (document.getElementById("cadAccount")) {
    const cad = PROFILES.cad;
    fill("cadHistoryList", historyHTML(cad.txs, "account=cad"));
    const cadCount = document.getElementById("cadHistoryCount");
    if (cadCount) cadCount.textContent = `(${cad.txs.length})`;
    const cadSearch = document.getElementById("cadHistorySearch");
    if (cadSearch) {
      cadSearch.addEventListener("input", () => {
        const q = cadSearch.value.trim().toLowerCase();
        const list = q ? cad.txs.filter((t) => `${t.name} ${t.ref} ${t.iban} ${t.date}`.toLowerCase().includes(q)) : cad.txs;
        fill("cadHistoryList", historyHTML(list, "account=cad"));
        if (cadCount) cadCount.textContent = `(${list.length})`;
      });
    }
  }

  fill("recentList", txs.slice(0, 4).map(txRow).join(""));
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
  if (document.getElementById("clockTime")) {
    detectUserTimezone();
    setInterval(tickClock, 1000);
  }
  document.getElementById("refreshClock")?.addEventListener("click", tickClock);
  wireBalance();
  wireLogout();
  wireIdleSession();
  wireNotify();

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
      const logged = Object.values(PROFILES).find((pr) => pr.user && pr.user === user && pr.pass === pass);
      if (!logged) {
        showAlert("The username or password is incorrect.", "Unable to log on");
        return;
      }
      if (document.getElementById("rememberMe").checked) localStorage.setItem("hsbcUser", user);
      else localStorage.removeItem("hsbcUser");
      localStorage.setItem(AUTH_KEY, "1");
      localStorage.setItem(ACTIVITY_KEY, String(Date.now()));
      if (logged.id === "jamie") {
        localStorage.setItem(PROFILE_KEY, "jamie");
        localStorage.setItem(ACCOUNT_VIEW_KEY, "jamie");
      } else {
        localStorage.setItem(PROFILE_KEY, "corey");
        localStorage.setItem(ACCOUNT_VIEW_KEY, "cad");
      }
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
    processThenFail(e.target, "payFailModal", "payFailTitle", "payFailClose");
  });

  document.getElementById("transferForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const amount = parseAmount(data.amount);
    if (!validRouting(data.routing)) return showToast("Enter a valid 9-digit routing number.");
    if (!validAccount(data.iban)) return showToast("Enter a valid destination account number.");
    if (!(amount > 0)) return showToast("Enter an amount greater than zero.");
    processThenFail(e.target, "transferFailModal", "transferFailTitle", "transferFailClose");
  });

  wireFailModal("payFailModal", "payFailClose");
  wireFailModal("transferFailModal", "transferFailClose");
  wireFailModal("cbFailModal", "cbFailClose");

  document.getElementById("cbForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = Number(new FormData(e.target).get("tx"));
    const tx = txs.find((t) => t.id === id);
    if (!tx || tx.amount >= 0) {
      showToast("Chargebacks can only be requested for debit transactions.");
      return;
    }
    if (p.chargebackHold) {
      processThenFail(e.target, "cbFailModal", "cbFailTitle", "cbFailClose");
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
    const rows = [["Date", "Category", "Reference", `Amount ${p.currency}`]];
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
    const params = new URLSearchParams(location.search);
    const acc = params.get("account");
    const book = acc === "cad" ? PROFILES.cad : acc === "usd" ? PROFILES.usd : p;
    const id = Number(params.get("id"));
    const tx = book.txs.find((t) => t.id === id) || book.txs[0];
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
          <div class="detail-row"><span>Account</span><span>${escapeHtml(book.accountType)}</span></div>
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
  document.documentElement.classList.remove("hsbc-boot");
});
