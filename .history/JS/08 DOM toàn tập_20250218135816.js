//
// *** *** *** *** ***
// Bài 109: DOM là gì ?
console.log("--------- *** Bài 109: DOM là gì ?  *** ---------");
// 1 DOM là gì ?
// DOM là viết tắt của Document Object Model, là một mô hình lập trình dùng để truy cập và thay đổi nội dung, cấu trúc của trang web.
// DOM không phải là một phần của Javascript, nhưng nó được trình duyệt tạo ra từ mã HTML của trang web.
// DOM cung cấp một cách tiêu chuẩn để truy cập, thay đổi, thêm hoặc xóa các phần tử của trang web.
// DOM không chỉ dành cho Javascript, mà còn dành cho các ngôn ngữ lập trình khác như Python, Ruby, PHP, Java, C#...
// DOM được chia thành 3 phần chính:
// - Document: đại diện cho toàn bộ trang web.
// - Attribute: đại diện cho các thuộc tính của phần tử.
// - Element: đại diện cho các phần tử HTML.
// - Node: đại diện cho tất cả các phần tử trong DOM.
// - NodeList: đại diện cho một danh sách các phần tử trong DOM.
// - Event: đại diện cho các sự kiện xảy ra trên trang web.
// - Method: đại diện cho các phương thức của DOM.

// 2. Cách truy cập DOM
// Có nhiều cách để truy cập DOM, nhưng phổ biến nhất là sử dụng các phương thức sau:
// - getElementById(): trả về phần tử có id tương ứng.
// - getElementsByClassName(): trả về một mảng các phần tử có class tương ứng.
// - getElementsByTagName(): trả về một mảng các phần tử có thẻ tương ứng.
// - querySelector(): trả về phần tử đầu tiên mà nó tìm thấy.
// - querySelectorAll(): trả về một mảng các phần tử mà nó tìm thấy.
// - getAttribute(): trả về giá trị của thuộc tính của phần tử.
// - setAttribute(): thiết lập giá trị cho thuộc tính của phần tử.
// - removeAttribute(): xóa thuộc tính của phần tử.
// - createElement(): tạo một phần tử mới.
// - appendChild(): thêm một phần tử vào phần tử khác.
// - removeChild(): xóa một phần tử khỏi phần tử khác.
// - replaceChild(): thay thế một phần tử bằng một phần tử khác.
// - insertBefore(): chèn một phần tử vào trước một phần tử khác.
// - addEventListener(): thêm một sự kiện cho phần tử.
// - removeEventListener(): xóa sự kiện của phần tử.
// - preventDefault(): ngăn chặn hành động mặc định của sự kiện.
// - stopPropagation(): ngăn chặn sự kiện lan truyền.
// - getComputedStyle(): trả về các thuộc tính CSS của phần tử.
// - classList: thêm, xóa, kiểm tra hoặc chuyển đổi class của phần tử.
// - innerHTML: lấy hoặc thiết lập nội dung HTML của phần tử.
// - textContent: lấy hoặc thiết lập nội dung văn bản của phần tử.
// - style: thiết lập CSS cho phần tử.
// - offsetWidth: trả về chiều rộng của phần tử.
// - offsetHeight: trả về chiều cao của phần tử.
// - offsetTop: trả về vị trí top của phần tử.
// - offsetLeft: trả về vị trí left của phần tử.
// - offsetParent: trả về phần tử cha gần nhất của phần tử.
// - clientWidth: trả về chiều rộng của phần tử bao gồm phần padding.
// - clientHeight: trả về chiều cao của phần tử bao gồm phần padding.
// - clientTop: trả về chiều cao của phần border.
// - clientLeft: trả về chiều rộng của phần border.
// - scrollWidth: trả về chiều rộng của phần tử bao gồm phần ẩn.
// - scrollHeight: trả về chiều cao của phần tử bao gồm phần ẩn.
// - scrollTop: trả về vị trí cuộn lên của phần tử.
// - scrollLeft: trả về vị trí cuộn qua trái của phần tử.
// - scrollIntoView(): cuộn đến phần tử.
// - focus(): đặt con trỏ vào phần tử.
// - blur(): loại bỏ con trỏ khỏi phần tử.
// - click(): kích hoạt sự kiện click cho phần tử.
// - submit(): gửi dữ liệu từ form.
// - reset(): đặt lại form.
// - select(): chọn dữ liệu trong input.
// - getBoundingClientRect(): trả về kích thước và vị trí của phần tử.
//
// *** *** *** *** ***
// Bài 110: document.querySelector
console.log("--------- *** Bài 110: document.querySelector  *** ---------");
// Selector nodes
// 1. document.querySelector("selector") -> trả về 1 node nếu tồn tại selector, ngược lại trả về null.
console.log("--------- 1. document.querySelector() ---------");
// selectors: .header, p , body, #header, .header p, .header > p, .header + p, .header ~ p
// document.querySelector() trả về phần tử đầu tiên mà nó tìm thấy trong DOM.
console.log("--------- cách 1 ---------");
const singNode = document.querySelector("h1");
console.log(singNode); // <h1>DOM là gì ?</h1>
console.log("--------- cách 2 ---------");
const singNode2 = document.querySelector(".container");
console.log(singNode2); // <div class="container">...</div>
console.log("--------- cách 3 ---------");
const singNode3 = document.querySelector("#spinner");
console.log(singNode3); // <div id="spinner">...</div>
console.log("--------- cách 4 ---------");
const singNode4 = document.querySelector("#spinner .heading");
console.log(singNode4); // null
//
// *** *** *** *** ***
// Bài 111: document.querySelectorAll
console.log("--------- *** Bài 111: document.querySelectorAll  *** ---------");
// 2. document.querySelectorAll("selector") -> trả về 1 mảng các node nếu tồn tại selector, ngược lại trả về mảng rỗng, trả về NodeList chứa danh sách các node, nếu không có thì trả về empty NodeList.
// nó có thể loop (vòng lặp) qua NodeList để lấy ra từng node.
console.log("--------- lấy được 1 select---------");
const multiNode = document.querySelector(".item");
console.log(multiNode); // <div class="item">...</div>
console.log("--------- lấy được nhiều select---------");
const multiNode1 = document.querySelectorAll(".item");
console.log(multiNode1); // NodeList(5) [li.item, li.item, li.item, li.item, li.item]
// nó giống Array nhưng không phải Array, nên không thể sử dụng các phương thức của Array như: push, pop, shift,

