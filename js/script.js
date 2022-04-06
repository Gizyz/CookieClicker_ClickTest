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
  { name: "Bill", cost: 10, amount: 0, clicks: 0.1 },
  { name: "Average Joe", cost: 100, amount: 0, clicks: 1 },
  { name: "Bob", cost: 1000, amount: 0, clicks: 10 },
  { name: "Manager Nelson", cost: 10000, amount: 0, clicks: 100 },
  { name: "Managing manager Dobin", cost: 5000, amount: 0, clicks: 1000 },
  { name: "CEO Koblan", cost: 10000, amount: 0, clicks: 10000 },
  { name: "Leader Vaslab", cost: 25000, amount: 0, clicks: 100000 },
  { name: "Cat Budha", cost: 100000, amount: 0, clicks: 1000000 },
];


//Initialize
 
for (i = 0; i < workers.length; i++) {
  createWorkers(workers[i].name, workers[i].cost, workers[i].amount);
}

cookieEl.addEventListener("click", clicker);


//Creates elements for all worker objects in workers array
function createWorkers(name, cost, amount) {
    // Gui elements

    var workerEl = document.createElement("div");
    workerEl.className = 'workerContainer';
    var workerDivEl = document.createElement("div");
    var workerNameEl = document.createElement("h1");
    console.log(workerNameEl)
    workerNameEl.innerHTML = name;
    var workerCostEl = document.createElement("p");
    workerCostEl.innerHTML = cost;
    var workerAmountEl = document.createElement("p");
    workerAmountEl.innerHTML = amount;
    console.log(workerAmountEl)

    workerDivEl.appendChild(workerNameEl);
    workerDivEl.appendChild(workerCostEl);
    workerEl.append(workerDivEl);
    workerEl.appendChild(workerAmountEl);
    upgradeTabEl.appendChild(workerEl);

    // data values

    workerEl.amountEl = workerAmountEl;
    workerEl.costEl = workerCostEl;

    workerEl.addEventListener("click", workerUpgrade);

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
}
function workerUpgrade(e){
    var buttonIndex = (Array.prototype.indexOf.call(this.parentElement.children, this)) - 2;
    //console.log(buttonIndex);
    
    // can you afford it?
    if (cookieAmount >= workers[buttonIndex].cost) {
      cookieAmount -= workers[buttonIndex].cost;
      workers[buttonIndex].amount++;
      console.log(workers[buttonIndex].amount)
      //Cost increase
      workers[buttonIndex].cost += Math.floor(0.5 * workers[buttonIndex].amount);
      cookieDisplay()
    }

    e.currentTarget.costEl.innerHTML = workers[buttonIndex].cost;
    console.log("Cost: " + workers[buttonIndex].cost);
    e.currentTarget.amountEl.innerHTML = workers[buttonIndex].amount;
    console.log(workers[buttonIndex].amount);


}
