// *** *** *** *** ***
// Bài 149: Giới thiệu về EVENTS
console.log("--------- *** Bài 149: Giới thiệu về EVENTS  *** ---------");
// 01. Sự kiện là gì? (event)
console.log("--------- 1.0 Sự kiện là gì? (event) ---------");
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
console.log("--------- 01 addEventListener ---------");

const button = document.querySelector(".button");
button.addEventListener("click", function () {
    console.log("Click me"); // Click me
});
function handleclick() {
    console.log("Click me");
}
button.addEventListener("click", handleclick);
// lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleclick());
//
//
// *** *** *** *** ***
// Bài 151: Bubbling
console.log("--------- *** Bài 151: Bubbling  *** ---------");
// 