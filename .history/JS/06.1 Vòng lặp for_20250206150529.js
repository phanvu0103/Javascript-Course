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
//Bài 79: Vòng lặp for cơ bản phần 1
console.log("--------- *** Bài 78: Vòng lặp for cơ bản phần 2 *** ---------");
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

// for (let i = 0; i < numbers.length; i++) {
//     console.log(`The value is ${numbers[1]}`);
//     Nếu giá trị là 8 thì dừng vòng lặp
// if (numbers[i] === 8){
// break;
}
// }
