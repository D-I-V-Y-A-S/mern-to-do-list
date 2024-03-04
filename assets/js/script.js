const inputbox = document.querySelector("#box");
const list = document.querySelector("#list");
const DisplayElement = document.getElementById("view");
const workRadio = document.getElementById("selector1");
const personalRadio = document.getElementById("selector2");
let count = 0;

function addtask() {
    if (inputbox.value.trim() === '') {
        showAlert("You should enter some task!!");
    } else if (!workRadio.checked && !personalRadio.checked) {
        showAlert("Please pick a category Work or Personal.");
    } else {
        addItem(inputbox.value);
        inputbox.value = "";
        workRadio.checked = false;
        personalRadio.checked = false;
    }
}

let showAlert = (message) => {
    alert(message);
};

let addItem = (task) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${task}<i><img src='assets/images/delete.png' alt='Delete'></i>`;
    list.appendChild(listItem);
    let deleteButton = listItem.querySelector('i');
    deleteButton.addEventListener('click', () => {
        removeItem(listItem);
    });

    if (workRadio.checked) {
        listItem.style.color = "blue";
    } else if (personalRadio.checked) {
        listItem.style.color = "Deeppink";
    } else {
        listItem.style.color = "Black";
    }

    if (count === 0) {
        DisplayElement.style.display = "block";
        count++;
    }
};

let removeItem = (item) => {
    list.removeChild(item);
};
