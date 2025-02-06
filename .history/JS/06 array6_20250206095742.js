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
// const pets = ["dog", "cat", "bird", "dragon"];
const pets3 = pets.splice(0, 1); // [ "cat"]
console.log(pets3); // ['dog']
console.log(pets); // ["cat"]
//
console.log("--------- *** splice(start, deleteCount):  *** ---------");
const pets90 = ["dog", "cat", "bird", "dragon"];
const pets40 = pets90.splice(0, 1); // [ "cat"]
console.log(pets90); // (3) ['cat', 'bird', 'dragon']
//const pets4 = pets90.splice(0, 4); // ==> [] Empty array mảng rổng
//
console.log(
    "--------- *** splice(start, deleteCount, item1, item2, itemN):  *** ---------"
);
const pets80 = ["dog", "cat", "bird", "dragon"];
const pets50 = pets80.splice(0, 1, "dinasour");
console.log(pets80); // (4) ['dinasour', 'cat', 'bird', 'dragon']
const pets60 = pets80.splice(0, 2, "dinasour", "snack");
console.log(pets80); // (4) ['dinasour', 'snack', 'bird', 'dragon']
const pets70 = pets80.splice(0, 2, "dinasour", "snack", false, 1000);
console.log(pets80); // (6) ['dinasour', 'snack', false, 1000, 'bird', 'dragon']
// Khi mà mình splice(2) thì nó ảnh hưởng đến mảng gốc rồi và khi đó mảng gốc hiện tại sẽ còn ["dog", "cat"] nên phía dưới mình splice(0, 1) ở mảng gốc thì sẽ ra ["cat"] nha các bạn. Mình bị nhầm tí là splice(0, 1) thì mình nói áp dụng cho mảng [ "bird", "dragon"] thay vì mảng gốc ["dog", "cat"]
//

// *** *** *** *** ***
// Bài 60: Tìm hiểu phương thức sort
console.log("--------- *** Bài 60: Tìm hiểu phương thức sort *** ---------");
console.log(
    "--------- Xem giải thích kỹ hơn tại bài này: kt.city/lesson/bai-385-ham-sort-trong-mang ---------"
);

console.log("--------- *** array,sort *** ---------");
// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
console.log(
    "--------- Sắp xếp các phần tử trong mảng theo chuẩn unicode16 ---------"
);
const random = [1, 1000, 10, 5, 999, 9909];
console.log(random.sort()); // ==> [1, 10, 1000, 5, 9909, 999]
//
// sort(function(a, b))
console.log("--------- sort(function(a, b)) ---------");

// function(callback)
console.log("--------- function(callback) ---------");

const random2 = random.sort(function (a, b) {
    if (a > b) return 1; // Sắp xếp theo tăng dần
    if (a < b) return -1; // Sắp xếp theo giảm dần
});
console.log(random2); // ==> [[1, 5, 10, 999, 1000, 9909]
// Viết gắn gọn bằng ternary operator
// ternary operator: condition ? something : son=mething else
console.log(
    "--------- Viết gắn gọn dùng ternary operator: condition ? something : son=mething else ---------"
);
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3); // ==> [[1, 5, 10, 999, 1000, 9909]
// value > 0 -> sắp xếp tăng dần
// value < 0 -> sắp xếp giảm dần
// value == 0 -> giữ nguyên
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4); // ==>[9909, 1000, 999, 10, 5, 1]
//
const random5 = random.sort((a, b) => (a > b ? 0 : 1));
console.log(random5);
//
// *** *** *** *** ***
// Bài 61: Tìm hiểu phương thức find
console.log("--------- *** Bài 61: Tìm hiểu phương thức find *** ---------");
console.log("--------- *** array,find *** ---------");
// Nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const numbers = [1, 1000, 10, 5, 999, 9909];
console.log(
    "--------- *** nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó *** ---------"
);

// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element, index) => element > 10);
console.log(findYourNumber); // ==> 1000
const findYourNumber1 = numbers.find((element, index) => element > 9999990);
console.log(
    "---------  undefined (nếu không tìm thấy số lớn hơn các phần tử mình gọi không thỏa điều kiện  thì kết quả hiện ra ==>  undefined) ---------"
);

