// *** *** *** *** ***
// Bài 149: Giới thiệu về EVENTS
console.log("--------- *** Bài 149: Giới thiệu về EVENTS  *** ---------");
// 01. Sự kiện là gì? (event)
console.log("--------- 01. Sự kiện là gì? (event) ---------");
// 02. Thêm 1 sự kiện: select.addEventListener("eventName", handler, [options])
console.log(
    "--------- 02. Thêm 1 sự kiện: select.addEventListener(eventName, handler, [options]) ---------"
);
// click, keydown, keypress, keyup, mousemove, mouseleave, load, DOMContentLoaded, ...
// handler: function
// capture, bubbing
//
//
// *** *** *** *** ***
// Bài 150: Sự kiện Click
console.log("--------- *** Bài 150: Sự kiện Click  *** ---------");
// addEventListener
console.log("--------- 03. addEventListener ---------");

const button = document.querySelector(".button");
const span = document.querySelector(".button span");
button.addEventListener("click", function () {
    console.log("Click button"); // Click button
});
/*************  ✨ Codeium Command 🌟  *************/
function handleclick() {
    console.log("Click me");
}
/******  138f46c2-02ae-40ed-ab11-7f36a7c57c9e  *******/
button.addEventListener("click", handleclick);
// lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleclick());
//
//
// *** *** *** *** ***
// Bài 151: Bubbling
console.log("--------- *** Bài 151: Bubbling  *** ---------");
//bubbling: sự kiện sẽ lan truyền từ phần tử con lên phần tử cha
// bubbling: nổi bọt
console.log("--------- 04. bubbling ---------");
