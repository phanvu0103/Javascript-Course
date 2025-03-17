const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = [
    "#ffa40",
    "#00aefd",
    "#07a787",
    "#ffb86c",
    "#f5c6cb",
    "#2979ff",
    "#e74c3c",
];
function handleChangeColor() {
    // console.log("random color here");
    const color = colors[Math.floor(Math.random() * colors.length)];
    // document.body.setAttribute("style", "background-color: red"); // => change background color red
    document.body.style.backgroundColor = "red"; // => change background color red

    button.style.backgroundColor = color;
}
