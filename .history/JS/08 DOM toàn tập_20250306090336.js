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
console.log(
    "--------- 2. document.querySelectorAll() -> trả về 1 mảng các node nếu tồn tại selector, ngược lại trả về mảng rỗng, trả về NodeList chứa danh sách các node, nếu không có thì trả về empty NodeList. ---------"
);

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
    "--------- 3. document.getElementsByClassName() -> trả về 1 mảng các node nếu tồn tại class, ngược lại trả về mảng rỗng. ---------"
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
    "--------- 3.1 document.getElementsByTagName() -> trả về 1 mảng các node nếu tồn tại tag, ngược lại trả về mảng rỗng. ---------"
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
console.log(
    "--------- 04. Selector getAttribute() -> lấy ra giá trị của attriute seletor trả về giá trị của thuộc tính của phần tử. Attribute: là các thuộc tính của phần tử như: id, class, src, href, alt, title, style, data-*,...,seletor là 1 cái không phải là 1 list ---------"
);

// 04. Selector getAttribute("attribute") -> lấy ra giá trị của attriute seletor trả về giá trị của thuộc tính của phần tử.
// Attribute: là các thuộc tính của phần tử như: id, class, src, href, alt, title, style, data-*,...
// seletor là 1 cái không phải là 1 list
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // https://www.google.com
const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class")); // item
});
console.log(li); // NodeList(5) [li.item, li.item, li.item, li.item, li.item]
//
// *** *** *** *** ***
// Bài 116: setAttribute
console.log("--------- *** Bài 116: setAttribute  *** ---------");
// 5. Selector setAttribute("attribute", "value") -> thiết lập giá trị cho thuộc tính của phần tử.
// thêm target="_blank" vào tất cả các link
console.log(
    "--------- Selector setAttribute(attribute, value) -> thiết lập giá trị cho thuộc tính của phần tử.  *** ---------"
);

link.setAttribute("target", "_blank");
const listlink = document.querySelectorAll("a.link");
listlink.forEach((item) => item.setAttribute("target", "_blank"));
//
// *** *** *** *** ***
// Bài 117: removeAttribute
console.log("--------- *** Bài 117: removeAttribute  *** ---------");
console.log(
    "--------- 6. Selector removeAttribute() -> xóa thuộc tính của phần tử. ---------"
);

// 6. Selector removeAttribute("attribute") -> xóa thuộc tính của phần tử.
// xóa target="_blank" của tất cả các link
// selector.setAttribute("target", "_blank");
const p = document.getElementById("spinner");
p.removeAttribute("style");
//
// *** *** *** *** ***
// Bài 118: hasAttribute
console.log("--------- *** Bài 118: hasAttribute  *** ---------");
console.log(
    "--------- Selector.hasAttribute(attribute) -> kiểm tra xem (selector) phần tử có thuộc tính đó không, nếu có trả về true, ngược lại trả về false. ---------"
);

// 7. Selector.hasAttribute("attribute") -> kiểm tra xem (selector) phần tử có thuộc tính đó không, nếu có trả về true, ngược lại trả về false.
// kiểm tra xem phần tử có thuộc tính target không
console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true
if (p.hasAttribute("id")) {
    console.log("Có thuộc tính id");
} else {
    console.log("Không có thuộc tính id");
} // Có thuộc tính id
//  nếu có thì thực hiện 1 hành động nào đó
//  nếu không có
//
// *** *** *** *** ***
// Bài 119: textContent
console.log("--------- *** Bài 119: textContent  *** ---------");
console.log(
    "--------- 8. Selector.textContent -> lấy hoặc thiết lập nội dung văn bản của phần tử. ---------"
);

// 8. Selector.textContent -> lấy hoặc thiết lập nội dung văn bản của phần tử.
// lấy nội dung của phần tử
// thay đổi nội dung của phần tử
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent); // Spinner
spinner.textContent = "Loading...";
console.log(spinner.textContent); // Loading...
//
// *** *** *** *** ***
// Bài 120: innerText
console.log("--------- *** Bài 120: innerText  *** ---------");
console.log(
    "---------9. Selector.innerText -> lấy hoặc thiết lập nội dung văn bản của phần tử. ---------"
);

