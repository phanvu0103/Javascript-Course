const button = document.querySelector('.change');
button.addEventListener('click', handleChangeColor);
function handleChangeColor() {
    console.log("randem color hể");
    const color = randomColor();
    // document.body.style.backgroundColor = color;
    // button.style.backgroundColor = color;
}