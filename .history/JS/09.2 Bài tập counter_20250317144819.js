const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
buttonPlus.addEventListener("click", function () {
    counterValue++; // cách 1
    // counterValue += 1; // cách 2
    // counterValue = counterValue + 1; // cách 3
    // counterValue += counterValue; // cách 4
    console.log(counterValue);
    counterNumber.textContent = counterValue;
});
