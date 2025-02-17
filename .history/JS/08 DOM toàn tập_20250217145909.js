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
// 1. document.querySelector()
console.log("--------- 1. document.querySelector() ---------");
// selectors: .header, p , body, #header, .header p, .header > p, .header + p, .header ~ p
// document.querySelector() trả về phần tử đầu tiên mà nó tìm thấy trong DOM.
console.log("--------- cách 1 ---------");
const singNode = document.querySelector("h1");
console.log(singNode);
console.log("--------- cách 2 ---------");
const singNode2 = document.querySelector(".container");
console.log(singNode2);

