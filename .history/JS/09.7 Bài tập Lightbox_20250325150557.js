{
    /* <div class="lightbox">
    <div class="lightbox-content">
        <img
            src="https://images.unsplash.com/photo-1722499205430-84682b7f46c1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="lightbox-image"
        />
    </div>
</div> */
}
const images = document.querySelectorAll(".content img");

images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
    console.log(event.target);
    const image = event.target.getAttribute("src");
    const template = `<div class="lightbox"></div>
    <div class="lightbox-content">
        <img
            src="${image}"
            alt=""
            class="lightbox-image"
        />
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
document.body.addEventListener("click", function (e) { })