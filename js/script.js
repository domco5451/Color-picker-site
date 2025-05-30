const colorList = ["Green", "Yellow", "Purple","Blue", "Cyan"]
let i = 0;
let colorCode = document.getElementById("colorName");

function changeColor() {
    if (i >= colorList.length) {
        i = 0;
    }
    let color = (colorList[i]);
    document.body.style.background = color;
    colorCode.textContent = color;
    i += 1;
}
