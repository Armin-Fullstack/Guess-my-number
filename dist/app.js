"use strict";
// select check button
const check = document.querySelector(".check");
// generate secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// compare user number - function
const compareUserNumber = () => {
    // get user number
    const userNumber = +document.querySelector(".user-input").value;
    // check if the right number
    if (!userNumber) {
        document.querySelector(".game-start").textContent = "🛑 No Number!";
    }
    else if (userNumber === secretNumber) {
        document.querySelector(".game-start").textContent = "👏🏻 correct number!";
    }
    else if (userNumber > secretNumber) {
        document.querySelector(".game-start").textContent = "📈 Too high!";
    }
    else if (userNumber < secretNumber) {
        document.querySelector(".game-start").textContent = "📉 Too low!";
    }
};
check.addEventListener("click", compareUserNumber);
