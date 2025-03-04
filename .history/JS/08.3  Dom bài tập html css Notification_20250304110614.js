console.log(
    "--------- *** Bài 138: Bài tập Notification phần 1  *** ---------"
);
// Viết 1 function tạo ra thông báo
// function createNotification() {
//     const template = ` <div class="noti">
//             <img
//                 src=".//IMG/ali-fallah-MUPZ6I5qVMI-unsplash (1).jpg"
//                 alt=""
//                 class="noti-image"
//             />
//             <div class="noti-content">
//                 <h3 class="noti-title">Welcom to Notification</h3>
//                 <p class="noti-desc">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Quasi obcaecati ut et dolore impedit nisi ratione mollitia
//                 </p>
//             </div>
//         </div>`;
//     // dùng insertAdjacentHTML
//     document.body.insertAdjacentHTML("afterbegin", template);
// }
// const timer = setInterval(function () {
//     const item = document.querySelector(".noti");
//     if (item) item.parentNode.removeChild(item);
//     createNotification(); // => nếu ko có 2 dòng lệnh trên thì sẽ xuất hiện nhiều div sau 4 giây, ta phải dùng 2 lệnh o trên để xóa
// }, 8000);
console.log(
    "--------- *** Bài 139: Bài tập Notification phần 2  *** ---------"
);
function createNotification(title = "Welcom to Notification") {
    const template = ` <div class="noti">
            <img           
                src="https://unsplash.com/s/photos/random/"
                alt=""
                class="noti-image"
            />
            <div class="noti-content">
                <h3 class="noti-title">${title}</h3>
                <p class="noti-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi obcaecati ut et dolore impedit nisi ratione mollitia
                </p>
            </div>
        </div>`;
    // dùng insertAdjacentHTML
    document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
    " Welcom to Notification Javascript",
    "Welcom course Notification",
    "Welcom to Sai Gon",
    "Welcom to Westminster",
    "Welcom Notification",
];

const timer = setInterval(function () {
    const item = document.querySelector(".noti");
    if (item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor[Math.random()* randomData.length]]
    createNotification(randomData[1]); // => nếu ko có 2 dòng lệnh trên thì sẽ xuất hiện nhiều div sau 4 giây, ta phải dùng 2 lệnh o trên để xóa
}, 5000);
