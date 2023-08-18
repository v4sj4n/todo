import "./Central.css"
import Todos from "../Todos/Todos"

export default function Central(title = "inbox") {
  const centralContainer = document.createElement("div")
  centralContainer.setAttribute("id", "central")

  const categoryText = document.createElement("h1")
  categoryText.textContent = title

  centralContainer.appendChild(categoryText)
  centralContainer.appendChild(Todos(title))

  return centralContainer
}
