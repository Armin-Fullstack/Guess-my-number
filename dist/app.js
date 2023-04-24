"use strict";
// select check button
const check = document.querySelector(".check");
// select reset button
const reset = document.querySelector(".reset-button");
let chanceLeft = 20;
let score = 0;
let highestScore = 0;
// generate secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
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
        document.querySelector("body").style.backgroundColor =
            "#60b347";
        document.querySelector(".secret-number").textContent =
            String(secretNumber);
        score = chanceLeft;
        document.querySelector(".status-score").textContent =
            String(score);
        if (score > highestScore) {
            highestScore = score;
            document.querySelector(".highest-score").textContent = String(highestScore);
        }
    }
    else if (userNumber > secretNumber) {
        if (chanceLeft > 1) {
            document.querySelector(".game-start").textContent = "📈 Too high!";
            console.log(chanceLeft);
            chanceLeft--;
            document.querySelector(".chance-left").textContent =
                String(chanceLeft);
        }
        else {
            document.querySelector(".game-start").textContent = "☹️ You lost the game";
            document.querySelector(".chance-left").textContent =
                String(chanceLeft);
        }
    }
    else if (userNumber < secretNumber) {
        if (chanceLeft > 1) {
            document.querySelector(".game-start").textContent = "📉 Too low!";
            console.log(chanceLeft);
            chanceLeft--;
            document.querySelector(".chance-left").textContent =
                String(chanceLeft);
        }
        else {
            document.querySelector(".game-start").textContent = "☹️ You lost the game";
            document.querySelector(".chance-left").textContent =
                String(chanceLeft);
        }
    }
};
// reset game handler
const resetHandler = () => {
    chanceLeft = 20;
    document.querySelector(".chance-left").textContent =
        String(chanceLeft);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".status-score").textContent =
        String(0);
    document.querySelector(".game-start").textContent =
        "!! Game is starting ... !!";
    document.querySelector(".secret-number").textContent =
        "?";
    document.querySelector(".user-input").value = "";
    document.querySelector("body").style.backgroundColor =
        "rgba(100, 115, 110, 0.863)";
};
check.addEventListener("click", compareUserNumber);
reset.addEventListener("click", resetHandler);
