// 15 hàm JavaScript bắt buộc phải thành thạo nếu muốn trở thành lập trình viên Super Vip Pro
// Các hàm trong JavaScript là một phần bắt buộc và không thể thiếu để cho các lập trình viên có thể thỏa sức sáng tạo và thiết kế. Các hàm này nếu biết cách sử dụng còn có thể giúp các đoạn code của bạn trở nên gọn và dễ đọc hơn. Trong bài viết này tôi sẽ cùng với các bạn tìm hiểu kỹ hơn về 15 hàm JavaScript thường dùng nhất nhé.

// 1. map()
// Mô tả: Hàm map() giúp tạo ra một mảng mới chứa kết quả của việc gọi hàm được cung cấp trên mọi phần tử trong mảng ban đầu.

// Tại sao hàm này lại quan trọng: map() rất cần thiết để chuyển đổi dữ liệu, cho phép bạn áp dụng các phép toán cho từng phần tử trong mảng mà không làm thay đổi mảng gốc.

// Ví dụ:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

Giải thích: Trong ví dụ trên, hàm map() lấy từng phần tử trong numbers, nhân đôi nó và trả về một mảng mới với các giá trị được nhân đôi.