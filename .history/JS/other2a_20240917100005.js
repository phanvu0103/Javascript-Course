// *** Bài 16: Tìm hiểu kiểu dữ liệu khác ***
console.log("--------- ***  *** ---------");
// *** Underfined --> Khai báo nhưng chưa ra giá trị ***
console.log("--------- ***  *** ---------");
//
let a;
console.log(a); // ---> underfind
let b;
console.log(b); // --> underfind
b = 100;
console.log(b); // ---> 100

//const c; // phải khai báo, nếu ko khai báo sẽ lỗi
const c = 120;
console.log(c);

// Null --> nothing : là trống không
let d = null;
console.log(d);

// *** Boolean --> true or flase ***
// falsy values vs truthy values

// falsy values: "", 0, false, underfined, null
// truthy values: "abc", 1, true, 100, 1000
