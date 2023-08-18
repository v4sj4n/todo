import "./Explainer.css"
export default function Explainer() {
  const explainerDiv = document.createElement("div")
  explainerDiv.setAttribute('id', "descriptor")


  const titleText = document.createElement("h3")
  titleText.textContent = "title"
  const descriptionText = document.createElement("p")
  descriptionText.textContent = "description"
  const dateText = document.createElement("p")
  dateText.textContent = "date"
  const submitText = document.createElement("p")
  submitText.textContent = "submit"

  explainerDiv.appendChild(titleText)
  explainerDiv.appendChild(descriptionText)
  explainerDiv.appendChild(dateText)
  explainerDiv.appendChild(submitText)

  return explainerDiv
}
