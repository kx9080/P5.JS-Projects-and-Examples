let event = "Looney Lunch";
let preSales;
let preSaleCost = 1;
let daySales;
let daySaleCost = 2;
let totalSales;

function setup() {
  createCanvas(900, 950);
  preSales = window.prompt("How many tickets did we sell in PreSales?");
  daySales = window.prompt("How many tickets did we sell in On Day Sales?");
}

function draw() {
  background(255, 30, 30);
  stroke("#FFEB3B");
  textFont("BitcountDoubleGrid");
  textSize(50);
  text(event, 30, 60);
  textSize(40);
  text("Presales: " + preSales, 30, 120);
  text("Pre-Made: $" + preSales * preSaleCost, 300, 120);
  text("Price $" + preSaleCost, 700, 120);
  text("Day Sales: " + daySales, 30, 160);
  text("Today Made: $" + daySales * daySaleCost, 300, 160);
  text("Price $" + daySaleCost, 700, 160);

  totalSales = preSales * preSaleCost + daySales * daySaleCost;
  text("Total Made: $" + totalSales, 300, 300);
}

function keyPressed() {
  if (key === "a") {
    daySales++;
  } else if (key === "d") {
    daySales--;
  }
}
