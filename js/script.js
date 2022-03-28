var cookieEl = document.getElementById("cookie");
var cookiesEl = document.getElementById("cookies");
var cpsEl = document.getElementById("cps");

var oldClick = 0;
var cookieAmount = 0;

cookie.addEventListener('click', clicker);

function clicker() {
    cookieAmount++
    cookiesEl.innerHTML = "You have " + cookieAmount + " cookies"

    cpsEl.innerHTML = clicksPerSecond(Math.floor(Date.now())) + " cps"
}
function clicksPerSecond(newClick) {
    var cps = (1000/(newClick - oldClick)).toFixed(2);
    oldClick = newClick;
    return cps;
}