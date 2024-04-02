// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
  const createTaskForm = document.querySelector('form');
  // Add an event listener for the "submit" event on the form
  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

  // Retrieve the value of the text input    
  const taskList = event.target.querySelector('#new-task-description').value
  // Call the build the task list with the input value
  buildtasklist(taskList);
  // Reset the form field after submission 
  createTaskForm.reset();
  })
});

  // Function to create a new task list item
  function buildtasklist(taskList) {
    const taskItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    // Set the text content of the delete button to the task item
    deleteButton.textContent = 'Delete';
    // Set the text content of the task item to the input value
    taskItem.textContent = taskList;
    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);
    // Append the task item to the unordered list with id "tasks"
    document.querySelector("#tasks").appendChild(taskItem);
    // Add an event listener for the "click" event on the delete button
    deleteButton.addEventListener("click", handleDelete);
  }

  // Function to handle the "click" event on the delete button
function handleDelete(event) {
  event.target.parentNode.remove();
}



