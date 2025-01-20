const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("add-task-button");

// Add event listener for the Add button
addTaskButton.addEventListener("click", addTask);

// Add event listener for the Enter key
inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  if (inputBox.value === '') {
    alert("You Must Have To Write Something!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = inputBox.value;
  listContainer.appendChild(li);

  // Create delete button
  const span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.textContent = "close";
  li.appendChild(span);

  // Add event listener for toggling the checked state
  li.addEventListener("click", function(e) {
    if (e.target !== span) {
      this.classList.toggle("checked");
    }
  });

  // Add event listener for delete button
  span.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent triggering the li click event
    li.remove();
  });

  // Clear the input box after adding the task
  inputBox.value = "";
}