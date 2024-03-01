const inputbox = document.getElementById("box");
let list = document.getElementById("list-items");
function addtask() {
    if (inputbox.value === '') {
        alert("You should enter some task!!");
    }
    else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        list.appendChild(li);
        inputbox.value = " ";
    }
    const listContainer = document.getElementById("list-items");
    listContainer.addEventListener("click", function (event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === "li") {
            clickedElement.classList.toggle("checked");
        } else if (clickedElement.tagName === "span") {
            const parentLi = clickedElement.parentElement;
            parentLi.remove();
        }
    }, false);



}
