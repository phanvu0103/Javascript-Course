// *** Bài 29: Function cơ bản cho người mới Phần 1 ***
// Function (hàm)
// Khai báo Function (hàm)
// Cú pháp ("Syntax") : function functionName(parameters, parameters){
// Your Code
// }
// parameters: *** Than số ***

// Đề bài tính tổng 2 số a và b
function sum(a, b) {
    // console.log("is ít working?");
    console.log(a, b); // ==> kết quả ra a = 5 và b = 10 khi mình khai báo ở sum(5, 10) phía dưới.

    // return value
    // không có return thì kết quả trả về là underfined
    return a + b;

    // nếu khó hiểu thì viết
    // const total = a + b;
    // return total; ==> kết quả 5 + 10 = 15
} // khai báo

// sum(5, 10); ==> gọi

// Sum(): invoke function ==> gọi hàm
console.log(sum(5, 10)); // ==> kết quả 5 + 10 = 15

// *** function ***
// Thường là khai báo trước ==> mới gọi thì mới có kết quả
// function thì có thể goi trước ==> khai báo cũng được vì nó hiểu và sẽ tự động đưa khai báo lên. ko bị hoisting.

function sum(c = 10, d = 50) {
    //nếu khai báo c mà ko khai báo d thì kết quả => NaN

    // console.log("is ít working?");
    console.log(c, d);

    return c + d;
}

// function sum(parameters, defaultValue ){
// // Your Code
// // }
// Sum(): invoke function
// invoke function sum(arguments) ==> *** Đối số ***

console.log(sum(50, 100));
// console.log(sum(50,)); => function sum(c)  ==> kết quả NaN ko khai báo d
// console.log(sum()); => function sum()  còn kho khai cáo c và d ==> kết quả NaN

//            *** *** *** *** *** ***
// *** Bài 30: Function cơ bản cho người mới Phần 2 ***
// *** Function declarationc: có Khai báo vào có tên ***
// ***Tham số là function***
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
    console.log(a + b); // ==> kết quả 700
    return a + b;
}
// add(300, 400)
const sum2 = add; // gán function add cho biến sum2 nhưng chưa đc gọi
sum2(300, 400);
// mình lưu function (add) thì biến(sum2) mình sữ dụng biến để sử dụng đi và sử dụng lại sau này đây là gọi lưu trữ function thành biến
// Tham số là function
// tính trung bình a và b ->( a + b) / 2
// tính trung bình là tiếng anh average
//fn: function
function average(a, b, fn) {
    const total = fn(a + b); //tạo biến total để tái sử dụng
    return total / 2;
    //return (a + b) / 2; ==> mình có thể ghi  (a + b) cũng đc nhưng mình tái sử dụng total ở trên lại cho tiện hơn
}

let result = average(200, 300, sum2); // sum là biến mình có thể lưu và sử dụng nhiều nơi
console.log(`result ${result}`); // ==> kết quả 250

//            *** *** *** *** *** ***
// *** Bài 31: Function cơ bản cho người mới Phần 3 ***
// Anonymous function (function expression): là chức năng(function) ẩn danh(vô danh: Anoymous)
// Function declaration: có khai báo và chức năng có tên(có danh)
const logName = function () {
    console.log("your name"); // ==> kết quả your name
}; // khai báo biến
logName(); // ==> gọi biến ==> ko bị hoisting
// Anonymous function không đc gọi biến trước rồi mới khai báo hàm sẽ bị lỗi(error)
// mình phải làm theo trình tự khai báo hàm trước rồi mình mới gọi biến sẽ ko bị lỗi(error)
// còn function functionName(parameters, parameters), Function declarationc thì tự  động chuyển đổi

// *** *** IIFE ==> Immediately Invoked Function Execution :Thực thi hàm được gọi ngay lập tức
// Immediately (Ngay lập tức)
// Invoked (Được gọi)
// Function (Chức năng)
// Execution (Thực hiện)
// Đây là IIFE (that is IIFE)
(function () {
    console.log("this is IIFE function"); // ==> kết quả: this is IIFE function
})();

// *** *** *** *** *** //
// ***  Bài 32: Global scope và function scope ***
// Scope : phạm vi của biến
// Global scope ( toàn cục bộ )
let myName = "evondev"; //Global scope: là nó nằm ngoài function

// function scope ( cục bộ )
function logYourName() {
    let myName2 = myName; // function scope: là nằm trong function
    console.log(myName2);
}
// console.log(myName); // Global scope ko nằm trong function thì ở đâu cũng gọi đc, còn function scope thì mình chỉ gọi trong function ko thì console.log(myName2);: báo lỗi function4.js:109 Uncaught ReferenceError: myName2 is not defilned
logYourName();

// *** *** *** *** *** //
// *** Bài 33: Block scope và từ khoá var ***
//
// Block scope: {truy xuất trong block, ko thể truy xuất bên ngoài ko truy xuất đc}<==  nằm trong block còn ngoài block thì ko đc
if (2 > 1) {
    // { <==Block scope

    let message = "hello";
    console.log(message);
    // alert(message); // ở trong block thì chương trình nó hiểu và kết quả ra => Hello
} // } <==Block scope
// alert(message); ==>
// còn ở ngoài block thì chương tình ko hiểu khai gì nên kết quả hiện ra lỗi :(function4.js:122 Uncaught ReferenceError: message is not defined)
//
// Từ khoá var

// var message2 = "hello 2"; khi var, let,  khai ở ngoài block scope thì trong block scope mình khai lại và gọi ở ngoài đc và ra kết quả ko bị lỗi
// let message2 = "hello 2";
if (2 > 1) {
    // { <==Block scope
    const message = "hello";
    // Blockl scope
    // hosited
    var message2 = "hello 2"; // var là global scope
    // message2 = "hello 2"; khi lại ở var, let,  ở ngoài block scope và ra kết quả

    // alert(message2);
    // console.log(message2); // ==> gọi ở trong block thì kết quả ==> Hello2
} // { <==Block scope
console.log(message2); // ==> gọi ngoài trong block thì kết quả ==> Hello2 vì Var là global scope
// *** *** *** *** ***
// ***  Bài 34: Closure cơ bản ***
// Lexical scope
let aNewName = "Evodev"; // global scope
function sayHello() {
    let message5 = "Hi"; // block scope
    console.log(`${message5} ${aNewName}`);
}
sayHello();
// *** Trường hợp 1 Closure
// Function con có thể truy xuất scope của function cha
function sayHello2() {
    // parent function: function cha
    let message = "Hi";
    function sayHi() {
        // inner function : function con
        console.log(message);
    }
    return sayHi;
}
let hello = sayHello2();
hello();
// *** Trường hợp 2 Closure
function sayHello3(message) {
    return function hiYourName(name) {
        console.log(`${message} ${name}`);
    };
}
let helloo = sayHello3("Welcom to javascript");
helloo(" Closure");
// *** *** *** *** ***
// ***  Bài 35: Closure cơ bản ***
// *** Trường hợp 3 Closure
function anotherFunction() {
    let otherMessage = "hello";
    function sayHi() {
        console.log(otherMessage);
    }
    return sayHi;
}
let callFunc = anotherFunction();
cal