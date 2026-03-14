let taskList = document.getElementById("taskList");
let completedCount = document.getElementById("completed");
let pendingCount = document.getElementById("pending");

function updateCounter(){
    let tasks = document.querySelectorAll("li");
    let completed = document.querySelectorAll(".completed");
    completedCount.textContent = completed.length;
    pendingCount.textContent = tasks.length - completed.length;
}

function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        li.classList.toggle("completed");
        updateCounter();
    };

    let span = document.createElement("span");
    span.textContent = taskText;

    let btnDiv = document.createElement("div");
    btnDiv.className = "task-btns";

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function(){
        let newTask = prompt("Edit task:", span.textContent);
        if(newTask !== null && newTask.trim() !== ""){
            span.textContent = newTask;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function(){
        li.remove();
        updateCounter();
    };

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDiv);

    taskList.appendChild(li);
    input.value="";
    updateCounter();
}
