let char;
let man;
let manFade = 255;
let charFade = 0;

function preload() {
  man = loadImage("charmeleon.png");
  char = loadImage("charizard.png");
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  background(220);
  tint(255, manFade);
  image(man, width / 2, height / 2, 100, 100);
  tint(255, charFade);
  image(char, width / 2, height / 2, 100, 100);
  if (manFade >= 0) {
    manFade = 255;
  }
  if (charFade > 255) {
    charFade = 0;
  }
  if (charFade > 200) {
    fill(0);
    text("your charmeleon is now a charizard", 20, 100);
  }
  manFade -= 1;
  charFade += 1;
}

function mousePressed() {
  if (mousePressed) {
    manFade -= 20;
    charFade += 20;
    console.log("mouse");
  }
}
