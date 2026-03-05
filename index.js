let count = 0

// let countEl = document.getElementById("count-btn")
function incrementF() {
    count += 1;
    let countEl = document.getElementById("count-btn")
    countEl.innerText = count
    // countEl.innerHTML = count

}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    let countSv = count + " - "
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += countSv
    document.getElementById("count-btn").innerText = 0
    count = 0

}