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
// button.addEventListener("click", function () {
//     console.log("Click button"); // Click button
// });
function handleclick() {
    console.log("Click button");
}

button.addEventListener("click", handleclick, {
    capture: true,
});

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
// event.stopPropagation()
span.addEventListener(
    "click",
    function (e) {
        e.stopImmediatePropagation();
        console.log("Click span");
    },
    {
        capture: true,
    }
);
// span.addEventListener(
//     "click",
//     function () {
//         console.log("Click span 1");
//     },
//     {
//         capture: true,
//     }
// ),
//     document.body.addEventListener(
//         "click",
//         function () {
//             console.log("Click body");
//         },
//         {
//             capture: true,
//         }
//     );
// => Click span, Click body
// Click span
// Click <button></button>
// Click body
// Click <html></html>
// Click <document></document>
// Click <window></window>
// nếu bỏ bubbling thì chỉ hiện Click chạy ngoài ta dùng evnt.stopPropagation()
//
//
// *** *** *** *** ***
// Bài 152: Capturing
console.log("--------- *** Bài 152: Capturing  *** ---------");
console.log("--------- Capturing ngược lại bubling ---------");
//
//
// *** *** *** *** ***
// 153: target vs currentTarget
console.log("--------- *** 153: target vs currentTarget  *** ---------");
// target: phần tử thực sự được click
// currentTarget: phần tử mà eventListener được gắn
console.log("--------- 05. target vs currentTarget ---------");
button.addEventListener("click", function (e) {
    console.log(e.target);
    // e.target: nó sẽ chọn chính xác  
    console.log(e.currentTarget);
});
// <span>Click me</span>
// <button class="button">Click me <span>Click me</span></button>