console.log(findYourNumber1); // ==> undefined (nếu không tìm thấy số lớn hơn các phần tử mình gọi không thỏa điều kiện  thì kết quả hiện ra ==>  undefined)
//
// *** *** *** *** ***
// Bài 62: Tìm hiểu phương thức findIndex
console.log(
    "--------- *** Bài 62: Tìm hiểu phương thức findIndex *** ---------"
);
console.log("--------- *** array,findIndex *** ---------");
console.log(
    "--------- *** Nó trả về vị trí Index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó  *** ---------"
);
// Nó trả về vị trí Index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex = numbers.findIndex((element, index) => element > 10);
console.log(findYourIndex); // ==> 1
// Nếu không tìm thấy thì sẽ trả lại kết quả là -1
console.log(
    "--------- *** Nếu không tìm thấy thì sẽ trả lại kết quả là -1 *** ---------"
);
const findYourIndex1 = numbers.findIndex((element, index) => element < 0);
console.log(findYourIndex1); // ==> -1
//
// *** *** *** *** ***
// Bài 63: Tìm hiểu phương thức sort bổ sung
console.log(
    "--------- *** Bài 63: Tìm hiểu phương thức sort bổ sung *** ---------"
);
console.log("--------- *** array,sort bổ sung *** ---------");
// const random = [1, 1000, 10, 5, 999, 9909];
const random6 = random.sort((a, b) => (a > b ? 1 : 1)); // ngược lại sort((a, b) => (a > b ? -1 : 1))
console.log(random6); // ==> giảm dần  [9909, 1000, 999, 10, 5, 1]
const random7 = random.sort((a, b) => (a > b ? 1 : -1)); // ngược lại sort((a, b) => (a > b ? -1 : 1))
console.log(random7); // tăng dần [1, 5, 10, 999, 1000, 9909]
//
// *** *** *** *** ***
// Bài 64: Tìm hiểu phương thức map
console.log("--------- *** Bài 64: Tìm hiểu phương thức map *** ---------");
console.log("--------- *** array,map *** ---------");
// duyệt qua từng phần tử và trả ra  một mảng mới mà không thay đổi ban đầu
console.log(
    "--------- *** duyệt qua từng phần tử và trả ra  một mảng mới mà không thay đổi ban đầu *** ---------"
);
const listNumber = [1, 2, 3, 4, 5];
// Trả ra một mảng mới mà các số (giá trị) trog mảng cũ nhãn 2
// .map(callback(value, index, array))
console.log("--------- .map(callback(value, index, array)) ---------");

console.log(
    "--------- ***Trả ra một mảng mới mà các số (giá trị) trog mảng cũ nhãn 2 *** ---------"
);
// cách  1
const listNumberDouble = listNumber.map(function (value, index, array) {
    //(method) Array<number(số)>.map<number(số)>(callbackfn: (value: number(số) index: number(số), array: number(số)[]) => number(số), thisArg?: any): number(số)[]
    return value * 2;
});

console.log(listNumberDouble); // ==> (5) [2, 4, 6, 8, 10]

const listNumberDouble1 = listNumber.map((value, index, array) => {
    return value * 3;
});
console.log(listNumberDouble1); // ==> [3, 6, 9, 12, 15]
//
// *** *** *** *** ***
// Bài 65: Tìm hiểu phương thức forEach
console.log("--------- *** Bài 65: Tìm hiểu phương thức forEach *** ---------");
console.log("--------- *** array,forEach *** ---------");
// .forEach(callback(value, index, array))
console.log("--------- .forEach(callback(value, index, array)) ---------");

// const listNumber = [1, 2, 3, 4, 5];
const listNumberTripple = listNumber.forEach((value, index, array) => {
    return value * 3;
});
console.log(listNumberTripple); // ==> undefined
// Hãy cho biết sự khác nhau giữa forEach và map
console.log(
    "--------- *** Hãy cho biết sự khác nhau giữa forEach và map *** ---------"
);
// forEach không return được còn map thì return được
console.log(
    "--------- *** forEach không return được còn map thì return được *** ---------"
);
console.log(
    "--------- *** map thì trả lại mảng mới dựa vào mảng ban đầu còn forEach thì không *** ---------"
);
//  map thì trả lại mảng mới dựa vào mảng ban đầu còn forEach thì không
console.log(
    "--------- *** forEach chạy không dừng được khi không có return nên chạy mãi thường dùng trong dom *** ---------"
);
//forEach chạy không dừng ko có return nên chạy mãi thường dùng trong dom
console.log(
    "--------- *** forEach chạy mãi vì không có chạy được return *** ---------"
);
//
// *** *** *** *** ***
// Bài 66: Tìm hiểu phương thức filter
console.log("--------- *** Bài 66: Tìm hiểu phương thức filter *** ---------");
console.log("--------- *** array,filter *** ---------");
// filter: dùng để filter sàn lộc các phần tử trong mảng thỏa điều kiện
// .filter(callback(value, index, array))

