const input = document.querySelector(".input");
const button = document.querySelector(".button");
const lists = document.querySelector(".lists");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const division=document.createElement("div"); 
  const Edit=document.createElement("button"); 
  const Remove=document.createElement("button"); 
  const buttonsContainer=document.createElement("div");
  const checkboxText=document.createElement("div");
  const checkbox=document.createElement("input")
  checkbox.type="checkbox";
  division.classList.add("todo-list-division");
  buttonsContainer.classList.add("buttonsContainer");
  checkboxText.classList.add("checkboxText");
  checkbox.classList.add("checkbox");
  Edit.classList.add("remove-edit");
  Remove.classList.add("remove-edit");
  li.innerText = input.value;
  lists.appendChild(division);
  division.appendChild(checkboxText);
  checkboxText.appendChild(checkbox);
  checkboxText.appendChild(li);
  Edit.innerHTML="Edit";
  division.appendChild(buttonsContainer);
  buttonsContainer.appendChild(Edit);
  Remove.innerHTML="Remove";
  buttonsContainer.appendChild(Remove);
  

  input.value = "";
 
})