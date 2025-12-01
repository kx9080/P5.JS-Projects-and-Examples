let color = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function setup() {
  let canvas = createCanvas(800, 600, defaultCanvas0);
  rectMode(CENTER);
  reloadCanvas();
}

function reloadCanvas() {
  background(220);
  translate(300, 200);

  strokeWeight(4);
  square(62.5, 62.5, 325);

  for (let i = -25; i <= 225; i += 50) {
    strokeWeight(3);
    line(i, -100, i, 225);
    line(-100, i, 225, i);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      strokeWeight(1);
      if (color[i * 5 + j] === 0) {
        fill(255);
      } else if (color[i * 5 + j] === 1) {
        fill(0);
      } else if (color[i * 5 + j] === 2) {
        fill(255);
      }
      square(50 * j, 50 * i, 50);
      if (color[i * 5 + j] === 2) {
        textAlign(CENTER, CENTER);
        textSize(32);
        stroke(0);
        strokeWeight(2);
        fill(255, 0, 0);
        text("X", 50 * j, 50 * i);
      }
    }
  }

  strokeWeight(4);
  line(-75, -25, 225, -25);
  line(-25, -75, -25, 225);
}

function draw() {}

function keyPressed() {
  if (key === "r") {
    for (let k = 0; k < color.length; k++) {
      color[k] = 0;
    }
    reloadCanvas();
  }
}

function mousePressed() {
  print(mouseX + " " + mouseY);

  // Left click - change color to black/white
  if (mouseButton === LEFT) {
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        if (
          mouseX > 300 + 50 * j - 25 &&
          mouseX < 300 + 50 * j + 25 &&
          mouseY > 100 + 50 * i - 25 &&
          mouseY < 100 + 50 * i + 25
        ) {
          console.log("you clicked square " + i + " " + j);
          if (color[i * 5 + j] != 1) {
            color[i * 5 + j] = 1;
          } else if (color[i * 5 + j] === 1) {
            color[i * 5 + j] = 0;
          }
        }
      }
    }
  }

  // Right click - change to cross/white
  if (mouseButton === RIGHT) {
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        if (
          mouseX > 300 + 50 * j - 25 &&
          mouseX < 300 + 50 * j + 25 &&
          mouseY > 100 + 50 * i - 25 &&
          mouseY < 100 + 50 * i + 25
        ) {
          console.log("you clicked square " + i + " " + j);
          if (color[i * 5 + j] != 2) {
            color[i * 5 + j] = 2;
          } else if (color[i * 5 + j] === 2) {
            color[i * 5 + j] = 0;
          }
        }
      }
    }
  }

  reloadCanvas();
}
