let bombY = 50;
let speed = 1;
let timer;
let explosion;

function preload() {
  explosion = loadImage("explosion.jpg");
}

function setup() {
  createCanvas(800, 1000);
}

function draw() {
  background(220, 220, 30);
  textFont("Roboto Slab");
  textSize(24);
  textAlign(CENTER);
  text("Bomb Drop", width / 2, 50);

  //bomb
  square(400, bombY, 20);

  bombY += speed;

  if (bombY > height) {
    image(explosion, 0, 500, 800, 600);
    textAlign(CENTER);
    text("Game Over", width / 2, 200);
    text("You survived: " + timer.toFixed(2) + "seconds ", width / 2, 240);
  } else {
    timer = millis() / 1000;
    text("Time: " + timer.toFixed(2), 60, 200);
  }
}

function mousePressed() {
  bombY -= 8;
}

function keyPressed() {
  if (keyCode === 32) {
    bombY -= 8;
    speed += 0.02;
  }
  if (key === "k") {
    bombY -= 8;
    speed += 0.02;
  }
  if (key === "j") {
    bombY -= 8;
    speed += 0.02;
  }
  if (key === "h") {
    bombY += 18;
  }
  if (key === "g") {
    bombY += 18;
  }
  if (key === "r") {
    bombY = 50;
    speed = 1;
    timer = 0;
  }
}
