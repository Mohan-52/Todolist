const firstinput = document.querySelector(".input"); // Select the first input field
const plusbutton = document.querySelector(".button"); // Select the plus button
const ulLists = document.querySelector(".lists"); // Select the unordered list container

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList")); // Get stored todo list from localStorage
  if (storedTodoList) { // If there is a stored todo list
      storedTodoList.forEach((todo) => { // Loop through each todo item
          addToDoDomList(todo); // Add the todo item to the DOM
      });
  };
});

// Function to add todo item to the DOM
function addToDoDomList(todo){
  const division=document.createElement("div"); // Create a div element for todo item
  const li = document.createElement("li"); // Create a list item element
  const checkboxText=document.createElement("div"); // Create a div for checkbox and text
  const checkbox=document.createElement("input") // Create a checkbox input element
  checkbox.type="checkbox"; // Set checkbox type
  division.classList.add("todo-list-division"); // Add class to the division
  li.classList.add("ul-li"); // Add class to list item
  li.innerText = todo.text; // Set list item text
  checkbox.classList.add("checkbox"); // Add class to checkbox
  division.appendChild(checkboxText); // Append checkboxText div to division
  checkboxText.appendChild(checkbox); // Append checkbox to checkboxText div
  checkboxText.appendChild(li); // Append list item to checkboxText div

  ulLists.appendChild(division); // Append division to unordered list

  const buttonsContainer=document.createElement("div"); // Create div for buttons
  buttonsContainer.classList.add("buttonsContainer"); // Add class to buttons container

  division.appendChild(buttonsContainer); // Append buttons container to division

  const Remove=document.createElement("button"); // Create remove button
  Remove.classList.add("remove-edit"); // Add class to remove button
  Remove.innerHTML="<i class='fa-solid fa-xmark icons'></i>"; // Set inner HTML of remove button
  buttonsContainer.appendChild(Remove); // Append remove button to buttons container

  Remove.addEventListener("click", () => { // Add click event listener to remove button
    division.parentNode.removeChild(division); // Remove the division from DOM
    updateToDoList(); // Update todo list in localStorage
  });

  const Edit=document.createElement("button"); // Create edit button
  Edit.classList.add("remove-edit"); // Add class to edit button
  Edit.innerHTML="<i class='fa-solid fa-pen-to-square icons2'></i>"; // Set inner HTML of edit button
  buttonsContainer.appendChild(Edit); // Append edit button to buttons container

  Edit.addEventListener("click", () => { // Add click event listener to edit button
    const editInput = document.createElement("input"); // Create input element for editing
    editInput.type = "text"; // Set input type to text
    editInput.value = li.innerText.trim(); // Set input value to current list item text, trimming whitespace

    li.innerHTML = ""; // Clear the list item text
    li.appendChild(editInput); // Append input field to list item
    editInput.addEventListener("keypress", (e) => { // Add keypress event listener for input field
        if (e.key === "Enter") { // If Enter key is pressed
            li.innerText = editInput.value; // Update list item text with input value
            updateToDoList(); // Update todo list in localStorage
        }
    });
  });
}

// Function to update the todo list in localStorage
function updateToDoList() {
  const todos = Array.from(ulLists.querySelectorAll(".ul-li")).map((item) => { // Get all list items and map them to an array of objects
      return { text: item.innerText.trim() }; // Return object with trimmed text
  });
  localStorage.setItem("todoList", JSON.stringify(todos)); // Store the updated todo list in localStorage
};

// Event listener for add button click
plusbutton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  if (firstinput.value.trim() !== "") { // Check if input field is not empty
      const todo = { text: firstinput.value.trim() }; // Create todo object with input text
      addToDoDomList(todo); // Add the todo item to the DOM
      updateToDoList(); // Update the todo list in localStorage
      firstinput.value = ""; // Clear the input field
  }
  else {
    firstinput.setAttribute("placeholder", "Please Enter Tasks"); // Change the placeholder text
}
});

