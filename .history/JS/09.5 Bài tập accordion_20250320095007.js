const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Add an event listener to each of the accordion headers
 */
const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);

/**
 * This function is called when an accordion header is clicked
 * @param {Event} e - The event object
 */
function handleClickAccordion(e) {
    // Get the next element sibling of the header (the content)
    const accordionContent = e.target.nextElementSibling;
    // Toggle the is-active class on the content
    accordionContent.classList.toggle("is-active");
    console.log(e.target);
    e.target.nextElementSibling.classList.add("is-active");
}
/******  740ad355-c8bd-443c-aae9-a03641899410  *******/
