let w = 29;
let h = 12;
let l = 37;
let volume;

let teacher1 = "Mr. Dudas";
let teacher2 = "Ms. Savich";
let teacher3 = "Ms. Whitson";
let teacher4 = "Ms. Hrycun";
let course1 = "Computer Science";
let course2 = "Science";
let course3 = "Psychology";
let course4 = "English";

let raceLength = 252; // in seconds

function setup() {
  createCanvas(800, 1000);
  textAlign(CENTER);
  textFont("Roboto Slab");
  textStyle(BOLD);
}

function draw() {
  translate(0, 150);
  background(220);

  // Part 1 - Volume
  fillGradient("linear", {
    from: [0, 0], // x, y : Coordinates
    to: [800, 800], // x, y : Coordinates
    steps: [color(255, 100, 100), color(204, 96, 0), color(255)], // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
  });
  rectMode(CENTER);
  rect(400, 0, 780, 225, 15);
  line(10, -20, 790, -20);
  fill("black");
  volume = w * h * l;
  textSize(32);
  text("The width of Room 2044 is: " + w + " feet", 400, 15);
  text("The height of Room 2044 is: " + h + " feet", 400, 55);
  text("The length of Room 2044 is: " + l + " feet", 400, 95);
  text(
    "The volume of Room 2044 is approximately: \n" + volume + " cubic feet",
    400,
    -75
  );

  // Part 2 - Timetable
  fillGradient("linear", {
    from: [0, 0], // x, y : Coordinates
    to: [800, 800], // x, y : Coordinates
    steps: [color(0, 50, 200), color(0, 96, 204), color(255)], // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
  });
  rectMode(CENTER);
  rect(400, 340, 780, 400, 15);
  line(10, 240, 790, 240);
  line(10, 340, 790, 340);
  line(10, 440, 790, 440);
  line(200, 140, 200, 540);
  textSize(24);
  fill("black");
  text("Block 1", 100, 200);
  text("Block 2", 100, 300);
  text("Block 3", 100, 400);
  text("Block 4", 100, 500);
  text(teacher1 + "\n" + course1, 470, 180);
  text(teacher2 + "\n" + course2, 470, 280);
  text(teacher3 + "\n" + course3, 470, 380);
  text(teacher4 + "\n" + course4, 470, 480);

  // Part 3 - Final 10% MOD
  fillGradient("linear", {
    from: [0, 0], // x, y : Coordinates
    to: [800, 800], // x, y : Coordinates
    steps: [color(100, 255, 100), color(96, 204, 0), color(255)], // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
  });
  rectMode(CENTER);
  rect(400, 680, 780, 200, 15);
  fill(0);
  textSize(32);
  text(
    "You ran for:\nMinutes: " + floor(252 / 60) + "\nSeconds: " + (252 % 60),
    400,
    630
  );
}
