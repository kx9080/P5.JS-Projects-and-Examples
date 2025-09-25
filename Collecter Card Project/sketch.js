let mikuCardArt;
let mikuBeamArt;
let mikuSingingArt;
let mikuCircleArt;
let musicNote = "𝅘𝅥";

function preload() {
  mikuCardArt = loadImage("mikuCardArt.png");
  mikuBeamArt = loadImage("mikuBeamArt.jpg");
  mikuSingingArt = loadImage("mikuSingingArt.jpg");
  mikuCircleArt = loadImage("mikuCircleArt.png");
}

function setup() {
  createCanvas(800, 900);
}

function draw() {
  //Card Setup
  background(128, 128, 128);
  stroke("#0a1172");
  strokeWeight(10);
  fill("#2130da");
  rectMode(CENTER);
  rect(400, 450, 700, 800, 20);

  //Top Description
  strokeWeight(5);
  textFont("Dancing Script");
  stroke(0);
  noFill();
  textAlign(CENTER);
  noStroke();
  image(mikuCircleArt, 91, 85, 47, 47);
  stroke(0);
  circle(90, 85, 45);
  fill(255);
  quad(135, 70, 215, 70, 205, 105, 125, 105);
  textSize(25);
  text("Singer", 170, 95);
  textSize(30);
  text("Hatsune Miku", 300, 98);
  text("1200", 650, 95);
  textSize(15);
  text("HP", 607, 95);

  //Power Circle
  circle(712, 85, 40);
  textSize(30);
  fill(0, 0, 255);
  noStroke();
  text(musicNote, 712, 95);

  //Photo Holder
  stroke("#0a1172");
  noFill(0);
  rect(400, 290, 612, 346);
  imageMode(CENTER);
  image(mikuCardArt, 400, 290, 608, 342);

  textFont("Roboto Slab");

  //Description Box
  stroke("black");
  strokeWeight(2);
  fill("white");
  quad(90, 465, 710, 465, 690, 500, 110, 500);
  stroke("black");
  strokeWeight(5);
  textSize(23);
  text("HT : 5' 2  |  WT : 42 kgs  |  Music Pokémon", 400, 490);

  //First Attack
  textAlign(LEFT);
  stroke(0);
  fill(255);
  textSize(30);
  text("Alluring Voice", 130, 540);
  textSize(15);
  text(
    "Singing a song of better times pulls your pokemon into a trance of adoration. Flip a coin, \nif heads, your opponent becomes infatuated.",
    190,
    570
  );
  circle(82, 530, 20);
  textSize(15);
  fill(0, 0, 255);
  noStroke();
  text(musicNote, 80, 535);
  fill(255);
  stroke(0);
  image(mikuSingingArt, 120, 575, 100, 50);
  noFill();
  rect(120, 575, 100, 50, 6);

  //Second Attack
  stroke(0);
  fill(255);
  textSize(30);
  text("Miku Miku Beam", 130, 640);
  text("700", 650, 640);
  textSize(15);
  textAlign(LEFT);
  text("A bright beam of turquoise light engulfs your pokemon.", 190, 670);
  circle(110, 630, 20);
  textSize(15);
  fill(0, 0, 255);
  noStroke();
  text(musicNote, 108, 635);
  fill(255);
  stroke(0);
  circle(82, 630, 20);
  textSize(15);
  fill(0, 0, 255);
  noStroke();
  text(musicNote, 80, 635);
  stroke(0);
  image(mikuBeamArt, 120, 675, 100, 50);
  noFill();
  rect(120, 675, 100, 50, 6);
}

function mousePressed() {
  console.log(mouseX + "X " + mouseY + "Y");
}
