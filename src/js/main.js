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

const createTask = (textInpu) => {
  const itemTask = createItemTask();

  itemTask.innerText = textInpu;

  tasks.appendChild(itemTask);
};

btnTask.addEventListener("click", () => {
  if (!inputTask.value) return;

  createTask(inputTask.value);
});
