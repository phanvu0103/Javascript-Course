const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);
const activeStt = "is-active";
function handleClickAccordion(e) {
    console.log(e.target);
    // [...accordionHeaders].forEach((item) =>
    //     item.nextElementSibling.classList.remove(activeStt)
    // );
    const content = e.target.nextElementSibling;
    console.log(content.scrollHeight); // đếm chiều cao của element
    content.style.height = `${content.scrollHeight}px`; // set chiều cao của element
    content.classList.toggle(activeStt);
if(content.classList.con)
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    // thay đổi icon khi click mũi tên lên
    icon.classList.toggle("fa-angle-up"); // thay đổi icon khi click mũi tên xuống
}
