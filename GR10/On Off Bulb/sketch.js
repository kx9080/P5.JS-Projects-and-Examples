let bulbOn;
let bulbOff;
let isOn;
let itsOn;

function preload() {
  isOn = true;
  itsOn = true;
  bulbOn = loadImage("ON.png");
  bulbOff = loadImage("OFF.png");
}

function setup() {
  createCanvas(800, 600);
  background(255, 255, 255);
}

function draw() {
  if (isOn) {
    background(255, 255, 255);
    image(bulbOn, 220, 20, 360, 560);
  } else {
    background(80, 80, 80);
    image(bulbOff, 220, 20, 360, 560);
  }
}

function keyPressed() {
  if (key === "o") {
    isOn = false;
  } else if (key === "i") {
    isOn = true;
  }
  if (key === "k" && itsOn) {
    isOn = false;
    itsOn = false;
  } else if (key === "k" && !itsOn) {
    isOn = true;
    itsOn = true;
  }
}