// 9. Selector.innerText -> lấy hoặc thiết lập nội dung văn bản của phần tử.
// lấy nội dung của phần tử
const spinner1 = document.querySelector("#spinner1");
console.log("--------- textContent ---------");

console.log(spinner1.textContent); // Spinner:
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod,

// Hello New
// debitis error nesciunt deleniti sit ad dolores mollitia. Cupiditate
// provident voluptatibus adipisci reprehenderit voluptas labore iure
// architecto quas sint magni.
console.log("--------- innerText ---------");

console.log(spinner1.innerText); // Spinner:
// index.html:1 Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.Understand this errorAI
//
// *** *** *** *** ***
// Bài 121: innerHTML
console.log("--------- *** Bài 121: innerHTML  *** ---------");
console.log(
    "--------- 10. Selector.innerHTML -> lấy hoặc thiết lập nội dung HTML của phần tử. ---------"
);

// 10. Selector.innerHTML -> lấy hoặc thiết lập nội dung HTML của phần tử.
// lấy nội dung của phần tử

spinner1.innerText = `div class="demo">Hello New</div>`;
// debitis error nesciunt deleniti sit ad dolores mollitia. Cupiditate`
console.log(spinner1.innerHTML); // <div class="demo">Hello New</div>
// provident voluptatibus adipisci reprehenderit voluptas labore iure
// architecto quas sint magni.
spinner1.innerHTML = `<div class="demo">Hello New</div>`;
//
// *** *** *** *** ***
// Bài 122: Các phương thức về class phần 1
console.log(
    "--------- *** Bài 122: Các phương thức về Class phần 1  *** ---------"
);
console.log(
    "--------- 11. Selector.classList.add(abc) -> trả về một DOMTokenList chứa danh sách các class của phần tử. ---------"
);
// 11. Selector.classList.add("abc") -> trả về một DOMTokenList chứa danh sách các class của phần tử.
const container = document.querySelector(".container");
container.classList.add("is-active"); // thêm class is-active
// console.log(container.classList); // DOMTokenList(2) ["container", "is-active"]

// 12. Selector.classList.remove("abc") -> xóa class khỏi phần tử.
console.log(
    "---------  12. Selector.classList.remove(abc) -> xóa class khỏi phần tử. ---------"
);
container.classList.remove("container"); // xóa class container
// 13. container.classList.contains("container")
console.log("--------- 13. container.classList.contains(container) ---------");
console.log(container.classList.contains("container")); // ->  false
console.log(container.classList.contains("is-active")); // ->  true

console.log(
    "--------- 14. Selector.classList.toggle(abc) -> thêm class nếu không có, xóa class nếu có. ---------"
);

// 14. Selector.classList.toggle("abc") -> thêm class nếu không có, xóa class nếu có.
if (container.classList.contains("is-active")) {
    container.classList.remove("is-active");
} else {
    container.classList.add("is-active");
}
console.log(container.classList.contains("is-active"));
container.classList.toggle("is-active"); // -> false

