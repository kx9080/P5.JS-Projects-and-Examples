
function preload() {
} //end preloading of images

function setup() {
  createCanvas(800, 600, defaultCanvas0);
  background(0);
  imageMode(CENTER);
}

function draw() {
  fill(255);
  textSize(48);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Ubuntu Mono Sans");
  text("Gambler's Paradise", width / 2, 470);
  textSize(15);
  textFont("Arial");
  textStyle(NORMAL);
  text("Press 'C' to roll Casino Dice", width / 2, 510);
  text("Press 'P' to roll Player Dice", width / 2, 530);
  text("Press 'W' to see who won", width / 2, 550);
  text("Press 'B' to roll both Dice", width / 2, 570);
  text("Click to roll both Dice and compare all at once!", width / 2, 590);
  textSize(20);
  text("Player Dice", width - 100, 90);
  text("Casino Dice", 100, 90);
} //end draw

function mousePressed() {
  rollBothDice();
  compareRolls();
} //end mousePressed

function keyPressed() {
  if (key === "c" || key === "C") {
    rollACasinoDice();
  } else if (key === "p" || key === "P") {
    rollAPlayerDice();
  } else if (key === "w" || key === "W") {
    compareRolls();
  } else if (key === "b" || key === "B") {
    rollBothDice();
  }
}

function compareRolls() {
  textFont("BBH Bogle");
  if (playerRoll > casinoRoll) {
    textSize(32);
    textAlign(CENTER);
    text("Player Wins!", width / 2, 420);
  } else if (playerRoll < casinoRoll) {
    textSize(32);
    textAlign(CENTER);
    text("Casino Wins!", width / 2, 420);
  } else {
    textSize(32);
    textAlign(CENTER);
    text("It's a Tie, you win 1 Million Dollars.", width / 2, 420);
  }
}

function rollAPlayerDice() {
  playerRoll = Math.floor(Math.random() * 14) + 1;
  background(0);
  print(playerRoll);
}

function rollACasinoDice() {
  casinoRoll = Math.floor(Math.random() * 14) + 1;
  print(casinoRoll);
}