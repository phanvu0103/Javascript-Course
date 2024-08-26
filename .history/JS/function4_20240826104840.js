// *** Bài 29: Function cơ bản cho người mới Phần 1 ***
// Function (hàm)
// Khai báo Function (hàm)
// Cú pháp ("Syntax") : function functionName(parameters){
// Your Code
// }
// Đề bài tính tổng 2 số a và b
function sum(a, b) {
    // console.log("is ít working?");
    console.log(a, b); // ==> kết quả ra a = 5 và b = 10 khi mình khai báo ở sum(5, 10) phía dưới.

    // return value
    // không có return thì kết quả trả về là underfined
    return a + b;

    // nếu khó hiểu thì viết
    // const total = a + b;
    // return total; ==> kết quả 5 + 10 = 15
} // khai báo

// sum(5, 10); ==> gọi

// Sum(): invoke function ==> gọi hàm
console.log(sum(5, 10)); // ==> kết quả 5 + 10 = 15

// *** function ***
// Thường là khai báo trước ==> mới gọi thì mới có kết quả
// function thì có thể goi trước ==> khai báo cũng được vì nó hiểu và sẽ tự động đưa khai báo lên. 
