const inputbox = document.querySelector("#box");
const list = document.querySelector("#list");
const DisplayElement = document.getElementById("view");
let count = 0;

function addtask() {
    if (inputbox.value.trim() === '') {
        showAlert("You should enter some task!!");
    } else {
        addItem(inputbox.value);
        inputbox.value = "";
    }
}

let showAlert = (message) => {
    alert(message);
};

let addItem = (task) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${task}<i></i>`;
    list.appendChild(listItem);
    if (count === 0) {
        DisplayElement.style.display = "block";
        count++;
    }
};
