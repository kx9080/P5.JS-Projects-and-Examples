let screen = 0;
// 0= menu, 1 = Instruction, 2 = Game, 3 = Game Over

//Global Variables
let cometX = 330;
let cometY = 750;
let cometSize = 40;
let cometSpeed = 6;

// Obstacle Variables
let astX = 300;
let astY = 0;
let astSpeed = 6;
let asteroid;

// HUB
let score = 0;
let highscore = 0;
let health = 100;

// Images
function preload() {
  Thumbnail = loadImage("ChatGPT Image Jan 26, 2026, 04_09_30 PM.png");
  Gamebackground = loadImage("ChatGPT Image Jan 26, 2026, 04_09_34 PM.png");
  Asteroid = loadImage(
    "isolated-dark-grey-asteroid-3d-render-space-rock_191095-85682-removebg-preview.png",
  );
}

function setup() {
  createCanvas(655, 850, defaultCanvas0);
}

function draw() {
  if (screen === 0) {
    drawMenu();
  } else if (screen === 1) {
    drawInstructions();
  } else if (screen === 2) {
    playGame();
  } else if (screen === 3) {
    drawGameOver();
  }
}

// Menu Screen (From Computing Masterclass menu video)
function drawMenu() {
  background(Thumbnail);

  fill("#000000");
  stroke("#E02315");
  textSize(23);
  textAlign(CENTER);
  text("Press ENTER to Play", width / 2, 300);
  text("Press I for Instruction", width / 2, 340);
}

// Instructions
function drawInstructions() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(25);
  text("Instructions", width / 2, 150);

  textSize(20);
  text("USE Left and Right arrow keys to move", width / 2, 220);
  text("Avoid the incoming debris", width / 2, 260);
  text("Each hit lowaer your health", width / 2, 300);
  text("Press R to Return", width / 2, 360);
}

// Game
function playGame() {
  background(Gamebackground);

  //Comet Drawing
  fill("#087CD8");
  ellipse(cometX, cometY, cometSize);

  //Comet Movement (Taken from Move the Square assigment)
  if (keyIsDown(LEFT_ARROW) === true) {
    cometX -= cometSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    cometX += cometSpeed;
  }

  //Asteroid ("Got this from this example from Computing Masterclass")
  astX += random()
  astY += astSpeed;

  // Asteroid removal
  if (astY > height) {
    astY = 0;
    ast = random(50, width - 50);
    astXSpeed = random(-3, 3);
    score++;
    astSpeed = 6 + score + 0.2; //(Asked Chatgpt how to make it faster)
  }

  // Collision system (Got this from both Computing Masterclass and Health bar video by Mr Walker )
  let d = dist(cometX, cometY, astX, astY);
  if (d < 45) {
    health -= 25;
    astY = 0;
    astX = random(50, width - 50);
  }

  drawHUD();

  if (health <= 0) {
    highScore = max(score, highScore);
    screen = 3;
  }
}

// HUD

function drawHUD() {
  // Main Health Bar
  fill(255);
  rect(20, 20, 100, 12);
  fill(255, 0, 0);
  rect(20, 50, health, 12);

  fill(255);
  textSize(14);
  textAlign(LEFT);
  text("Score: " + score, 20, 60);
}

// Game Over
function drawGameOver() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("GAME OVER", width / 2, 250);

  textSize(18);
  text("Final Score: " + score, width / 2, 300);
  text("High Score: " + highScore, width / 2, 330);
  text("Press R to Restart", width / 2, 380);
}

// Key Pressed
function keyPressed() {
  if (keyCode === ENTER) {
    if (screen === 0) screen = 2;
    else if (screen === 1) screen = 0;
  }

  if (key === "i") {
    screen = 1;
  }

  if (key === "r") {
    resetGame();
  }
}

// I used ChatGPT to Program the Reset System (Not copy and past but the things that needed to be reset)
// Reset System
function resetGame() {
  score = 0;
  health = 100;
  astY = 0;
  screen = 2;
}
