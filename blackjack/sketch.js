function preload() {
  heartCardImages = [];
  spadeCardImages = [];
  diamondCardImages = [];
  cloverCardImages = [];
  spadeCardImages[1] = loadImage("images/Pikes_A_white.png");
  heartCardImages[1] = loadImage("images/Hearts_A_white.png");
  diamondCardImages[1] = loadImage("images/Tiles_A_white.png");
  cloverCardImages[1] = loadImage("images/Clovers_A_white.png");
  spadeCardImages[11] = loadImage("images/Pikes_Jack_white.png");
  heartCardImages[11] = loadImage("images/Hearts_Jack_white.png");
  diamondCardImages[11] = loadImage("images/Tiles_Jack_white.png");
  cloverCardImages[11] = loadImage("images/Clovers_Jack_white.png");
  spadeCardImages[12] = loadImage("images/Pikes_Queen_white.png");
  heartCardImages[12] = loadImage("images/Hearts_Queen_white.png");
  diamondCardImages[12] = loadImage("images/Tiles_Queen_white.png");
  cloverCardImages[12] = loadImage("images/Clovers_Queen_white.png");
  spadeCardImages[13] = loadImage("images/Pikes_King_white.png");
  heartCardImages[13] = loadImage("images/Hearts_King_white.png");
  diamondCardImages[13] = loadImage("images/Tiles_King_white.png");
  cloverCardImages[13] = loadImage("images/Clovers_King_white.png");
  for (var i = 2; i < 11; i++) {
    spadeCardImages[i] = loadImage(`images/Pikes_` + i + "_white.png");
    heartCardImages[i] = loadImage(`images/Hearts_` + i + "_white.png");
    diamondCardImages[i] = loadImage(`images/Tiles_` + i + "_white.png");
    cloverCardImages[i] = loadImage(`images/Clovers_` + i + "_white.png");
  }
} //end preloading of images

function setup() {
  createCanvas(1200, 600, defaultCanvas0);
  background(0);
  imageMode(CENTER);
  playerCard = [];
  casinoCard = [];
  suit = [];
  casinoSuit = [];
  playerRoll = 0;
  casinoRoll = 0;
  cardValue = [];
  casinoCardValue = [];
  numberOfCards = 0;
  busted = false;
  stand = false;
  casinoNumberOfCards = 1;
}

function draw() {
  fill(255);
  textSize(48);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Ubuntu Mono Sans");
  text("Whitejack", width / 2, 470);
  textSize(15);
  textFont("Arial");
  textStyle(NORMAL);

  text("Total:", 50, 275);

  text("Press 'P' to draw first Player hand", width / 2, 530);
  text("Press 'O' to draw another Player card", width / 2, 570);
  text("Press 'W' to stand", width / 2, 550);
  text("Press 'R' to reset game", width / 2, 590);
  textSize(20);
  text("Casino Cards", width - 100, 90);
  text("Player Cards", 100, 90);

  if (stand === true) {
    if (casinoRoll < 17 && playerRoll > casinoRoll) {
      casinoStand = false;
      casinoNumberOfCards++;
      rollACasinoCard(casinoNumberOfCards);
      text(casinoRoll, width - 100, 275);
    } else if (casinoRoll === playerRoll) {
      rollACasinoCard(casinoNumberOfCards);
      casinoNumberOfCards++;
      text(casinoRoll, width - 100, 275);
    } else {
      casinoStand = true;
      fill(0);
      rect(width - 150, 275, 100, 100);
      fill(255);
      text(casinoRoll, width - 100, 275);
    }
    if (casinoStand === true && casinoRoll > playerRoll && casinoRoll < 22) {
      text("Casino Wins", width / 2, height / 2 + 50);
      print("Casino Wins");
    }
    if (casinoRoll > 21) {
      text("Casino Busted! Player Wins!", width / 2, height / 2 + 50);
      print("Player Wins, casino over");
    } else if (casinoStand === true && casinoRoll < playerRoll) {
      text("Player Wins", width / 2, height / 2 + 50);
      print("Player Wins");
    } else {
      fill(0);
      rect(width - 150, 240, 100, 100);
      fill(255);
      text(casinoRoll, width - 100, 275);
    }
    text(casinoRoll, width - 100, 275);
  }
} //end draw

function mousePressed() {
  rollBothDice();
  compareRolls();
} //end mousePressed

