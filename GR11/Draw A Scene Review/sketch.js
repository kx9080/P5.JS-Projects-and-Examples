// Arrays to hold Y values for the stars, they are split to ensure that there is some more even distribution of stars and that they don't cluster on the top row.
let topStars = [];
let middleStars = [];
let bottomStars = [];
let starSize = [];
let rotation = 0;

// Variables to allow the movement of the car.
let translation = 0;
let doTranslation = false;

// Arrays to hold all aspects of the clouds, all randomized in randomizeClouds() function.
let cloudX = [];
let cloudY = [];
let cloudWidth = [];
let cloudHeight = [];
let cloudAlpha = [];
let cloudRoundness = [];
let cloudSpeed = [];

// Holds the variables for the moving sun
let lineLength = 10;
let lineLengthLengthener = 0.05;

// Holds the color of the sky.
let backgroundColor = "rgb(121, 180, 247)";

// Holds the color and speed of the car, and the possibilities for the other colors.
let speed = 1;
let carColor = "rgb(255, 0, 0)";
let carColorPossibilities = [
  "rgb(199, 44, 44)",
  "rgb(48, 104, 48)",
  "rgb(53, 53, 100)",
  "rgb(255, 255, 0)",
];

function setup() {
  // Basic setup, ensures that everything is randomized on startup.
  createCanvas(400, 400, defaultCanvas0);
  angleMode(DEGREES);
  randomizeStars();
  randomizeClouds();
  randomizeCarColor();
}

function randomizeCarColor() {
  //Picks a random color for the car from the array of possibilities.
  carColor =
    carColorPossibilities[int(random(0, carColorPossibilities.length))];
}

function randomizeStars() {
  for (var i = 0; i < 40; i++) {
    // Generates the random values for the arrays that hold the Y values and sizes of the stars.
    starSize[i] = random(3, 7);
    topStars[i] = random(20, 75);
    middleStars[i] = random(75, 125);
    bottomStars[i] = random(125, 175);
  }
}

function randomizeClouds(doSpecific, index) {
  // doSpecific will be true when a cloud goes off of the screen ensuring that only it will be randomized.
  // Otherwise, all clouds are randomized.
  if (doSpecific) {
    cloudY[index] = random(20, 105);
    cloudAlpha[index] = random(0, 170);
    cloudX[index] = random(-400, -60);
    cloudHeight[index] = random(20, 30);
    cloudWidth[index] = random(40, 60);
    cloudRoundness[index] = random(5, 30);
    cloudSpeed[index] = random(0.25, 1);
  } else {
    for (var i = 0; i < 70; i++) {
      cloudY[i] = random(20, 105);
      cloudAlpha[i] = random(0, 170);
      cloudX[i] = random(-700, -60);
      cloudHeight[i] = random(20, 30);
      cloudWidth[i] = random(40, 60);
      cloudRoundness[i] = random(5, 30);
      cloudSpeed[i] = random(0.25, 1);
    }
  }
}

function draw() {
  // Draw the background
  background(backgroundColor);
  rectMode(CENTER);

  // Draw the ground
  noStroke();
  fill(0, 255, 0);
  rect(200, 350, 400, 100);

  // Draw the house
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

  // Translate the car forward at an increasing speed
  if (doTranslation) {
    translation += speed;
    speed += 0.1;
    if (translation > 300) {
      doTranslation == false;
    }
  }

  // Draw the car
  push();
  translate(-translation, 0);
  fill(carColor);
  rect(100, 300, 110, 30, 30, 0, 0, 0);
  rect(130, 290, 100, 50, 30, 30, 0, 0);
  fill(backgroundColor);
  rect(110, 282, 35, 15, 30, 0, 0, 0);
  rect(150, 282, 35, 15, 0, 30, 0, 0);
  fill(0);
  circle(80, 310, 25);
  circle(150, 310, 25);
  pop();

  // Draw the stars, but only if it is night.
  rotation += 2;
  if (backgroundColor == "rgb(0, 0, 0)") {
    for (var i = 1; i < 16; i++) {
      fill(255);
      drawAStar(i * 25, topStars[i], i);
      drawAStar(i * 25, middleStars[i], i);
      drawAStar(i * 25, bottomStars[i], i);
    }
  } else {
    // If it is day, draw a sun.
    drawTheSun();
  }
  // Draw the clouds
  drawClouds();
}

function drawTheSun() {
  fill("rgb(255, 255, 0)");
  circle(300, 100, 50);
  for (var i = 0; i < 10; i++) {
    push();
    stroke(255, 255, 0);
    strokeWeight(2);
    translate(300, 100);
    rotate(i * 36 + rotation * 0.1);
    line(35 * (lineLength * 0.1), 0, 45 * (lineLength * 0.1), 0);
    pop();
  }
  lineLength += lineLengthLengthener;

  if (lineLength > 13) {
    lineLengthLengthener *= -1;
  } else if (lineLength < 8) {
    lineLengthLengthener *= -1;
  }
}

function reset() {
  // Calls all randomization functions and sets some values back to default.
  randomizeStars();
  randomizeClouds();
  randomizeCarColor();
  translation = 0;
  doTranslation = false;
  speed = 0;
}

function keyPressed() {
  if (key == "R" || key == "r") {
    reset();
  }
  if (key == "V" || key == "v") {
    doTranslation = !doTranslation;
  }
  if (key == "D" || key == "d") {
    if (backgroundColor == "rgb(0, 0, 0)") {
      backgroundColor = "rgb(121, 180, 247)";
      reset();
    } else {
      backgroundColor = "rgb(0, 0, 0)";
      reset();
    }
  }
}

function drawAStar(x, y, index) {
  // Translations are done based on values passed in, and so is the size.
  // Draw the first layer.
  push();
  noStroke();
  translate(x, y);
  fill(255);
  rotate(rotation);
  square(0, 0, starSize[index]);
  pop();

  // Draw the second layer, at a 45 to give the effect of a star shape.
  push();
  noStroke();
  translate(x, y);
  rotate(rotation + 45);
  square(0, 0, starSize[index]);
  pop();
}

function drawClouds() {
  rectMode(CORNER);
  noStroke();
  // Draws every cloud based on the values stored in all the arrays.
  for (var i = 0; i < cloudY.length; i++) {
    fill(255, cloudAlpha[i]);
    rect(
      cloudX[i],
      cloudY[i],
      cloudWidth[i],
      cloudHeight[i],
      cloudRoundness[i],
    );
    if (cloudX[i] > 400) {
      // After being off the screen for a bit, randomize just the cloud off screen.
      randomizeClouds(true, i);
    } else {
      // Move each cloud at a variable speed.
      cloudX[i] += cloudSpeed[i];
    }
  }
}
