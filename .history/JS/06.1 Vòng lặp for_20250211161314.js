//
// *** *** *** *** ***
//Bài 78: Vòng lặp for cơ bản phần 1
console.log("--------- *** Bài 78: Vòng lặp for cơ bản phần 1 *** ---------");
// Vòng lặp
console.log("--------- Vòng lặp for  ---------");
const number = [1, 2, 3, 4, 5];
/*
for (let i = 0; i < number.lenght; i++) {
body code
}
*/
for (let i = 0; i < number.length; i++) {
    console.log(`The Index is ${i}`);
}
// Giải thích làm sao ra vong lặp:
//  The Index is 0
//  The Index is 1
//  The Index is 2
//  The Index is 3
//  The Index is 4
/*
    lenght: 5

    i = 0
    i < 5 -> true
    i++ -> 1
    réult: 0

    i = 1
    1 < 5 -> true
    i++ -> 2
    réult: 1

    i = 2
    2 < 5 -> true
    i++ -> 3
    réult: 2

    i = 3
    3 < 5 -> true
    i++ -> 4
    réult: 3

    i = 4
    4 < 5 -> true
    i++ -> 5
    réult: 4

    i = 4
    5 < 5 -> false
    loop end
 */

//
// *** *** *** *** ***
//Bài 79: Vòng lặp for cơ bản phần 2
console.log("--------- *** Bài 79: Vòng lặp for cơ bản phần 2  *** ---------");
// for (let i = 0 (khai báo); i < number.length (điều kiện); i++(điều kiện))
// for (let i = 1; i < number.length; i + 2) {
//     console.log(`The Index is ${i}`);
// }
// i ++ -> i + 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    // console.log(`The Index is ${i}`);
    console.log(`The value is ${numbers[i]}`);
}
// number[0]
// number[number.lenght - 1]
// for (let i = 0; i <= numbers.length - 1; i++) {
//     console.log(`The value is ${numbers[1]}`);
// }
console.log("--------- VD1 Vòng lặp for  ---------");
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberss.length; i++) {
    console.log(`The value is ${numberss[i]}`);
    // Nếu giá trị là 8 thì dừng vòng lặp
    if (numberss[i] === 8) {
        break;
    }
}
// console.log(`The value is ${numberss[i]}`); kết quả:
// The value is 1
// The value is 2
// The value is 3
// The value is 4
// The value is 5
// The value is 6
// The value is 7
// The value is 8

console.log("--------- VD2 Vòng lặp for  ---------");
const numberss1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberss1.length; i++) {
    // Nếu giá trị là 8 thì dừng vòng lặp
    if (numberss1[i] === 8) {
        break;
    }
    console.log(`The value is ${numberss1[i]}`);
}
// console.log(`The value is ${numberss1[i]}`); kết quả:
// The value is 1
// The value is 2
// The value is 3
// The value is 4
// The value is 5
// The value is 6
// The value is 7

console.log("--------- VD3 Vòng lặp for  ---------");

// Nếu giá trị là 8 thì bỏ qua
const numberss2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberss2.length; i++) {
    // Nếu giá trị là 8 thì dừng vòng lặp
    if (numberss2[i] === 8) {
        continue;
    }
    console.log(`The value is ${numberss2[i]}`);
}
// console.log(`The value is ${numberss2[i]}`); kết quả:
// The value is 1
// The value is 2
// The value is 3
// The value is 4
// The value is 5
// The value is 6
// The value is 7
// The value is 9
// The value is 10

//
// *** *** *** *** ***
//Bài 80: Vòng lặp for cơ bản phần 3
console.log("--------- *** Bài 80: Vòng lặp for cơ bản phần 3  *** ---------");
//
console.log(
    "--------- *** VD1 Vòng lặp chạy ngược lại từ phải sang trái *** ---------"
);
const numberss3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = numberss3.length - 1; i >= 0; i--) {
    console.log(`The value is ${numberss3[i]}`);
}
// let i = numberss3.length -1 -> lấy vị trí cuối cuồi của mảng
// i >= 0 -> điều kiện index lớn hơn hoặc bằng 0
// i -- -> i = i - 1

