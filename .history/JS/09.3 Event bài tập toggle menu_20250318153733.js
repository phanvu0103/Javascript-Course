console.log("--------- *** Bài 159: Bài tập toggle menu phần 1  *** ---------");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}
console.log("--------- *** Bài 160: Bài tập toggle menu phần 2  *** ---------");
document.addEventListener("click", handleclickOutMenu);
function handleclickOutMenu(event) {
    // console.log(event.target);
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
    }
}
// if (!menu.contains(event.target) && !event.toggle.matches(".menu-toggle")) {