// Bài 7: Giới thiệu kiểu dữ liệu string
// string (Chuỗi)
"hello";
" MY name is EvonDev";
"i am frontend developer";
// double quotes, single quotes, backticks (template literal)

// Bài 8: Sử dụng string cơ bản
const name = "Evondev";
const job = "frontend develope";

// console.log(name);
// console.log(typeof name);
const newStr = "MY name is EvonDev and i am frontend developer ";
const newStr2 = "MY name is " + name + " and i am " + job;
const newLocal = "My name is ${name} and i am ${job}";
// console.log(newStr2);

//${variable}
const newStr3 = newLocal;
console.log(newStr3);
