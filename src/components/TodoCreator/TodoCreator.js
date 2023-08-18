import { parseISO } from "date-fns"
import { todosList } from "../../todosData"
import Todo from "../Todo/Todo"
import "./TodoCreator.css"
import PeriodShower from "../../PeriodShower"

export default function TodoCreator() {
  const inputsContainers = document.createElement("form")
  inputsContainers.setAttribute("id", "creator-div")

  const datePicker = document.createElement("input")
  datePicker.setAttribute("type", "date")
  datePicker.setAttribute("id", "input-todo-date")

  const inputTitle = document.createElement("input")
  inputTitle.setAttribute("placeholder", "enter a title")
  inputTitle.setAttribute("id", "input-todo-title")
  inputTitle.setAttribute("type", "text")

  const inputDesc = document.createElement("input")
  inputDesc.setAttribute("placeholder", "enter a description")
  inputDesc.setAttribute("type", "text")
  inputDesc.setAttribute("id", "input-todo-desc")

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "submit"

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const title = inputTitle.value
    const description = inputDesc.value
    const checkbox = false
    const date = datePicker.value ? PeriodShower(datePicker.value): ""

    console.log({ title, description, checkbox, date })

    if (title != "") {
      todosList.push({ title, description, checkbox, date })
      localStorage.setItem("todos", JSON.stringify(todosList))
      const todoEl = Todo(title, description, checkbox, date)
      const todosContainer = document.getElementById("todos-container")
      todosContainer.appendChild(todoEl)
    }

    inputTitle.value = ""
    inputDesc.value = ""
  })

  inputsContainers.appendChild(inputTitle)
  inputsContainers.appendChild(inputDesc)
  inputsContainers.appendChild(datePicker)
  inputsContainers.appendChild(submitBtn)

  return inputsContainers
}
