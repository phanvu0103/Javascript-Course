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
// truy xuất trong mảng 
