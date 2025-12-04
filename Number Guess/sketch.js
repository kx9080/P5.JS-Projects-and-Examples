function setup() {
  let compnum = floor(random(1, 100));
  let usernum = -1;

  usernum = 1 * window.prompt("Guess a number between 1 and 100");

  while (compnum != usernum) {
    if (usernum > compnum) {
      usernum = 1 * window.prompt("Too high! Guess again:");
    } else {
      usernum = 1 * window.prompt("Too low! Guess again:");
    }
  }

  window.alert("You win! The number was: " + compnum);
}
