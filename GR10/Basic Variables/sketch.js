let drawing = "*";
let fontSize = 32;
let etchX = 400;
let etchY = 300;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  background(220);
}

function draw() {
  textSize(fontSize);
  text(drawing, mouseX, mouseY);
  text(drawing, etchX, etchY);
}

function keyPressed() {
  if (key === "z") {
    background(220);
  }
  if (key === "1") {
    drawing = "*";
  }
  if (key === "2") {
    drawing = "#";
  }
  if (key === "3") {
    drawing = "@";
  }
  if (key === "4") {
    drawing = "%";
  }
  if (key === "5") {
    drawing = "&";
  }
  if (key === "6") {
    drawing = "$";
  }
  if (key === "7") {
    drawing = "+";
  }
  if (key === "8") {
    drawing = "=";
  }
  if (key === "9") {
    drawing = "-";
  }
  if (key === "0") {
    drawing = "/";
  }
  if (key === "w") {
    fontSize += 1;
  }
  if (key === "s") {
    fontSize -= 1;
  }
  if (keyCode === UP_ARROW) {
    etchY -= 5;
  }
  if (keyCode === DOWN_ARROW) {
    etchY += 5;
  }
  if (keyCode === LEFT_ARROW) {
    etchX -= 5;
  }
  if (keyCode === RIGHT_ARROW) {
    etchX += 5;
  }
}
