var cookieEl = document.getElementById("clickCookie");
var upgradeTabEl = document.getElementById("workerTab");
var cookiesEl = document.getElementById("cookies");
var cpsEl = document.getElementById("cps");

//Clicks per second
var oldClick = 0;
var cps = 0;
//Cookies
var cookieAmount = 0;

//Workers
var workerClicksPerSecond = 0;
var workerEl = [];
var workerCostEl = [];
var workerAmountEl = [];

const workers = [
  { name: "Clicker", cost: 10, amount: 0, clicks: 0.2 },
  { name: "Click mamas", cost: 100, amount: 0, clicks: 5 },
  { name: "Click mamamas", cost: 500, amount: 0, clicks: 50 },
  { name: "Super Clickers", cost: 1500, amount: 0, clicks: 200 },
  { name: "Super Clickers", cost: 1500, amount: 0, clicks: 200 },
  { name: "Super Clickers", cost: 1500, amount: 0, clicks: 200 },
  { name: "Super Clickers", cost: 1500, amount: 0, clicks: 200 },
  { name: "Super Clickers", cost: 1500, amount: 0, clicks: 200 },
];

cookieEl.addEventListener("click", clicker);

//Initialize
createWorkers();

//Creates elements for all worker objects in workers array
function createWorkers() {
  for (i = 0; i < workers.length; i++) {
    upgradeTabEl.innerHTML +=
      "<div id='worker" + i +"' class='workerContainer' onclick='workerClickEvent(" +i+")'>" +
      "<div><h1>" +workers[i].name+"</h1>" +
      "<p id='worker"+i+"Cost'>" +
      workers[i].cost +
      " happiness</p>" +
      "</div>" +
      "<p id='worker" +
      i +
      "Amount'>" +
      workers[i].amount +
      "</p>" +
      "</div>";

    var workerEl = document.createElement("div");
    var workerDivEl = document.createElement("div");
    var workerNameEl = document.createElement("h1");
    var workerCostEl = document.createElement("p");
    workerNameEl.appendChild("workerDiv");
    workerCostEl.appendChild("workerDiv");

    workerEl[i] = document.getElementById("worker" + i);
    workerCostEl[i] = document.getElementById("worker" + i + "Cost");
    workerAmountEl[i] = document.getElementById("worker" + i + "Amount");
  }
}
function workerClickEvent(i) {
  console.log(i)
  console.log("Button: " + i);
  if (cookieAmount >= workers[i].cost) {
    cookieAmount -= workers[i].cost;
    workers[i].amount++;

    workers[i].cost += Math.floor(0.5 * workers[i].amount);
  }
  cookieDisplay();
}

//cps reset
setInterval(function () {
  cps = 0;
  workerClicks();
  cookieDisplay();
}, 1000);

function workerClicks() {
  workerClicksPerSecond = 0;
  for (i = 0; i < workers.length; i++) {
    workerClicksPerSecond += workers[i].amount * workers[i].clicks;
  }
  cookieAmount += workerClicksPerSecond;
}

function clicker() {
  cookieAmount++;
  cookieDisplay();
  clicksPerSecond();
}
function clicksPerSecond() {
  var newClick = Math.floor(Date.now());
  cps = (1000 / (newClick - oldClick)).toFixed(2);
  oldClick = newClick;

  cpsEl.innerHTML = cps + " cps";
}

function cookieDisplay() {
  cookiesEl.innerHTML = cookieAmount.toFixed(1) + " happiness";
  cpsEl.innerHTML = cps + " cps";

  for (i = 0; i < workers.length; i++) {
    console.log(workerAmountEl[i]);
    console.log(workerCostEl[i]);
    console.log("happiness: " + workers[i].cost);
    console.log(i);

    workerAmountEl[i].innerHTML = workers[i].amount;
    workerCostEl[i].innerHTML = workers[i].cost + " happiness";
  }
}
