let widthA;
let widthB;
let widthC;

function setup() {
  createCanvas(800, 600);
  widthA = 250;
}

function draw() {
  widthC = round(Math.sqrt(widthA * widthA + (widthB - 50) * (widthB - 50)), 3);
  background(220);
  widthB = mouseX;
  line(50, 50, 50, 300);
  line(50, 300, widthB, 300);
  line(50, 50, widthB, 300);
  textSize(32);
  text("a = " + widthA, 50, 30);
  text("b = " + Math.abs(widthB - 50), 50, 350);
  text("c = " + widthC, 50, 400);
}
