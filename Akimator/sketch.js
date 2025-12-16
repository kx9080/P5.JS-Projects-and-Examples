let data;
let ownedbyagreedycorporation = 0;
let nameFont = "Ubuntu Mono Sans";
let standardFont = "Arial";
let number;
let questionData = null;
let charImageData = null;
let questionImageData = null;

function preload() {
  data = loadJSON("067f0-unjmy.json");
  number = 0;
}

function setup() {
  let canvas = createCanvas(1000, 800, defaultCanvas0);
  for (let i = 0; i < data.Questions.length; i++) {
    questionData = questionData || [];
    questionData[i] = 0;
    print(
      "This is the loop num:" + i + " this is val stored " + questionData[i]
    );
  }
  for (i = 0; i < data.Characters.length; i++) {
    charImageData = charImageData || [];
    charImageData[i] = loadImage(`images/char/i${i + 1}.webp`);
    print(`Loaded char image ${i + 1}`);
  }
  for (i = 0; i < data.Questions.length; i++) {
    questionImageData = questionImageData || [];
    questionImageData[i] = loadImage(`images/ques/q${i + 1}.webp`);
    print(`Loaded ques image ${i + 1}`);
  }
  print(data);
  imageMode(CENTER);
}

function draw() {
  background(30, 30, 46);

  //Title
  fill(205, 214, 244);
  textFont(nameFont);
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Akimator", width / 2, 70);
  if (number < questionData.length) {
    showQuestion();
  } else {
    checkCharacter();
  }
}

function showQuestion() {
  //Actual Question
  textSize(20);
  textAlign(CENTER);
  fill(205, 214, 244);
  text(data.Questions[number], width / 2, 190);

  //Boxes for Questions
  fill(49, 50, 68);
  rect(width / 2 - 300, 280, 300, 75);
  rect(width / 2, 280, 300, 75);

  //Answers for questions
  fill(205, 214, 244);
  text(`Yep`, width / 2 - 150, 325);
  text(`Nope`, width / 2 + 150, 325);

  print(width);
  image(questionImageData[number], width / 2, 550);
}

function checkCharacter() {
  print("hey");
  for (let i = 0; i < data.Characters.length; i++) {
    if (
      data.Characters[i].human === questionData[0] &&
      data.Characters[i].game === questionData[1] &&
      data.Characters[i].tvmovie === questionData[2] &&
      data.Characters[i].Singer === questionData[3] &&
      data.Characters[i].redhair === questionData[4] &&
      data.Characters[i].Animated === questionData[5] &&
      data.Characters[i].Animal === questionData[6] &&
      data.Characters[i].Robtic === questionData[7] &&
      data.Characters[i].Cook === questionData[8] &&
      data.Characters[i].Actor === questionData[9] &&
      data.Characters[i].Japanese === questionData[10] &&
      data.Characters[i].biped === questionData[11] &&
      data.Characters[i].brit === questionData[12] &&
      data.Characters[i].genius === questionData[13] &&
      data.Characters[i].dischar === questionData[14]
    ) {
      noLoop();
      background(30, 30, 46);
      text(data.Characters[i].Characters, width / 2, height / 2);
      print(width);
      image(charImageData[i], width / 2, height / 2 + 200);
      break;
    } else if (i === data.Characters.length) {
      noLoop();
      background(30, 30, 46);
      text("No Character", width / 2, height / 2);
      print(width);
      image(charImageData[30], width / 2, height / 2 + 200);
      break;
    }
  }
}
function mousePressed() {
  if (mouseX > 200 && mouseX < 500) {
    if (mouseY < 350 && mouseY > 275) {
      //Button A
      print("yay");
      questionData[number] = 1;
      number++;
    }
  }
  if (mouseX > 500 && mouseX < 800) {
    if (mouseY < 350 && mouseY > 275) {
      //Button B
      print("Nay");
      questionData[number] = 0;
      number++;
    }
  }
}
function keyPressed() {
  if (key === "y" || key === "Y" || key === "1") {
    print("yay");
    questionData[number] = 1;
    number++;
  } else if (key === "n" || key === "N" || key === "0") {
    print("nay");
    questionData[number] = 0;
    number++;
  } else if (key === "r" || key === "R") {
    number = 0;
    for (var i = 0; i < questionImageData; i++) {
      questionImageData[i] = 0;
    }
    print("reset");
    loop();
  }
}
