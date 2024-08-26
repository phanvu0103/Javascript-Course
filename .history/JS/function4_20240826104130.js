// *** Bài 29: Function cơ bản cho người mới Phần 1 ***
// Function (hàm)
// Khai báo Function (hàm)
// Cú pháp ("Syntax") : function functionName(parameters){
// Your Code
// }
// Đề bài tính tổng 2 số a và b
function sum(a, b) {
    // console.log("is ít working?");
    console.log(a, b); // ==> kết quả ra a = 5 và b = 10 

    // return value
    // không có return thì kết quả trả về là underfined
    return a + b;

    // nếu khó hiểu thì viết
    // const total = a + b;
    // return total; ==> kết quả 5 + 10 = 15
}
// Sum(): invoke function ==> gọi hàm
console.log(sum(5, 10)); // ==> kết quả 5 + 10 = 15
