let inventory = ["Water", "Knife", "Shield", "Hat"];
let sceneNum = 0;
let coins = 10;
let inventoryString = "";
let mrFongster;
let alreadyPushed = 0;
let imageData = null;
let tradeCompleted = 0;
let tradeText = "";

function preload() {
  data = loadJSON("SceneText.json");
} //end preload

function sortInventory() {
  inventory.sort();
} //end sortInventory

function setup() {
  createCanvas(800, 600, defaultCanvas0);
  for (i = 0; i < data.SceneText.length; i++) {
    print(`Loaded scene ${i + 1}`);
    imageData = imageData || [];
    imageData[i] = loadImage(`Assets/scene${i + 1}.png`);
    print(`Loaded image ${i + 1}`);
  }
  background(242, 48, 101);
} //end setup

function mousePressed() {
  if (tradeCompleted == 0) {
    return;
  } else {
    sceneNum++;
  }
  if (tradeCompleted == 1) {
    tradeCompleted = 0;
  }
  alreadyPushed = 0;
  tradeText = "";
} //end mousePressed

function draw() {
  scene();
} //end draw

function displayInventory() {
  sortInventory();
  textSize(15);
  inventoryString = inventory.join(", ");
  text("Inventory: " + inventoryString, 20, 550);
  text("Coins: " + coins, 20, 565);
  if (data.TradesAvailible[sceneNum] != "") {
    textSize(20);
    text(tradeText, 20, 370);
  }
} //end displayInventory

function scene() {
  background(242, 48, 101);
  textSize(20);
  textWrap(WORD);
  text(data.SceneText[sceneNum], 20, 450);
  displayInventory();
  if (sceneNum >= data.SceneText.length) {
    textSize(30);
    print("The End");
    text("The End", 20, 450);
    return;
  } else {
    image(imageData[sceneNum], 40, 40, 300, 300);
  }
  if (alreadyPushed == 0) {
    if (data.AddedItems[sceneNum] == "") {
      print("No items added");
    } else {
      print(`Added item: ${data.AddedItems[sceneNum]}`);
      for (let i = 0; i < data.timesToAdd[sceneNum]; i++) {
        inventory.push(data.AddedItems[sceneNum]);
      }
    }

    if (data.RemovedItems[sceneNum] == "") {
      print("No items removed");
    } else {
      print(`Removed item: ${data.RemovedItems[sceneNum]}`);
      let index = inventory.indexOf(data.RemovedItems[sceneNum]);
      if (index > -1) {
        inventory.splice(index, 1);
      }
    }

    print(data.TradesAvailible[sceneNum]);

    if (data.TradesAvailible[sceneNum] == "") {
      print("No trades availible");
      tradeCompleted = 1;
    } else {
      textSize(15);
      print("Hi");
      if (data.TradeRewards[sceneNum] == "") {
        tradeText = `You have the option to trade ${data.TradesAvailible[sceneNum]} for nothing. Press Y to accept, or N to decline.`;
      } else {
        tradeText = `You have the option to trade ${data.TradesAvailible[sceneNum]} for ${data.TradeRewards[sceneNum]}. Press Y to accept, or N to decline.`;
      }
    }

    if (data.AddedCoins[sceneNum] == 0) {
      print("No coins added");
    } else {
      print(`Added ${data.AddedCoins[sceneNum]} coins`);
      coins += data.AddedCoins[sceneNum];
    }
    alreadyPushed++;
  }
} //end scene 1

function keyPressed() {
  if (key == "R" || key == "r") {
    sceneNum = 0;
    inventory = ["Water", "Knife", "Shield", "Hat"];
    coins = 10;
    tradeCompleted = 0;
    tradeText = "";
  }
  if (tradeCompleted == 0) {
    if (key == "y" || key == "Y") {
      let index = inventory.indexOf(data.TradesAvailible[sceneNum]);
      if (index > -1) {
        inventory.splice(index, 1);
        inventory.push(data.TradeRewards[sceneNum]);
        if (data.TradeRewards[sceneNum] == "") {
          tradeText = `Traded ${data.TradesAvailible[sceneNum]} for nothing.`;
        } else {
          tradeText = `Traded ${data.TradesAvailible[sceneNum]} for ${data.TradeRewards[sceneNum]}`;
        }
        tradeCompleted = 1;
      } else {
        tradeText = `You do not have ${data.TradesAvailible[sceneNum]} to trade.`;
      }
    } else if (key == "n" || key == "N") {
      tradeText = "You declined the trade.";
      tradeCompleted = 1;
    }
  }
}
