const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);
const activeStt = "is-active";
function handleClickAccordion(e) {
    console.log(e.target);
    // [...accordionHeaders].forEach((item) =>
    //     item.nextElementSibling.classList.remove(activeStt)
    // );
    const content = e.target.nextElementSibling;
    console.log(content.scrollHeight); // đếm chiều cao của element
    // scrollHeight: chiều cao của phần tử bao gồm phần nội dung và phần padding nhưng không bao gồm phần border và margin.
    // offsetHeight: chiều cao của phần tử bao gồm phần nội dung, phần padding, phần border nhưng không bao gồm phần margin.
    content.style.height = `${content.scrollHeight}px`; // set chiều cao của element
    content.classList.toggle(activeStt);
    if (content.classList.contains("is-active")) {
        content.style.height = "0px"; // ko chứa thì bằng 0, nếu có chứ thì nằm ở phần từ `${content.scrollHeight}px`
    }
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    // thay đổi icon khi click mũi tên lên
    icon.classList.toggle("fa-angle-up"); // thay đổi icon khi click mũi tên xuống
}
