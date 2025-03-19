const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
    console.log(event.target);
    // 
    [...tabItems].forEach((item) => item.classList.remove("active"));// xóa trước khi thêm add active
    event.target.classList.add("active");
    // const tabContentItems = document.querySelectorAll(".tab-content-item");
    // const tabContent = document.querySelector(`#${event.target.dataset.id}`);
    // tabContentItems.forEach((item) => item.classList.remove("show"));
    // tabItems.forEach((item) => item.classList.remove("show"));
    // tabContent.classList.add("show");
}
