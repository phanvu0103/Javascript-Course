// Bài 7: Giới thiệu kiểu dữ liệu string
console.log("--------- ***  *** ---------");

// string (Chuỗi)
console.log("--------- ***  *** ---------");

"hello";
" MY name is EvonDev";
"i am frontend developer";
// double quotes, single quotes, backticks (template literal)

// Bài 8: Sử dụng string cơ bản
console.log("--------- ***  *** ---------");

const name = "Evondev";
const job = "frontend develope";

console.log(name);
console.log(typeof name);
const newStr = "MY name is EvonDev and i am frontend developer ";
const newStr2 = "MY name is " + name + " and i am " + job;
console.log(newStr2);

//${variable}
console.log("--------- ***  *** ---------");


// const newStr3 = "my  ${name} ";
// console.log(newStr3);

// Bài 9: index và length trong string cần nắm
console.log("--------- ***  *** ---------");

// MY name is EvonDev and i am frontend developer --> 0 ->45 length = 45
console.log("--------- ***  *** ---------");

// index : là vị trí của từng ký tự trong chuỗi ( bao gồm cả khoảng trắng)
console.log("--------- ***  *** ---------");

// length  đọ dài của chữ
console.log("--------- ***  *** ---------");

console.log(newStr2.length);

// Bài 10: Các phương thức trong string phần 1
console.log("--------- ***  *** ---------");
// Tìm hiểu kiểu dữ liệu String
console.log("--------- ***  *** ---------");
// -- Ví dụ của String
console.log("--------- ***  *** ---------");
// -- Sử dụng biến trong string với backticks(template literal)
console.log("--------- ***  *** ---------");
// Các hàm hay dung trong String
console.log("--------- ***  *** ---------");
// -- index
console.log("--------- ***  *** ---------");
// -- length
console.log("--------- ***  *** ---------");
// -- split
console.log("--------- ***  *** ---------");
// -- toLowerCase
console.log("--------- ***  *** ---------");
// -- toUpperCase
console.log("--------- ***  *** ---------");
// -- startsWith
console.log("--------- ***  *** ---------");
// -- endsWith
console.log("--------- ***  *** ---------");
// -- includes
console.log("--------- ***  *** ---------");
// -- indexOf
console.log("--------- ***  *** ---------");
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

// toLowerCase -- các chữ bình thường
console.log(myStr.toLowerCase());

// -- toUpperCase --  các chữ In hoa
console.log(myStr.toUpperCase());

// -- startsWith -- bắt đầu từ chữ đầu tiên  kết quả trả ra true hoặc false
console.log(myStr.startsWith("Frontend")); // bắt đầu từ chữ đầu tiên kết quả true
console.log(myStr.startsWith("frontend")); // bắt đầu từ chữ đầu tiên kết quả false vì chữ F ko viết hoa

// -- endsWith --
console.log(myStr.endsWith("frontend")); //kết quả false vì chữ cuối ko phải frontend
console.log(myStr.endsWith("Develope")); //kết quả true vì Develope là chữ cuối cùng

// -- includes --
console.log(myStr.includes("end")); //kết quả kiểm tra có chữ "end" trong Frontend thì hiện true
console.log(myStr.includes("abc")); //kết quả kiểm tra có chữ "abc" trong Frontend ko có chữ thì false

// --indexOf --
console.log(myStr.indexOf("D")); //là kiếm ký tự đàu tiên (chữ D) nằm vị trí thứ 9 trong Frontend Develope

// --lastIndexOf --
console.log(myStr.lastIndexOf("o")); //là kiếm ký tự cuối cùng (chữ 0) nằm vị trí thứ 9 trong Frontend Develope

// Bài 11: Các phương thức trong string phần 2

// -- replace --
console.log(myStr.replace("Develope", "Designer")); // đổi chữ Develope sang Designer

// -- repeat --  muốn lặp đi lặp lại bao nhiêu lần cũng đc
console.log(myStr.repeat(8));

// -- slice --
// slice(start, end)
console.log(myStr.slice(0, 8)); //Frontend
console.log(myStr.slice(0)); // Frontend Develope
console.log(myStr.slice(-8)); //Develope
console.log(myStr.slice(99999)); // ko có vị trí 99999 nên ko có hiện trả về rỗng

// -- trim --
console.log(myStr.trim()); // remove space lest and right (xóa khoảng trống bên trái và bên phải)

// -- trimEnd --
console.log(myStr.trimEnd()); //remove space right (xóa khoảng trống bên phải)
// -- trimStart --
console.log(myStr.trimStart()); // remove space lest  (xóa khoảng trống bên trái )
// -- charAt -- lấy ra ký tự mình muốn
console.log(myStr.charAt());
console.log(myStr.charAt(2));

// **** Bài 12: Phân biệt substr và substring -- https://www.w3schools.com/jsref/jsref_substr.asp

// -- substr --> Lấy ra 1 phần của chuỗi (string)
// substr(index, lenght) --> Index: vị trí, Lenght: số lượng ký tự bạn muons lấy
console.log(myStr.substr(1, 5)); // ra ronte

// -- substring -->Lấy ra cá ký tự của chuỗi (string)
// substring(start index, end index)
console.log(myStr.substring(1, 5)); // ra ront

// **** Bài 13: Sử dụng nhiều phương thức của string cùng lúc
