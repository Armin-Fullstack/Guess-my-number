// select check button
const check = document.querySelector(".check")! as HTMLButtonElement;
let chanceLeft = 20;
// generate secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

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
  } else if (userNumber > secretNumber) {
    if (chanceLeft > 1) {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "📈 Too high!";
      chanceLeft--;
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
      console.log(chanceLeft);
    } else {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "☹️ You lost the game";
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(0);
    }
  } else if (userNumber < secretNumber) {
    if (chanceLeft > 1) {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "📉 Too low!";
      chanceLeft--;
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(chanceLeft);
    } else {
      (
        document.querySelector(".game-start")! as HTMLParagraphElement
      ).textContent = "☹️ You lost the game";
      (document.querySelector(".chance-left")! as HTMLSpanElement).textContent =
        String(0);
    }
  }
};
check.addEventListener("click", compareUserNumber);
