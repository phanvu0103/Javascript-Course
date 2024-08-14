// Bài 14: Tìm hiểu kiểu dữ liệu number phần 1
// Số nguyên 1  2  3 9999 333
// Số thập phân 3,4   5,8 --> trong JS viết 3.4  5.8

// Hàm toán
// # Chương 3: Thành thạo kiểu dữ liệu Number

// ** Tìm hiểu kiểu dữ liệu Number
//  --   Số NguyênSố Nguyên
//  --   Số thập phân

//  ** Các hàm hay dùng của Number
//  --   parseInt
//  --   parseFloat
//  --   toFixed
//  --   isInteger
//  --   Math.floor
//  --   Math.round
//  --   Math.randon
//  --   Math.abs
//  --   Math.ceil
//  --   Math.pow
//  --   Math.max
//  --   Math.mix
//  --   isNaN
//  --   Number.isNaN

//  ** Các toán


console.log(3 + 7);
console.log(typeof 999); // ra number dùng typeof check kiểu dữ liệu
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5, dùng hàm parseInt:  số nguyên
console.log(parseFloat(number2)); // 4.8, dùng hàm parseFloat:  số thập phân

// Math.abs(Value)  abs: là giá trị tuyệt đối
const number3 = "-10";
console.log(Math.abs(number3)); // 10, abs: là giá trị tuyệt đối

// Math.floor(Value); --> làm tròn xuống ví dụ: 4.3 -> 4
console.log(Math.floor(4.3)); // -> 4

// Math.ceil(Value) --> làm tròn lên ví dụ: 4.3 -> 5
console.log(Math.ceil(4.3)); // -> 5

// Math.round(Value) --> Làm tròn gần nhất ví dụ: 4.3 -> 4, 4.5 -> 5
console.log(Math.round(4.3)); // -> 4

// tofixed(number) Ví dụ: 0.33333 -> 0.33
// tofixed(2)
console.log(1 / 3);
console.log((1 / 3).toFixed(2)); //  tofixed trờ thành stimg
console.log(parseFloat((1 / 3).toFixed(2))); // bọc parseFloat biến thành số
console.log((1 / 3).toFixed(5));
console.log(parseFloat((1 / 3).toFixed(5)));
