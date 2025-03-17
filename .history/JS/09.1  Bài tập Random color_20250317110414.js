const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const color = [
    "#ffa40",
    "#00aefd",
    "#07a787",
    "#ffb86c",
    "#f5c6cb",
    "#2979ff",
    "#e74c3c",
];
function handleChangeColor() {
    // console.log("randem color here");

    document.body.setAttribute("style", "background-color: red"); // 
    // button.style.backgroundColor = color;
}
