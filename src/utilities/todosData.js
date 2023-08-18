export let todosList = [];

if (localStorage.getItem("todos")) {
  todosList = JSON.parse(localStorage.getItem("todos"));
}