//
// *** *** *** *** ***
//Bài 81: Vòng lặp for cơ bản phần 4
console.log("--------- *** Bài 81: Vòng lặp for cơ bản phần 4  *** ---------");
("--------- *** VD1 Vòng lặp chứa vòng lặp *** ---------");
// nested loop
//[[1,2,3],[1,2,3,4]]
("--------- *** nested loop: là mảng phức tạp 2 chiều và nhiều chiều  *** ---------");
("--------- *** [[1,2,3],[1,2,3,4]]  *** ---------");
("--------- *** một mảng có thêm 2 mảng con   *** ---------");
("--------- *** nested loop: chạy nhiều vòng thì rất nặng máy hao dữ liệu đầu vào   *** ---------");

const numberss4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = numberss4.length - 1; i >= 0; i--) {
    console.log(`The value is ${numberss4[i]}`);
    for (let j = numberss4.length - 1; j >= 0; j--) {
        console.log(j);
    }
}
// Infinite loop: vòng lặp vô cực
("--------- *** Infinite loop: vòng lặp vô cực, nếu chạy có thể hư máy   *** ---------");
/* ko nên chạy
for (let i = 0; 2 > i ; i --){

}
*/

//
// *** *** *** *** ***
//Bài 82: Bài tập cơ bản về vòng lặp for
console.log(
    "--------- *** Bài 82: Bài tập cơ bản về vòng lặp for  *** ---------"
);
console.log(
    "--------- *** bài tập 1: sao chép mảng dùng vòng lặp for   *** ---------"
);
const numberss5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArr = [];
// 1 2 3 4
// dùng lệnh push(value)
for (let i = 0; i < numberss5.length; i++) {
    copyArr.push(numberss5[i]);
}
console.log(copyArr);
console.log("--------- *** bài tập 2: đảo ngược từ evol i   *** ---------");
let str = "i love";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log("--------- ***    *** ---------");

let str1 = "i love";
let result = ""; // nối chuỗi lại
for (let i = str1.length - 1; i >= 0; i--) {
    console.log(str1[i]);
    result = result + str1[i];
}
console.log(result); // -> kết quả evol i

//
// *** *** *** *** ***
//Bài 83: Vòng lặp while và do while
console.log("--------- *** Bài 83: Vòng lặp while và do while  *** ---------");
console.log("--------- ***  while: while(condition): điều kiện  *** ---------");
// (while(condition): điều kiện){
// body
// }
let number1 = 1;
while (number1 < 10) {
    console.log("number is " + number1);
    // điều kiện để dừng nếu ko có điều kiện dừng thì chạy vô tận
    number1 = number1 + 1; // cho người mới
    //number1 += 1; // cho người dùng thạo js
    //number1++; // cho người dùng thạo js
}
console.log("--------- ***    *** ---------");

let number2 = 1;
while (number2 <= 10) {
    console.log("number is " + number2);
    // điều kiện để dừng nếu ko có điều kiện dừng thì chạy vô tận
    number2 = number2 + 1; // cho người mới
}
console.log("--------- *** Do while  *** ---------");
// while khác do while là:
// while chép điều kiện trước rồi sử lý
// do while sử lý trước rồi mới chép điều kiện
console.log(
    "--------- *** while khác do while là: while chép điều kiện trước rồi sử lý, do while sử lý trước rồi mới chép điều kiện    *** ---------"
);

/*
    do {
    
    }  while(condition): điều kiện
 */
let number3 = 1;
do {
    console.log("number is " + number3); // -> number is 1 chạy đến number is 9

    number3++;
} while (number3 < 10);