//
// *** *** *** *** ***
// Bài 123: Các phương thức về class phần 2
console.log(
    "--------- *** Bài 123: Các phương thức về Class phần 2  *** ---------"
);
// 15. Selector.classname -> trả ra chuỗi các class selector
console.log(
    "--------- 15. Selector.classname -> trả ra chuỗi các class selector ---------"
);
const title = document.querySelector(".title");
console.log(title.className); // -> trong h1 có 4 class: title heading abc xyz
// giờ mình gộp lại 4 class thành 1 class title
console.log("--------- giờ mình gộp lại 4 class thành 1 class title ---------");
title.className = "title";
console.log("title"); // -> gộp lai 1 class: title
//
//
// *** *** *** *** ***
// Bài 124: Toggle class
console.log("--------- *** Bài 124: Toggle class  *** ---------");
// làm html css trong index2
console.log("--------- làm html css trong index2 ---------");
// menu toggle class
// const menu = document.querySelector(".menu");
// menu.classList.add("is-show");
//
//
// *** *** *** *** ***
// Bài 125: document.creatElement
console.log("--------- *** Bài 125: document.creatElement  *** ---------");
// crud
// thêm xóa sửa node tròn javascript
// 16. Tạo ra Elemet trong Javascript document.creatElement("elemet: tag")
console.log(
    "--------- 16. Tạo ra Elemet trong Javascript document.creatElement(elemet: tag) ---------"
);
const div = document.createElement("div");
// -> chưa hiện ra ngoài html mình phải qua bước thứ 2
// 17. selector.appendChild
console.log("--------- 17. selector.appendChild ---------");
// selector.appendChild
// document.body -> thẻ body => trường hơpk này đặc biệt
// document.querySelector("body"); -> trường hợp này hay dùng còn ở trên là đặc biệt
const body = document.body;
body.appendChild(div);
//
//
// *** *** *** *** ***
// Bài 126: document.appendChild
console.log("--------- *** Bài 126: document.appendChild  *** ---------");
// thêm class cho Div => div.classList.add("containers")
console.log("--------- thêm class: <div class = containers ></div> ---------");
div.classList.add("containers");
console.log(div); // -> <div class="containers"></div>
console.log(
    "--------- thêm 2 class <div class = containers1 wrapper>Loading...126: document.appendChild</div> ---------"
);
div.className = "containers1 wrapper";
console.log(div.className); // <div class="containers1 wrapper">Loading...126: document.appendChild</div>

// thêm đoạn văn vào elemmet div có class containers
console.log(
    "--------- thêm đoạn văn cho DIV <div class = containers>Loading...126: document.appendChild</div> ---------"
);
div.textContent = "Loading...126: document.appendChild";
console.log(div.textContent); // <div class="containers">Loading...126: document.appendChild</div>
// thêm class containers2 có thẻ h3 và đoạn văn dùng div.innerHTML = <div class = containers2><h3></h3> </div>
console.log(
    "--------- thêm class containers2 có thẻ h3 và đoạn văn dùng div.innerHTML = <div class = containers2><h3></h3> </div> ---------"
);
div.innerHTML = `<div class="containers2">
        <h3>innerHTML</h3>
    </div>`;
console.log(div.innerHTML); // -> <div class="containers2">
//     <h3></h3>
// </div>
// dùng div.setAttribute
console.log("--------- dùng div.setAttribute() ---------");
div.setAttribute("data-name", "evondev");
console.log(div.setAttribute); // -> <div class="containers1 wrapper"  data-name="evondev"> trong html
// Bài tập tạo ra HTML có thẻ div class card và thẻ img class card-image có hình ở file HTML
console.log(
    "--------- Bài tập tạo ra HTML có thẻ div class card và thẻ img class card-image có hình ---------"
);
const card = document.createElement("div");
card.classList.add("card"); // làm sao để đặt bên trong
const cardImage = document.createElement("img");
cardImage.setAttribute("class", "card-image");
cardImage.setAttribute("src", "../IMG/ali-fallah-MUPZ6I5qVMI-unsplash (1).jpg");
card.appendChild(cardImage);
body.appendChild(card);
//
//
// *** *** *** *** ***
// Bài 127: createTextNode
console.log("--------- *** Bài 127: createTextNode  *** ---------");
// 18. document.createTextNode:thêm đoạn văn vào thẻ như h1 h2 h3...
console.log(
    "--------- 18. document.createTextNode:thêm đoạn văn vào thẻ như h1 h2 h3... ---------"
);
const text = document.createTextNode("Hello createTextNode");
body.appendChild(text);
const h2 = document.createElement("h2");
body.appendChild(h2);
h2.appendChild(text);
console.log(h2.appendChild(text)); // -> <h2>"Hello createTextNode"</h2>
//
//
// *** *** *** *** ***
// Bài 128: cloneNode
console.log("--------- *** Bài 128: cloneNode  *** ---------");
console.log(
    "--------- 19. cloneNode: là bản sao trước đó để làm nhiệm vụ khác ---------"
);
// 19. cloneNode là bản sao trước đó để làm nhiệm vụ khác
const h2Clone = h2.cloneNode(true);
body.appendChild(h2Clone);
console.log(body.appendChild(h2Clone)); // copy thêm h2 mình đã tạo trên -> <h2>"Hello createTextNode"</h2>
//
//
// *** *** *** *** ***
// Bài 129: hasChildNodes
console.log("--------- *** Bài 129: hasChildNodes  *** ---------");
("--------- 20. hasChildNodes: kiểm tra element của chúng ta có phần tử con hay ko (child) có trả về => true, ko thì trả về => false ---------");
// 20. hasChildNodes: kiểm tra element của chúng ta có phần tử con hay ko (child) có trả về => true, ko thì trả về => false
console.log(h2.hasChildNodes()); // -> true
console.log(document.querySelector("h3").hasChildNodes());
//
//
// *** *** *** *** ***
// Bài 130: insertAdjacentText
console.log("--------- *** Bài 130: insertAdjacentText  *** ---------");
// 21. element.insertAdjacentText: chèn text vào element
console.log(
    "--------- 21. element.insertAdjacentText(position,text) ---------"
);
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text: là chuỗi")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin"); // chền trên <h3>
h3.insertAdjacentText("afterbegin", "afterbegin"); // chền dưới <h3>
h3.insertAdjacentText("beforeend", "beforeend"); // chền trên </h3>
h3.insertAdjacentText("afterend", "afterend"); // chền dưới </h3>
//
//
// *** *** *** *** ***
// Bài 131: insertAdjacentElement
console.log(
    "--------- *** Bài 131: element.insertAdjacentElement  *** ---------"
);
// 22. insertAdjacentElement("position", "element")
console.log(
    "--------- 22. element.insertAdjacentElement(position,element(node)) ---------"
);
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong); //chền dưới  </h3> thẻ strong có class bold
//
//
// *** *** *** *** ***
// Bài 132: insertAdjacentHTML
console.log("--------- *** Bài 132: insertAdjacentHTML  *** ---------");
// 23. element.insertAdjacentHTML("position", "element")
console.log(
    "--------- 22. element.insertAdjacentHTML(position,element(node)) ---------"
);
/** ví dụ
 * 
 *   <ul class="menu23">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
 */
