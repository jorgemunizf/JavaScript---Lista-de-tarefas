const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-add-task");
const tasks = document.querySelector(".task");

const createItemTask = () => {
  const itemTask = document.createElement("li");
  return itemTask;
};

inputTask.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

const cleanInput = () => {
  inputTask.value = "";
  inputTask.focus();
};

const createDeleteButton = (itemTask) => {
  itemTask.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  //   deleteButton.classList.add("delete")
  deleteButton.setAttribute("class", "delete");
  itemTask.appendChild(deleteButton);
};

const createTask = (textInpu) => {
  const itemTask = createItemTask();
  itemTask.innerText = textInpu;
  tasks.appendChild(itemTask);
  cleanInput();
  createDeleteButton(itemTask);
  saveTasks();
};

btnTask.addEventListener("click", () => {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("delete")) {
    element.parentElement.remove();
    saveTasks();
  }
});

const saveTasks = () => {
  const itemTasks = tasks.querySelectorAll("li");
  const tasksList = [];

  for (let task of itemTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace("Apagar", "").trim();
    tasksList.push(textTask);
  }
  const taskJSON = JSON.stringify(tasksList);
  localStorage.setItem("tasks", taskJSON);
};

const addSaveTask = () => {
  const tasks = localStorage.getItem("tasks");
  const tasksList = JSON.parse(tasks);

  for (let task of tasksList) {
    createTask(task);
  }
};
addSaveTask();
