import "./Explainer.css"
export default function Explainer() {
  const explainerDiv = document.createElement("div")
  explainerDiv.setAttribute('id', "descriptor")
  const isDoneEl = document.createElement("input")
  isDoneEl.setAttribute("type", "checkbox")
  isDoneEl.checked = true

  const titleText = document.createElement("h3")
  titleText.textContent = "title"
  const descriptionText = document.createElement("p")
  descriptionText.textContent = "description"

  explainerDiv.appendChild(isDoneEl)
  explainerDiv.appendChild(titleText)
  explainerDiv.appendChild(descriptionText)

  return explainerDiv
}