console.log("--------- nếu ko có select -> NodeList(0) [] ---------");
const multiNode2 = document.querySelectorAll(".items");
console.log(multiNode2); // NodeList(0) []
// nó có thể loop và sử dụng forEach.. để lấy ra từng node.
for (let i = 0; i < multiNode1.length; i++) {
    console.log(multiNode1[i]); // <li class="item">...</li> * 5
}
//
// *** *** *** *** ***
// Bài 112: document.getElementsByClassName
console.log(
    "--------- *** Bài 112: document.getElementsByClassName  *** ---------"
);
// 3. document.getElementsByClassName("class") -> trả về 1 mảng các node nếu tồn tại class, ngược lại trả về mảng rỗng.
console.log(
    "--------- document.getElementsByClassName() -> trả về 1 mảng các node nếu tồn tại class, ngược lại trả về mảng rỗng. ---------"
);
// document.getElementsByClassName("header") -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty [] HTMLCollection.
console.log(
    "--------- document.getElementsByClassName() -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty [] HTMLCollection. ---------"
);
const classNode = document.getElementsByClassName("header");
console.log(classNode); // HTMLCollection(1) [div.header]
const classNode1 = document.getElementsByClassName("item");
console.log(classNode1); // HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
//
// *** *** *** *** ***
// Bài 113: getElementsByTagName
console.log("--------- *** Bài 113: getElementsByTagName  *** ---------");
// document.getElementsByTagName("tagName") -> trả về 1 mảng các node nếu tồn tại tag, ngược lại trả về mảng rỗng. trã về HTMLCollection chứa danh sách các node, nếu không có thì trả về empty [] HTMLCollection.
console.log(
    "--------- document.getElementsByTagName() -> trả về 1 mảng các node nếu tồn tại tag, ngược lại trả về mảng rỗng. ---------"
);
const classNode2 = document.getElementsByTagName("li");
console.log(classNode2); // HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
const classNode3 = document.getElementsByTagName("h1");
console.log(classNode3); // HTMLCollection(1) [h1]
//
// *** *** *** *** ***
// Bài 114: getElementById
console.log("--------- *** Bài 114: getElementById  *** ---------");
// document.getElementById("id") -> trả về 1 node nếu tồn tại id, ngược lại trả về null.
console.log(
    "--------- document.getElementById() -> trả về 1 node nếu tồn tại id, ngược lại trả về null. ---------"
);
const idNode = document.getElementById("spinner");
console.log(idNode); // <div id="spinner">...</div>
const idNode1 = document.getElementById("spinners");
console.log(idNode1); // null
// hay sử dụng document.querySelector() thay cho document.getElementBy()
// hay sư dụng document.querySelectorAll() thay cho document.getElementsByClassName()
//
// *** *** *** *** ***
// Bài 115: getAttribute
console.log("--------- *** Bài 115: getAttribute  *** ---------");
// 4. Selector getAttribute("attribute") -> trả về giá trị của thuộc tính của phần tử.
// Attribute: là các thuộc tính của phần tử như: id, class, src, href, alt, title, style, data-*,...
// seletor là 1 cái không phải là 1 list
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // https://www.google.com
const li +