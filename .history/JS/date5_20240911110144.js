// *** Bài 40: Giới thiệu về Date object ***
const now = new Date();
// built-in object
console.log(now); // ==> Sat Sep 07 2024 09:11:39 GMT+0700 (Indochina Time)
// Timezone : GMT+0700 (Indochina Time)
// Second: 39
// Minute: 11
// Hour: 09
// Year: 2024
// Monnth: 9
// Day: 7
// Day of the week: SAT
//
// *** *** *** *** ***
// Bài 41: Timestamp và epochtime
// Unix time
//
// timestamp tìm ra kết quả là milisecconds
console.log(now.getTime()); // print timestamp 1726026063328 là tính từ 1/1/1970 đến bây giờ
//epochtime (new Date(0))ta có thẻ ghi số vào như ngày tháng năm
console.log(new Date(0)); // print Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time) bắt đầu từ ngày 1 tháng 1 năm 1970 lúc 8 giờ GMT +8
//
// *** *** *** *** ***
// Bài 42: 4 cách khởi tạo Date object nên biết
// Date object
//
// 4 cách sử dung new Date
// new Date() -> In ra ngày giờ hiện tại
// new Date(timestamp) -> 1726026699861
// new Date(date string) ->
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1726026699861));
console.log(new Date("Wed Sep 11 2024 10:51:39 GMT+0700 (Indochina Time)")); // print Wed Sep 11 2024 10:51:39 GMT+0700 (Indochina Time)
console.log(new Date(2024, 8, 10, 30, 30, 30, 30)); // print Wed Sep 11 2024 06:30:30 GMT+0700 (Indochina Time)
//
// *** *** *** *** ***
// Bài 43: Các hàm get trong Date
//
// Get truy xuất thời gian
// Các hàm Get trong Date
const birthday = new Date(1985, 1, 3);
//
console/