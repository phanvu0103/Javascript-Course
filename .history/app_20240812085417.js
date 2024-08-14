// Bài 3: Tìm hiểu hàm console.log
console.log("hello");

//  Bài 4: Kiến thức về biến cần nắm
// Biến -- Variables
// cameCase -> evondev -> evonDev
// ilovemyschool -> iLoveMySchool
//  không nên dặt tiếng việt, howacj có dấu, ký tự đăc biệt, các từ hệ thống, tentoi, toila, canhgiua.

//  Bài 5: Khai báo biến với const và let
// delcare variables : Khai báo biến

// const and let
// const : là hằng số nhưng ko thay đổi giá trị hằng số
const number = 100;
console.log(number);
// number = 200;
let otherNumber = 200;
otherNumber = "We Come To My JavaScript Course";
console.log(otherNumber);

//  Bài 6: Hoisting là gì ?
// Hoisting
const anotherNumber = truel; //Boolean
let otherValue = undefined; // undefined null: ko xác định.
console.log(anotherNumber);
// Data Types (kiểu dữ liệu): Number, String, Boolean, undefined, Null. Những cái thường gặp nhất và có nhiều hàm.

// Bài 6.5: Bổ sung kiến thức hoisting
// Xem tại bài này: kt.city/lesson/bai-386-hieu-ky-ve-hoisting-va-temporal-dead-zone
// Hoisting
// const anotherNumber = true; //Boolean
// let otherValue = undefined; // Undefined null
// console.log(anotherNumber);
// Data Types: Number, String, Boolean, Undefined, Null
// const và let ko bị hoisting
// var sẽ bị hoisting
// khi mà khai báo biến mà chưa gán giá trị gì cả ví dụ var a;
// var a; // undefined
// console.log(a);
// console.log(a);
// var a;

var a;
console.log(a);

// // Temporal Dead Zone: TDZ
const teacher = "evondev";

const teacherLearning = function () {
    console.log(teacher);
};
t;
t;
