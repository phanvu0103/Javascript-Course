const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener(("click", handleToggleMenu));
function handleToggleMenu() {
    menu.classList.add("is-show");
}
