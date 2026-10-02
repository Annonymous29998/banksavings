(function () {
  var AUTH_KEY = "hsbcLoggedIn";
  var ACTIVITY_KEY = "hsbcLastActive";
  var SESSION_MS = 10 * 60 * 1000;
  var PUBLIC = {
    "index.html": 1,
    "login.html": 1,
    "forgot.html": 1,
    "activate.html": 1,
    "index": 1,
    "login": 1,
    "forgot": 1,
    "activate": 1,
    "": 1
  };
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase().split("?")[0];
  if (page && page.indexOf(".") === -1) page += ".html";

  function clearSession() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(ACTIVITY_KEY);
  }

  function sessionFresh() {
    if (localStorage.getItem(AUTH_KEY) !== "1") return false;
    var last = parseInt(localStorage.getItem(ACTIVITY_KEY), 10);
    if (!last) return false;
    return Date.now() - last < SESSION_MS;
  }

  if (!PUBLIC[page]) {
    if (!sessionFresh()) {
      if (localStorage.getItem(AUTH_KEY) === "1") {
        try { sessionStorage.setItem("toast", "Your session has expired. Please log on again."); } catch (e) {}
      }
      clearSession();
      document.documentElement.style.background = "#f4f4f4";
      location.replace("login.html");
    } else {
      localStorage.setItem(ACTIVITY_KEY, String(Date.now()));
    }
  }

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    var key = e.key || "";
    var k = key.toLowerCase();
    var mod = e.ctrlKey || e.metaKey;
    var inspectCombo = mod && e.shiftKey && (k === "i" || k === "j" || k === "c" || k === "k");
    var viewSource = mod && k === "u";
    var macInspect = e.metaKey && e.altKey && (k === "i" || k === "j" || k === "c");
    if (key === "F12" || inspectCombo || viewSource || macInspect) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
})();
