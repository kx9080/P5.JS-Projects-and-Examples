let score = 0;
let userName = "";
let questionsData = null;
let answersData = null;
let data;
let number = 0;
let nameFont = "Ubuntu Mono Sans";
let standardFont = "Arial";
let dog;
let imageData = null;
let confettiParty = true;

function preload() {
  // load JSON using p5's helper and store it for later use
  data = loadJSON("Answers+Questions.json");
  dog = loadImage("dog.png");
}

function setup() {
  let canvas = createCanvas(1000, 800, defaultCanvas0);
  for (i = 0; i < data.orderOfCoolness.length; i++) {
    imageData = imageData || [];
    imageData[i] = loadImage(`images/q${i + 1}image.webp`);
    print(`Loaded image ${i + 1}`);
  }
  //Prompt for user's name
  userName = window.prompt("Welcome to the Coolness Quiz! What's your name?");
}

function draw() {
  background(30, 30, 46);

  // Display the quiz title
  fill(205, 214, 244);
  textFont(nameFont);
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Coolness Quiz", width / 2, 70);

  // Display the user's name
  textStyle(NORMAL);
  textFont(standardFont);
  textSize(24);
  textAlign(LEFT);
  text(`Player: ${userName}`, 20, 130);

  // Display the score
  text(`Score:` + score, width - 150, 130);

  //Display Rank
  textAlign(CENTER);
  textSize(32);
  if (
    userName === "Dudas" ||
    userName === "dudas" ||
    userName === "Mr. Dudas"
  ) {
    fill(185, 242, 255);
    text("Rank: Dudas", width / 2, height - 50);
    fill(205, 214, 244);
  } else if (score < data.orderOfCoolness.length * 2) {
    fill(218, 170, 94);
    text("Rank: Novice", width / 2, height - 50);
    fill(205, 214, 244);
  } else if (score < data.orderOfCoolness.length * 2 * 2) {
    fill(192, 192, 192);
    text("Rank: Intermediate", width / 2, height - 50);
    fill(205, 214, 244);
  } else if (score < score < data.orderOfCoolness.length * 3 * 2) {
    fill(218, 165, 32);
    text("Rank: Advanced", width / 2, height - 50);
    fill(205, 214, 244);
  } else if (score >= data.orderOfCoolness.length * 4 * 2) {
    fill(185, 242, 255);
    text("Rank: Expert", width / 2, height - 50);
    fill(205, 214, 244);
  } else {
    fill(255, 0, 0);
    text("Rank: Cheater", width / 2, height - 50);
    fill(205, 214, 244);
  }

  //Show dog image
  imageMode(CENTER);
  image(dog, 75, height / 2 + 250, 150, 200);

  // Render the current question and answers
  if (number < data.questions.length) {
    showQuestion();
  } else {
    noLoop();
    background(30, 30, 46);
    textSize(48);
    textAlign(CENTER);
    text("Quiz Complete!", width / 2, height / 2 - 100);
    //Score on end screen
    textSize(24);
    text(`Final Score: ${score}`, width / 2, height / 2 - 40);
    //Ranking in end screen
    text("Your rank is:", width / 2, height / 2 + 30);
    if (score < data.orderOfCoolness.length * 2 - 2) {
      fill(218, 170, 94);
      text("Novice", width / 2, height / 2 + 60);
      fill(205, 214, 244);
    } else if (score < data.orderOfCoolness.length * 2 * 2 - 1) {
      fill(192, 192, 192);
      text("Intermediate", width / 2, height / 2 + 60);
      fill(205, 214, 244);
    } else if (score < data.orderOfCoolness.length * 3 * 2 - 1) {
      fill(218, 165, 32);
      text("Advanced", width / 2, height / 2 + 60);
      fill(205, 214, 244);
    } else if (score <= data.orderOfCoolness.length * 4 * 2 - 1) {
      fill(185, 242, 255);
      text("Expert", width / 2, height / 2 + 60);
      fill(205, 214, 244);
    } else {
      fill(255, 0, 0);
      text("Cheater", width / 2, height / 2 + 60);
      fill(205, 214, 244);
    }
    text("Press 'R' to retake the quiz", width / 2, height / 2 + 120);
  }
}

function showQuestion() {
  //Actual Question
  textSize(20);
  textAlign(CENTER);
  fill(205, 214, 244);
  text(data.questions[number], width / 2, 190);

  //Boxes for Questions
  fill(49, 50, 68);
  rect(width / 2 - 300, 230, 300, 75);
  rect(width / 2, 230, 300, 75);
  rect(width / 2 - 300, 305, 300, 75);
  rect(width / 2, 305, 300, 75);

  //Answers for questions
  fill(205, 214, 244);
  text(`A: ${data.answers[number][0]}`, width / 2 - 150, 275);
  text(`B: ${data.answers[number][1]}`, width / 2 + 150, 275);
  text(`C: ${data.answers[number][2]}`, width / 2 - 150, 350);
  text(`D: ${data.answers[number][3]}`, width / 2 + 150, 350);

  image(imageData[number], width / 2, 550, 400, 250);
}

function mousePressed() {
  print("X" + mouseX + " Y" + mouseY);
  //Left 2 Boxes
  if (mouseX > 200 && mouseX < 500) {
    if (mouseY < 300 && mouseY > 225) {
      //Button A
      score += data.orderOfCoolness[number][0] * 2;
      print(data.orderOfCoolness[number][0] * 2);
      number++;
    }
    if (mouseY > 300 && mouseY < 375) {
      //Button C
      score += data.orderOfCoolness[number][2] * 2;
      print(data.orderOfCoolness[number][2] * 2);
      number++;
    }
  }
  //Right 2 Boxes
  if (mouseX > 500 && mouseX < 800) {
    if (mouseY < 300 && mouseY > 225) {
      //Button B
      score += data.orderOfCoolness[number][1] * 2;
      print(data.orderOfCoolness[number][1] * 2);
      number++;
    }
    if (mouseY > 300 && mouseY < 375) {
      //Button D
      score += data.orderOfCoolness[number][3] * 2;
      print(data.orderOfCoolness[number][3] * 2);
      number++;
    }
  }
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
  } else if (keyCode === ENTER) {
    number = data.questions.length;
  } else if (key === "s") {
    saveCanvas("myDrawing", "png");
  }
}
