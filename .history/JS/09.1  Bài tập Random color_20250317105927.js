const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const color = ["#ffa40","#00aefd","#07a787",""]
function handleChangeColor() {
    console.log("randem color here");
    const color = randomColor();
    // document.body.style.backgroundColor = color;
    // button.style.backgroundColor = color;
},
