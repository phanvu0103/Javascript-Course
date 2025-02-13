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
// thêm function vào object
console.log("--------- thêm function vào object ---------");

student.hello = function () {
    console.log("hello"); // -> hello: ƒ ()
};
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
delete student["last-name"]; // -> mất last-name
/**
 *hi: ƒ ()
isDeveloper: true
male: "true"
name: "evondev"
 */

// *** *** *** *** ***
// Bài 93: Tìm hiểu for in trong object
console.log("--------- *** Bài 93: Tìm hiểu for in trong object *** ---------");
// for in trong object
console.log("--------- for in trong object ---------");
for (let key in student) {
    // console.log(key);
    // -> kết quả
    /**
     * name
     * age
     * male
     * hi
     * isDeveloper
     * hello
     */
    // dùng object[key] để lấy value
    // console.log(student[key]);
    // -> kết quả tương ứng với key là biến, còn "" không phải string
    // nhập vậy hơi rối nên mình gọp làm 2 dòng thành 1 dòng
    // console.log(`${key}: ${student[key]}`);
    // -> kết quả
    /**
     * name: evondev
     * age: 25
     * male: true
     * hi: function () {
        console.log("hello evondev");
    }
     * isDeveloper: true
     * hello: function () {
        console.log("hello");
     */
    // mình khai thêm 1 object mới
    // và thấy biên key phức tạp thì mình tạo 1 biến value để lưu giá trị
    if (key === "name") {
        console.log("hello kitty");
    }
    const value = student[key];
    console.log(`${key}: ${student[key]}`);
}

// *** *** *** *** ***
// Bài 94: Tìm hiểu phương thức Object.keys
console.log(
    "--------- *** Bài 94: Tìm hiểu phương thức Object.keys *** ---------"
);