//select elements

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  //Event Listeners

  addTaskBtn.addEventListener("click", addTask);

  //(Optional: let user hit Enter to add a task)

  if (!taskInput || !addTaskBtn || !taskList) {
    console.error(
      "Missing DOM element: check your IDS (taskInput, addTask, taskList"
    );
    return;
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim(); //get text and remove spaces

    if (taskText === "") return; //ignore empty tasks

    // create li element

    const li = document.createElement("li");
    li.textContent = taskText;

    //add delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => li.remove());

    //append delete button to li
    li.appendChild(deleteBtn);

    // Add the li to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
    taskInput.focus();
  }
});
