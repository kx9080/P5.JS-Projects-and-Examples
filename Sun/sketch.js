//Global Variables
let sky = 255;
let house, sun, moon;
let big = 32;

function preload() {
  house = loadImage("house.png");
  sun = loadImage("download.png");
  moon = loadImage("moon.jpg");
} //end preloading of images and fonts

function setup() {
  createCanvas(500, 600);
  big = 0;
} //end setup

function draw() {
  background(mouseX - 50);
  //draw the sun & moon

  tint(255);
  if (mouseX > 170) {
    image(sun, mouseX, 100 - mouseX / 5, 100, 100);
  } else {
    image(moon, mouseX, 100 - mouseX / 5, 100, 100);
  }
  if (big < 32) {
    big += 0.1;
  }
  //draw the house
  tint(mouseX);
  image(house, 100, 300, 300, 300);
  //draw the snow
  noStroke();

  fill(200);
  rect(0, 550, 500, 50);
  fill(255, 0, 0);
  textSize(big);
  text("A fine winter's day!", 150, 570);
}
