const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach(item => item.addEventListener("click", handleclick));
function handleclick(evnet)