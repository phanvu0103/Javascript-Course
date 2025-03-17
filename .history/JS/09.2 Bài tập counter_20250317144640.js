const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
buttonPlus.addEventListener("click", function () {
    counterValue++; // cách 1
    // counterValue += 1; // cách 2
});