const template = `<ul class="menu23">
        <li>1</li>
        <li>2</li>
        <li>3</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);
// parse là chuyển qua HTML
//  *
//  *   <ul class="menu23">
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//  */
//
//
// *** *** *** *** ***
// Bài 133: Traversing DOM phần 1
console.log("--------- *** Bài 133: Traversing DOM phần 1  *** ---------");
// 23.  Traversing DOM phần 1: parentNode, parentElement, removedChild
console.log(
    "--------- 23.  Traversing DOM phần 1: parentNode, parentElement, removedChild ---------"
);
console.log("---------  ---------");
// parentNode, parentElement, removedChild
console.log("--------- parentNode, parentElement, ---------");
// parentNode vs parentElement: cơ bản giống nhau lấy phần tử cha của con
const span = document.querySelector("span");
console.log(span.parentElement); // <h3 class="newh3">...</h3>
console.log(span.parentNode); // <h3 class="newh3">...</h3>
// selector.parentNode.removedChild(delete selector) hoặc selector.parentElement.removedChild(delete selector)
console.log(
    "--------- selector.parentNode.removedChild(delete selector) hoặc selector.parentElement.removedChild(delete selector) ---------"
);
console.log("--------- removedChild ---------");

// span.parentNode.removeChild(span);
// xóa thẻ span trong h3 thường hay dùng
// console.log(span);
// span.remove(); //ít sử dụng
//
//
// *** *** *** *** ***
//  Bài 134: Traversing DOM phần 2
console.log("--------- *** Bài 134: Traversing DOM phần 2  *** ---------");
// 24.  Traversing DOM phần 2: nextElementSibling, previousElementSibling
console.log(
    "--------- 24.  Traversing DOM phần 2: nextElementSibling, previousElementSibling, childNode vs children, firstChild vs firstElementChild, lastChild vs lastElementChild ---------"
);
//
console.log("--------- 25. nextElementSibling: tìm phần tử kế tiếp ---------");
const nextSpan = span.nextElementSibling;
console.log(nextSpan); // ->  <span class="span">abc</span> tìm ko thấy trả về null
console.log(
    "--------- 26. previousElementSibling: tìm phần tử đứng sau nó ---------"
);
const previousLink = span.previousElementSibling;
console.log(previousLink); // -> <a href="#" class="demo12">dome</a> tìm ko thấy trả về null
console.log("--------- childNode vs children ---------");
console.log(
    "--------- 27. childNode: trả về hết  1 mảng các node bên trong bao gồm textNodes ---------"
);
console.log(span.childNodes); // -> NodeList(3) [text, strong, text]
console.log(
    "--------- 28. children: trả về các Node ko bao gồm textNodes ---------"
);
console.log(span.children); // -> HTMLCollection [strong]
console.log("--------- firstChild vs firstElementChild---------");
console.log("---------  firstChild---------");
console.log(span.firstChild); // -> # text
console.log("--------- firstElementChild ---------");
console.log(span.firstElementChild); // ->  <strong>evondev</strong>
console.log("--------- lastChild vs lastElementChild---------");
console.log("--------- lastChild ---------");
console.log(span.lastChild); // -> # text
console.log("--------- lastElementChild ---------");
console.log(span.lastElementChild); // ->  <strong class="strong">evondev</strong>
//
//
// *** *** *** *** ***
//  Bài 135: Traversing DOM phần 3
console.log("--------- *** Bài 135: Traversing DOM phần 3  *** ---------");
console.log("--------- 29.nextSibling & previousSibling  ---------");
console.log("--------- nextSibling ---------");
console.log(span.nextSibling); // -> # text
console.log("--------- previousSibling ---------");
console.log(span.previousSibling); // -> # text
console.log("--------- 30. nextElementSibling.nextElementSibling---------");
const nextSpan1 = span.nextElementSibling.nextElementSibling;
console.log(nextSpan1); // ->  <span class="span2">defgi</span>
//
//
// *** *** *** *** ***
//  Bài 136: Bài tập Modal phần 1
console.log("--------- *** Bài 136: Bài tập Modal phần 1  *** ---------");
// Active modal
console.log("--------- Active modal ---------");
// Bài tập 1:
console.log("---------  Bài tập 1: ---------");
console.log("--------- 08.2 Dom bài tập html css JS  ---------");
//
//
// *** *** *** *** ***
//  Bài 137: Bài tập Modal phần 2
console.log("--------- *** Bài 137: Bài tập Modal phần 2  *** ---------");
// Active modal
console.log("--------- Active modal ---------");
// Bài tập 1:
console.log("---------  Bài tập 2: ---------");
console.log("--------- 08.2 Dom bài tập html css JS  ---------");
//
//
// *** *** *** *** ***
//  Bài 138: Bài tập Notification phần 1
console.log(
    "--------- *** Bài 138: Bài tập Notification phần 1  *** ---------"
);

//
//
// *** *** *** *** ***
//  Bài 139: Bài tập Notification phần 2
console.log(
    "--------- *** Bài 139: Bài tập Notification phần 2  *** ---------"
);
//
//
// *** *** *** *** ***
//  Bài 140: Các thuộc tính liên quan tới offset
console.log(
    "--------- *** Bài 140: Các thuộc tính liên quan tới offset  *** ---------"
);
console.log(
    "--------- 31.  offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop,  ---------"
);
function log(value) {
    console.log(value);
}
const boxed = document.querySelector(".boxed"); // -> <div class="boxed">...</div>
log(boxed.offsetWidth); // -> 200 độ rộng của phần tử
log(boxed.offsetHeight); // -> 200 chiều cao của phần tử
log(boxed.offsetLeft); // -> 0 vị trí trái của phần tử
log(boxed.offsetTop); // -> 208 vị trí trên của phần tử
log(boxed.offsetParent); // -> <body>...</body> lấy phần tử của cha để lấy giá trị phần tử cha
//
//
// *** *** *** *** ***
//  Bài 1441: Client
console.log("--------- *** Bài 1441: Client  *** ---------");
console.log(
    "--------- 31.  clientWidth, clientHeight, clientLeft, clientTop,  ---------"
);
log(boxed.clientWidth); // -> 200 chiều rộng bao gồm padding
log(boxed.clientHeight); // -> 200 chiều cao bao gồm padding
log(boxed.clientLeft); // -> 0 chiều rộng bao gồm border
log(boxed.clientTop); // -> 0 chiều cao bao gồm border