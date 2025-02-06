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
    i < 5 -> true
    i++ -> 2
    réult: 1

    i = 2
    i < 5 -> true
    i++ -> 3
    réult: 2

    i = 3
    i < 5 -> true
    i++ -> 4
    réult: 3

    i = 4
    i < 5 -> fl
    i++ -> 5
    réult: 3

   

 */
