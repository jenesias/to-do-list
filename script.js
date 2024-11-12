const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = todoInput.value.trim();
    // if (taskText === "") {
    //     alert("Task cannot be empty!");
    //     return;
    // }

    const listItem = document.createElement('li');
    listItem.innerHTML = `${taskText} <button class="remove-btn">Remove</button>`;

    todoList.appendChild(listItem);
    todoInput.value = "";  // Clear the input field

    // Bug: The remove button is not attached correctly
    const removeBtn = listItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', removeTask);

}

function removeTask(event) {
    const task = event.target.parentElement;
    todoList.removeChild(task);
}
function renderTasks() {
    todoList.innerHTML = ""; // Clear the list first
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        // Bug: Using `index` directly in the event listener could cause issues
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            tasks.splice(index, 1); // Remove task by index
            renderTasks();
        };

        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}

// function renderTasks() {
//     todoList.innerHTML = ""; // Clear the list first
//     tasks.forEach((task, index) => {
//         const li = document.createElement("li");
//         li.textContent = task;

//         const removeButton = document.createElement("button");
//         removeButton.textContent = "Remove";
        
//         // Fix: Use the task text as the unique identifier in the event handler
//         removeButton.onclick = function() {
//             tasks.splice(tasks.indexOf(task), 1); // Remove task by its value
//             renderTasks();
//         };

//         li.appendChild(removeButton);
//         todoList.appendChild(li);
//     });
// }

function addTask() {
    const taskText = todoInput.value.trim(); // Get the task input and remove any extra spaces
    if (taskText === "") { // Check if the input is empty
        alert("Task cannot be empty!"); // Show an alert if the input is empty
        return;
    }

    // Check if the task already exists in the tasks array
    if (tasks.includes(taskText)) {
        alert("This task already exists!"); // Alert the user that the task is a duplicate
        return; // Don't add the task if it's a duplicate
    }

    tasks.push(taskText); // Add the task to the tasks array
    renderTasks(); // Re-render the task list
    todoInput.value = ""; // Clear the input field
}
