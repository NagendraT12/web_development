const textArea = document.querySelector(".textarea");
const button = document.querySelector(".buttoninput");
const todoList = document.querySelector(".todolist");

// Event Listener for adding tasks
button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
    if (textArea.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    console.log("Button clicked");
    console.log(textArea.value);

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo-item"); // Added a class for styling

    const item = document.createElement("p");
    item.innerHTML = textArea.value;

    toDoDiv.appendChild(item);

    // Creating delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("deleteButton"); // Assign class name for event listener

    toDoDiv.appendChild(deleteButton);
    todoList.appendChild(toDoDiv);

    textArea.value = ""; // Clear textarea
}

// Event Listener for deleting tasks
todoList.addEventListener("click", deleteItem);

function deleteItem(e) {
    const item = e.target;
    console.log(item);

    if (item.classList.contains("deleteButton") || item.closest(".deleteButton")) {
        const parent = item.closest(".todo-item");
        parent.remove();
    }
}
