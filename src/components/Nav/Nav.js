import "./Nav.css"
import todoIcon from "../../images/icons/todo.svg"

export default function Nav() {
  const navContainer = document.createElement("nav")

  const todo = new Image()
  todo.src = todoIcon

  const todoTitle = document.createElement("h1")
  todoTitle.textContent = "To-Do"
  todoTitle.style.color = "#d3d3d3"

  navContainer.appendChild(todo)
  navContainer.appendChild(todoTitle)

  return navContainer
}
