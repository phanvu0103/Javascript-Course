// *** Bài 40: Giới thiệu về Date object ***
console.log("--------- *** Bài 40: Giới thiệu về Date object *** ---------");
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
console.log("---------Bài 41: Timestamp và epochtime---------");
// Unix time
//
// timestamp tìm ra kết quả là milisecconds
console.log(now.getTime()); // print timestamp 1726026063328 là tính từ 1/1/1970 đến bây giờ
//epochtime (new Date(0))ta có thẻ ghi số vào như ngày tháng năm
console.log(new Date(0)); // print Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time) bắt đầu từ ngày 1 tháng 1 năm 1970 lúc 8 giờ GMT +8
//
// *** *** *** *** ***
// Bài 42: 4 cách khởi tạo Date object nên biết
console.log("---------Bài 58: Tìm hiểu phương thức slice---------");
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
const birthday = new Date(1985, 2, 1);
//
// in ra tháng
// => getMonth() 0 -- > 11, 0 tháng 1(jan) -> 11 tháng 12(dec)
console.log(birthday.getFullYear()); // print year 1985
//
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getMonth()); // print month 3 =
//
// in ra số ngày trong tháng
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
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(1960); // year
birthday.setMonth(4); // month
birthday.setDate(6); // thứ, ngày trong thánh
birthday.setHours(10); // giờ hours
birthday.setMinutes(30); // phút miniter
birthday.setSeconds(20); // giây second
birthday.setMilliseconds(19); // mili giây
// birthday.setTime();
console.log(`My birthday after update: ${birthday}`);
//
// *** *** *** *** ***
// Bài 45: Tìm hiểu utc trong Date
//
//UTC: Thời gian Phối hợp Quốc tế
// https://en.wikipedia.org/wiki/Coordinated_Universal_Time
//
console.log(birthday.getUTCFullYear()); // print year 1985
//
console.log(birthday.getUTCMonth());
//
console.log(birthday.getUTCDate());
//

