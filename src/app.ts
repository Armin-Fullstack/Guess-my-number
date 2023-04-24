// select check button
const check = document.querySelector(".check")! as HTMLButtonElement;
// select reset button
const reset = document.querySelector(".reset-button")! as HTMLButtonElement;

let chanceLeft = 20;
let score = 0;
let highestScore = 0;
// generate secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// compare user number - function
const compareUserNumber = () => {
  // get user number
  const userNumber = +(
    document.querySelector(".user-input")! as HTMLInputElement
  ).value;
  // check if the right number
  if (!userNumber) {
    (
      document.querySelector(".game-start")! as HTMLParagraphElement
    ).textContent = "🛑 No Number!";
  } else if (userNumber === secretNumber) {
    (
      document.querySelector(".game-start")! as HTMLParagraphElement
    ).textContent = "👏🏻 correct number!";
    (document.querySelector("body")! as HTMLBodyElement).style.backgroundColor =
      "#60b347";
    (document.querySelector(".secret-number")! as HTMLSpanElement).textContent =
      String(secretNumber);
    score = chanceLeft;
    (document.querySelector(".status-score")! as HTMLSpanElement).textContent =
      String(score);
    if (score > highestScore) {
      highestScore = score;
      (
        document.querySelector(".highest-score")! as HTMLSpanElement
      ).textContent = String(highestScore);
    }
  } else if (userNumber > secretNumber) {
    if (chanceLeft > 1) {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "📈 Too high!";
      console.log(chanceLeft);
      chanceLeft--;
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
    } else {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "☹️ You lost the game";
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
    }
  } else if (userNumber < secretNumber) {
    if (chanceLeft > 1) {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "📉 Too low!";
      console.log(chanceLeft);
      chanceLeft--;
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
    } else {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "☹️ You lost the game";
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
    }
  }
};

// reset game handler
const resetHandler = () => {
  chanceLeft = 20;
  (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
    String(chanceLeft);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  (document.querySelector(".status-score")! as HTMLSpanElement).textContent =
    String(0);
  (document.querySelector(".game-start")! as HTMLParagraphElement).textContent =
    "!! Game is starting ... !!";
  (document.querySelector(".secret-number")! as HTMLSpanElement).textContent =
    "?";
  (document.querySelector(".user-input")! as HTMLInputElement).value = "";
  (document.querySelector("body")! as HTMLBodyElement).style.backgroundColor =
    "rgba(100, 115, 110, 0.863)";
};

check.addEventListener("click", compareUserNumber);
reset.addEventListener("click", resetHandler);
