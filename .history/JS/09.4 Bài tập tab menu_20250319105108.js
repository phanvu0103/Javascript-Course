const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
    console.log(event.target);
    // const tabContentItems = document.querySelectorAll(".tab-content-item");
    // const tabContent = document.querySelector(`#${event.target.dataset.id}`);
    // tabContentItems.forEach((item) => item.classList.remove("show"));
    // tabItems.forEach((item) => item.classList.remove("show"));
    event.target.classList.add("active");
    // tabContent.classList.add("show");
}
