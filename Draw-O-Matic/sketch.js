let r = 0;
let g = 0;
let b = 0;
let colorPicker;
let circleButton;
let squareButton;
let circleButtonClicked = false;
let rectButtonClicked = true;
let size;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  background(220);
  colorPicker = createColorPicker("#000000");
  colorPicker.position(10, 10);
  circleButton = createButton("Circle");
  circleButton.position(150, 10);
  squareButton = createButton("Square");
  squareButton.position(220, 10);
  size = createSlider(5, 50, 20);
  size.position(300, 10);
}

function draw() {
  circleButton.mousePressed(makeitacircle);
  squareButton.mousePressed(makeitarect);
  noStroke();
  fill(0);
  rect(400, 750, 800, 100);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Click and drag to draw. Press 'C' to clear.", 400, 750);
  text("Press 'S' to save your drawing.", 400, 780);
}

function makeitacircle() {
  console.log("circle button clicked");
  circleButtonClicked = true;
  rectButtonClicked = false;
}

function makeitarect() {
  console.log("rectangle button clicked");
  rectButtonClicked = true;
  circleButtonClicked = false;
}

function mouseDragged() {
  fill(colorPicker.color());
  if (rectButtonClicked === true) {
    rect(mouseX, mouseY, size.value(), size.value());
  }
  if (circleButtonClicked === true) {
    ellipse(mouseX, mouseY, size.value(), size.value());
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    clear();
    background(220);
  }
  if (key === "s" || key === "S") {
    saveCanvas("myDrawing", "png");
  }
}
