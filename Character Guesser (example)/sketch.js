//Ironman, Groot, Thanos, Spiderman
let rv;
let scenenum = 1;
let isGood = false;
let isHuman = false;
let isBitten = false;
let isFemale = false;

function preload() {
  ironm = loadImage("images/ironman.png");
  gamora = loadImage("images/gamora.jpg");
  iamgroot = loadImage("images/groot.jpg");
  capm = loadImage("images/capmarvel.png");
  spidey = loadImage("images/spiderman.jpg");
  thanos = loadImage("images/thanos.jpg");
  gwen = loadImage("images/spiderw.jpg");
} //end preloading of images and fonts

function setup() {
  createCanvas(700, 400);
  background(255, 255, 0);
  textSize(24);
} //end setup

function draw() {
  if (scenenum === 1) {
    scene1(5); //this 5 will affect the red value of the text @ end of example
  } else if (scenenum === 2) {
    scene2(50);
  } else if (scenenum === 3) {
    scene3(155);
  } else if (scenenum === 4) {
    scene4(200);
  } else if (scenenum === 999) {
    endscene(255);
  }
} //end draw

function keyPressed() {
  //Good guy question
  if ((key === "Y" && scenenum === 1) || (key === "y" && scenenum === 1)) {
    isGood = true;
    scenenum++;
  } else if (
    (scenenum === 1 && key === "n") ||
    (scenenum === 1 && key === "N")
  ) {
    scenenum++;
  }
  //Human question
  else if ((key === "Y" && scenenum === 2) || (key === "y" && scenenum === 2)) {
    isHuman = true;
    scenenum++;
  } else if (
    (scenenum === 2 && key === "n") ||
    (scenenum === 2 && key === "N")
  ) {
    scenenum++;
  }
  //Spider question
  else if ((key === "Y" && scenenum === 3) || (key === "y" && scenenum === 3)) {
    isBitten = true;
    scenenum++;
  } else if (
    (scenenum === 3 && key === "n") ||
    (scenenum === 3 && key === "N")
  ) {
    scenenum++;
  }
  //Female question
  else if ((key === "Y" && scenenum === 4) || (key === "y" && scenenum === 4)) {
    isFemale = true;
    scenenum = 999;
  } else if (
    (scenenum === 4 && key === "n") ||
    (scenenum === 4 && key === "N")
  ) {
    scenenum = 999;
  }
} //end keyPressed
function scene1(rv) {
  background(255, 255, 0);
  fill(rv, 50, 150);
  text("Is your character a good guy? (Y or N)", 50, 120);
}

function scene2(rv) {
  background(255, 255, 0);
  fill(rv, 50, 150);
  text("Is your character a human? (Y or N)", 50, 120);
}

function scene3(rv) {
  background(255, 255, 0);
  fill(rv, 50, 150);
  text("Was your character bitten by a radioactive spider? (Y or N)", 50, 120);
}

function scene4(rv) {
  background(255, 255, 0);
  fill(rv, 50, 150);
  text("Is your character female? (Y or N)", 50, 120);
}

function endscene() {
  background(255, 255, 0);
  fill(50, 50, 150);
  if (isHuman && isGood && !isBitten && !isFemale) {
    text("Iron Man", 50, 300);
    image(ironm, 300, 100, 250, 300);
  }
  if (!isHuman && isGood && !isBitten && isFemale) {
    text("Gamora", 50, 300);
    image(gamora, 300, 100, 250, 300);
  }
  if (!isHuman && !isBitten && !isFemale && isGood) {
    text("Groot", 50, 300);
    image(iamgroot, 300, 100, 250, 300);
  }
  if (isHuman && isGood && isBitten && !isFemale) {
    text("Spiderman", 50, 300);
    image(spidey, 300, 100, 250, 300);
  }
  if (!isHuman && !isGood && !isBitten && !isFemale) {
    text("Thanos", 50, 300);
    image(thanos, 300, 100, 250, 300);
  }
  if (isHuman && isGood && isBitten && isFemale) {
    text("Gwen", 50, 300);
    image(gwen, 300, 100, 250, 300);
  }
} //endscene
