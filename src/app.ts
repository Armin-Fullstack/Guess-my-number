// select check button
const check = document.querySelector(".check")! as HTMLButtonElement;

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
  } else if (userNumber > secretNumber) {
    (
      document.querySelector(".game-start")! as HTMLParagraphElement
    ).textContent = "📈 Too high!";
  } else if (userNumber < secretNumber) {
    (
      document.querySelector(".game-start")! as HTMLParagraphElement
    ).textContent = "📉 Too low!";
  }
};
check.addEventListener("click", compareUserNumber);
