import "./Explainer.css"
export default function Explainer() {
  const explainerDiv = document.createElement("div")
  explainerDiv.setAttribute('id', "descriptor")


  const titleText = document.createElement("h3")
  titleText.textContent = "title"
  const descriptionText = document.createElement("h3")
  descriptionText.textContent = "description"
  const dateText = document.createElement("h3")
  dateText.textContent = "date"


  explainerDiv.appendChild(titleText)
  explainerDiv.appendChild(descriptionText)
  explainerDiv.appendChild(dateText)


  return explainerDiv
}
