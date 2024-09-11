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
//
// in ra năm
const birthday = new Date(1985, 3, 1);
//
// in ra tháng
// => getMonth() 0 -- > 11, 0 tháng 1(jan) -> 11 tháng 12(dec)
console.log(birthday.getFullYear()); // print year 1985
//
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getMonth()); // print month 3 =
//
// in ra
console.log(birthday.getDate()); // print day 1
//
// in ra thứ tự của tuần
// 0 - 6: 0 -> chủ nhật, 6: thứ bảy
console.log(birthday.getDay()); // print day 1
//
// in ra giờ
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
// in ra timestamp
console.log(birthday.getMilliseconds());
//
console.log(birthday.getTime()); // => print 481136400000
//
// *** *** *** *** ***
// Bài 44: Các hàm set trong Date
// Set: 
console.log()
