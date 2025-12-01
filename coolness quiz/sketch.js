let score = 0;
let userName = "";
let questionsData = null;
let answersData = null;
let data;
let number = 0;
let nameFont = "Ubuntu Mono Sans";
let standardFont = "Arial";
let dog;

function preload() {
  // load JSON using p5's helper and store it for later use
  data = loadJSON("Answers+Questions.json");
  dog = loadImage("dog.png");
}

function setup() {
  createCanvas(800, 600);
  //Prompt for user's name
  userName = window.prompt("Welcome to the Coolness Quiz! What's your name?");
}

function draw() {
  background(220);

  // Display the quiz title
  textFont(nameFont);
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Coolness Quiz", width / 2, 50);

  // Display the user's name
  textStyle(NORMAL);
  textFont(standardFont);
  textSize(24);
  textAlign(LEFT);
  text(`Player: ${userName}`, 20, 100);

  // Display the score
  text(`Score:` + score, width - 150, 100);

  //Display Rank
  textAlign(CENTER);
  textSize(32);
  if (score < data.orderOfCoolness.length * 2) {
    text("Rank: Novice", width / 2, height - 50);
  } else if (score < data.orderOfCoolness.length * 2 * 2) {
    text("Rank: Intermediate", width / 2, height - 50);
  } else if (score < score < data.orderOfCoolness.length * 3 * 2) {
    text("Rank: Advanced", width / 2, height - 50);
  } else if (score >= data.orderOfCoolness.length * 4 * 2) {
    text("Rank: Expert", width / 2, height - 50);
  } else {
    text("Rank: Cheater", width / 2, height - 50);
  }

  //Show dog image
  imageMode(CENTER);
  image(dog, 75, height / 2 + 250, 150, 200);

  // Render the current question and answers
  if (number < data.questions.length) {
    showQuestion();
  } else {
    noLoop();
    background(220);
    textSize(32);
    textAlign(CENTER);
    text("Quiz Complete!", width / 2, height / 2 - 40);
    textSize(24);
    text(`Final Score: ${score}`, width / 2, height / 2);
    text("Your rank is:", width / 2, height / 2 + 40);
    if (score < data.orderOfCoolness.length * 2 - 2) {
      text("Novice", width / 2, height / 2 + 70);
    } else if (score < data.orderOfCoolness.length * 2 * 2 - 1) {
      text("Intermediate", width / 2, height / 2 + 70);
    } else if (score < data.orderOfCoolness.length * 3 * 2 - 1) {
      text("Advanced", width / 2, height / 2 + 70);
    } else if (score <= data.orderOfCoolness.length * 4 * 2 - 1) {
      text("Expert", width / 2, height / 2 + 70);
    } else {
      text("Cheater", width / 2, height / 2 + 70);
    }
    text("Press 'R' to retake the quiz", width / 2, height / 2 + 100);
  }
}

function showQuestion() {
  textSize(20);
  textAlign(LEFT);
  text(data.questions[number], 50, 150);
  text(`A: ${data.answers[number][0]}`, 70, 180);
  text(`B: ${data.answers[number][1]}`, 70, 210);
  text(`C: ${data.answers[number][2]}`, 70, 240);
  text(`D: ${data.answers[number][3]}`, 70, 270);
}

function keyPressed() {
  if (key === "A" || key === "a") {
    score += data.orderOfCoolness[number][0] * 2;
    print(data.orderOfCoolness[number][0] * 2);
    number++;
  } else if (key === "B" || key === "b") {
    score += data.orderOfCoolness[number][1] * 2;
    print(data.orderOfCoolness[number][1] * 2);
    number++;
  } else if (key === "C" || key === "c") {
    score += data.orderOfCoolness[number][2] * 2;
    print(data.orderOfCoolness[number][2] * 2);
    number++;
  } else if (key === "D" || key === "d") {
    score += data.orderOfCoolness[number][3] * 2;
    print(data.orderOfCoolness[number][3] * 2);
    number++;
  } else if (key === "R" || key === "r") {
    score = 0;
    number = 0;
    loop();
  } else if (key === "W" || key === "w") {
    if (standardFont === "Wingdings") {
      standardFont = "Arial";
      nameFont = "Ubuntu Mono Sans";
    } else {
      standardFont = "Wingdings";
      nameFont = "Wingdings";
    }
  }
}
