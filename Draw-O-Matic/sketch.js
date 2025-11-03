let r = 0;
let g = 0;
let b = 0;
let colorPicker;
let circleButton;
let squareButton;
let circleButtonClicked = false;
let rectButtonClicked = true;
let size;
let currentColor;

function setup() {
  const circbtn = document.getElementById("circleButton");
  const rectbtn = document.getElementById("squareButton");
  const size = document.getElementById("sizeSlider");
  const sizeValue = document.getElementById("sizeValue");
  size.addEventListener("input", function () {
    sizeValue.textContent = size.value;
  });
  sizeValue.textContent = size.value;
  colorPicker = document.getElementById("colorPicker");
  circbtn.addEventListener("click", makeitacircle);
  rectbtn.addEventListener("click", makeitarect);
  let canvas = createCanvas(800, 600, defaultCanvas0);
  rectMode(CENTER);
  background(220);
  // size = createSlider(5, 50, 20);
  // size.position(300, 10);
  checkWindowSize();
}

function checkWindowSize() {
  if (window.innerWidth < 1000) {
    alert("Please make your window bigger for an optimal drawing experience!");
  }
}

function draw() {
  noStroke();
  fill(0);
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
  console.log(colorPicker.value);
  const col = colorPicker.value;
  const brushSize = parseInt(sizeSlider.value);
  fill(col);
  if (rectButtonClicked === true) {
    rect(mouseX, mouseY, brushSize, brushSize);
  }
  if (circleButtonClicked === true) {
    ellipse(mouseX, mouseY, brushSize, brushSize);
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
