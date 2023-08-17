import "./Central.css"
import Todos from "../Todos/Todos"

export default function Central(title = "Inbox") {
  const mainContainer = document.createElement("div")
  mainContainer.setAttribute("id", "central")

  const categoryText = document.createElement("h1")
  categoryText.textContent = title

  mainContainer.appendChild(categoryText)
  mainContainer.appendChild(Todos())

  return mainContainer
}
