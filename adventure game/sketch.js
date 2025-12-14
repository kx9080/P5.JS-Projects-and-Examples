//Global Variables
let cave, church, town, meadow;
let scenenum = 1;
let ts = 2;

function preload() {
  cave = loadImage("images/cave.jpg");
  church = loadImage("images/church.jpg");
  town = loadImage("images/town.jpg");
  meadow = loadImage("images/meadow.jpg");
} //end preloading of images

function setup() {
  createCanvas(600, 400);
  background(0, 0, 255);
} //end setup

function draw() {
  if (scenenum === 1) {
    Scene1();
  } else if (scenenum === 2) {
    Scene2();
  } else if (scenenum === 3) {
    Scene3();
  } else if (scenenum === 4) {
    Scene4();
  }
} //end draw

function keyPressed() {
  if (keyCode === RIGHT_ARROW || key === "+") {
    scenenum++;
  } else if (keyCode === LEFT_ARROW || key === "-") {
    scenenum--;
  }
  if (key === "r" || key === "R" || scenenum > 4) {
    scenenum = 1;
  }
}

function Scene1() {
  background(0, 0, 255);
  image(cave, 50, 50, width - 100, height - 100);
  textSize(ts);
  if (ts < 29) {
    ts++;
  }
  text("The cave of the evil monster", 50, 390);
}

function Scene2() {
  background(0, 255, 255);
  image(church, 50, 50, width - 100, height - 100);
  textSize(ts);
  if (ts < 25) {
    ts++;
  }
  text("The Monster destroyed the church last week", 50, 390);
}

function Scene3() {
  background(0, 255, 0);
  image(town, 50, 50, width - 100, height - 100);
  textSize(ts);
  if (ts < 29) {
    ts++;
  }
  text("I will avenge my town!", 50, 390);
}

function Scene4() {
  background(255, 0, 0);
  image(meadow, 50, 50, width - 100, height - 100);
  textSize(ts);
  if (ts < 29) {
    ts++;
  }
  text("And bury the monster in the meadow!", 50, 390);
}
