// Bài 136: Bài tập Modal phần 1
console.log(
    "--------- *** Bài 136: Bài tập Modal phần 1 lập trình html css *** ---------"
);

// => hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML

console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML dễ ---------"
);
// const modal = document.querySelector(".modal");
// // console.log(modal);
// if (modal) {
//     setTimeout(function () {
//         modal.classList.add("is-show");
//     }, 3000);
// }
console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình ko cós lập trình cho HTML ---------"
);

//  Bài 137: Bài tập Modal phần 2
console.log("---------  JS không có trên html  ---------");
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
console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML trung bình ---------"
);

// const template = `<div class="modal">
//     <div class="modal-content">
//         <i class="fa fa-times modal-close"></i>
//         <div class="modal-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
//             delectus quibusdam beatae unde sint. Repellendus ex nemo culpa,
//             cumque sapiente vero rerum neque animi corrupti ratione laboriosam
//             ducimus. Vel, rem.
//         </div>
//         <div class="modal-action">
//             <button class="modal-confirm">Confirm</button>
//             <button class="modal-cancel">Cancel</button>
//         </div>
//     </div>
// </div>;`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
// const modal = document.querySelector(".modal");
// // console.log(modal);
// if (modal) {
//     setTimeout(function () {
//         modal.classList.add("is-show");
//     }, 3000);
// }
console.log(
    "---------  hiện bảng trong div modal sau 3 giây khi mình lập trình cho HTML khó hơn tự viết html bằng javascript ---------"
);
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quibusdam beatae unde sint. Repellendus ex nemo culpa, cumque sapiente vero rerum neque animi corrupti ratione laboriosam ducimus. Vel, rem.";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalConfirm = document.createElement("button");
modalConfirm.className.add("")
//
document.body.appendChild(modal);
