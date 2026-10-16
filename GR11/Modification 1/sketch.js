let oceanpic, coralpic;
let octpic;
let fishX = [];
let fishY = [];
let fishColor = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFFFFF",
  "#00FFAA",
  "#FFAA00",
  "#6c1515",
];
let fishSpeedModifier = [];
let goesRight = true;

function preload() {
  oceanpic = loadImage("ocean.jpg");
  coralpic = loadImage("coral.png");
  octpic = loadImage("octopus.png");
}

function setup() {
  createCanvas(800, 600, defaultCanvas0);
  image(oceanpic, 0, 0, width, height);
  drawSchool(400, 300, 10);
  for (var i = 0; i < 5; i++) {
    fishY[i] = random(0, height);
    fishX[i] = random(-300, 300);
    fishSpeedModifier[i] = random(0.75, 1.5);
  }
}

function draw() {
  image(oceanpic, 0, 0, width, height);
  drawSchool(400, 300, 10);
  drawCoral(725, 200, 400);
  for (var fish = 0; fish < 10; fish++) {
    drawFish(fishX[fish], fishY[fish], 118, fishColor[fish]);
  }

  if (goesRight == true) {
    for (var i = 0; i < 10; i++) {
      fishX[i] += 3 * fishSpeedModifier[i];
    }
  } else {
    for (var i = 0; i < 10; i++) {
      fishX[i] += -3;
    }
  }

  for (var i = 0; i < 10; i++) {
    if (fishX[i] > width + 200) {
      fishX[i] = -200;
      fishSpeedModifier[i] = random(0.75, 1.5);
    }
    if (fishX[i] < -200) {
      fishX[i] = width + 200;
      fishSpeedModifier[i] = random(0.75, 1.5);
    }
  }
  drawCoral(0, 50, 600);
}

function mousePressed() {
  print("MouseX: " + mouseX + " MouseY: " + mouseY);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (goesRight == true) {
      goesRight = false;
    } else {
      goesRight = true;
    }
  }
}

var drawCoral = function (coralx, coraly, coralheight) {
  image(coralpic, coralx, coraly, coralheight / 2, coralheight);
};

var drawFish = function (centerX, centerY, bodyLength, bodyColor) {
  var bodyHeight = bodyLength * 0.6;
  noStroke();
  fill(bodyColor);

  ellipse(centerX, centerY, bodyLength, bodyHeight);

  var tailWidth = bodyLength / 4;
  var tailHeight = bodyHeight / 2;
  triangle(
    centerX - bodyLength / 2,
    centerY,
    centerX - bodyLength / 2 - tailWidth,
    centerY - tailHeight,
    centerX - bodyLength / 2 - tailWidth,
    centerY + tailHeight,
  );

  fill(33, 33, 33);
  ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
};

function drawSchool(schoolX, schoolY, numFish) {
  for (let i = 0; i < numFish; i++) {
    let centerX = random(-50, 50) + schoolX;
    let centerY = random(-50, 50) + schoolY;
    let fishSize = random(25, 75);
    image(octpic, centerX, centerY, fishSize, fishSize);
  }
}
