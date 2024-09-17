// Bài 55: Giới thiệu về mảng
// Mảng: là 1 danh sách chứa nhiều phần tử chứa nhiều giá trị khác nhau ở trong đó
// đây là biến
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
// 2 cách tạo mảng
// mình tạo mảng cho biến
// *** cách 1 tạo mảng được dùng nhiều nhất hiện nay
// array literal
const students = ["a", "b", "c", "d", "e"];
// *** cách 2 tạo mảng nâng cao
// array constructor
const students1 = new Array();
// Ví dụ 1 mảng
// Mảng phức tạp [0, false, undefined, null, "khaikhanh", ["khaikhanh", true, 1200, [] ] ]
// Mảng đơn dảng [0, false , undefined, null, "khaikhanh"]
//
// *** *** *** *** ***
// Bài 55.5: Giới thiệu về mảng bổ sung
// [1, 2, 3, 4, 5]; ["a", "b", "c", "d", "e"]; [false, true, false]
// [] ampty array --> mảng rổng
const students2 = ["a", "b", "c", "d", "e"];
// "a" = 0, "b" = 1, "c" = 2, "d" = 3, "e" = 4
// inđex: vị trí của phân tử (giá trị) trong mảng và nó bắt đầu từ 0
// length: độ dài của mảng , nó đếm từ 1 cách nhau bởi dấu phẩy
// "a" = 1, "b" = 2, "c" = 3, "d" = 4, "e" = 5
// truy xuất trong mảng -> students2(index)
console.log(students2[0]); // => a
console.log(students2[5]); // => undefined
console.log(students2[students2.length - 1]); // => e
// students2.length = 0;
// console.log(students2);
//[]: empty array, mảng rổng
//
// *** *** *** *** ***
// Bài 56: Các phương thức trong mảng phần 1
// Đoạn bị ẩn khúc cuối khi mình nói là "Khi mình viết join như thế này ("")" thì nó sẽ dính nhau ví dụ mình có arr = ["b","c"] khi dùng arr.join("") thì sẽ có kết quả là "bc", còn nếu chúng ta điền từ vào trong join ví dụ arr.join("-") thì sẽ có kết quả là "b-c" nhé. Xin lỗi các bạn vì sự thiếu sót này
// Phương thức hay dùng của mảng nên biết
// length: trả độ dài của mảng
// arrayName.method
console.log("-----array,length---------");
console.log(students2.length);
// reverse --> đảo ngược giá trị trong mảng
console.log("-----array,reverse---------");
console.log(students2.reverse());
// join --> nối các phần tử  trong mảng thành chuỗi
console.log("-----array,reverse---------");
console.log(students2.join());
console.log(students2.join(" "));
//
//
// *** *** *** *** ***
//Bài 57: Các phương thức trong mảng phần 2
