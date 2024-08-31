const input = document.querySelector(".input");
const button = document.querySelector(".button");
const lists = document.querySelector(".lists");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const division=document.createElement("div"); 
  /* created division that holds the all content */
  const Edit=document.createElement("button"); 
  /* created Edit Button*/
  const Remove=document.createElement("button"); 
  /* created Remove Button*/
  const buttonsContainer=document.createElement("div");
  /* created  buttonsContainer that holds the Edit and Remove Button */
  const checkboxText=document.createElement("div");
   /* created checkboxText that holds the Checkbox and li */
  const checkbox=document.createElement("input")
  checkbox.type="checkbox";
  /* created checkbox */
  division.classList.add("todo-list-division");
  /* added todo-list-division class to division */
  buttonsContainer.classList.add("buttonsContainer");
  /* added buttonsContainer class to buttonsContainer */
  checkboxText.classList.add("checkboxText");
   /* added checkboxText class to checkboxText div */
  checkbox.classList.add("checkbox");
   /* added checkbox class to checkbox */
  Edit.classList.add("remove-edit");
  /* added remove-edit class to Edit Button */
  Remove.classList.add("remove-edit");
   /* added remove-edit class to Remove Button */
  li.innerText = input.value;
  // Set the text of the list item (li) to the current value of the input field
  lists.appendChild(division);
  /* added division to lists */
  division.appendChild(checkboxText);
  /* added checkboxText class to division */
  checkboxText.appendChild(checkbox);
  /* added checkbox class to checkboxText */
  checkboxText.appendChild(li);
  /* added li class to checkboxText div*/
  Edit.innerHTML="Edit";
  /* added text Edit to Edit button*/
  division.appendChild(buttonsContainer);
  /* added buttonsContainer div  to division */
  buttonsContainer.appendChild(Edit);
  /* added Edit button  to buttonsContainer */
  Remove.innerHTML="Remove";
  /* added Remove text to  Remove button*/
  buttonsContainer.appendChild(Remove);
  /* added Remove button  to buttonsContainer */

  input.value = "";
  //seting empty input field
})