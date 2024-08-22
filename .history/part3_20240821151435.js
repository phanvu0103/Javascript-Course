// *** Bài 17: Tìm hiểu hàm Number ***
"4.5"; // 4.5 parseFoat
"4"; // 4 parseInt
// Number(value) --> Number
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdefg")); // --> NaN ko phải số
// NaN: Not a Number(ko phải 1 số) : 1 giá trị
console.log(Number(undefined)); // NaN
console.log(Number(null)); // --> 0
console.log(Number(false)); // --> 0
console.log(Number(true)); // --> 1

// *** Bài 18: Tìm hiểu hàm String ***
console.log(Number("")); // --> 0
console.log(Number(NaN)); // NaN

// String(Value) --> String
console.log(String(4.5)); // --> 4.5
console.log(String(null)); // --> null
console.log(String(undefined)); // --> undefined
console.log(String(true)); // --> true
console.log(String(false)); // --> false
console.log(String(NaN)); // --> NaN

//  *** Bài 19: Tìm hiểu hàm Boolean ***
// Boolean(Value) --> true or false
console.log(`Boolean of zero: ${Boolean(0)}`); // --> false
console.log(`Boolean of "": ${Boolean(0)}`); // --> false
console.log(`Boolean of null: ${Boolean(null)}`); // --> false
console.log(`Boolean of undefined ${Boolean(undefined)}`); // --> false
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // --> false
console.log(`Boolean of false: ${Boolean(false)}`); // --> false
// tất cả dòng trên đều là false

console.log(`Boolean of text vu: ${Boolean("vu")}`); // --> true

// *** Bài 20: Type coercion là gì ? ***
// Type coercion
// + - * /
// weir : kỳ quặc
console.log(1 + 2); // --> 3
console.log(10 + 10); // --> 20
console.log(10 + "10"); // --> 1010
console.log("10" + 10); // --> 1010
// 10 -> "10" + "10" = "1010"
// console.log(String(10)) + "10")

console.log("10" - 10); //Number("10") - 10 = 0
console.log(null + ""); // "Null"
console.log(null + undefined); // NaN
console.log("" - 1); // Number("")-->0, 0 -1 = -1
console.log(false - true); // -1
console.log(null + 10); // 10

// *** Bài 21: Toán tử so sánh cơ bản ***
// Toán tử so sánh > < >= <= >=
console.log(5 > 7); // --> false
console.log(50 > 7); // --> true
console.log(50 < 7); // --> false
console.log(6 >= 7); // --> false
console.log(7 >= 7); // --> true
console.log(7 <= 7); // --> trueP

// *** Bài 22: Toán tử logic cơ bản ***
// Dấu &&(dấu và)  ||(dấu hoặc) !(dấu phủ định) >=Consolas, 'Courier New', monospace, >=
console.log(5 > 7 && 8 > 3); // ==> false

// Boolean &&
// false && false ==> false
// false && true ==> false
// true && false ==> false
// true && true ==> true

console.log(5 > 7 || 8 > 3); // ==> true ( false || true)

// Boolean  ||
// false || false ==> false
// false || true ==> true
// true || false ==> true
// true || true ==> true


// Boolean  !
const amIWrong = false;
console.log(!amIWrong); // ==> true (phủ định ngược lại)
const amIWrongs = true;
console.log(!amIWrongs); // ==> false

// *** Bài 23: So sánh == vs === ***
// == loose equality vs === st