console.log(
    "--------- *** nếu bỏ number4 lên console thì chép điều kiện   *** ---------"
);
let number4 = 1;
do {
    number4++;
    console.log("number is " + number4); // -> number is 2 chạy đến number is 10 mà bỏ number is 1 tại mình để console.log ở dưới
} while (number4 < 10);

//
// *** *** *** *** ***
// Bài 84: Vòng lặp for of
console.log("--------- *** Bài 84: Vòng lặp for of  *** ---------");
// for of dùng trong mảng , string( giống như mình đảo chuỗi string trong mảng), for of cũng dùng đc có thể dùng trong object
console.log(
    "--------- *** for of dùng trong mảng , string( giống như mình đảo chuỗi string trong mảng), for of cũng dùng đc có thể dùng trong object  *** ---------"
);
// for of
// for (value of array){
console.log("--------- *** VD 1 Vòng lặp for of về mảng  *** ---------");
//}
const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n là value
for (const n of number5) {
    // n++; const ko thay đổi giá trị đc
    console.log(n); // kết quả -> 1 2 3 4 5 6 7 8 9 10
}
// nếu dùng const thì ko thay đổi giá trị đc nên mình dùng let
console.log("--------- *** VD 2 Vòng lặp for of về mảng  *** ---------");

console.log(
    "--------- *** nếu dùng const thì ko thay đổi giá trị đc nên mình dùng let  *** ---------"
);
const number6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n là value
for (let n of number6) {
    n++;
    console.log(n); // kết quả ->  2 3 4 5 6 7 8 9 10 11
}
console.log("--------- *** VD 3 Vòng lặp for of về mảng  *** ---------");

const number7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n là value
for (let n of number7) {
    n += 10;
    console.log(n); // kết quả ->  11 12 13 14 15 16 17 18 19 20
}

console.log("--------- *** VD 4 Vòng lặp for of về mảng  *** ---------");

const number8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n là value
let a = [];
for (let n of number8) {
    n += 10;
    a.push(n);
}
console.log(a); // kết quả ->  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log("--------- *** VD 5 Vòng lặp for of về string  *** ---------");

for (let c of "evondel") {
    console.log(c); // kết quả -> e v o n d e l
}

let b = [];
for (let c of "evondevv") {
    // c = "evondevv";
    b.push(c);
}
console.log(b); // kết quả -> ['e', 'v', 'o', 'n', 'd', 'e', 'v', 'v']

//
// *** *** *** *** ***
//Bài 85: Bài 85: Bài tập chương 6 số 1 và 2
console.log("--------- *** Bài 85: Bài tập chương 6 số 1 và 2  *** ---------");

console.log("--------- *** Bài tập 1  *** ---------");
// Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1, 2 ,3], NaN ]. Viết chương trình loiaj bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trịn truthy. Gợi ý giá trị fasly là 0 null undefined false '' NaN.

const array = [
    1,
    1000,
    false,
    null,
    "evondev",
    "",
    undefined,
    "javascript",
    [1, 2, 3],
    NaN,
];
// new Boolean
console.log("--------- *** new Boolean  *** ---------");

// Boolean
console.log("--------- *** Boolean  *** ---------");

const filterFalsy = array.filter(Boolean);
// const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

console.log("--------- *** Bài tập 2  *** ---------");
// Cho 1 mảng phức tạp [[1, 2 , 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]]. Và kết quả mong muốn là [1, 2 , 3, false, null, 1, 5, 6, "javascript", 888, 666, 90]
const complexArray = [
    [1, 2, 3, [false, null]],
    [1, 5, 6, ["javascript"]],
    [888, 666, [90]],
];
// flat(number) chuyển vào 1 số
console.log("--------- *** flat(number) chuyển vào 1 số  *** ---------");

const result1 = complexArray.flat(2);
console.log(result1);

