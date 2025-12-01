//Global Variables
let name;
let year1;
let age;
let instrument;
let cat;
let logo;
let formCompleted = false;
let number = 0;

function preload() {
  logo = loadImage("mikuBeamArt.jpg");
} //end preloading of images and fonts

function setup() {
  createCanvas(600, 500);
  textSize(24);
  background(155, 135, 155);
  loop();
} //end setup

function draw() {
  angleMode(DEGREES);
  push();
  translate(300, 150);
  imageMode(CENTER);

  number += 1;
  rotate(number);
  image(logo, 0, 0);
  pop();
  text("Click anywhere to register for the competition.", 50, 300);

  if (formCompleted) {
    noLoop();
    number = 0;
    translate(0, 0);
    background(155, 135, 155);
    image(logo, 50, 0);
    textSize(24);
    text("Registration Complete!", 50, 300);
    text(`Name: ${name}`, 50, 340);
    text(`Age: ${age}`, 50, 370);
    if (cat === "Remix") {
      text("Fee for Remix License is $60", 50, 400);
    } else if (cat === "Original Song") {
      text("Fee for Original Song License is $0", 50, 400);
    } else if (cat === "Vocaloid Cover") {
      text("Fee for Vocaloid Cover License is $40", 50, 400);
    } else if (cat === "Instrumental Cover") {
      text("Fee for Instrumental Cover License is $30", 50, 400);
    } else {
      text("Please contact support for license fees.", 50, 400);
    }
    text(`Instrument: ${instrument}`, 50, 430);
    if (age >= 21) {
      text("You are eligible for the Senior Division.", 50, 460);
    } else if (age >= 16) {
      text("You are eligible for the Junior Division.", 50, 460);
    } else {
      text("You are eligible for the Youth Division.", 50, 460);
    }
  }
}

function mousePressed() {
  background(155, 135, 155);
  image(logo, 50, 0);

  if (!formCompleted) {
    //Name
    name = window.prompt("What is your name");

    //Age
    year1 = window.prompt("What year were you born");
    age = 2025 - year1;

    //Music Category
    cat = window.prompt(
      "What category are you entering? (Options: Vocaloid Cover, Original Song, Instrumental Cover, Remix)"
    );

    //Instrument
    instrument = window.prompt("What instrument will you be using?");

    formCompleted = true;
  }
  console.log("Debug: testing name variable: " + name);
} //end mousePressed
