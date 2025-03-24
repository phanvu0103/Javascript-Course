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
document.body.addEventListener("click")