//
// *** *** *** *** ***
//Bài 86: Bài tập chương 6 số 1 và 2
console.log("--------- *** Bài 86: Bài tập chương 6 số 3  *** ---------");
// Đảo ngược số nguyên Vi dụ 1234 -> 4321, -567 -> -765
console.log(
    "--------- *** Đảo ngược số nguyên Vi dụ 1234 -> 4321, -567 -> -765  *** ---------"
);

console.log("--------- ***  Bài tập 1 chương 6 số 3  *** ---------");

// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number10) {
    // convert to String -> đổi sang String
    // split("") đổi thành từng ký tự ra thành mảng array[value]
    // reverse() đảo ngược chiều lại từng mảng
    // join("") thành số ban đầu,, nhưng nó vẫn lài String
    // bỏ 4 lệnh trên vào () để đổi thành số
    const value = parseInt(number10.toString().split("").reverse().join(""));
    console.log(value);
}
reverseNumber(1234);

console.log("--------- ***  Bài tập 2 chương 6 số 3  *** ---------");
function reverseNumber(number10) {
    // convert to String -> đổi sang String
    // split("") đổi thành từng ký tự ra thành mảng array[value]
    // reverse() đảo ngược chiều lại từng mảng
    // join("") thành số ban đầu,, nhưng nó vẫn lài String
    // bỏ 4 lệnh trên vào () để đổi thành số
    const value =
        parseInt(number10.toString().split("").reverse().join("")) *
        Math.sign(number10);
    console.log(value);
}
reverseNumber(-567);

//
// *** *** *** *** ***
//Bài 87: Bài tập chương 6 số 4
console.log("--------- *** Bài 87: Bài tập chương 6 số 4  *** ---------");
// Viết chương trình có tên là fizzBuzz với đầu vào là số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra "Fizz", nếu chia hết cho 3 thì in ra "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz".
console.log("--------- *** kết quả ra Fizz và Buzz  *** ---------");

function fizzBuzz(number9) {
    for (let i = 1; i <= number9; i++) {
        if (i % 2 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0 && i % 2 === 0) {
            console.log("FizzBuzz");
        }
    }
}
fizzBuzz(59); // -> kết quả ra Fizz và Buzz
// mình lập trình vậy sai vì nó chỉ chạy dòng
// if (i % 2 === 0) {
// console.log("Fizz");
// là hết vì 6 % 2 thỏa điều kiện in ra Fizz nên ko chạy dòng dưới
// mình phải lập trình lại chuyển dòng lệnh
// if (i % 3 === 0 && i % 2 === 0) {
// console.log("FizzBuzz");
// lên đầu thay dòng lệnh
// if (i % 2 === 0) {
// console.log("Fizz");
// chuyển sang else if (i % 2 === 0) {
// console.log("Fizz");
console.log("--------- ***  + - * / và % *** ---------");
// + - * / và %
console.log("--------- *** 6 % = 2 dư 0  *** ---------");

// 6 % 2 = 3 dư 0

console.log("--------- *** 6 % 4 = 1 dư 2  *** ---------");

// 6 % 4 = 1 dư 2

console.log("--------- *** kết quả ra Fizz, Buzz, FizzBuzz  *** ---------");

function fizzBuzz(number10) {
    for (let i = 1; i <= number10; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            console.log("FizzBuzz");
        } else if (i % 2 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        }
    }
}
fizzBuzz(19); // -> kết quả ra Fizz,  Buzz, FizzBuzz

//
// *** *** *** *** ***
//Bài 88: Bài tập chương 6 số 4
console.log("--------- *** Bài 88: Bài tập chương 6 số 5  *** ---------");
// cho 1 chuỗi bất kỳ, điểm số lượng ký tự `vowels` có trong chuỗi.
// vowels là các ký tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(string) {
    let count = 0;
    const characters = "ueoai";
    for (let c of string) {
        if (characters.includes(c)) count = count + 1;
    }
    return count;
}
console.log(countVowels("vowels")); // -> 2
console.log(countVowels("VOWELS")); // mình phải thêm toLowerCare()
