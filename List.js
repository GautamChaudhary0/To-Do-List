// Select elements from the DOM
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
  console.log("Add Task function triggered.");
  if (inputBox.value === '') {  
    alert("You Must Have To Write SomeThings!");
  }
  else{
        // Create a new list item
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    //li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  
    
  // Add event listener for toggling the checked state
li.addEventListener("click", () => {
  li.classList.toggle("checked");
});

    // Clear the input box after adding the task
inputBox.value = "";
  }
}


