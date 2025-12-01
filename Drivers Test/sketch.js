//Global Variables
let logo;
let age;
let questionsAsked = 0;
let testScore;

function preload() {
  logo = loadImage("DriversTraining.png");
} //end preloading of images and fonts

function setup() {
  createCanvas(650, 400);
  textAlign(CENTER);
  age = window.prompt("Please enter your age:");
  testScore = 0;
} //end setup

function draw() {
  background(255);
  image(logo, 200, 0, 250, 190);

  //Draw Score
  textSize(16);
  fill(0);
  text("Test Score: " + testScore, width - 100, 30);

  // Display eligibility message based on age
  textSize(20);
  fill(0);
  if (age >= 16) {
    text("You are eligible to take the driver's test.", width / 2, 250);
  } else if (age >= 14) {
    text("You are eligible for a learners license.", width / 2, 250);
  } else {
    text("You are not eligible for a driver's license.", width / 2, 250);
  }

  //Begin Questions
  if (questionsAsked === 0) {
    textSize(18);
    fill(0);
    text(
      "How many colors are on a standard traffic light? (Type the number)",
      width / 2,
      300
    );
  } else if (questionsAsked === 1) {
    textSize(18);
    fill(0);
    text("What should you do at a red traffic light?", width / 2, 300);
    text("A. Stop  B. Go  C. Slow Down", width / 2, 350);
  } else if (questionsAsked === 2) {
    textSize(18);
    fill(0);
    text(
      "What is the speed limit during school hours in a school zone?",
      width / 2,
      300
    );
    text("A. 15 mph  B. 25 mph  C. 35 mph", width / 2, 330);
  } else if (questionsAsked === 3) {
    text("Who has right of way at a four-way stop?", width / 2, 300);
    text(
      "A. The first vehicle to stop  B. The largest vehicle  C. The fastest vehicle",
      width / 2,
      330
    );
  } else if (questionsAsked === 4) {
    text("At a yield sign, you must:", width / 2, 300);
    text(
      "A. Slow down and give right of way  B. Stop completely  C. Speed up",
      width / 2,
      330
    );
  } else {
    textSize(22);
    fill(0);
    text(
      "Test Completed! Your final score is: " +
        testScore +
        "/" +
        questionsAsked ,
      width / 2,
      300
    );
  }
} //end draw

function keyPressed() {
  if (questionsAsked === 0) {
    if (key === "3") {
      testScore += 1;
      questionsAsked += 1;
      text("Correct! A standard traffic light has 3 colors.", width / 2, 350);
    } else if (key >= "0" && key <= "9") {
      questionsAsked += 1;
      text("Incorrect. A standard traffic light has 3 colors.", width / 2, 350);
    }
  } else if (questionsAsked === 1) {
    questionsAsked += 1;
    if (key === "A" || key === "a") {
      testScore += 1;
      text("Correct! You should stop at a red traffic light.", width / 2, 380);
    } else if (key === "B" || key === "b" || key === "C" || key === "c") {
      text(
        "Incorrect. You should stop at a red traffic light.",
        width / 2,
        380
      );
    }
  } else if (questionsAsked === 2) {
    questionsAsked += 1;
    if (key === "A" || key === "a") {
      testScore += 1;
      text(
        "Correct! The speed limit during school hours in a school zone is 15 mph.",
        width / 2,
        360
      );
    } else if (key === "B" || key === "b" || key === "C" || key === "c") {
      text(
        "Incorrect. The speed limit during school hours in a school zone is 15 mph.",
        width / 2,
        360
      );
    }
  } else if (questionsAsked === 3) {
    questionsAsked += 1;
    if (key === "A" || key === "a") {
      testScore += 1;
      text(
        "Correct! The first vehicle to stop has the right of way at a four-way stop.",
        width / 2,
        360
      );
    } else if (key === "B" || key === "b" || key === "C" || key === "c") {
      text(
        "Incorrect. The first vehicle to stop has the right of way at a four-way stop.",
        width / 2,
        360
      );
    }
  } else if (questionsAsked === 4) {
    questionsAsked += 1;
    if (key === "A" || key === "a") {
      testScore += 1;
      text(
        "Correct! At a yield sign, you must slow down and give right of way.",
        width / 2,
        360
      );
    } else if (key === "B" || key === "b" || key === "C" || key === "c") {
      text(
        "Incorrect. At a yield sign, you must slow down and give right of way.",
        width / 2,
        360
      );
    }
  }
} //end keyPressed

function mousePressed() {} //end mousePressed
