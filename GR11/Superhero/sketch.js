//as3_superheroes.js
let allHeroes = [
  "Thor",
  "Ironman",
  "Superman",
  "Vanya Hargreeves",
  "Wonder Woman",
  "The Flash",
];
let allPowers = [
  "Lightning",
  "Cool Armor",
  "Alien Stuff",
  "Sound Waves",
  "Lasso of Truth",
  "Speed",
];
let isHuman = [false, true, false, true, true, true];
let allPics = [];
let rand = -1;
let angle = 0;

function preload() {
  allPics.push(
    createImg(
      "https://progameguides.com/wp-content/uploads/2020/08/fortnite-thor-skin-featured.png",
      "Thor",
    ),
  );
  allPics.push(
    createImg(
      "https://www.thewrap.com/wp-content/uploads/2021/08/Robert-Downey-Jr-Iron-Man-620x400.jpg",
      "Iron Man",
    ),
  );
  allPics.push(
    createImg(
      "https://cdn.pixabay.com/photo/2020/07/11/04/41/superman-5392758_1280.png",
      "Superman",
    ),
  );
  allPics.push(
    createImg(
      "https://openpsychometrics.org/tests/characters/test-resources/pics/UA/1.jpg",
      "vanya",
    ),
  );
  allPics.push(
    createImg(
      "https://media.vanityfair.com/photos/5c4ddf0fba532c6650dedf67/9:16/w_746,h_1327,c_limit/wonder-woman-3-modern.jpg",
      "W.W.",
    ),
  );
  allPics.push(
    createImg(
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/SDCC_2014_-_Flash_%287752984350%29.jpg/960px-SDCC_2014_-_Flash_%287752984350%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "Flash",
    ),
  );
  for (let i = 0; i < allHeroes.length; i++) {
    allPics[i].hide();
  }
} //end preloading of images

function setup() {
  createCanvas(800, 600, defaultCanvas0);
  print(rand);
  angleMode(DEGREES);
} //end setup

function draw() {
  background(200, 200, 80); //all pictures
  imageMode(CORNER);
  for (let i = 0; i < allHeroes.length; i++) {
    image(allPics[i], i * 130 + 40, 300, 75, 75);
    textSize(15);
    text(allHeroes[i], i * 130 + 40, 400);
    text(allPowers[i], i * 130 + 40, 420);
    if (isHuman[i] == true) {
      text("Human", i * 130 + 40, 440);
    } else {
      text("Not Human", i * 130 + 40, 440);
    }
  }
  fill(255);
  noStroke();
  textSize(20);
  image;
  if (rand != -1) {
    text("Your superhero for hire is: " + allHeroes[rand], 50, 100); //spinning pictures
    imageMode(CENTER);
    translate(600, 120); //the location of the spinning image
    rotate(angle);
    image(allPics[rand], 0, 0, angle / 2, angle / 2);

    resetMatrix();
    if (angle < 360) {
      angle += 3;
    }
  }
} //end draw
function mousePressed() {
  print("MouseX:" + mouseX + "MouseY:" + mouseY);
  allHeroes.splice(0, 1, "Lightning Man");
  allHeroes.splice(5, 1, "Speedy");
  print(allHeroes);
} //end mousePressed
function keyPressed() {
  if (key == "r" || key == "R") {
    rand = floor(random(0, allHeroes.length));
    print(rand);
  }
  if (key == "c" || key == "C") {
    for (var i = 0; i < allHeroes.length; i++) {
      if (isHuman[i] == false) {
        allPowers.splice(i, 1, "None");
      }
    }
  }
} //end keyPressed
