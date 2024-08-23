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
        break; // 
    case "lemon":
    case "waterlemon": // có thể loeen kết 2 case với nhau
        console.log("You like to eat lemon");
        console.log("You like to eat lemon and waterlemon");
        break;
    case "waterlemon":
        console.log("You like to eat waterlemon");
        break;

    default:
        console.log("You like to eat banana");
        break;
}
