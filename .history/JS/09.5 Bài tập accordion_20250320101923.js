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
    e.target.nextElementSibling.classList.toggle(activeStt);
    const icon = e.target.querySelector("icon");
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-");
}
