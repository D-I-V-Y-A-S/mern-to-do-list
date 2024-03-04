const inputbox = document.querySelector("#box");
const list = document.querySelector("#list");
const DisplayElement = document.getElementById("view");
const workRadio = document.getElementById("selector1");
const personalRadio = document.getElementById("selector2");
let count = 0;

function addTask() {
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
    listItem.innerHTML = `${task} <p><img src='assets/images/delete.png' alt="delete-icon"></p><i><img src='assets/images/edit.png' alt='edit-icon'></i><b><img src='assets/images/bookmark.png' alt="save-icon"></b>`;
    list.appendChild(listItem);

    let deleteButton = listItem.querySelector('p');
    deleteButton.addEventListener('click', () => {
        removeItem(listItem);
    });

    let editButton = listItem.querySelector('i');
    editButton.addEventListener('click', () => {
        editItem(listItem);
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
let editItem = (listItem) => {
    let taskText = listItem.firstChild;
    listItem.contentEditable = true;
    listItem.focus();
    let saveButton = listItem.querySelector('b');
    saveButton.style.display = 'inline';
    saveButton.addEventListener('click', () => {
    listItem.contentEditable = false;
    saveButton.style.display = 'none';
    });
};
