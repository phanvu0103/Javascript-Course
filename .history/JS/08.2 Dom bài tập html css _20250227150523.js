// Bài 136: Bài tập Modal phần 1
console.log("--------- *** Bài 136: Bài tập Modal phần 1 lập trình html  *** ---------");

console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML ---------"
);
// => hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML
const modal = document.querySelector(".modal");
// console.log(modal);
if (modal) {
    setTimeout(function () {
        modal.classList.add("is-show");
    }, 3000);
}
console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình ko cós lập trình cho HTML ---------"
);
{
    /* <div class="modal">
    <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
        <div class="modal-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            delectus quibusdam beatae unde sint. Repellendus ex nemo culpa,
            cumque sapiente vero rerum neque animi corrupti ratione laboriosam
            ducimus. Vel, rem.
        </div>
        <div class="modal-action">
            <button class="button-confirm">Confirm</button>
            <button class="button-cancel">Cancel</button>
        </div>
    </div>
</div>; */
}
