const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
    // console.log(event.target);
    // xóa hết tất cả các class active ở các tab-item
    [...tabItems].forEach((item) => item.classList.remove("active")); // xóa trước khi thêm add active
    // sau đó add các class active vào hiện tại
    event.target.classList.add("active");
    const tabNumber = parseInt(event.target.dataset.tab);
    // [...tabContent].forEach((item) => item.classList.remove("active")); // -1 de lay index cua tab content tuong ung nhưng thay đổi thứ tự thì ko đúng như mình html đặt ra nên mình thê dấu {} sau [...tabContent].forEach((item) =>
    [...tabContent].forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("data-tab"))===;
    });

    // xóa trước khi thêm add active
    // [...tabContent][tabNumber - 1].classList.add("active");

    // const tabContentItems = document.querySelectorAll(".tab-content-item");
    // const tabContent = document.querySelector(`#${event.target.dataset.id}`);
    // tabContentItems.forEach((item) => item.classList.remove("show"));
    // tabItems.forEach((item) => item.classList.remove("show"));
    // tabContent.classList.add("show");
}
