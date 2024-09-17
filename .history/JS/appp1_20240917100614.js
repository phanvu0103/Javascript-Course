// Bài 3: Tìm hiểu hàm console.log
console.log("--------- *** ài 3: Tìm hiểu hàm console.log *** ---------");
console.log("hello");

//  Bài 4: Kiến thức về biến cần nắm
console.log("--------- *** ài 4: Kiến thức về biến cần nắm *** ---------");
// Biến -- Variables
console.log("--------- *** Biến -- Variables *** ---------");
// cameCase -> evondev -> evonDev
console.log("--------- *** cameCase -> evondev -> evonDev *** ---------");
// ilovemyschool -> iLoveMySchool
console.log("--------- *** ilovemyschool -> iLoveMySchool *** ---------");
//  không nên dặt tiếng việt, howacj có dấu, ký tự đăc biệt, các từ hệ thống, tentoi, toila, canhgiua.
console.log(
    "--------- *** không nên dặt tiếng việt, howacj có dấu, ký tự đăc biệt, các từ hệ thống, tentoi, toila, canhgiua. *** ---------"
);

//  Bài 5: Khai báo biến với const và let
console.log(
    "--------- *** Bài 5: Khai báo biến với const và let *** ---------"
);
// delcare variables : Khai báo biến
console.log("--------- *** delcare variables : Khai báo biến *** ---------");
// const and let
console.log("--------- *** const and let *** ---------");
// const : là hằng số nhưng ko thay đổi giá trị hằng số
console.log(
    "--------- *** const : là hằng số nhưng ko thay đổi giá trị hằng số *** ---------"
);
const number = 100;
console.log(number);
// number = 200;
console.log("--------- ***number = 200;  *** ---------");
let otherNumber = 200;
otherNumber = "We Come To My JavaScript Course";
console.log(otherNumber);

//  Bài 6: Hoisting là gì ?
console.log("--------- ***  Bài 6: Hoisting là gì ? *** ---------");
// Hoisting
console.log("--------- *** Hoisting *** ---------");
const anotherNumber = truel; //Boolean
let otherValue = undefined; // undefined null: ko xác định.
console.log(anotherNumber);
// Data Types (kiểu dữ liệu): Number, String, Boolean, undefined, Null. Những cái thường gặp nhất và có nhiều hàm.
console.log(
    "--------- *** Data Types (kiểu dữ liệu): Number, String, Boolean, undefined, Null. Những cái thường gặp nhất và có nhiều hàm. *** ---------"
);
// Bài 6.5: Bổ sung kiến thức hoisting
console.log("--------- ***Bài 6.5: Bổ sung kiến thức hoisting  *** ---------");
// Xem tại bài này: kt.city/lesson/bai-386-hieu-ky-ve-hoisting-va-temporal-dead-zone
console.log(
    "--------- *** Xem tại bài này: kt.city/lesson/bai-386-hieu-ky-ve-hoisting-va-temporal-dead-zone *** ---------"
);
// Hoisting
console.log("--------- *** Hoisting *** ---------");
// const anotherNumber = true; //Boolean
console.log(
    "--------- *** const anotherNumber = true; //Boolean *** ---------"
);
// let otherValue = undefined; // Undefined null
console.log(
    "--------- *** let otherValue = undefined; // Undefined null *** ---------"
);
// console.log(anotherNumber);
console.log("--------- ***  console.log(anotherNumber); *** ---------");
// Data Types: Number, String, Boolean, Undefined, Null
console.log(
    "--------- *** Data Types: Number, String, Boolean, Undefined, Null  *** ---------"
);
// const và let ko bị hoisting
console.log("--------- *** const và let ko bị hoisting *** ---------");
// var sẽ bị hoisting
console.log("--------- *** var sẽ bị hoisting *** ---------");
// khi mà khai báo biến mà chưa gán giá trị gì cả ví dụ var a;
console.log("--------- ***  *** ---------");
// var a; // undefined
console.log("--------- ***  *** ---------");
// console.log(a);
console.log("--------- ***  *** ---------");
// console.log(a);
console.log("--------- ***  *** ---------");
// var a;
console.log("--------- ***  *** ---------");

var a;
console.log(a);

// // Temporal Dead Zone: TDZ
console.log("--------- ***  *** ---------");
const teacher = "evondev";

const teacherLearning = function () {
    console.log(teacher);
    const teacher = "evondev";
};
// teacherLearning();
console.log("--------- ***  *** ---------");
/**Process
 * const teacher
 * const teacherLearning
 * teacher = "evondev"
 * teacherLearning = f
 * invobe function teacherLearning
 * const teacher: TDZ
 * console.log(teacher) uncaught reference error
 * teacher = "evondev"
 *
 */

// TDZ is existed here
// TDZ is existed here
// TDZ is existed here
// console.log(library);
// TDZ is existed here
// TDZ is existed here
const library = "react"; // TDZ end here
// TDZ is existed here
console.log(library);
// declaration priority

// TDZ start and here
console.log(hobbies); // TDZ is not existed here
// TDZ is not existed here
var hobbies = "badminton";
/**
 * var hobbies; // undefined
 * hobbies = "badminton";
 */
