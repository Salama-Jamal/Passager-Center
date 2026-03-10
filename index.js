let count = 0;
function incrementF() {
    count += 1;
    document.getElementById("btn-increment").textContent = count;
}

function save() {
    countTxt = count + " - ";
    document.getElementById("btn-save").textContent += countTxt;
    count = 0

}