let pkpic;
let pkx = 50;
let pky = 50;
let pkspeed = 1;
let score = 0;

function preload() {
  pkpic = loadImage("pkpic.jpg");
} //end preloading of images

function setup() {
  createCanvas(700, 700);
} //end setup

function draw() {
  background(0, 0, 255);
  noFill();
  rect(pkx, pky, 100, 100);
  fill(255);
  textSize(32);
  text(score, 100, 400);
  image(pkpic, pkx, pky, 100, 100);

  pkx += pkspeed;

  if (pkx < -100) {
    pkx = width;
  }
  if (pkx > width) {
    pkx = -100;
  }
} //end draw

function mousePressed() {
  if (
    mouseX > pkx &&
    mouseX < pkx + 100 &&
    mouseY > pky &&
    mouseY < pky + 100
  ) {
    score++;
    pkspeed *= 1.1;
    if (random(0, 2) < 1) {
      pkspeed *= -1;
    }
  }
} //end mousePressed
