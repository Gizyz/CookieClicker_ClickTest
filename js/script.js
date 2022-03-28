var cookieEl = document.getElementById("clickCookie");
var cookiesEl = document.getElementById("cookies");
var cpsEl = document.getElementById("cps");




var oldClick = 0;

//Cookies
var cookieAmount = 0;

//Workers
var workerClickerEl = document.querySelector("#worker_clicker");
var clickerAmountEl = document.querySelector("#clickerAmount");
var clickerCostEl = document.querySelector("#clickerCost");
var worker_clicker = 0;





cookieEl.addEventListener('click', clicker);

workerClickerEl.addEventListener('click', workerClicker);

//cps reset
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

function workerClicker() {
    if (cookieAmount > clickerCostEl.value) {
        worker_clicker++
        clickerAmountEl.innerHTML = worker_clicker;
    }
}