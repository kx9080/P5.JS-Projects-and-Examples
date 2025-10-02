let product1 = "Minecraft";
let price1 = 26.95;
let bought1 = 0;
let totalSales1 = 0;
let product2 = "Terraria";
let price2 = 9.99;
let bought2 = 0;
let totalSales2 = 0;
let product3 = "Stardew Valley";
let price3 = 14.99;
let bought3 = 0;
let totalSales3 = 0;
let product4 = "The Sims 4";
let price4 = 39.99;
let bought4 = 0;
let totalSales4 = 0;
let product5 = "Cyberpunk 2077";
let price5 = 59.99;
let bought5 = 0;
let totalSales5 = 0;
let totalRevenue = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);
  bought1 = window.prompt(
    "How many copies of " + product1 + " have been sold?"
  );
  bought2 = window.prompt(
    "How many copies of " + product2 + " have been sold?"
  );
  bought3 = window.prompt(
    "How many copies of " + product3 + " have been sold?"
  );
  bought4 = window.prompt(
    "How many copies of " + product4 + " have been sold?"
  );
  bought5 = window.prompt(
    "How many copies of " + product5 + " have been sold?"
  );
}

function draw() {
  translate(400, 200);
  background(105, 105, 105);
  textSize(32);
  textFont("Roboto Slab");
  textAlign(CENTER);
  text("Game Store", 20, 30);

  totalSales1 = round(bought1 * price1, 2);
  totalSales2 = round(bought2 * price2, 2);
  totalSales3 = round(bought3 * price3, 2);
  totalSales4 = round(bought4 * price4, 2);
  totalSales5 = round(bought5 * price5, 2);

  fill(255);

  if (bought4 < 50 && millis() > timer) {
    bought4++;
    timer = millis() + 1000;
  }

  textSize(20);
  text(
    product1 +
      " - $" +
      price1.toFixed(2) +
      " - Bought: " +
      bought1 +
      " | Total: $" +
      totalSales1,
    20,
    80
  );
  text(
    product2 +
      " - $" +
      price2.toFixed(2) +
      " - Bought: " +
      bought2 +
      " | Total: $" +
      totalSales2,
    20,
    120
  );
  text(
    product3 +
      " - $" +
      price3.toFixed(2) +
      " - Bought: " +
      bought3 +
      " | Total: $" +
      totalSales3,
    20,
    160
  );
  text(
    product4 +
      " - $" +
      price4.toFixed(2) +
      " - Bought: " +
      bought4 +
      " | Total: $" +
      totalSales4,
    20,
    200
  );
  text(
    product5 +
      " - $" +
      price5.toFixed(2) +
      " - Bought: " +
      bought5 +
      " | Total: $" +
      totalSales5,
    20,
    240
  );

  textSize(16);
  text("Press keys 1-5 to buy the corresponding game.", 20, 300);

  totalRevenue = round(
    totalSales1 + totalSales2 + totalSales3 + totalSales4 + totalSales5,
    2
  );

  textSize(40);
  textStyle(BOLD);
  text("Total Revenue: $" + totalRevenue.toFixed(2), 20, 400);
}

function keyPressed() {
  if (key === "1") {
    bought1++;
  } else if (key === "2") {
    bought2++;
  } else if (key === "3") {
    bought3++;
  } else if (key === "4") {
    bought4++;
  } else if (key === "5") {
    bought5++;
  }
}
