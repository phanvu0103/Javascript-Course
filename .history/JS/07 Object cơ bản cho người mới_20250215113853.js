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
// object.keys(object) -> trả về 1 mảng chứa tất cả các key của object
console.log(
    "--------- object.keys(object) -> trả về 1 mảng chứa tất cả các key của object ---------"
);

const keys = Object.keys(student);
console.log(keys); // -> ['name', 'age', 'male', 'hi', 'isDeveloper', 'hello']
console.log(keys.length); // -> 6

// *** *** *** *** ***
// Bài 95: Tìm hiểu phương thức Object.values
console.log(
    "--------- *** Bài 95: Tìm hiểu phương thức Object.values *** ---------"
);
// object.values(object) -> trả về 1 mảng chứa tất cả các value (giá trị) của object
console.log(
    "--------- object.values(object) -> trả về 1 mảng chứa tất cả các value (giá trị) của object ---------"
);

const values = Object.values(student);
console.log(values); // -> ['evondev', 25, 'true', ƒ, true, ƒ]

// *** *** *** *** ***
// Bài 96: Tìm hiểu phương thức  Object.entries
console.log(
    "--------- *** Bài 96: Tìm hiểu phương thức Object.entriess *** ---------"
);
// object.entries(object) -> trả về 1 mảng nested (trong mảng có mảng con [[1,2,3], [1,2]]) gồm có key và value của object [[12, "name"], ["evon", "age"]]
console.log(
    "--------- object.entries(object) -> trả về 1 mảng chứa tất cả các key và value của object ---------"
);
const entries = Object.entries(student);
console.log(entries); // -> [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]0.
/**
 * 0: (2) ['name', 'evondev']
1: (2) ['age', 25]
2: (2) ['male', 'true']
3: (2) ['hi', ƒ]
4: (2) ['isDeveloper', true]
5: (2) ['hello', ƒ]
length: 6
 */

// *** *** *** *** ***
// Bài 97: Tìm hiểu phương thức Object.assign
console.log(
    "--------- *** Bài 97: Tìm hiểu phương thức Object.assign *** ---------"
);
// object.assign(object1, object2) -> gộp hay sao chép dữ liệu object2 vào object1
console.log(
    "---------  object.assign(object1, object2) -> gộp hay sao chép dữ liệu object2 vào object1 ---------"
);

const a = {
    firstname: "evon",
};
const b = {
    lastname: "dev",
};
const c = Object.assign(a, b);
console.log(c); // -> {firstname: 'evon', lastname: 'dev'}
const d = { ...a, ...b };
console.log(d); // -> {firstname: 'evon', lastname: 'dev'}

// *** *** *** *** ***
// Bài 98: Tìm hiểu phương thức Object.freeze
console.log(
    "--------- *** Bài 98: Tìm hiểu phương thức Object.freeze *** ---------"
);
// object.freeze(object) -> đóng băng object, ngăn chặn, không thể thay đổi hay chỉnh sửa key và value giá trị của object
console.log(
    "--------- object.freeze(object) -> đóng băng object, ngăn chặn, không thể thay đổi hay chỉnh sửa key và value giá trị của object ---------"
);

const car = {
    brand: "BMW",
    color: "black",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar); // -> {brand: 'BMW', color: 'black'}

// *** *** *** *** ***
// Bài 99: Tìm hiểu phương thức Object.seal
console.log(
    "--------- *** Bài 99: Tìm hiểu phương thức Object.seal *** ---------"
);
// object.seal(object) -> ngăn chặn thêm mới key, xóa key, cho phép chỉnh sửa key, value của object
console.log(
    "--------- object.seal(object) -> ngăn chặn thêm mới key, xóa key, cho phép chỉnh sửa key, value của object ---------"
);
const user = {
    userName: "evondev",
};
const newUser = Object.seal(user);
newUser.userName = "i love you";
newUser.lastname = "iloveyou";
console.log(newUser); // -> {username: 'i love you'}

// *** *** *** *** ***
// Bài 100: Cách sao chép một object
console.log("--------- *** Bài 100: Cách sao chép một object *** ---------");
// sao chép object dùng {...object}, còn dùng sao chép mảng dùng [...array]
console.log("--------- sao chép object dùng {...object} ---------");
const user1 = {
    userName: "evondev",
};
const newUser1 = { ...user1 };
newUser1.userName = "iloveyouverymuch";
console.log(user1); // -> {username: 'i love you'}
console.log(newUser1); // -> {username: 'iloveyouverymuch'}

// *** *** *** *** ***
// Bài 101: Cách sao chép một object phức tạp
console.log(
    "--------- *** Bài 101: Cách sao chép một object phức tạp *** ---------"
);
// TODO:  Object.assign({}, object) -> sao chép object phức tạp
console.log("--------- vd1 ---------");
const newUser2 = Object.assign({}, user1);
console.log(newUser2); // -> {username: 'iloveyouverymuch'}

console.log("--------- vd2 ---------");
const user2 = {
    userName: "evondev",
    school: {
        name: "university",
        room: {
            name: "IT",
        },
    },
};
console.log(user2); // -> {username: 'evondev', school: {name: 'university', room: {name: 'IT'}}}

// *** *** *** *** ***
// Bài 102: Từ khoá this trong object
console.log("--------- *** Bài 102: Từ khoá this trong object *** ---------");
// clone nested object
const newUser3 = JSON.parse(JSON.stringify(user2));
newUser3.school.name = "Designer";
console.log("New user3 ");
console.log(newUser3); // -> {username: 'evondev', school: {name: 'Designer', room: {name: 'IT'}}}
// TODO: this trong object: this keyword
// TODO: this trong object là 1 biến đại diện cho object đó, this 
const student2 = {
    name: "evondev", // -> gọi là property key
    age: 27, //
    male: true, //
    "last-name": "Nguyên",
    hi: function () {
        console.log("hello evondev");
    }, // -> gọi là method
};