console.log(birthday.getUTCDay());
//
console.log(birthday.getUTCHours());
//
console.log(birthday.getUTCMinutes());
//
console.log(birthday.getUTCSeconds());
// i
console.log(birthday.getUTCMilliseconds());
//
//
// *** *** *** *** ***
// Bài 46: Tìm hiểu các hàm khác trong Date
console.log(now.toDateString()); // ==> Wed Sep 11 2024
console.log(now.toTimeString()); // ==> 15:08:46 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); // ==> 9/11/2024 -> m/dd/yyyy
console.log(now.toLocaleDateString("vi-VI")); // ==> 11/9/2024 -> dd/m/yyyy theo ngày tháng ở Việt Nam
console.log(now.toISOString()); // ==> 2024-09-11T08:12:48.223Z
//
// *** *** *** *** ***
// Bài 47: Bài tập đơn giản về Date object
// 11 / 09 / 2024;
// input:  Sat Sep 07 2024 09:11:39 GMT+0700 (Indochina Time)
// console.log(
//     new Date(
//         "Sat Sep 07 2024 09:11:39 GMT+0700 (Indochina Time)"
//     ).toLocaleDateString("vi-VI")
// ); // 7/9/2024
//
const myTime = new Date("Sat Sep 07 2024 09:11:39 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear(); // 2024
const myMonth = myTime.getMonth() + 1; // 9
const prefixMonth = myMonth < 10 ? "0" : "";
const myDate = myTime.getDate(); // 7
const prefixDate = myDate < 10 ? "0" : "";
// console.log(myYear, myMonth, myDate); // ==> 2024 9 7
console.log(`${prefixDate}${myDate}/${prefixMonth}${myMonth}/${myYear}`); // ==> 07/09/2024
//
// *** *** *** *** ***
// Bài 48: Tìm hiểu setTimeout và setInterval
// setTimeout & setInterval
//
//  setTimeout
// const time1 = setTimeout(function () {
//     alert("call me after 3 seconds");
// }, 3000);
// clearTimeout1(Time);
//
//setInterval
const Time = setInterval(function () {
    console.log("Call Me");
}, 1000);
clearInterval(Time);
// Bài 49: Bài tập chương 5
// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// 2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian dấu vào. ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`. khó
//
// *** *** *** *** ***
// Bài 50: Giải bài tập chương 5 bài 1
function getAge(year) {
    // chép đầu vào dùng if (typeof)
    if (typeof year !== "munber") return 0;
    // currenYear - Year
    const now = new Date();
    const currenYear = now.getFullYear();
    return currenYear - year;
}
// console.log(getAge(1985)); // hiện số 39
const youAge = getAge(1991);
console.log(`Năm nay bạn là ${youAge} tuổi`); // cách hay hơn tạo 1 biến
//
// *** *** *** *** ***
// Bài 51: Giải bài tập chương 5 bài 2
function countdown(minutes = 30) {
    let seconds = minutes * 5; // 1800
    let conunter = 0;
    const timer = setInterval(function () {
        conunter = conunter + 1; // cho người mới bắt đầu
        // conunter += 1; // viết rút gọn dòng này cũng đc cho người chuyên sâu
        console.log(conunter);
        if (conunter === seconds) {
            clearInterval(timer);
            console.log("Your time is end");
        }
    }, 1000);
}
countdown(1);
// conunter = 0
// 1 2 3 4 5 6
//
// *** *** *** *** ***
// Bài 52: Giải bài tập chương 5 bài 3 phần 1
function timeSince(date) {
    // conunter Time - date
    const now4 = new Date();
    const youDate7 = new Date(date);
    const seconds9 = Math.floor((now4.getTime() - youDate7.getTime()) / 1000); // in ra giây dùng now.getMonth.Time() trừ (-)  youDate() và chia cho (/) 1000, làm tròn số giây xuống  dùng lệnh Math.floor
    // console.log(seconds9);
    let timer = seconds9 / 31536000;
    console.log(timer);
    if (timer > 1) {
        console.log(`${Math.floortimer} năm trước`);
        return;
    }
    timer = seconds9 / 3678400;
    if (timer > 1) {
        console.log(`${Math.floortimer} tuần trước`);
        return;
    }
    timer = seconds9 / 604800;
    if (timer > 1) {
        console.log(`${Math.floortimer} tuần trước`);
        return;
    }
    timer = seconds9 / 86400;
    if (timer > 1) {
        console.log(`${Math.floortimer} ngày trước`);
        return;
    }
    timer = seconds9 / 3600;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }
    timer = seconds9 / 60;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phút trước`);
        return; // nếu mình muốn in ra kết quả từ phút ko hiện giây thì mình lệnh return
    }
    timer = seconds9;
    if (timer > 1) {
        console.log(`${timer} giây trước`);
    }
    return;
    // chưa làm tròn số giây
    // let timer = seconds9 / 31536000;
    // console.log(timer);
    // if (timer > 1) {
    //     console.log(`${timer} năm trước`);
    // }
    // timer = seconds9 / 3678400;
    // if (timer > 1) {
    //     console.log(`${timer} tuần trước`);
    // }
    // timer = seconds9 / 604800;
    // if (timer > 1) {
    //     console.log(`${timer} tuần trước`);
    // }
    // timer = seconds9 / 86400;
    // if (timer > 1) {
    //     console.log(`${timer} ngày trước`);
    // }
    // timer = seconds9 / 3600;
    // if (timer > 1) {
    //     console.log(`${timer} giờ trước`);
    // }
    // timer = seconds9 / 60;
    // if (timer > 1) {
    //     console.log(`${timer} phút trước`);
    // }
}
timeSince("Sep 16 2024 02:48:52 GMT+0700 (Indochina Time)");
//
// bài 3 phần 1
// function timeSince(date) {
//     // conunter Time - date
//     const now4 = new Date();
//     const youDate7 = new Date(date);
//     const seconds9 = Math.floor((now4.getTime() - youDate7.getTime()) / 1000); // in ra giây dùng now.getMonth.Time() trừ (-)  youDate() và chia cho (/) 1000, làm tròn số giây dùng Math.floor
//     console.log(seconds9);
// }
// timeSince("Mon Sep 16 2024 08:48:52 GMT+0700 (Indochina Time)");
//
// *** *** *** *** ***
// Bài 53: Giải bài tập chương 5 bài 3 phần 2
// 3 phút trước, 3 ngày trước, 2 tháng trước, 30 giây trước, 1 năm trước
// 1 năm   = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60  = 3678400
// 1 tuần  = 7 * 24 * 60 * 60   = 604800
// 1 ngày  = 1 * 24 * 60 * 60   = 86400
// 1 giờ   = 1 * 60 * 60        = 3800
// 1 phút  = 1 * 60             = 60
// *** *** *** *** ***
// Bài 54: Giải bài tập chương 5 bài 3 phần 3
