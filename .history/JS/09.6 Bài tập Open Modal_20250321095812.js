//  <div class="modal">
//             <div class="modal-overlay"></div>
//             <div class="modal-content">
//                 <i class="fa fa-times modal-close"></i>
//                 <div class="modal-main">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Molestiae maiores eligendi deleniti ipsa quae nam sunt quasi
//                     nisi, dignissimos eaque aliquam minus. Eius perferendis,
//                     voluptates totam iure minus consequuntur est?
//                 </div>
//             </div>
//         </div>
const button = document.querySelector(".button");
const template = `<div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <i class="fa fa-times modal-close"></i>
                <div class="modal-main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae maiores eligendi deleniti ipsa quae nam sunt quasi
                    nisi, dignissimos eaque aliquam minus. Eius perferendis,
                    voluptates totam iure minus consequuntur est?
                </div>
            </div>
        </div> `;
button.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (event) {
    if (event.target.matches(".modal-close")) {
        const modal = event.target.parentNode.parentNode; // khai báo modal là thẻ cha của thẻ cha của thẻ input
        modal.parentNode.removeChild(modal); // remove modal dấu X
    } else if (evnet.target.matches(".mo"))
});
