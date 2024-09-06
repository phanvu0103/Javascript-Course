// 15 hàm JavaScript bắt buộc phải thành thạo nếu muốn trở thành lập trình viên Super Vip Pro
// Các hàm trong JavaScript là một phần bắt buộc và không thể thiếu để cho các lập trình viên có thể thỏa sức sáng tạo và thiết kế. Các hàm này nếu biết cách sử dụng còn có thể giúp các đoạn code của bạn trở nên gọn và dễ đọc hơn. Trong bài viết này tôi sẽ cùng với các bạn tìm hiểu kỹ hơn về 15 hàm JavaScript thường dùng nhất nhé.

// 1. map()
// Mô tả: Hàm map() giúp tạo ra một mảng mới chứa kết quả của việc gọi hàm được cung cấp trên mọi phần tử trong mảng ban đầu.

// Tại sao hàm này lại quan trọng: map() rất cần thiết để chuyển đổi dữ liệu, cho phép bạn áp dụng các phép toán cho từng phần tử trong mảng mà không làm thay đổi mảng gốc.

// Ví dụ:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Giải thích: Trong ví dụ trên, hàm map() lấy từng phần tử trong numbers, nhân đôi nó và trả về một mảng mới với các giá trị được nhân đôi.

// 2. filter()
// Mô tả: Hàm filter() tạo một mảng mới với tất cả các phần tử vượt qua bài kiểm tra được thực hiện bởi hàm được cung cấp.

// Tại sao hàm này lại quan trọng: Sử dụng filter() để trích xuất dữ liệu cần thiết từ một mảng mà không làm thay đổi mảng gốc, điều này rất quan trọng để duy trì tính bất biến trong các đoạn code của bạn.

// Ví dụ:

const words = ['spray', 'limit', 'elite', 'exuberant'];
const longWords = words.filter(word => word.length > 6);
console.log(longWords); // ['exuberant']

// Giải thích: Ở đây, hàm filter() kiểm tra từng từ trong words và trả về một mảng mới chỉ chứa những từ có nhiều hơn 6 chữ cái.

// 3. reduce()
// Mô tả: Hàm reduce() giảm một mảng thành một giá trị duy nhất bằng cách áp dụng một hàm cho mỗi phần tử, rồi tích lũy kết quả.

// Tại sao hàm này lại quan trọng: reduce() là một công cụ mạnh mẽ để thực hiện các hoạt động kết hợp tất cả các phần tử trong một mảng thành một đầu ra duy nhất, chẳng hạn như tính tổng giá trị hoặc xây dựng một đối tượng mới.

// Ví dụ:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

// Giải thích: Trong ví dụ trên, reduce() tính tổng tất cả các số trong numbers, bắt đầu từ giá trị ban đầu là 0.

// 4. find()
// Mô tả: find() trả về phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp.

// Tại sao h này quan trọng: Hàm find() vô cùng hữu ích để nhanh chóng xác định vị trí một mục cụ thể trong một mảng, đặc biệt là khi làm việc với các đối tượng mà bạn cần tìm giá trị thuộc tính cụ thể.

// Ví dụ:

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Jane' }

// Giải thích: Ở ví dụ trên, hàm find() tìm kiếm trong users và trả về đối tượng người dùng đầu tiên có id là 2.

// 5. some()
// Mô tả: Hàm some() kiểm tra xem có ít nhất một phần tử trong mảng vượt qua bài kiểm tra của hàm được cung cấp hay không.

// Tại sao điều này quan trọng: some() hữu ích cho các tình huống mà bạn cần kiểm tra xem bất kỳ phần tử nào trong mảng có đáp ứng một điều kiện nhất định hay không, cho phép bạn xác thực đầu vào hoặc kiểm tra các giá trị cụ thể.

// Ví dụ:

const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// Giải thích: Trong ví dụ này, some() kiểm tra xem có ít nhất một số chẵn trong numbers hay không.

// 6. every()
// Mô tả: Hàm every() kiểm tra xem tất cả các phần tử trong mảng có vượt qua bài kiểm tra của hàm được cung cấp hay không.

// Tại sao hàm này quan trọng: Hàm every() rất quan trọng khi bạn cần đảm bảo rằng tất cả các phần tử trong mảng đáp ứng một tiêu chí cụ thể, điều này đặc biệt hữu ích cho các lần kiểm tra xác thực.

// Ví dụ:

const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Giải thích: Ở ví dụ trên, every() kiểm tra xem tất cả các số trong numbers có phải là số chẵn hay không.

// 7. forEach()
// Mô tả: Hàm forEach() thực hiện một hàm được cung cấp một lần cho mỗi phần tử mảng.

// Tại sao hàm này lại quan trọng: Mặc dù forEach() kém linh hoạt hơn một số phương pháp khác, nhưng nó lại đơn giản và hữu ích khi chạy các hoạt động tạo ra tác dụng phụ, chẳng hạn như ghi nhật ký hoặc cập nhật giá trị.

// Ví dụ:

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8

// Giải thích: Trong ví dụ này, forEach() nhân đôi mỗi số trong numbers và ghi kết quả vào bảng điều khiển.

// 8. concat()
// Mô tả: Hàm concat() hợp nhất hai hoặc nhiều mảng thành một mảng mới.

// Tại sao hàm này lại quan trọng: concat() vô cùng hữu ích khi kết hợp các tập dữ liệu mà không làm thay đổi mảng gốc, duy trì tính bất biến.

