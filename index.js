let count = 0;
function incrementF() {
    count += 1;
    document.getElementById("btn btn-increment").textContent = count;
}

function save() {
    countTxt = count + " - ";
    document.getElementById("btn btn-save").textContent += countTxt;
    count = 0
}