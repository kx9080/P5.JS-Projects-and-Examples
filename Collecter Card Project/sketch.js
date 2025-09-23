let mikuCardArt;

function preload() {
  mikuCardArt = loadImage("mikuCardArt.png");
}

function setup() {
  createCanvas(800, 900);
}

function draw() {
  //Card Setup
  stroke("#0a1172");
  strokeWeight(5);
  fill("#2130da");
  rectMode(CENTER);
  rect(400, 450, 700, 800, 20);

  //Top Description
  textFont("DancingScript");
  stroke(0);
  fill(255);
  textAlign(CENTER);
  quad(85, 70, 165, 70, 155, 105, 75, 105);
  textSize(20);
  text("Singer", 120, 95);
  textSize(30);
  text("Hatsune Miku", 265, 98);
  text("1200", 650, 95);
  textSize(15);
  text("HP", 607, 95);

  //Power Circle
  circle(712, 85, 40);
  textSize(30);
  fill(0, 0, 255);
  noStroke();
  text("𝅘𝅥", 712, 95);

  //Photo Holder
  stroke("#0a1172");
  noFill(0);
  rect(400, 290, 612, 346);
  imageMode(CENTER);
  image(mikuCardArt, 400, 290, 608, 342);

  //First Attack
  stroke(0);
  fill(255);
  text("Alluring Voice", 190, 520);
  textSize(15);
  textAlign(LEFT);
  text(
    "Singing a song of better times pulls your pokemon into a trance of adoration. Flip a coin, \nif heads, your opponent becomes infatuated.",
    190,
    550
  );
  circle(712, 510, 20);
  textSize(15);
  fill(0, 0, 255);
  noStroke();
  text("𝅘𝅥", 710, 515);
  fill(255);
  stroke(0);
  circle(682, 510, 20);
  textSize(15);
  fill(0, 0, 255);
  noStroke();
  text("𝅘𝅥", 680, 515);
}

function mousePressed() {
  console.log(mouseX + "X " + mouseY + "Y");
}
