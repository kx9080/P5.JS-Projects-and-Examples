let progressBarWidth = 72.3;
let mouseCords;
let youWereSupposedToStopThemNotJoinThem = false;
let closeTopWindow;
let ms;
let msWaitTime;
let closeButtonPressed;
let quickSetTimesNow;
let chibimiku;

function preload() {
  chibimiku = loadImage("chibimiku.png");
}

function setup() {
  let canvas = createCanvas(800, 800, defaultCanvas0);
  mouseCords = "test";
  closeTopWindow = 200;
  ms = millis();
}

function draw() {
  background(220);
  ms = millis();
  if (youWereSupposedToStopThemNotJoinThem === false) {
    for (var i = 40, x = 20; i < 200, x < closeTopWindow; i += 25, x += 40) {
      strokeWeight(6);

      // Draw the main window
      rect(x, i, 600, 400);

      //Top Bar
      fillGradient("linear", {
        from: [20, 20], // starting point [x, y] coords
        to: [580, 580], // ending point [x, y] coords
        steps: [
          [color(255), 0], // p5Color Object, stopAt (0-1)
          [color(0, 105, 250), 0.5],
          [color(0, 85, 234), 0.75],
          [color(0), 1],
        ],
      });
      stroke(0, 85, 234);
      rect(x, i, 600, 40);
      fill(255);

      // Circle
      stroke(0);
      circle(x + 300, i + 220, 250);
      stroke(0, 85, 234);

      // Text
      strokeWeight(0);
      fill(0);
      textStyle("regular");
      textSize(20);
      text("Unity 2022.3.62f1 has crashed (Not Responding)", x + 10, i + 30);
      textSize(190);
      textAlign(CENTER);
      text("U", x + 300, i + 290);
      textAlign(LEFT);
      strokeWeight(6);

      // Progress Bar
      strokeWeight(1);
      stroke(0);
      fill(255);
      rect(x + 200, i + 360, 200, 20);
      stroke(0, 85, 234);
      strokeWeight(0);
      fill(57, 255, 20);
      rect(x + 201, i + 361, progressBarWidth, 18);
      if (progressBarWidth < 198) {
        progressBarWidth += 0.01;
      }

      // Close Button
      fill(255, 0, 0);
      rect(x + 560, i, 40, 40);
      fill(255);
      strokeWeight(0);
      textStyle("bold");
      textSize(40);
      text("x", x + 569, i + 30);
      strokeWeight(6);

      // Maximize Button
      rect(x + 522.5, i + 2.5, 35, 35);
      rect(x + 532.5, i + 12.5, 15, 15);

      // Minimize Button
      rect(x + 482.5, i + 2.5, 35, 35);
      rect(x + 492.5, i + 20, 15, 1);

      // Little Background Pyramid made of lines
      stroke(0);
      line(3, 729, 136, 597);
      line(136, 597, 299, 800);
      line(136, 597, 399, 800);
      stroke(0, 85, 234);

      //I have to have a miku somewhere right
      image(chibimiku, x + 450, i + 275, 130, 130);
    }
  }

  // Mini Game Thingy
  if (
    progressBarWidth >= 198 &&
    youWereSupposedToStopThemNotJoinThem === false
  ) {
    rect(80, 500, 400, 200);
    strokeWeight(0);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Loading done, start Unity now?", 280, 550);
    text("[Y] Yes [N] Close Unity", 280, 600);
    textAlign(LEFT);
    fill(255);
  }

  if (youWereSupposedToStopThemNotJoinThem === true) {
    background(0, 0, 255);
    text("You have encountered a crash, please", 10, 60);
    text("press [U] to reboot.", 10, 110);
    text("Error Code: Unity", 10, 250);
  }

  //for button 1
  if (closeButtonPressed === true) {
    closeTopWindow = 160;
    console.log("Starting time " + ms);
    console.log("Time to wait until is " + msWaitTime);
    if (quickSetTimesNow === true) {
      ms = millis();
      msWaitTime = millis() + 1000;
      quickSetTimesNow = false;
    }
    if (ms >= msWaitTime) {
      closeTopWindow = 200;
      console.log("opened");
      closeButtonPressed = false;
    }
  }
}

function mousePressed() {
  console.log(ms);
  mouseCords = "your coordinates are " + mouseX + " " + mouseY;
  console.log(mouseCords);
  if (mouseX >= 740 && mouseX <= 780) {
    if (mouseY >= 140 && mouseY <= 180) {
      closeButtonPressed = true;
      quickSetTimesNow = true;
    }
  }
}

function keyPressed() {
  if (key === "y" && progressBarWidth >= 198) {
    progressBarWidth = 0;
  }
  if (key === "n" && progressBarWidth >= 198) {
    youWereSupposedToStopThemNotJoinThem = true;
  }
  if (key === "s" || key === "S") {
    progressBarWidth = 198;
  }
  if (key === "u") {
    youWereSupposedToStopThemNotJoinThem = false;
    progressBarWidth = 0;
  }
}
