// Bài 36: Bài tập  về function
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
        return 0; //nếu ko có return thì nó chạy console.log(compare(10, "1000")); kết quả ra 1000, còn chạy return thì kết quả ra =>Please enter a valid number
    }
    return Math.max(a, b);
}
console.log(compare(10, "1000"));

// *** Bài 37: Bài tập  về function số 2 ***
// Bài 2: In hoa chữ cái đầu trong chữ ví dụ tuan -> Tuan nam -> Nam
//capitalize
function capitalize(word = "") {
    if (word.length == 0) return null;
    //convert to lower case first
    let newWord = word.toLowerCase().charAt(0).toLowerCase();
    //charAt (index)
    // name -> N am
}
