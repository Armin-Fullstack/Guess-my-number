// select check button
const check = document.querySelector(".check")! as HTMLButtonElement;

// compare user number - function
const compareUserNumber = () => {
  // get user number
  const userNumber = +(document.querySelector(".user-input") ! as HTMLInputElement).value;
};
check.addEventListener("click", compareUserNumber);
