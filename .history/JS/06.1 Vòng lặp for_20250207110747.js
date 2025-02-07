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
console.log("--------- *** Do while  *** ---------");
let number6 = i;
while (number6 < 10) {
    console.log(number is less)
}