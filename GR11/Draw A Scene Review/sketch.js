let topStars = [];
let middleStars = [];
let bottomStars = [];
let translation = 0;
let doTranslation = false;
let cloudX = [];
let cloudY = [];
let cloudWidth = [];
let cloudHeight = [];
let cloudAlpha = [];

function setup() {
  rotation = 1;

  createCanvas(400, 400, defaultCanvas0, WEBGL);
  angleMode(DEGREES);
  randomizeStars();
  randomizeCloud();
}

function randomizeStars() {
  for (var i = 0; i < 40; i++) {
    topStars[i] = random(20, 75);
    middleStars[i] = random(75, 125);
    bottomStars[i] = random(125, 175);
  }
}

function randomizeCloud(doSpecific, index) {
  if (doSpecific) {
    cloudY[index] = random(20, 75);
    cloudAlpha[index] = random(0, 170);
    cloudX[index] = random(-400, -60);
    cloudHeight[index] = random(20, 30);
    cloudWidth[index] = random(40, 60);
  } else {
    for (var i = 0; i < 70; i++) {
      cloudY[i] = random(20, 75);
      cloudAlpha[i] = random(0, 170);
      cloudX[i] = random(-700, -60);
      cloudHeight[i] = random(20, 30);
      cloudWidth[i] = random(40, 60);
    }
  }
}

function draw() {
  background(0);
  rectMode(CENTER);

  if (doTranslation) {
    translation += 1;
  }
  fill(0, 255, 0);
  rect(200, 350, 400, 100);
  fill(190, 138, 65);
  square(300, 300, 80);
  fill(18, 169, 229);
  square(320, 300, 25);
  fill(96, 96, 96);
  rect(280, 315, 25, 50);
  fill(102, 2, 2);
  triangle(260, 260, 340, 260, 300, 200);
  fill(18, 169, 229);
  square(320, 300, 25);

  push();
  translate(-translation, 0);
  fill(255, 0, 0);
  rect(100, 300, 110, 30, 30, 0, 0, 0);
  rect(130, 290, 100, 50, 30, 30, 0, 0);
  fill(18, 169, 229);
  rect(110, 282, 35, 15, 30, 0, 0, 0);
  rect(150, 282, 35, 15, 0, 30, 0, 0);
  fill(0);
  circle(80, 310, 25);
  circle(150, 310, 25);
  pop();

  push();
  rectMode(CORNER);
  fill(255, cloudAlpha[0]);
  rect(cloudX, cloudY, 30, 20);
  pop();

  rotation += 2;
  for (var i = 1; i < 16; i++) {
    fill(255);
    drawAStar(i * 25, topStars[i]);
    drawAStar(i * 25, middleStars[i]);
    drawAStar(i * 25, bottomStars[i]);
  }
  drawClouds();
}

function keyPressed() {
  if (key == "R" || key == "r") {
    randomizeStars();
    randomizeCloud();
    translation = 0;
    doTranslation = false;
  }
  if (key == "V" || key == "v") {
    doTranslation = !doTranslation;
  }
}

function mousePressed() {
  print("Mouse pressed at: " + mouseX + ", " + mouseY);
}

function drawAStar(x, y) {
  push();
  noStroke();
  translate(x, y);
  fill(255);
  rotate(rotation);
  rect(0, 0, 10, 10);
  pop();

  push();
  noStroke();
  translate(x, y);
  rotate(rotation + 45);
  rect(0, 0, 10, 10);
  pop();
}

function drawClouds() {
  translate(cloudX, 0);
  rectMode(CORNER);
  noStroke();
  for (var i = 0; i < cloudY.length; i++) {
    fill(255, cloudAlpha[i]);
    rect(cloudX[i], cloudY[i], cloudWidth[i], cloudHeight[i], 40);
    if (cloudX[i] > 400) {
      randomizeCloud(true, i);
    } else {
      cloudX[i] += 1;
    }
  }
}