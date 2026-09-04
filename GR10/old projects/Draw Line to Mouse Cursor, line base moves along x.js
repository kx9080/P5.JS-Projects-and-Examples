let input;
let lineX = 30;
let goRight = true;
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(10);
  line(lineX, 200, mouseX, mouseY);

  if (lineX === 570) {
    goRight = false;
  } else if (lineX === 30) {
    goRight = true;
  }

  if (goRight === true) {
    lineX += 1;
  } else {
    lineX -= 1;
  }
}

function mousePressed() {}

function keyPressed() {
  if (key === "c") {
    background(0);
  }
}
