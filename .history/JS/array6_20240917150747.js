// Bài 55: Giới thiệu về mảng
console.log("---------Bài 55: Giới thiệu về mảng---------");
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
console.log("---------Bài 55.5: Giới thiệu về mảng bổ sung---------");
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
console.log("---------array,length---------");
console.log(students2.length); // a
// reverse --> đảo ngược giá trị trong mảng
console.log("---------array,reverse---------");
console.log(students2.reverse()); // 5
// join --> nối các phần tử  trong mảng thành chuỗi
console.log("---------array,join---------");
console.log(students2.join()); // e,d,c,b,a
console.log(students2.join(" ")); // e d c b a
// includes --> kiểm tra mảng đó có chứa phần tử nào đó không
//
console.log("---------array,includes---------");
console.log(students2.includes("a")); // true
console.log(students2.includes("abc")); // false

// *** *** *** *** ***
//Bài 57: Các phương thức trong mảng phần 2
console.log("---------Các phương thức trong mảng phần 2---------");
// Ở video này mình đã nói thiếu phương thức includes, phương thức này dùng để kiểm tra phần tử có nằm trong mảng hay không ví dụ mảng arr = [1,2,3] thì nếu chúng ta dùng arr.includes(1) thì sẽ trả về true vì có 1 trong mảng, ngược lại nếu mình viết arr.includes(5) thì sẽ trả về false vì không có giá trị 5 nằm ở trong mảng. Xin lỗi các bạn vì sự thiếu sót này
const students3 = ["a", "b", "c", "d", "e", "b"];
// indexOf --> trả về vị trí của phẩn tử tìm thấy đầu tiên
console.log("---------array,indexOf---------");
console.log(students3.indexOf("b")); // 1
// lastIndexOf --> trả về vị trí của phẩn tử tìm thấy cuối cùng
console.log("---------array,lastIndexOf---------");
console.log(students3.lastIndexOf("b")); // 5
// push --> thêm phần tử vào mảng
console.log("---------array,push---------");
console.log(students3.push("f")); // 7
// console.log lại xem mảng có thêm giá trị không
console.log(students3); // ==> (7) ['a', 'b', 'c', 'd', 'e', 'b', 'f']
// unshift --> thêm phần tử đầu mảng
console.log("---------array,unshift---------");
console.log(students3.unshift("A")); // 8
console.log(students3); // ==> (8) ['A', 'a', 'b', 'c', 'd', 'e', 'b', 'f']
//
// *** *** *** *** ***
//Bài 57.5: Các phương thức trong mảng phần 2 bổ sung
console.log("---------Bài 55: Giới thiệu về mảng---------");
// pop -> xóa phần tử cuối
console.log("---------array,pop---------");
console.log(students3);
students3.pop();
console.log(students3);
// shirt -> xóa phần tử đầu tiền
console.log("---------array,shirt---------");
console.log(students3);
students3.shift();
console.log(students3);
//
// *** *** *** *** ***
// Bài 58: Tìm hiểu phương thức slice
console.log("---------Bài 58: Tìm hiểu phương thức slice---------");
console.log("---------array,slice---------");
// Tạo ra một mảng copy của mảng ban đầu
console.log(
    "--------- *** Tạo ra một mảng copy của mảng ban đầu *** ---------"
);
// slice () tạo ra mảng mới giống mảng ban đầu
console.log(
    "--------- *** slice () tạo ra mảng mới giống mảng ban đầu *** ---------"
);
const animals = ["tiger", "lion", "horse", "elephant"];
const animals1 = animals.slice();
console.log(animals1); // ==> ['tiger', 'lion', 'horse', 'elephant']
//
// slice(start). start --> vị trí ở trong mảng
console.log(
    "--------- *** slice(start). start --> vị trí ở trong mảng *** ---------"
);
const animals2 = animals.slice(1);
console.log(animals2); // ==> ['lion', 'horse', 'elephant']
// slice(start, end): start vị trí ban đầu và end là vị trí kết thúc,  nó sẽ lsao chép từ  vị trí start đến  vị trí end - 1
console.log(
    "--------- *** slice(start, end): start vị trí ban đầu và end là vị trí kết thúc,  nó sẽ lsao chép từ vị trí start đến  vị trí end - 1 *** ---------"
);
const animals3 = animals.slice(1, 3);
console.log(animals3); // ==> ['lion', 'horse']
console.log("--------- *** slice (-1) *** ---------");
const animals4 = animals.slice(-1);
console.log(animals4); // ==> ['elephant']
console.log("--------- *** slice - (-3) *** ---------");
const animals5 = animals.slice(-3);
console.log(animals5); // ==> ['lion', 'horse', 'elephant']
//
// *** *** *** *** ***
// Bài 59: Tìm hiểu phương thức splice
console.log("--------- *** Bài 59: Tìm hiểu phương thức splice *** ---------");

//splice
console.log("--------- *** array,splice *** ---------");
// Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
console.log(
    "--------- *** Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng *** ---------"
);
// Một lỗi nhỏ ở 4:18

const pets = ["dog", "cat", "bird", "dragon"];

console.log("--------- *** splice(start) *** ---------");
// splice(start)
const pets2 = pets.splice(2); // [ "bird", "dragon"]
console.log(pets2); // (2) ['bird', 'dragon']
console.log(pets); // ["dog", "cat"];

//splice(start, deleteCount): deleteCount là số lượng phân tử muốn xóa hoặc thay thế
console.log(
    "--------- *** splice(start, deleteCount): deleteCount là số lượng phân tử muốn xóa hoặc thay thế *** ---------"
);
const pets3 = pets.splice(0, 1); // [ "cat"]
console.log(pets3); // ['dog']
console.log(pets); // ["cat"]
const pets9 = ["dog", "cat", "bird", "dragon"];
// Khi mà mình splice(2) thì nó ảnh hưởng đến mảng gốc rồi và khi đó mảng gốc hiện tại sẽ còn ["dog", "cat"] nên phía dưới mình splice(0, 1) ở mảng gốc thì sẽ ra ["cat"] nha các bạn. Mình bị nhầm tí là splice(0, 1) thì mình nói áp dụng cho mảng [ "bird", "dragon"] thay vì mảng gốc ["dog", "cat"]
//
