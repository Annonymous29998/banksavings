(function () {
  var AUTH_KEY = "hsbcLoggedIn";
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

  if (!PUBLIC[page] && localStorage.getItem(AUTH_KEY) !== "1") {
    document.documentElement.style.background = "#f4f4f4";
    location.replace("login.html");
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
