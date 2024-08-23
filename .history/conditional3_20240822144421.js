// *** Bài 24: Câu điều kiện cơ bản ***
// Conditional : điều kiện

// if ==> else
// if (conditional (nếu là đúng thì trả lại true còn sai thì false ) ) {
// your code here;
// } else :(là ngược lại điều kiện của IF){
// }

const isRich = false;
const myMoney = 1000000000;

if (isRich) {
    console.log("I will buy a new car"); // điều kiện sai thì ko in ra để trống
} else {
    console.log("i will save my money"); // điều kiện đứng thì in i will save my money
} // ==> i will save my money

if (!isRich) {
    console.log("I will buy a new car"); // điều kiện của dấu phủ định đúng thì in ra I will buy a new car
} else {
    console.log("i will save my money"); // điều kiện của dấu phủ định sai thì ko in ra
} // ==> I will buy a new car

// else ==> if
// else if (conditional) {
// your code here;
// }

const isRichs = true;
const myMoneys = 100;

if (!isRichs) {
    console.log("I will buy a new car");
} else if (myMoneys > 1000) {
    console.log("i will give some money");
} else {
    console.log("i poor");
} // ==> i poor

const isRichss = true;
const myMoneyss = 10000;

if (!isRichs) {
    console.log("I will buy a new car");
} else if (myMoneyss > 1000) {
    console.log("i will give some money");
} else {
    console.log("i poor"); // ==> i poor
} // ==> i will give some money

// *** switch case ***

// *** Bài 25: alert, prompt và confirm ***