// Ví dụ:

const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4]

// Giải thích: Ở đây, concat() kết hợp array1 và array2 thành một mảng mới mà không sửa đổi mảng ban đầu.

// 9. slice()
// Mô tả: slice() trả về một bản sao nông của một phần của mảng vào một mảng mới.

// Tại sao hàm này lại quan trọng: slice() lý tưởng để tạo mảng con mà không làm thay đổi mảng gốc, khiến đây trở thành phương pháp an toàn để trích xuất dữ liệu.

// Ví dụ:

const fruits = ['apple', 'banana', 'orange', 'grape'];
const citrus = fruits.slice(2, 4);
console.log(citrus); // ['orange', 'grape']

// Giải thích: Trong ví dụ này, slice() trích xuất các phần tử từ chỉ mục 2 đến 4 (loại trừ 4) khỏi fruits.

// 10. splice()
// Mô tả: Hàm splice() thay đổi nội dung của mảng bằng cách xóa hoặc thay thế các phần tử hiện có và/hoặc thêm các phần tử mới.

// Tại sao hàm này quan trọng: splice() có hiệu quả trong việc chỉnh sửa tại chỗ một mảng, nhưng bản chất đột biến của nó cần được sử dụng cẩn thận để tránh các tác dụng phụ không mong muốn.

// Ví dụ:

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99);
console.log(numbers); // [1, 2, 99, 4, 5]

// Giải thích: Ở đây, splice() xóa một phần tử ở chỉ mục 2 và thay thế bằng 99.

// 11. includes()
// Mô tả: Hàm includes() kiểm tra xem mảng có bao gồm phần tử nào đó hay không, trả về true hoặc false.

// Tại sao hàm này quan trọng: includes() là phương pháp đơn giản nhưng mạnh mẽ để kiểm tra sự tồn tại, giúp mã của bạn dễ đọc hơn so với sử dụng indexOf.

// Ví dụ:

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true

// Giải thích: Trong ví dụ này, includes() kiểm tra xem fruits có chứa phần tử 'banana' hay không.

// 12. indexOf()
// Mô tả: indexOf() trả về chỉ mục đầu tiên mà phần tử nhất định có thể được tìm thấy trong mảng hoặc -1 nếu phần tử đó không có trong mảng.

// Tại sao hàm này quan trọng: indexOf() hữu ích khi tìm vị trí của một phần tử trong mảng, đặc biệt là khi bạn cần chỉ mục cho các hoạt động tiếp theo.

// Ví dụ:

const numbers = [1, 2, 3, 4];
const index = numbers.indexOf(3);
console.log(index); // 2

Giải thích: Ở đây, indexOf() trả về chỉ số của lần xuất hiện đầu tiên của số 3 trong numbers.

13. lastIndexOf()
Mô tả: lastIndexOf() trả về chỉ mục cuối cùng mà phần tử nhất định có thể được tìm thấy trong mảng hoặc -1 nếu phần tử đó không có trong mảng.

Tại sao hàm này quan trọng: lastIndexOf() tương tự như indexOf(), nhưng nó sẽ tìm kiếm mảng từ cuối về phía đầu, rất hữu ích khi bạn cần tìm phần tử xuất hiện cuối cùng.

Ví dụ:

const numbers = [1, 2, 3, 4, 3];
const index = numbers.lastIndexOf(3);
console.log(index); // 4

Giải thích: Trong ví dụ này, lastIndexOf() tìm kiếm lần xuất hiện cuối cùng của số 3 trong numbers, trả về chỉ mục 4.

14. join()
Mô tả: join() nối tất cả các phần tử của một mảng thành một chuỗi, được phân tách bằng một dấu phân cách được chỉ định.

Tại sao hàm này quan trọng: join() rất hữu ích để chuyển đổi một mảng thành chuỗi, đặc biệt hữu ích khi hiển thị hoặc định dạng dữ liệu.

Ví dụ:

const words = ['Hello', 'world'];
const sentence = words.join(' ');
console.log(sentence); // "Hello world"

Giải thích: Ở đây, join() nối các phần tử của wordsmảng thành một chuỗi duy nhất, với mỗi từ được phân tách bằng một khoảng trắng.

15. reverse()
Mô tả: reverse() đảo ngược thứ tự các phần tử trong một mảng tại chỗ.

Tại sao hàm này quan trọng: reverse() có thể hữu ích khi bạn cần xử lý hoặc hiển thị dữ liệu theo thứ tự ngược lại, mặc dù bản chất đột biến của nó đòi hỏi phải sử dụng cẩn thận.

Ví dụ:

const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]

Giải thích: Trong ví dụ này, reverse() đảo ngược thứ tự các phần tử trong numbers, sửa đổi mảng ban đầu.

Kết luận
Việc thành thạo 15 hàm JavaScript này sẽ giúp bạn cải thiện đáng kể khả năng xử lý dữ liệu hiệu quả và tạo ra các đoạn code sạch, dễ bảo trì. Là một lập trình viên, việc có các hàm này trong bộ công cụ của bạn sẽ cho phép bạn xử lý các hoạt động dữ liệu phức tạp một cách dễ dàng, giúp các đoạn code của bạn mạnh mẽ và có khả năng mở rộng hơn. Cảm ơn các bạn đã theo dõi bài viết về thủ thuật JavaScript này.