let one, two, three, four, five, six, rolling;
let roll = 0;
let secret = "Dudas is";
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
} //end setup

function draw() {
  if (roll === 0) {
    image(rolling, 200, 15, 200, 200);
  }
} //end draw

function mousePressed() {
  rollADice();
} //end mousePressed

function rollADice() {
  password = window.prompt("What is the password");
  roll = Math.floor(Math.random() * 6) + 1;
  if (password !== secret) {
    return;
  }
  showRoll();
}

function showRoll() {
  background(200, 15, 150);
  if (roll === 1) {
    background(200, 15, 150);
    image(one, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  } else if (roll === 2) {
    background(200, 15, 150);
    image(two, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  } else if (roll === 3) {
    background(200, 15, 150);
    image(three, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  } else if (roll === 4) {
    background(200, 15, 150);
    image(four, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  } else if (roll === 5) {
    background(200, 15, 150);
    image(five, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  } else if (roll === 6) {
    background(200, 15, 150);
    image(six, 250, 100, 100, 100);
    noLoop();
    setTimeout(reLoop, 1000);
  }
}

function reLoop() {
  roll = 0;
  loop();
}
