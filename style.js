let addTask = document.getElementById("task");
let taskMessage = document.getElementById("message");
let button = document.getElementById("btn");
let parent = document.getElementById("parent");

button.addEventListener("click", createTask);

parent.addEventListener("dblclick", removeTask);
parent.addEventListener("click", markTask);

function createTask() {
  if (validInput(addTask.value)) {
    let groupItem = document.createElement("p");
    groupItem.innerText = addTask.value;
    parent.appendChild(groupItem);
    addTask.value = "";
    taskMessage.style.visibility = "hidden";
  } else {
    emptyInput("Write a task");
  }
}
function markTask(event) {
  const style = event.target.style;

  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}
function removeTask() {
  if (event.target.tagName === "P") {
    parent.removeChild(event.target);
  }
}
function emptyInput(message) {
  taskMessage.innerText = message;
  taskMessage.style.visibility = "visible";
}

function validInput(input) {
  if (input) return true;
  else {
    return false;
  }
}
