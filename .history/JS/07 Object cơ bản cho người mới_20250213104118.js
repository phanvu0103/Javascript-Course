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
    }, // -> gọ là method
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

console.log(student.name);
// student.last - name -> undefined ko  có trong object, phải nhập last-name
// cách 2 bracket notation (dấu ngoặc vuông) object.["key"]
console.log(
    "--------- cách 2 bracket notation (dấu ngoặc vuông) object [] ---------"
);

student.age = 20;
student.male = "male";
console.log(student["age"]);
console.log(student["last-name"]);
// Thay đổi giá trị trong object
student.a
