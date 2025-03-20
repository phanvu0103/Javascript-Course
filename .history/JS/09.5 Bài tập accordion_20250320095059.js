const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);
const activeStt = "is"
function handleClickAccordion(e) {
    console.log(e.target);
    e.target.nextElementSibling.classList.add("is-active");
}
