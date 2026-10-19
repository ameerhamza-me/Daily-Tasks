
const newBtn = document.getElementById("newBtn");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskTitle");
const saveBtn = document.getElementById("saveBtn");
const taskList = document.getElementById("taskList");

newBtn.addEventListener("click", function () {
    taskForm.style.display = "block";
    taskInput.focus();
});

saveBtn.addEventListener("click", function () {
    const title = taskInput.value.trim();

    if (title === "") {
        alert("Please Enter a Task!");
        return;
    }

    const task = document.createElement("div");
    task.className = "task-item";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const taskTitle = document.createElement("span");
    taskTitle.textContent = title;

    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            taskTitle.style.textDecoration = "line-through";
        } else {
            taskTitle.style.textDecoration = "none";
        }
    });

    const actions = document.createElement("div");
    actions.className = "task-actions";

    actions.innerHTML = `
        <button class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    const editBtn = actions.querySelector(".edit-btn");
    const deleteBtn = actions.querySelector(".delete-btn");

    editBtn.addEventListener("click", function () {
        taskInput.value = taskTitle.textContent;
        task.remove();
        taskInput.focus();
    });

    deleteBtn.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(checkBox);
    task.appendChild(taskTitle);
    task.appendChild(actions);

    taskList.appendChild(task);
    taskInput.value = "";
});
