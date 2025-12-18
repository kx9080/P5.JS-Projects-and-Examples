let one, two, three, four, five, six, rolling;
let playerRoll = 0;
let casinoRoll = 0;
let password;

function preload() {
  one = loadImage("images/1.jpg");
  two = loadImage("images/2.jpg");
  three = loadImage("images/3.jpg");
  four = loadImage("images/4.jpg");
  five = loadImage("images/5.jpg");
  six = loadImage("images/6.jpg");
  rolling = loadImage("images/roll.gif");
} //end preloading of images

function setup() {
  createCanvas(600, 400);
  background(200, 15, 150);
  imageMode(CENTER);
}

function draw() {
  if (playerRoll === 0) {
    image(rolling, width / 2, height / 2, 200, 200);
  }
  textSize(32);
  textAlign(CENTER);
  text("Gambler's Paradise", width / 2, 350);
  textSize(10);
  text("Press 'C' to roll Casino Dice", width / 2, 370);
  text("Press 'P' to roll Player Dice", width / 2, 380);
  text("Press 'W' to see who won", width / 2, 390);
  textSize(20);
  text("Player Dice", 450, 90);
  text("Casino Dice", 100, 90);
} //end draw

function mousePressed() {
  rollADice();
} //end mousePressed

function keyPressed() {
  if (key === "c" || key === "C") {
    rollACasinoDice();
  } else if (key === "p" || key === "P") {
    rollAPlayerDice();
  } else if (key === "w" || key === "W") {
    compareRolls();
  }
}

function compareRolls() {
  if (playerRoll > casinoRoll) {
    textSize(32);
    textAlign(CENTER);
    text("Player Wins!", width / 2, 300);
  } else if (playerRoll < casinoRoll) {
    textSize(32);
    textAlign(CENTER);
    text("Casino Wins!", width / 2, 300);
  } else {
    textSize(32);
    textAlign(CENTER);
    text("It's a Tie, you win 1 Million Dollars.", width / 2, 300);
  }
}

function rollAPlayerDice() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  background(200, 15, 150);
  showCasinoRoll(playerRoll, 450);
  showCasinoRoll(casinoRoll, 100);
}

function rollACasinoDice() {
  casinoRoll = Math.floor(Math.random() * 6) + 1;
  background(200, 15, 150);
  showCasinoRoll(casinoRoll, 100);
  showCasinoRoll(playerRoll, 450);
}

function showCasinoRoll(roller, dieX) {
  if (roller === 1) {
    image(one, dieX, 150, 100, 100);
  } else if (roller === 2) {
    image(two, dieX, 150, 100, 100);
  } else if (roller === 3) {
    image(three, dieX, 150, 100, 100);
  } else if (roller === 4) {
    image(four, dieX, 150, 100, 100);
  } else if (roller === 5) {
    image(five, dieX, 150, 100, 100);
  } else if (roller === 6) {
    image(six, dieX, 150, 100, 100);
  }
}

function reLoop() {
  loop();
}
