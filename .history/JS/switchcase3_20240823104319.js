// *** Bài 27: Tìm hiểu switch case ***
const fruit = "banana";

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
        break;
    case "lemon":
    case "waterlemon":
        console.log("You like to eat lemon");
        console.log("You like to eat lemon and qq");
        break;
    case "waterlemon":
        console.log("You like to eat waterlemon");
        break;

    default:
        console.log("You like to eat banana");
        break;
}
