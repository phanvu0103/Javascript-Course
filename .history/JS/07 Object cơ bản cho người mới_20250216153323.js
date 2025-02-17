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
    //TODO: console.log(key);
    //TODO: -> kết quả
    /** TODO:
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
    //TODO: mình khai thêm 1 object mới
    //TODO: và thấy biên key phức tạp thì mình tạo 1 biến value để lưu giá trị
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
// TODO: object.keys(object) -> trả về 1 mảng chứa tất cả các key của object
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
//TODO: object.values(object) -> trả về 1 mảng chứa tất cả các value (giá trị) của object
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
// TODO: object.entries(object) -> trả về 1 mảng nested (trong mảng có mảng con [[1,2,3], [1,2]]) gồm có key và value của object [[12, "name"], ["evon", "age"]]
console.log(
    "--------- object.entries(object) -> trả về 1 mảng chứa tất cả các key và value của object ---------"
);
const entries = Object.entries(student);
console.log(entries); // -> [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]0.
/** TODO:
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
//TODO: object.assign(object1, object2) -> gộp hay sao chép dữ liệu object2 vào object1
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
// TODO: object.freeze(object) -> đóng băng object, ngăn chặn, không thể thay đổi hay chỉnh sửa key và value giá trị của object
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
// TODO: object.seal(object) -> ngăn chặn thêm mới key, xóa key, cho phép chỉnh sửa key, value của object
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
// TODO: sao chép object dùng {...object}, còn dùng sao chép mảng dùng [...array]
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
console.log(newUser2); //TODO: -> {username: 'iloveyouverymuch'}

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
//TODO: clone nested object
console.log("--------- clone nested object ---------");
const newUser3 = JSON.parse(JSON.stringify(user2));
newUser3.school.name = "Designer";
console.log("New user3 ");
console.log(newUser3); // -> {username: 'evondev', school: {name: 'Designer', room: {name: 'IT'}}}
// TODO: this trong object: this keyword
// TODO: this trong object là 1 biến đại diện cho object đó, this nó sẽ đề cập object gần nhất
console.log("--------- this trong object: this keyword ---------");

const student2 = {
    name: "evondev", // -> gọi là property key
    age: 27, //
    male: true, //
    "last-name": "Nguyên",
    hi: function () {
        console.log(this); // TODO: {name: 'evondev', age: 27, male: true, last-name: 'Nguyên', hi: ƒ}
        console.log(`my name is ${this.name} and i am ${this.age} years old`); //TODO:-> my name is evondev and i am 27 years old
    }, // TODO:-> gọi là m
    fullname: {
        name: "Khai Khanh",
    }, // ethod
};
student2.hi();

// *** *** *** *** ***
// Bài 103: Optional chaining
console.log("--------- *** Bài 103: Optional chaining *** ---------");
// TODO: optional chaining: ?. -> kiểm tra xem key có tồn tại hay không, nếu có thì trả về giá trị, không thì trả về <undefined>   </undefined>
console.log(
    "--------- optional chaining: ?. -> kiểm tra xem key có tồn tại hay không, nếu có thì trả về giá trị, không thì trả về <undefined>   </undefined> ---------"
);
console.log("--------- vd1 ---------");
console.log(student2.fullname); // -> undefined
// console.log(student2.fullname.name); // -> undefined.name -> error: Cannot read property 'name' of undefined
if (student2.fullname) {
    if (student2.fullname.name) {
        console.log(student2.fullname.name); // -> Khai Khanh
    }
    // console.log(student2.fullname.name); // TODO: -> undefined ko có key name trong fullname nên trả về undefined
}
// student2.fullname?.name -> kiểm tra xem key fullname có tồn tại hay không, nếu có thì trả về giá trị, không thì trả về <undefined>
console.log(student2.fullname?.name); // -> Khai Khanh

// *** *** *** *** ***
// Bài 104: Destructuring object
console.log("--------- *** Bài 104: Destructuring object *** ---------");
// TODO: destructuring object: lấy giá trị từ object và gán vào biến
const { name, age, male } = student2;
console.log(name, age, male); // -> // TODO:  evondev 27 true
// const name = student2.name; // -> evondev
// const age = student2.age; // -> 27
// const male = student2.male; // -> true

// // TODO:  const { name, age, male, ...rest } = student2;
// // TODO:  console.log(rest); // -> {last-name: 'Nguyên', hi: ƒ, fullname: {name: 'Khai Khanh'}
// NORMAL FUNCTION
console.log("--------- NORMAL FUNCTION ---------");

function whatYourInfo(name, age, school) {
    console.log(name, age, school);
}
whatYourInfo("evondev", 27, "university"); // -> evondev 27 university
// Function with object
console.log("--------- Function with object ---------");

function whatYourInfo1(obj) {
    console.log(obj.name, obj.age, obj.school);
}
const newObj = {
    school: "university",
    age: 27,
    name: "evondev",
};
whatYourInfo1(newObj); // -> evondev 27 university
// object destructuring parameter
console.log("--------- object destructuring parameter ---------");
function whatYourInfo2({ name, age, school }) {
    console.log(name, age, school);
}
whatYourInfo2({
    school: "university ",
    age: 29,
    name: "evondev",
});

// *** *** *** *** ***
// Bài 105: Bài tập chương 7 số 1
console.log("--------- *** Bài 105: Bài tập chương 7 số 1 *** ---------");
// TODO: Viết 1 function kiểm tra value có phải là object hay không?
console.log(
    "--------- Viết 1 function kiểm tra value có phải là object hay không? ---------"
);

// typeof value === "object", && value !== null
// {} [] null đều có object
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
// {} -> true
// plain object -> true else return false
console.log(isObject({})); // -> true
console.log(isObject([])); // -> false
console.log(isObject(null)); // -> false
console.log(isObject(new Date())); // -> true

// *** *** *** *** ***
// Bài 106: Bài tập chương 7 số 2
console.log("--------- *** Bài 106: Bài tập chương 7 số 2 *** ---------");
// {a: 1, b: 2, } -> [['a', 1], ['b', 2]]
console.log("--------- {a: 1, b: 2, } -> [['a', 1], ['b', 2]] ---------");
console.log("--------- Cách 1 ---------");

function objectToArray(object) {
    // check nếu ko phải object thì dừng
    if (!isObject(object)) return;
    // nếu là object thì xử lý
    return Object.entries(object);
}
console.log(objectToArray({ a: 1, b: 2 })); // -> [['a', 1], ['b', 2]]
console.log("--------- Cách 2 ---------");

function objectToArray1(object) {
    // check nếu ko phải object thì dừng
    if (!isObject(object)) return;
    // nếu là object thì xử lý
    // object là key, object[key] là value
    const value = Object.keys(object).map((key) => [key, object[key]]);
    return value;
}
console.log(objectToArray1({ a: 1, b: 2 }));
console.log("--------- Cách 3 ---------");
function objectToArray2(object) {
    // check nếu ko phải object thì dừng
    if (!isObject(object)) return;
    // nếu là object thì xử lý
    let result = [];
    for (let key in object) {
        // hasOwnProperty(key): kiểm tra key có trong object hay không, nếu object chứ key thì trả về true, không thì false
        if (object.hasOwnProperty(key)) {
            result.push([key, object[key]]);
        }
    }
    return result;
}
console.log(objectToArray2({ a: 1, b: 2 }));

// *** *** *** *** ***
// Bài 107: Bài tập chương 7 số 3
console.log("--------- *** Bài 107: Bài tập chương 7 số 3 *** ---------");
// without
// ({a : 1, b : 2 }, ['b']) -> {a: 1}
function without(object, keys) {
    // keys cần xóa
    // check nếu ko phải object thì dừng
    if (!isObject(object)) return;
    // nếu là object thì xử lý
    // object là key, object[key] là value
    for (let key of keys) {
        delete object[key];
    }
    return object;
}
console.log(without({ a: 1, b: 2 }, ["b"])); // -> {a: 1}