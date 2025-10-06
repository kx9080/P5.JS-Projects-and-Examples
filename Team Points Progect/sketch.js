let teamOneName;
let teamOneWins = 10;
let teamOneLosses = 3;
let teamOnePoints;

let teamTwoName;
let teamTwoWins = 0;
let teamTwoLosses = 10;
let teamTwoPoints;

let teamThreeName;
let teamThreeWins = 7;
let teamThreeLosses = 4;
let teamThreePoints;

let tsnLogo;
let BGimage;

function setup() {
  createCanvas(800, 600);
  teamOneName = "Oilers";
  teamTwoName = "Flames";
  teamThreeName = "Canucks";
  tsnLogo = loadImage("tsn-logo.png");
  BGimage = loadImage("idkmanhockeyig.png"); // Background image of ice rink

  // hockey stick from vecteezy and hockey puck too
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  teamOnePoints = teamOneWins * 2 - teamOneLosses * 1;
  teamTwoPoints = teamTwoWins * 2 - teamTwoLosses * 1;
  teamThreePoints = teamThreeWins * 2 - teamThreeLosses * 1;

  image(BGimage, 0, 0, 800, 600);
  fill(255);
  rect(400, 550, 790, 65, 15);
  image(tsnLogo, 20, 530, 120, 39);
  line(150, 520, 150, 583);
  textSize(12);
  fill(0);
  text("Press '1' to add a win to the Oilers", 460, 535);
  text("Click anywhere to add a win to the Flames", 460, 555);
  text("Points are calculated as (Wins x 2) - (Losses x 1)", 460, 575);

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
  text("Wins", 400, 40);
  text("Losses", 540, 40);
  text("Points", 690, 40);

  line(50, 60, 750, 60);
  line(300, 60, 300, 405);
  line(450, 60, 450, 405);
  line(600, 60, 600, 405);

  line(50, 150, 750, 150);
  line(50, 250, 750, 250);
  line(50, 350, 750, 350);

  text(teamOneName, 150, 100);
  text(teamOneWins, 400, 100);
  text(teamOneLosses, 540, 100);
  text(teamOnePoints, 690, 100);

  text(teamTwoName, 150, 200);
  text(teamTwoWins, 400, 200);
  text(teamTwoLosses, 540, 200);
  text(teamTwoPoints, 690, 200);

  text(teamThreeName, 150, 300);
  text(teamThreeWins, 400, 300);
  text(teamThreeLosses, 540, 300);
  text(teamThreePoints, 690, 300);
}

function keyPressed() {
  if (key === "1") {
    teamOneWins++;
  }
}

function mousePressed() {
  teamTwoWins++;
}
