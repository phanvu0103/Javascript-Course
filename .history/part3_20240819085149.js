// *** Bài 17: Tìm hiểu hàm Number ***
"4.5"; // 4.5 parseFoat
"4"; // 4 parseInt
// Number(value)
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

// String(Value)
console.log(String(4.5)); // --> 4.5
console.log(String(null)); // -->
console.log(String(undefined)); // -->
console.log(String(true)); // -->
console.log(String(false)); // -->
