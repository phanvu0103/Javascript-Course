console.log("---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML ---------");
// => hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML
const modal = document.querySelector(".modal");
// console.log(modal);
if (modal) {
    setTimeout(function () {
        modal.classList.add("is-show");
    }, 3000);
}
console.log("---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML ---------");
