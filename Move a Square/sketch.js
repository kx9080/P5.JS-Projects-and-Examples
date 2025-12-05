let X;
let Y;

function setup() {
  createCanvas(400, 400);
  X = width / 2;
  Y = height / 2;
}

function draw() {
  background(220);

  rectMode(CENTER);
  square(X, Y, 50);

  if (keyIsDown(RIGHT_ARROW) === true) {
    X += 1;
  }
  if (keyIsDown(LEFT_ARROW) === true) {
    X -= 1;
  }
  if (keyIsDown(UP_ARROW) === true) {
    Y -= 1;
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    Y += 1;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    X = width / 2;
    Y = height / 2; 
  }
}
