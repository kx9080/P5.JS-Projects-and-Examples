let dougdougpepper;
let pepperx = 30;
let peppery = 200;

function setup() {
  createCanvas(800, 800);
}

function preload() {
  dougdougpepper = loadImage("pepper.jpg");
}

function draw() {
  background(255, 255, 255);
  textFont("Sofia");
  color("rgb");
  textSize(20);
  text("Hello", 20, 40);
  image(dougdougpepper, pepperx, peppery, 400, 400);
}

function keyPressed() {
  if (key === "a") {
    pepperx -= 30;
  }
  if (key === "d") {
    pepperx += 30;
  }
  if (key === "w") {
    peppery -= 30;
  }
  if (key === "s") {
    peppery += 30;
  }
}
