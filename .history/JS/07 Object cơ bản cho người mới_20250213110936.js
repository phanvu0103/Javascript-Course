//
// *** *** *** *** ***
// Bài 91: Tìm hiểu object cơ bản phần 1
console.log(
    "--------- *** Bài 91: Tìm hiểu object cơ bản phần 1 *** ---------"
);
// Cách khai báo object
// object literal
console.log("--------- object literal ---------");

const objectLiteral = {};
// object constructor
console.log("--------- object constructor ---------");

const objectConstructor = new Object();
const student = {
    name: "evondev", // -> gọi là property key
    age: 27, //
    male: true, //
    "last-name": "Nguyên",
    hi: function () {
        console.log("hello evondev");
    }, // -> gọi là method
};
//
// *** *** *** *** ***
// Bài 92: Tìm hiểu object cơ bản phần 2
console.log(
    "--------- *** Bài 92: Tìm hiểu object cơ bản phần 2 *** ---------"
);
// method trong object
// 2 cách truy xuất giá trị trong object
// cách 1 Dot natation (dấu chấm) object.key
console.log("--------- cách 1 Dot natation (dấu chấm) object.key ---------");

console.log(student.name); // -> evondev
// student.last - name -> undefined ko  có trong object, phải nhập last-name
// cách 2 bracket notation (dấu ngoặc vuông) object.["key"]
console.log(
    "--------- cách 2 bracket notation (dấu ngoặc vuông) object [] ---------"
);

student.age = 20;
student.male = "male";
console.log(student["age"]); // -> 20
console.log(student["last-name"]); // -> Nguyên
// Thay đổi giá trị trong object
console.log("--------- Thay đổi giá trị trong object ---------");

student.age = 25;
student.male = "true";
console.log(student); // -> {name: 'evondev', age: 25, male: 'true', last-name: 'Nguyên', hi: ƒ}
// age:25
/**
 * hi: ƒ ()
last-name: "Nguyên"
male: "true"
name: "evondev"
 */
// thêm mới key vào object
console.log("--------- thêm mới key vào object ---------");

// isDeveloper: true;
student.isDeveloper = true;
console.log(student); //-> {name: 'evondev', age: 25, male: 'true', last-name: 'Nguyên', hi: ƒ, …}
// age: 25;
/**
 *hi: ƒ ()
isDeveloper: true
last-name: "Nguyên"
male: "true"
name: "evondev"
 */
// xóa key(giá trị) trong object dùng delete
console.log("--------- xóa key(giá trị) trong object dùng delete ---------");
de