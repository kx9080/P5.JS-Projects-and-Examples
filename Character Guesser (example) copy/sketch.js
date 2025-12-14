let data;
let humanshaped = 1;
let gameorigin = 1;
let tvshowmovie = 1;
let singer = 1;
let redhair;
let animated;
let animal;
let robotic;
let cook;
let actor;
let japanese;
let biped;
let brit;
let genius;
let ownedbyagreedycorporation;

function preload() {
  data = loadJSON("067f0-unjmy.json");
}

function setup() {
  print(data);
  checkCharacter();
}

function draw() {}

function checkCharacter() {
  for (let i = 0; i < data.Characters.length; i++) {
    console.log(data.Characters[i].Characters);
    console.log(data.Characters[i].Singer);
    console.log(data.Characters[i].human);
    if (
      data.Characters[i].Singer === singer &&
      data.Characters[i].human === humanshaped &&
      data.Characters[i].game === gameorigin
    ) {
      console.log(data.Characters[i]);
    }
  }
}
