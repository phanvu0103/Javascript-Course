// *** Bài 27: Tìm hiểu switch case ***
const fruit = "lemon";

// if (fruit === "apple") {
//     console.log("You like to eat apple");
// }
// if (fruit === "lemon") {
//     console.log("You like to eat lemon");
// }
// if (fruit === "waterlemon") {
//     console.log("You like to eat apple");
// }
// if (fruit === "banana") {
//     console.log("You like to eat banana");
// }

switch (fruit) {
    case "apple":
        console.log("You like to eat apple");
        break; // chạy đến dòng lệnh break thì dừng lại, nếu ko thì có thể chạy hết các lệnh case mình ghi ra.
    case "lemon":
    case "waterlemon": // có thể liên kết 2 case với nhau
        // console.log("You like to eat lemon");
        console.log("You like to eat lemon and drink waterlemon");
        break;
    case "waterlemon":
        console.log("You like to drink waterlemon");
        break;
    default: // dòng lệnh default: là mặc định mình khai báo const (fruit) = ("banana") nếu các dòng lệnh case ko đúng thì có thể ra ==> banana
        console.log("You like to eat banana");
        break;
}

const number = "900";
switch (Nunber(nu)) {
    case :
        break;

    default:
        break;
}
