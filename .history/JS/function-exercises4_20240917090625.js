// Bài 36: Bài tập  về function
console.log("---------Bài 36: Bài tập  về function---------");
// Bài số 1: viết function (hàm) so sánh a, b tìm ra số lớn hơn
console.log(
    "---------Bài số 1: viết function (hàm) so sánh a, b tìm ra số lớn hơn---------"
);
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
console.log("--------- *** Bài 37: Bài tập  về function số 2 ***---------");

// Bài 2: In hoa chữ cái đầu trong chữ ví dụ tuan -> Tuan nam -> Nam
console.log(
    "--------- *** Bài tập 2: In hoa chữ cái đầu trong chữ ví dụ tuan -> Tuan nam -> Nam*---------"
);
//capitalize
function capitalize(word = "") {
    if (word.length === 0) return null;
    //convert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    //charAt (index)
    // name -> N am
    //hello -> slice(0, 3); -> hel
    //hello -> slice(1); -> ello
    // slice(startIndex, endIndex - 1)
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
console.log(capitalize("tuan"));

// *** Bài 38: Bài tập về function số 3 ***
console.log("---------Bài 58: Tìm hiểu phương thức slice---------");
//Bài số 3: Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết trên
console.log("---------Bài 58: Tìm hiểu phương thức slice---------");
function useCallback(a, b, callback) {
    let max = compare(a, b);
    callback(max);
}
function printMax(number) {
    console.log("Max number is " + number);
}
console.log(useCallback(500, 1000, printMax));
