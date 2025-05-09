// *** Bài 14: Tìm hiểu kiểu dữ liệu number phần 1 ***
console.log(
    "--------- *** Bài 14: Tìm hiểu kiểu dữ liệu number phần 1 *** ---------"
);
// Số nguyên 1  2  3 9999 333
console.log("--------- *** Số nguyên 1  2  3 9999 333 *** ---------");
// Số thập phân 3,4   5,8 --> trong JS viết 3.4  5.8
console.log(
    "--------- *** Số thập phân 3,4   5,8 --> trong JS viết 3.4  5.8 *** ---------"
);
//
// Hàm toán
console.log("--------- *** Hàm toán *** ---------");
// *** # Chương 3: Thành thạo kiểu dữ liệu Number ***
console.log(
    "--------- *** Chương 3: Thành thạo kiểu dữ liệu Number *** ---------"
);
//
// ** Tìm hiểu kiểu dữ liệu Number
console.log("--------- *** Tìm hiểu kiểu dữ liệu Number *** ---------");
//  --   Số NguyênSố Nguyên
console.log("--------- ***Số NguyênSố Nguyên *** ---------");
//  --   Số thập phân
console.log("--------- ***  Số thập phân *** ---------");
//  ** Các hàm hay dùng của Number
console.log("--------- *** Các hàm hay dùng của Number *** ---------");
//  --   parseInt
console.log("--------- *** parseInt *** ---------");
//  --   parseFloat
console.log("--------- *** parseFloat *** ---------");
//  --   toFixed
console.log("--------- *** toFixed *** ---------");
//  --   isInteger
console.log("--------- *** isInteger *** ---------");
//  --   Math.floor
console.log("--------- *** Math.floor *** ---------");
//  --   Math.round
console.log("--------- *** Math.round *** ---------");
//  --   Math.random
console.log("--------- *** Math.random *** ---------");
//  --   Math.abs
console.log("--------- *** Math.abs *** ---------");
//  --   Math.ceil
console.log("--------- *** Math.ceil *** ---------");
//  --   Math.pow
console.log("--------- *** Math.pow *** ---------");
//  --   Math.max
console.log("--------- ***  Math.max *** ---------");
//  --   Math.mix
console.log("--------- ***  *** ---------");
//  --   isNaN
console.log("--------- *** isNaN  *** ---------");
//  --   Number.isNaN
console.log("--------- *** Number.isNaN*** ---------");
//
//  ** Các toán tử cơ bản, độ ưu tiên trong toán tử cần biết
console.log(
    "--------- *** Các toán tử cơ bản, độ ưu tiên trong toán tử cần biết  *** ---------"
);
//
console.log(3 + 7);
console.log(typeof 999); // ra number dùng typeof check kiểu dữ liệu
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5, dùng hàm parseInt:  số nguyên
console.log(parseFloat(number2)); // 4.8, dùng hàm parseFloat:  số thập phân

// Math.abs(Value)  abs: là giá trị tuyệt đối
console.log(
    "--------- *** Math.abs(Value)  abs: là giá trị tuyệt đối *** ---------"
);
const number3 = "-10";
console.log(Math.abs(number3)); // 10, abs: là giá trị tuyệt đối

// Math.floor(Value); --> làm tròn xuống ví dụ: 4.3 -> 4
console.log("--------- ***  *** ---------");
console.log(Math.floor(4.3)); // -> 4

// Math.ceil(Value) --> làm tròn lên ví dụ: 4.3 -> 5
console.log("--------- ***  *** ---------");
console.log(Math.ceil(4.3)); // -> 5

// Math.round(Value) --> Làm tròn gần nhất ví dụ: 4.3 -> 4, 4.5 -> 5
console.log("--------- ***  *** ---------");
console.log(Math.round(4.3)); // -> 4

// tofixed(number) Ví dụ: 0.33333 -> 0.33
console.log("--------- ***  *** ---------");
// tofixed(2)
console.log("--------- ***  *** ---------");
console.log(1 / 3);
console.log((1 / 3).toFixed(2)); //  tofixed trờ thành stimg
console.log(parseFloat((1 / 3).toFixed(2))); // bọc parseFloat biến thành số
console.log((1 / 3).toFixed(5));
console.log(parseFloat((1 / 3).toFixed(5)));

// Math.randon
console.log("--------- ***  *** ---------");
console.log(Math.random()); // chạy từ 0 -> 0.4264584554
console.log(Math.random() * 10); // chạy từ  0.4264584554 -> 9
console.log(Math.ceil(Math.random() * 10)); // chạy từ 0 -> 10 làm tròn số ko có .

// Math.max(1.3, -5, 100); --> trả ra con số lớn nhất
console.log("--------- ***  *** ---------");
console.log(Math.max(1, 2, 3, 999));

// Math.min(1.3, -5, 100); --> trả ra con số nhỏ nhất
console.log("--------- ***  *** ---------");
console.log(Math.min(1, 2, 3, 999));

// Math.pow(number1, number2); Math.pow(3, 2); --> 3^2 (3 mũ 2) --> 9
console.log("--------- ***  *** ---------");
console.log(Math.pow(3, 2));

// *** Bài 15: Tìm hiểu kiểu dữ liệu number phần 2 ***
console.log("--------- ***  *** ---------");

//  isNaN ( isNaN(Value)) -->> NaN: Not a Number ( ko phải số, trả true và false )
console.log("--------- ***  *** ---------");
console.log(isNaN("this is a string")); // trả về true
console.log(isNaN("123")); // trả về false

//  Number.isNaN (Number.isNaN(Value)) --> Number.isNaN
console.log("--------- ***  *** ---------");
console.log(Number.isNaN("this is a string")); // trả về false
console.log(Number.isNaN("123456789")); //trả về false
console.log(Number.isNaN(NaN)); // trả về true

//  *** Bài 16: Tìm hiểu kiểu dữ liệu khác ***
console.log("--------- ***  *** ---------");
