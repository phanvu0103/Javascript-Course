const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click");
function handleToggleMenu() {
    menu.classList.add("is-show");
}
