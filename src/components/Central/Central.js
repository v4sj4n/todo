import "./Central.css"
export default function Central(title = "Inbox") {
  const mainContainer = document.createElement("div")
  mainContainer.setAttribute("id", "central")

  const categoryText = document.createElement("h1")
  categoryText.textContent = title

  mainContainer.appendChild(categoryText)

  return mainContainer
}
