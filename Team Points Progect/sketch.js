let teamOneName = "Oilers";
let teamOneWins = 10;
let teamOneLosses = 3;
let teamOnePoints;

let teamTwoName = "Flames";
let teamTwoWins = 0;
let teamTwoLosses = 10;
let teamTwoPoints;

let teamThreeName = "Canucks";
let teamThreeWins = 7;
let teamThreeLosses = 4;
let teamThreePoints;

let tsnLogo;
let BGimage;

function setup() {
  createCanvas(800, 600);
  tsnLogo = loadImage("tsn-logo.png");
  BGimage = loadImage("idkmanhockeyig.png"); // Background image of ice rink

  // hockey stick from vecteezy and hockey puck too
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  teamOnePoints = teamOneWins * 2 - teamOneLosses * 1.5;
  teamTwoPoints = teamTwoWins * 2 - teamTwoLosses * 1.5;
  teamThreePoints = teamThreeWins * 2 - teamThreeLosses * 1.5;

  image(BGimage, 0, 0, 800, 600);
  fill(255);
  rect(400, 550, 790, 65, 15);
  image(tsnLogo, 20, 530, 120, 39);
  line(150, 520, 150, 583);
  textSize(12);
  fill(0);
  text(
    "Press '1, 2 or 3' to add a win or '4, 5, or 6' to add a loss from team 1, 2 or 3",
    460,
    535
  );
  text("Click anywhere to add a win to the Flames", 460, 555);
  text("Points are calculated as (Wins x 2) - (Losses x 1.5)", 460, 575);

  textSize(48);
  fill(0);
  text("Team Points", 400, 70);

  translate(0, 100);
  fill(255);
  fillGradient("linear", {
    from: [0, 0], // x, y : Coordinates
    to: [800, 800], // x, y : Coordinates
    steps: [color(255, 100, 100), color(204, 96, 0), color(255)], // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
  });
  rect(400, 210, 700, 390, 15);

  textSize(32);
  fill(0);
  text("Team", 150, 40);
  text("Wins", 375, 40);
  text("Losses", 530, 40);
  text("Points", 680, 40);

  line(50, 60, 750, 60);
  line(300, 60, 300, 405);
  line(450, 60, 450, 405);
  line(600, 60, 600, 405);

  line(50, 150, 750, 150);
  line(50, 250, 750, 250);
  line(50, 350, 750, 350);

  text(teamOneName, 150, 100);
  text(teamOneWins, 375, 100);
  text(teamOneLosses, 530, 100);
  text(teamOnePoints, 680, 100);

  text(teamTwoName, 150, 200);
  text(teamTwoWins, 375, 200);
  text(teamTwoLosses, 530, 200);
  text(teamTwoPoints, 680, 200);

  text(teamThreeName, 150, 300);
  text(teamThreeWins, 375, 300);
  text(teamThreeLosses, 530, 300);
  text(teamThreePoints, 680, 300);
}

function keyPressed() {
  if (key === "1") {
    teamOneWins++;
  }
  if (key === "4") {
    teamOneLosses++;
  }
  if (key === "2") {
    teamTwoWins++;
  }
  if (key === "5") {
    teamTwoLosses++;
  }
  if (key === "3") {
    teamThreeWins++;
  }
  if (key === "6") {
    teamThreeLosses++;
  }
  if (key === "c" || key === "C") {
    clear();
    background(220);
  }
  if (key === "s" || key === "S") {
    saveCanvas("myDrawing", "png");
  }
}

function mousePressed() {
  teamTwoWins++;
}
