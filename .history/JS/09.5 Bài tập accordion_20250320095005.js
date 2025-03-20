const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);

/*************  ✨ Codeium Command 🌟  *************/
function handleClickAccordion(e) {
    console.log(e.target);
    e.target.nextElementSibling.classList.add("is-active");
}
/******  740ad355-c8bd-443c-aae9-a03641899410  *******/
