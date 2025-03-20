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
    const contetn
    e.target.nextElementSibling.classList.toggle(activeStt);
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}
