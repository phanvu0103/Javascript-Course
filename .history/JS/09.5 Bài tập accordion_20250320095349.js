const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);
const activeStt = "is-active";
function handleClickAccordion(e) {
    console.log(e.target);
    e.classList.remove(activeStt);
    e.target.nextElementSibling.classList.add(activeStt);
}
