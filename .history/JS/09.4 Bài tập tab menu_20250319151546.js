const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
    console.log(event.target);
    // xóa hết tất cả các class active ở các tab-item
    [...tabItems].forEach((item) => item.classList.remove("active")); // xóa trước khi thêm add active
    // sau đó add các class active vào hiện tại
    event.target.classList.add("active");
    // const tabContentItems = document.querySelectorAll(".tab-content-item");
    // const tabContent = document.querySelector(`#${event.target.dataset.id}`);
    // tabContentItems.forEach((item) => item.classList.remove("show"));
    // tabItems.forEach((item) => item.classList.remove("show"));
    // tabContent.classList.add("show");
}
const tabNumber = event.target.dataset.;