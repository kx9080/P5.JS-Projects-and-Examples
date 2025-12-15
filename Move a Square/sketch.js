let X;
let Y;
let speed;
let powerupStatus;
let powerupX;
let powerupY;
let powerup;

function setup() {
  createCanvas(700, 1000);
  X = width / 2;
  Y = 750;
  speed = 6;
  powerupStatus = false;
  powerup = false;
  textAlign(CENTER);
}

function draw() {
  background(49, 50, 68);
  rectMode(CORNER);
  fill(243, 139, 168);
  rect(0, 0, 700, 600);

  rectMode(CENTER);
  fill(69, 71, 90);
  square(X, Y, 50);

  if (keyIsDown(RIGHT_ARROW) === true || keyIsDown(68)) {
    X += speed;
  }
  if (keyIsDown(LEFT_ARROW) === true || keyIsDown(65)) {
    X -= speed;
  }
  if (keyIsDown(UP_ARROW) === true || keyIsDown(87)) {
    Y -= speed;
  }
  if (keyIsDown(DOWN_ARROW) === true || keyIsDown(83)) {
    Y += speed;
  }

  if (Y <= 610) {
    text("WARNING: ENTERING ENEMY TERRITORY", width / 2, 50);
  }

  spawnPowerup();

  if (X > width) {
    X = 0;
    print("wrapped to the left side");
  } else if (X < 0) {
    X = width;
    print("wrapped to the right side");
  }

  if (Y > 1000) {
    Y = 0;
    print("");
  } else if (Y < 0) {
    Y = height;
  }

  print(speed);
}

function spawnPowerup() {
  if (powerupStatus === false) {
    powerupX = random(50, width - 50);
    powerupY = random(50, height - 50);
    powerupStatus = true;
    powerup = true;
  } else {
    if (dist(powerupX, powerupY, X, Y) <= 30) {
      if (speed <= 6) {
        speed += 6;
      }
      setTimeout(resetPowerup, 500);
      powerup = false;
    }
    if (powerup === true) {
      fill(250, 179, 135);
      square(powerupX, powerupY, 50);
    }
  }
}

function resetPowerup() {
  speed = 6;
  powerupStatus = false;
}

function keyPressed() {
  if (key === "r" || key === "R") {
    X = width / 2;
    Y = 750;
  } else if (key === "p" || key === "P") {
    if (speed > 7) {
      speed -= 6;
    } else {
      speed += 6;
    }
  }
}
