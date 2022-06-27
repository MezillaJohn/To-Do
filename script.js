"use strict";

// SELECTING ELEMENTS
const form = document.querySelector(".task-form");
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
// const filter = document.querySelector(".filter").value;
const taskContent = document.querySelector(".task-content");
const taskItem = document.querySelector("li");
const clearTask = document.querySelector(".clear-task");

form.addEventListener("submit", submitEvent);
taskContent.addEventListener("click", deleteItems);
clearTask.addEventListener("click", clearAll);

function submitEvent(e) {
  // add a behaviour when nothing is imputed
  if (taskInput.value == "") {
    alert("Add a task");
    taskContent = "";
  }

  //create li element
  const li = document.createElement("li");
  //add a class name
  li.className = "task-item";
  // append li to ul
  taskContent.appendChild(li);
  //create a element
  const a = document.createElement("a");
  //add class name to the a element
  a.className = "task-link";
  //create a text node on the a element
  a.appendChild(document.createTextNode(taskInput.value));
  // append the a element to the li
  li.appendChild(a);
  //create the span element
  const span = document.createElement("span");
  // add a class name to the span element
  span.className = "delete";
  //append a text to the span element
  span.appendChild(document.createTextNode("Delete"));
  // append the span element to the ul
  li.appendChild(span);

  taskInput.value = "";
  e.preventDefault();
}

// delete single task item
function deleteItems(e) {
  if (e.target.parentElement.classList.contains("task-item")) {
    e.target.parentElement.remove();
  }
}

// clear the all task items
function clearAll() {
  // taskContent.innerHTML = "";
  while (taskContent.firstChild) {
    taskContent.removeChild(taskContent.firstChild);
  }
}
