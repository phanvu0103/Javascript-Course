// Bài 14: Tìm hiểu kiểu dữ liệu number phần 1
// Số nguyên 1  2  3 9999 333
// Số thập phân 3,4   5,8 --> trong JS viết 3.4  5.8

console.log(3 + 7);
console.log(typeof 999); // ra number dùng typeof check kiểu dữ liệu
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5, dùng hàm parseInt:  số nguyên
console.log(parseFloat(number2)); // 4.8, dùng hàm parseFloat:  số thập phân

// Math.abs(Value)
const number3 = "-10";
console.log(Math.abs(number3)); // 10, abs: là giá trị tuyệt đối

// Math.floor(Value); --> làm tròn xuống 4.3 -> 4
console.log(Math.floor(4.3)); // -> 4

// Math.ceil(Value) --> làm tròn lên 4.3 -> 5
console.log(Math.ceil(4.3)); // -> 5

// Math.round(Value) --> Làm tròn gần nhất ví dụ: 