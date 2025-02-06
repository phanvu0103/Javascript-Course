//
// *** *** *** *** ***
//Bài 78: Vòng lặp for cơ bản phần 1r
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
// Giải thích làm sao ra:
// The Index is 0
// 06.1 Vòng lặp for.js:14 The Index is 1
// 06.1 Vòng lặp for.js:14 The Index is 2
// 06.1 Vòng lặp for.js:14 The Index is 3
// 06.1 Vòng lặp for.js:14 The Index is 4
/*
    lenght: 5

    i = 0
    i < 5 -> true
    i++

 */