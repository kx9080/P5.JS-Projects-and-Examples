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
let opacity;

function setup() {
  const circbtn = document.getElementById("circleButton");
  const rectbtn = document.getElementById("squareButton");
  const size = document.getElementById("sizeSlider");
  const sizeValue = document.getElementById("sizeValue");
  const opacitySlider = document.getElementById("opacitySlider");
  const opacityValue = document.getElementById("opacityValue");
  opacitySlider.addEventListener("input", function () {
    opacityValue.textContent = opacitySlider.value;
  });
  opacityValue.textContent = opacitySlider.value;
  size.addEventListener("input", function () {
    sizeValue.textContent = size.value;
  });
  sizeValue.textContent = size.value;
  colorPicker = document.getElementById("colorPicker");
  circbtn.addEventListener("click", makeitacircle);
  rectbtn.addEventListener("click", makeitarect);
  let canvas = createCanvas(800, 600, defaultCanvas0);
  rectMode(CENTER);
  background(255);
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

//Had to use this function to convert hex to rgba for opacity control
//Still can undertand most of it though :)
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
    );
  }
  throw new Error("Bad Hex");
}

function mouseDragged() {
  console.log(colorPicker.value);
  const col = colorPicker.value;
  const brushSize = parseInt(sizeSlider.value);
  const opacity = opacitySlider.value;
  print(col);
  fill(hexToRgbA(col).replace("1)", opacity / 100 + ")"));
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
    background(255);
  }
  if (key === "s" || key === "S") {
    saveCanvas("myDrawing", "png");
  }
}
