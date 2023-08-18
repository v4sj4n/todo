import "./Todo.css"
import trashIcon from "../../images/icons/trash.svg"
import { todosList } from "../../todosData"

export default function Todo(title, description, isDone, date) {
  const todoContainer = document.createElement("div")
  todoContainer.setAttribute("class", "todo")
  const titleText = document.createElement("h3")
  titleText.textContent = title
  const descriptionText = document.createElement("p")
  descriptionText.textContent = description

  const isDoneEl = document.createElement("input")
  isDoneEl.setAttribute("type", "checkbox")
  isDoneEl.checked = isDone

  const trash = new Image()
  trash.src = trashIcon
  trash.alt = "delete todo"

  const dateShower = document.createElement("p")
  dateShower.textContent = date

  trash.addEventListener("click", () => {
    const parentNode = trash.parentNode
    const todosContainer = document.getElementById("todos-container")

    todosContainer.removeChild(parentNode)

    const updatedTodos = todosList.filter(
      (item) =>
        item.title !== titleText.textContent ||
        item.description !== descriptionText.textContent ||
        item.checkbox !== isDoneEl.checked
    )

    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  })

  isDoneEl.addEventListener("click", () => {
    if (isDoneEl.checked == true) {
      titleText.style.textDecoration = "line-through"
      descriptionText.style.textDecoration = "line-through"
    } else {
      titleText.style.textDecoration = "none"
      descriptionText.style.textDecoration = "none"
    }
  })

  todoContainer.appendChild(isDoneEl)
  todoContainer.appendChild(titleText)
  todoContainer.appendChild(descriptionText)
  todoContainer.appendChild(dateShower)
  todoContainer.appendChild(trash)

  return todoContainer
}
