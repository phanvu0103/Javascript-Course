// Bài 7: Giới thiệu kiểu dữ liệu string
// string (Chuỗi)
"hello";
" MY name is EvonDev";
"i am frontend developer";
// double quotes, single quotes, backticks (template literal)

// Bài 8: Sử dụng string cơ bản
const name = "Evondev";
const job = "frontend develope";

console.log(name);
console.log(typeof name);
const newStr = "MY name is EvonDev and i am frontend developer ";
const newStr2 = "MY name is " + name + " and i am " + job;
console.log(newStr2);

//${variable}

// const newStr3 = "my  ${name} ";
// console.log(newStr3);

// Bài 9: index và length trong string cần nắm
// MY name is EvonDev and i am frontend developer --> 0 ->45 length = 45
// index : là vị trí của từng ký tự trong chuỗi ( bao gồm cả khoảng trắng)
// length  đọ dài của chữ
console.log(newStr2.length);

// Bài 10: Các phương thức trong string phần 1
// Tìm hiểu kiểu dữ liệu String
// -- Ví dụ của String
// -- Sử dụng biến trong string với backticks(template literal)
// Các hàm hay dung trong String
// -- index
// -- length
// -- split
// -- toLowerCase
// -- toUpperCase
// -- startsWith
// -- endsWith
// -- includes
// -- indexOf
// -- lastIndexOf
// -- replace
// -- repeat
// -- slice
// -- substr
// -- substring
// -- trim
// -- trimEnd
// -- trimStart
// -- charAt

// -- split --
const myStr = "Frontend Develope";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));

// toLowerCase; các chữ bình thường
console.log(myStr.toLowerCase());

// -- toUpperCase các chữ In hoa
console.log(myStr.toUpperCase());

// -- startsWith: bắt đầu từ chữ đầu tiên  kết quả trả ra true hoặc false
console.log(myStr.startsWith("Frontend")); // bắt đầu từ chữ đầu tiên kết quả true
console.log(myStr.startsWith("frontend")); // bắt đầu từ chữ đầu tiên kết quả false vì chữ F ko viết hoa

// -- endsWith --
console.log(myStr.endsWith("frontend")); //kết quả false vì chữ cuối ko phải frontend
console.log(myStr.endsWith("Develope")); //kết quả true vì Develope là chữ cuối cùng

// -- includes
console.log(myStr.includes("end")); //kết quả kiểm tra có chữ "end" trong Frontend thì hiện true
console.log(myStr.includes("abc")); //kết quả kiểm tra có chữ "abc" trong Frontend ko có chữ thì false

// --indexOf -- 
console.log(myStr.indexOf("D")); //là kiếm ký tự đàu tiên (chữ D) nằm vị trí thứ 9 trong Frontend Develope

// --lastIndexOf -
console.log(myStr.lastIndexOf("o")); //là kiếm ký tự cuối cùng (chữ 0) nằm vị trí thứ 9 trong Frontend Develope

// Bài 11: Các phương thức trong string phần 2
