let students = [
  "Steph Curry",
  "Lebron",
  "Kendrick Lamar",
  "MF DOOM",
  "George Washington",
  "Alexander Hamilton",
  "Lin Manuel Miranda",
  "Fongster",
  "Caden",
  "SZA",
];
let amountRaisedForCharity = [
  0.09, 499.99, 480, 260, 50, 51, 500, 0.5, 120, 12,
];
let formsReturned = [
  false,
  true,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
];
let total = 0;
let average = 0;
let countIf = 0;
let indexOfTop = "";
let topDono = 0;
let moneyByAtendees = 0;
let doorPrizeWinner = "";

function setup() {
  createCanvas(1000, 600, defaultCanvas0);
  textSize(10);
  for (let i = 0; i < amountRaisedForCharity.length; i++) {
    total += amountRaisedForCharity[i];
    average += amountRaisedForCharity[i];
    if (amountRaisedForCharity[i] < 40) {
      countIf += 1;
    }
    if (topDono <= amountRaisedForCharity[i]) {
      topDono = amountRaisedForCharity[i];
      indexOfTop = i;
    }
    if (formsReturned[i]) {
      moneyByAtendees += amountRaisedForCharity[i];
    }
  }
  average = (average / 10).toFixed(2);
  print(`total: ${total} average: ${average} `);
}

function draw() {
  background(220);
  for (let i = 0; i < students.length; i++) {
    if (i > 4) {
      text(students[i], 200 * i - 990, 100);
      text(amountRaisedForCharity[i], 200 * i - 990, 120);
      text(
        `Have you returned your form: ${formsReturned[i]}`,
        200 * i - 990,
        140,
      );
    } else {
      text(students[i], 200 * i + 10, 300);
      text(amountRaisedForCharity[i], 200 * i + 10, 320);
      text(
        `Have you returned your form: ${formsReturned[i]}`,
        200 * i + 10,
        340,
      );
    }
  }
  if (countIf > 1) {
    push();
    textAlign(CENTER);
    textSize(20);
    text("Bottle Drive this Saturday", width / 2, 400);
    textSize(12);
  }
  text(`Total: ${total}`, width / 2 - 50, 450);
  text(`Average: ${average}`, width / 2 + 50, 450);
  text(
    `Our highest fundraiser was ${students[indexOfTop]}, raising $${amountRaisedForCharity[indexOfTop]}`,
    width / 2,
    500,
  );
  text(
    `Raised by those who have permission to attend: $${moneyByAtendees}`,
    width / 2,
    520,
  );
  text(`The door prize winner is ${doorPrizeWinner}`, width / 2, 540);
  pop();
}

function mousePressed() {
  doorPrizeWinner = students[Math.floor(Math.random() * students.length)];
}