console.log("--------- .filter(callback(value)) ---------");
// const listNumber = [1, 2, 3, 4, 5];
// cách 1 ghi đầy đủ
console.log("--------- cách 1 ghi đầy đủ ---------");
const greaterThanThree = listNumber.filter((value, index, array) => {
    return value > 3;
});
// cách 2 ghi rút gọn
console.log("--------- cách 2 ghi rút gọn  ---------");
const greaterThanThree1 = listNumber.filter((value) => value > 3);
console.log(listNumber);
console.log(greaterThanThree); // ==> số lớn hơn 3 [4, 5]
console.log(greaterThanThree1); // ==> số lớn hơn 3 [4, 5]
//
// *** *** *** *** ***
// Bài 67: Tìm hiểu phương thức some và every
console.log(
    "--------- *** Bài 67: Tìm hiểu phương thức some và every *** ---------"
);
console.log(
    "--------- *** some - every => in ra kết quả true / false   *** ---------"
);

console.log("--------- *** array,some   *** ---------");
// Trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
console.log(
    "--------- Trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả ---------"
);
// .some(callback(value, index, array))
console.log(
    "--------- *** .some(callback(value, index, array))   *** ---------"
);

// const listNumber = [1, 2, 3, 4, 5];
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber); // ==> true
const someNumber1 = listNumber.some((value) => value > 30);
console.log(someNumber1); // ==> false
console.log("--------- *** array,every  *** ---------");
// every: mọi điều kiện đều đúng
console.log("--------- every: mọi điều kiện đều đúng ---------");
// .every(callback(value, index, array))
console.log(
    "--------- *** .every(callback(value, index, array))   *** ---------"
);

// Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì sẽ return false
console.log(
    "--------- Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì sẽ return false ---------"
);
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber); // ==> false
const everyNumber1 = listNumber.every((value) => value > 0);
console.log(everyNumber1); // ==> true
//
// *** *** *** *** ***
// Bài 68: Tìm hiểu phương thức reduce
console.log("--------- *** Bài 68: Tìm hiểu phương thức reduce *** ---------");
console.log("--------- *** array,reduce   *** ---------");
// Nó sẽ gom các phần tử trong mảng lại nhau thành 1
// a.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T)
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue); // ==>
    // 0 + 1 = 1
    // 1 + 2 = 3
    // 3 + 3 = 6
    // 6 + 4 = 10
    // 10 + 5 = 15
    // 15
    return previousValue + currentValue;
}, 0);
console.log(totalNumber); // ==> 15
const totalNumber1 = listNumber.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue); // ==>
    // 2 + 1 = 3
    // 3 + 2 = 5
    // 5 + 3 = 8
    // 8 + 4 = 12
    // 12 + 5 = 17
    // 17
    return previousValue + currentValue;
}, 2);
console.log(totalNumber1); // ==> 17
//
// *** *** *** *** ***
// Bài 69: Bài tập về mảng số 1
console.log("--------- *** Bài 69: Bài tập về mảng số 1 *** ---------");
// 1. Đảo ngược 1 chuỗi. Ví dụ "My is name evondev" -> "evondev name is My"
// const listName = "My is name evondev";
function reverseString(str) {
    if (!str) return null;
    const arrStr = str.split(" ");
    console.log(arrStr);

    const reverseStr = arrStr.reverse();
    console.log(reverseStr);

    const joinStr = reverseStr.join(" ");
    console.log(joinStr);
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My is name evondev"));
//
// *** *** *** *** ***
// Bài 70: Bài tập về mảng số 2
console.log("--------- *** Bài 70: Bài tập về mảng số 2 *** ---------");
// 2. Đảo ngược 1 chuỗi bao gồm ký tự. Ví dụ "i love " -> "evol i"
function reverseWord(str) {
    if (!str) return null;
    const arrStr = str;
    // .split(" ")
    // .map((item) => item.split("").reverse().join(""))
    // .reverse()
    // .join(" "); // ["i","love"]

    // const result = arrStr.reverse().join(" ");
    // console.log(arrStr);
    // ["l","o", "v", "e"] -> ["e","v", "o", "l"]

    const splitStr = arrStr.split();
    console.log(splitStr);

    const splititem1 = splitStr.map((item) => item.split(""));
    console.log(splititem1);

    const reverseStr = splititem1.reverse();
    console.log(reverseStr);

    const joinStr = reverseStr.join("");
    console.log(joinStr);

    // const reverseStr1 = joinStr.reverse();

    // const joinStr = reverseStr.join(" ");
    // console.log(joinStr);
}
reverseWord("i love");
//
// *** *** *** *** ***
// Bài 71: Bài tập về mảng số 3
console.log("--------- *** Bài 70: Bài tập về mảng số 3 *** ---------");
// 3. In hoa chữ cái trong chữ ví dụ: "my name is evondev" -> "My Name Is Evondev"
function capitalizeWord(word = "") {
    if (word.length === 0) return null;
    //convert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    //charAt (index)
    // my -> M y
    //hello -> slice(0, 3); -> hel
    //hello -> slice(1); -> ello
    // slice(startIndex, endIndex - 1)
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
function capitallizeStr(str) {
    if (!str) return null;
    // str.split(" ").map(item => capitalizeWord(item)).join("");
    const result = str
        .split(" ")
        .map((item) => capitalizeWord(item))
        .join(" ");
    console.log(result);
}

capitallizeStr("my name is evondev");

function capitallizeStr(str) {
    if (!str) return null;
    // str.split(" ").map(item => capitalizeWord(item)).join("");
    const result = str
        .split(" ")
        .map(capitalizeWord) // nếu chắc chắn 1 đầu vào thì mình rút gọn còn nhiều đầu vào mình viết như trên
        // .map((item) => capitalizeWord(item))
        .join(" ");
    console.log(result);
}
capitallizeStr("my name is vu");

//
// *** *** *** *** ***
// Bài 72: By value và by references
console.log("--------- *** Bài 72: By value và by references *** ---------");
console.log("--------- By value và by references ---------");

console.log(
    "--------- By value -> giá trị thực sự được lưu trong vùng bộ nhớ ---------"
);
// console.log("--------- By value  ---------");
// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true

console.log(
    "--------- By references -> chỉ chuyển đến bộ nhớ mà không biết lưu bộ nhớ ở đâu ---------"
);
// console.log("--------- By references  ---------");
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

//
// *** *** *** *** ***
// Bài 73: Cách so sánh 2 mảng cơ bản
console.log("--------- *** Bài 73: Cách so sánh 2 mảng cơ bản *** ---------");
// JSON: Javascript Object Notation: kiểu dữ liệu tuân theo 1 quy tắc nhất định, sử dụng rất nhiều, nhiều nơi, nhiều ngôn ngữ.
console.log(
    "--------- JSON: Javascript Object Notation: kiểu dữ liệu tuân theo 1 quy tắc nhất định, sử dụng rất nhiều, nhiều nơi, nhiều ngôn ngữ ---------"
);
/*
{
"key": value,
"key": value,
"key": value,
"key": value,
"key": value,

}
 */

console.log("--------- JSON.stringify ---------");
// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
// toString()
// [1, 2, 3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3]"
// [1,2,3]

console.log("--------- JSON.parse ---------");
// JSON.parse
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log("--------- JSON.stringify ---------");
console.log(JSON.stringify([1, 2, 3]));
console.log("--------- JSON.parse ---------");
console.log(JSON.parse("[1,2,3]"));
console.log("--------- So Sánh arr1 và  arr2 ---------");
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // -> true

//
// *** *** *** *** ***
// Bài 74: 2 cách để sao chép mảng cần biết
console.log(
    "--------- *** Bài 74: 2 cách để sao chép mảng cần biết *** ---------"
);
// clone: là copy
console.log("--------- clone: là copy  ---------");
const studentss = ["a", "b", "c", "d", "e"];
studentss.pop(); // xóa 1 mảng cuối  "e"
console.log(studentss); // -> ['a', 'b', 'c', 'd']
// cách 1: sử dụng phương thức slice()
console.log("--------- cách 1: sử dụng phương thức slice()  ---------");

const studentsss = ["a", "b", "c", "d", "e"];
const sliceStudentsss = studentsss.slice();
console.log(studentsss);
// Cách 2: spread operator [...array]
console.log("--------- Cách 2: spread operator [...array]  ---------");
const spreadStudentsss = [...studentsss];
console.log(spreadStudentsss);

//
// *** *** *** *** ***
// Bài 75: 2 cách để gộp mảng cần nắm
console.log("--------- *** Bài 75: 2 cách để gộp mảng cần nắm *** ---------");
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
// concat: h