const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);
const activeStt = "is-active";
function handleClickAccordion(e) {
    console.log(e.target);
    [...accordionHeaders].forEach((item) =>
        item.nextElementSibling.classList.remove(activeStt)
    );
    e.target.nextElementSibling.classList.<label className="cursor-pointer">
      <input type="checkbox" name="" id="" className="hidden" />
      <span className="rounded-full w-[100px] bg-blue-500 p-2 inline-block h-12">
        <span className="inline-block w-8 h-8 bg-white rounded-full translate-x-[52px]"></span>
      </span>
    </label>(activeStt);
}
