const colorList = ["green", "yellow", "purple","blue", "cyan"]
let i = 0;

function changeColor() {
    if (i >= colorList.length) {
        i = 0;
    }
    let color = (colorList[i]);
    document.body.style.background = color;
    i += 1;
}
