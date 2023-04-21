"use strict";
// select check button
const check = document.querySelector(".check");
// compare user number - function
const compareUserNumber = () => {
    // get user number
    const userNumber = +document.querySelector(".user-input").value;
    if (!userNumber) {
        console.log("It's Zero");
    }
};
check.addEventListener("click", compareUserNumber);
