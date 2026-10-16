let alienx = 100;

function setup() {
  let sketch = createCanvas(800, 600);
  background(255, 50, 50); // Set color of background to dark red.
  textFont("Barrio"); // Sets font for in project.
  textSize(40);
  text("Alien Invasion", 50, 50); // Adds label for game.
} //end setup
function draw() {}

function drawAlien() {
  // Everything draws from the center point.
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Randomizes the X position of the newly spawned alien.
  alienx = random(width);

  //body - Sets up the settings for the body.
  stroke(0, 0, 255);
  strokeWeight(1);
  fill(random(255), random(255), random(255)); // Randomizes the color of the new body.
  rect(alienx, 200, 35, 120, 10); //Actually draws the alien rectangle.

  //head - Sets up the settings for the head.
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(255); // Sets the color of the head to white.
  ellipse(alienx, 150, 70, 100); //Actually draws the head, still using the x of the body.

  //eyes - Sets up the settings for the eyes.
  noStroke();
  fill(30); // Sets the color to gray.
  ellipse(alienx - 15, 144, 25, 40);
  ellipse(alienx + 15, 144, 25, 40);

  //arms - Sets up the settings for the arms.
  stroke(255, 255, 0);
  strokeWeight(3);
  line(alienx + 15, 210, alienx + 35, 200);
  line(alienx - 15, 210, alienx - 35, 200);
} //end drawAlien

function mousePressed() {
  print("MouseX: " + mouseX + "     MouseY: " + mouseY); // Writes a comment about position of mouse pointer.
  drawAlien(); // Runs the function to draw a new alien.
} //end mousePressed
