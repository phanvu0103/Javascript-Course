// *** Bài 24: Câu điều kiện cơ bản ***
// Conditional : điều kiện
// if (conditional (nếu là đúng thì trả lại true còn sai thì false ) ) {
// your code here;
// }
// else :(là ngược lại điều kiện của IF)

const isRich = false;
if (isRich) {
    console.log("I will buy a new car"); // điều kiện sai thì ko in ra để trống
} else {
    console.log("i will save my money"); // điều kiện đứng thì in i will save my money
}

if (!isRich) {
    console.log("I will buy a new car"); // điều kiện của dấu phủ định thì in ra I will buy a new car
} else {
    console.log("i will save my money"); // điều kiện của dấu phủ định  thì in ra I will buy a new car
}
