var cookieEl = document.getElementById("clickCookie");
var upgradeTabEl = document.getElementById("workerTab")
var cookiesEl = document.getElementById("cookies");
var cpsEl = document.getElementById("cps");


var oldClick = 0;
//Cookies
var cookieAmount = 0;

//Workers
var workerClicksPerSecond = 0;

const workers = [
    {name: "Clicker", cost: 10, amount: 0, clicks: 0.2},
    {name: "Click mamas", cost: 100, amount: 0, clicks: 5},
    {name: "Click mamamas", cost: 500, amount: 0, clicks: 50},
    {name: "Super Clickers", cost: 1500, amount: 0, clicks: 200},
    {name: "Super Clickers", cost: 1500, amount: 0, clicks: 200},
    {name: "Super Clickers", cost: 1500, amount: 0, clicks: 200}
]


//Clicker
var workerClickerEl = document.querySelector("#worker_clicker");
var clickerAmountEl = document.querySelector("#clickerAmount");
var clickerCostEl = document.getElementById("clickerCost");


createWorkers()
function createWorkers() {
    for(i=0; i < workers.length; i++){
        upgradeTabEl.innerHTML += ("<div id='worker"+i+"' class='workerContainer unselectable'>" +
                "<div>" +
                    "<h1>"+workers[i].name+"</h1>" + 
                    "<p>"+workers[i].cost+" cookies</p>" + 
                "</div>" + 
                "<p>"+workers[i].amount+"</p>" +
            "</div>")
        //workerEl = document.addEventListener('worker')
        //worker.addEventListener('click')
    }
}



cookieEl.addEventListener('click', clicker);

workerClickerEl.addEventListener('click', workerClicker);

//cps reset
setInterval(function (){
    cps = 0;
    
    workerClicks();
    cookieDisplay();
}, 1000);


function workerClicks() {
    workerClicksPerSecond = 0
    for (i=0;i<workers.length;i++){
        workerClicksPerSecond += (workers[i].amount * workers[i].clicks)
    }
    cookieAmount += workerClicksPerSecond
}

function clicker() {
    cookieAmount++
    cookieDisplay()
    clicksPerSecond();
}
function clicksPerSecond() {
    var newClick = Math.floor(Date.now())
    var cps = (1000/(newClick - oldClick)).toFixed(2);
    oldClick = newClick;
  
    cpsEl.innerHTML = cps + " cps"
}

function workerClicker() {
    if (cookieAmount >= workers[0].cost) {
        cookieAmount -= workers[0].cost;
        workers[0].amount++

        workers[0].cost += Math.floor(0.5 * workers[0].amount)
    }
    cookieDisplay()
}
function cookieDisplay() {
    cookiesEl.innerHTML = cookieAmount.toFixed(1) + " cookies";
    cpsEl.innerHTML = cps + " cps";
    clickerAmountEl.innerHTML = workers[0].amount;
    clickerCostEl.innerHTML = workers[0].cost + " cookies";
}