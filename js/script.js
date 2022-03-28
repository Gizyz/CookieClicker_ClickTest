var cookieEl = document.getElementById("cookie");
var cookiesEl = document.getElementById("cookies");
var cpsEl = document.getElementById("cps");

var oldClick = 0;
var cookieAmount = 0;

cookie.addEventListener('click', clicker);
setInterval(function (){cps = 0;cpsEl.innerHTML = cps + " cps"}, 2000);

function clicker() {
    cookieAmount++
    cookiesEl.innerHTML = "You have " + cookieAmount + " cookies"

    clicksPerSecond();
}
function clicksPerSecond() {
    var newClick = Math.floor(Date.now())
    var cps = (1000/(newClick - oldClick)).toFixed(2);
    oldClick = newClick;
  
    cpsEl.innerHTML = cps + " cps"
}