import { todosList } from "../../todosData"
import Todo from "../Todo/Todo"

export default function TodoCreator() {
  const inputsContainers = document.createElement("form")
  inputsContainers.setAttribute("id", "creator-div")

  const checkboxVal = document.createElement("input")
  checkboxVal.setAttribute("type", "checkbox")
  checkboxVal.setAttribute("id", "input-todo-checkbox")

  const inputTitle = document.createElement("input")
  inputTitle.setAttribute("placeholder", "enter a title")
  inputTitle.setAttribute("id", "input-todo-title")
  inputTitle.setAttribute("type", "text")
  inputTitle.required = true

  const inputDesc = document.createElement("input")
  inputDesc.setAttribute("placeholder", "enter a description")
  inputDesc.setAttribute("type", "text")
  inputDesc.setAttribute("id", "input-todo-desc")

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "submit"

  submitBtn.addEventListener("click", () => {
    const title = inputTitle.value
    const description = inputDesc.value
    const checkbox = checkboxVal.checked

    if (title != "") {
      todosList.push({ title, description, checkbox })
      localStorage.setItem("todos", JSON.stringify(todosList))
      const todoEl = Todo(title, description, checkbox)
      const todosContainer = document.getElementById("todos-container")
      todosContainer.appendChild(todoEl)
    }

    inputTitle.value = ""
    inputDesc.value = ""
    checkboxVal.checked = false
  })

  inputsContainers.appendChild(checkboxVal)
  inputsContainers.appendChild(inputTitle)
  inputsContainers.appendChild(inputDesc)
  inputsContainers.appendChild(submitBtn)

  return inputsContainers
}
