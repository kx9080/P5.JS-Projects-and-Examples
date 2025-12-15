// Level 1
let rm1_squareX = 50.0;
let rm1_squareY = 0;
let rm1_speedX = 0;
let rm1_speedY = -3.0;
let mar;
let world1;

function preload() {
  mar = loadImage("mairo.png");
  world1 = loadImage("image.png");
}

function setup() {
  createCanvas(600, 600);
} //end setup

function draw() {
  background(world1);
  image(mar, rm1_squareX, rm1_squareY, 25, 50);
  rm1_squareX += rm1_speedX;
  rm1_squareY += rm1_speedY;

  fill(255);
  rect(25, 550, 250, 20); //platform 1
  rect(400, 520, 300, 20); //platform 2

  if (platform1() || platform2()) {
    rm1_speedY = 0;
  } else {
    rm1_speedY += 0.15;
  }
} //end draw

function keyPressed() {
  if (key === "w" || key === "W") {
    rm1_speedY = -5;
  } else if (key === "d" || key === "D") {
    rm1_speedX = 3;
  } else if (key === "a") {
    rm1_speedX -= 3;
  }
} //end keyPressed

function keyReleased() {
  if (key === "d" || key === "D") {
    rm1_speedX = 0;
  } else if (key === "a" || key === "A") {
    rm1_speedX = 0;
  }
}

function platform1() {
  if (
    rm1_squareX + 50 > 25 &&
    rm1_squareX < 271 &&
    rm1_squareY + 50 > 550 &&
    rm1_squareY < 570
  ) {
    return true;
  } else {
    return false;
  }
} //end platform1

function platform2() {
  if (
    rm1_squareX + 50 > 400 &&
    rm1_squareX < 700 &&
    rm1_squareY + 50 > 520 &&
    rm1_squareY < 540
  ) {
    return true;
  } else {
    return false;
  }
} //end platform2