function keyPressed() {
  if (key === "w" || key === "W") {
    stand = true;
  } else if (
    (key === "p" && stand === false && playerRoll === 0) ||
    (key === "P" && stand === false && playerRoll === 0)
  ) {
    background(0);
    playerRoll = 0;
    rollACasinoCard(casinoNumberOfCards);
    rollAPlayerCard(1);
    rollAPlayerCard(2);
    numberOfCards = 2;
    busted = false;
    text(playerRoll, 150, 275);
  } else if (
    (key === "o" && stand === false && numberOfCards >= 2) ||
    (key === "O" && stand === false && numberOfCards >= 2)
  ) {
    if (busted === true) {
      text(playerRoll, 150, 275);
      text(
        "You already busted! No more cards for you.",
        width / 2,
        height / 2 + 50
      );
    } else {
      numberOfCards++;
      rollAPlayerCard(numberOfCards);
      fill(0);
      rect(100, 250, 100, 50);
      fill(255);
      text(playerRoll, 150, 275);
    }
  } else if (key === "b" || key === "B") {
    rollBothDice();
  } else if (key === "r" || key === "R") {
    setup();
  }
}

function rollAPlayerCard(i) {
  playerCard[i] = Math.floor(Math.random() * 13) + 1;
  suit[i] = Math.floor(Math.random() * 4) + 1;
  if (playerCard[i] === 1) {
    cardValue[i] = int(
      window.prompt("You rolled an Ace! Would you like it to count as 1 or 11?")
    );
    if (cardValue[i] != 1 && cardValue[i] != 11) {
      window.alert("Invalid choice, Ace will count as 1.");
      cardValue[i] = 1;
    }
  }
  if (playerCard[i] > 1 && playerCard[i] < 11) {
    cardValue[i] = playerCard[i];
  } else if (playerCard[i] === 11) {
    cardValue[i] = 10;
  } else if (playerCard[i] === 12) {
    cardValue[i] = 10;
    text(casinoRoll, width - 100, 275);
  } else if (playerCard[i] === 13) {
    cardValue[i] = 10;
  }

  imageMode(CENTER);
  if (suit[i] === 1) {
    image(spadeCardImages[playerCard[i]], 100 * i, 180, 80, 120);
  } else if (suit[i] === 2) {
    image(heartCardImages[playerCard[i]], 100 * i, 180, 80, 120);
  } else if (suit[i] === 3) {
    image(diamondCardImages[playerCard[i]], 100 * i, 180, 80, 120);
  } else if (suit[i] === 4) {
    image(cloverCardImages[playerCard[i]], 100 * i, 180, 80, 120);
  }

  playerRoll += cardValue[i];
  print("This is player roll" + playerRoll);
  print(playerRoll);

  if (playerRoll > 21) {
    for (let j = 1; j <= numberOfCards; j++) {
      if (playerCard[j] === 1 && cardValue[j] === 11) {
        cardValue[j] = 1;
        playerRoll -= 10;
        fill(0);
        rect(100, 250, 100, 50);
        fill(255);
        text(playerRoll, 150, 275);
        return;
      }
    }
    text("You Busted", width / 2, height / 2);
    rollACasinoCard(2);
    text(casinoRoll, width - 100, 275);
    busted = true;
  }
}

function rollACasinoCard(i) {
  casinoCard[i] = Math.floor(Math.random() * 13) + 1;
  casinoSuit[i] = Math.floor(Math.random() * 4) + 1;
  if (casinoCard[i] === 1) {
    if (casinoRoll + 11 > 21) {
      casinoCardValue[i] = 1;
    } else {
      casinoCardValue[i] = 11;
    }
  }
  if (casinoSuit[i] === 1) {
    text("Spade", 1200 - 100 * i, 150);
  } else if (casinoSuit[i] === 2) {
    text("Heart", 1200 - 100 * i, 150);
  } else if (casinoSuit[i] === 3) {
    text("Diamond", 1200 - 100 * i, 150);
  } else if (casinoSuit[i] === 4) {
    text("Club", 1200 - 100 * i, 150);
  }
  if (casinoCard[i] > 1 && casinoCard[i] < 11) {
    text(casinoCard[i], 1200 - 100 * i, 200);
    casinoCardValue[i] = casinoCard[i];
  } else if (casinoCard[i] === 11) {
    text("Jack", 1200 - 100 * i, 200);
    casinoCardValue[i] = 10;
  } else if (casinoCard[i] === 12) {
    text("Queen", 1200 - 100 * i, 200);
    casinoCardValue[i] = 10;
  } else if (casinoCard[i] === 13) {
    text("King", 1200 - 100 * i, 200);
    casinoCardValue[i] = 10;
  } else if (casinoCard[i] === 1) {
    text("Ace", 1200 - 100 * i, 200);
  }
  if (casinoSuit[i] === 1) {
    image(spadeCardImages[casinoCard[i]], width - 100 * i, 180, 80, 120);
  } else if (casinoSuit[i] === 2) {
    image(heartCardImages[casinoCard[i]], width - 100 * i, 180, 80, 120);
  } else if (casinoSuit[i] === 3) {
    image(diamondCardImages[casinoCard[i]], width - 100 * i, 180, 80, 120);
  } else if (casinoSuit[i] === 4) {
    image(cloverCardImages[casinoCard[i]], width - 100 * i, 180, 80, 120);
  }
  casinoRoll += casinoCardValue[i];
  text(casinoRoll, width - 100, 275);
  print(playerRoll);
}
