// *** Bài 17: Tìm hiểu hàm Number ***
console.log("--------- ***  *** ---------");
"4.5"; // 4.5 parseFoat
"4"; // 4 parseInt
// Number(value) --> Number
console.log("--------- ***  *** ---------");
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdefg")); // --> NaN ko phải số
// NaN: Not a Number(ko phải 1 số) : 1 giá trị
console.log("--------- ***  *** ---------");
console.log(Number(undefined)); // NaN
console.log(Number(null)); // --> 0
console.log(Number(false)); // --> 0
console.log(Number(true)); // --> 1

// *** Bài 18: Tìm hiểu hàm String ***
console.log("--------- ***  *** ---------");
console.log(Number("")); // --> 0
console.log(Number(NaN)); // NaN

// String(Value) --> String
console.log("--------- ***  *** ---------");
console.log(String(4.5)); // --> 4.5
console.log(String(null)); // --> null
console.log(String(undefined)); // --> undefined
console.log(String(true)); // --> true
console.log(String(false)); // --> false
console.log(String(NaN)); // --> NaN

//  *** Bài 19: Tìm hiểu hàm Boolean ***
console.log("--------- ***  *** ---------");
// Boolean(Value) --> true or false
console.log("--------- ***  *** ---------");
console.log(`Boolean of zero: ${Boolean(0)}`); // --> false
console.log(`Boolean of "": ${Boolean(0)}`); // --> false
console.log(`Boolean of null: ${Boolean(null)}`); // --> false
console.log(`Boolean of undefined ${Boolean(undefined)}`); // --> false
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // --> false
console.log(`Boolean of false: ${Boolean(false)}`); // --> false
// tất cả dòng trên đều là false
console.log("--------- ***  *** ---------");

console.log(`Boolean of text vu: ${Boolean("vu")}`); // --> true

// *** Bài 20: Type coercion là gì ? ***
console.log("--------- ***  *** ---------");
// Type coercion
console.log("--------- ***  *** ---------");
// + - * /
console.log("--------- ***  *** ---------");
// weir : kỳ quặc
console.log("--------- ***  *** ---------");
console.log(1 + 2); // --> 3
console.log(10 + 10); // --> 20
console.log(10 + "10"); // --> 1010
console.log("10" + 10); // --> 1010
// 10 -> "10" + "10" = "1010"
console.log("--------- ***  *** ---------");
// console.log(String(10)) + "10")
console.log("--------- ***  *** ---------");

console.log("10" - 10); //Number("10") - 10 = 0
console.log(null + ""); // "Null"
console.log(null + undefined); // NaN
console.log("" - 1); // Number("")-->0, 0 -1 = -1
console.log(false - true); // -1
console.log(null + 10); // 10

// *** Bài 21: Toán tử so sánh cơ bản ***
console.log("--------- ***  *** ---------");
// Toán tử so sánh > < >= <= >=
console.log("--------- ***  *** ---------");
console.log(5 > 7); // --> false
console.log(50 > 7); // --> true
console.log(50 < 7); // --> false
console.log(6 >= 7); // --> false
console.log(7 >= 7); // --> true
console.log(7 <= 7); // --> trueP

// *** Bài 22: Toán tử logic cơ bản ***
console.log("--------- ***  *** ---------");
// Dấu &&(dấu và)  ||(dấu hoặc) !(dấu phủ định) >=Consolas, 'Courier New', monospace, >=
console.log("--------- ***  *** ---------");

console.log(5 > 7 && 8 > 3); // ==> false
//
console.log("--------- ***  *** ---------");
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
// == loose equality vs === strict equality
console.log("=== vs ==");
// ==>  == loose equality

console.log(10 == 10); // ==> true
console.log(10 == "10"); // ==> true ("10 == "10)
console.log(true == 1); // ==> true (Number(true) = 1) -> 1 = 1
console.log(1 == "0.1"); // ==> true (Number("01") = 1) -> 1 = 1
console.log(null == ""); // ==> false -> ("null" =/= "")

// ==> === strict equality ( khuyến khích dùng 3 dấu bằng ===)
console.log(typeof 10); // ==> Number
console.log(typeof "10"); // ==> string
console.log(10 === "10"); // ==> false
console.log(10 !== "10"); // ==> (! == -> !==)true

// ==
console.log(true == "true"); // ==> false
console.log(true === "true"); // ==> false
