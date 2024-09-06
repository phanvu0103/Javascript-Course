// Bài số 1: viết function (hàm) so sánh a, b tìm ra số lớn hơn
// function compare(a, b) {
//     return Math.max(a, b);
// }
// console.log(compare(10, 100));

// function compare(a = 0, b = 0) {
//     if (typeof a !== "number" || typeof b !== "number") return 0;
//     return Math.max(a, b);
// }
// console.log(compare(10, 1000));

function compare(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a valid number");
    }
    return Math.max(a, b);
}
console.log(compare(10, 1000));
