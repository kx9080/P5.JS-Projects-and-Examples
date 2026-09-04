let translateX = 400;
let translateY = 400;
let xMoveSpeed = 2;
let yMoveSpeed = 1.5;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  rectMode(CENTER);
  translate(translateX, translateY);
  rotate(frameCount);
  fill(255, 0, 0);
  ellipse(0, 0, 200, 200);
  rect(0, 0, 120, 120);
  rect(0, 0, 100, 100);
  ellipse(230, 230, 100, 100);
  ellipse(230, -230, 100, 100);
  ellipse(-230, -230, 100, 100);
  ellipse(-230, 230, 100, 100);

  translateX += xMoveSpeed;
  translateY += yMoveSpeed;
  if (translateX > width || translateX < 0) {
    xMoveSpeed *= random(-2, -1);
  }
  if (translateY > height || translateY < 0) {
    yMoveSpeed *= random(-2, -1);
  }
}
