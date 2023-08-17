import "./Todo.css"

export default function Todo(title, description, isDone) {
  const todoContainer = document.createElement("div")
  todoContainer.setAttribute('class', 'todo')
  const titleText = document.createElement("h3")
  titleText.textContent = title
  const descriptionText = document.createElement("p")
  descriptionText.textContent = description

  const isDoneEl = document.createElement("input")
  isDoneEl.setAttribute("type", "checkbox")
  isDoneEl.checked = isDone

  todoContainer.appendChild(isDoneEl)
  todoContainer.appendChild(titleText)
  todoContainer.appendChild(descriptionText)

  return todoContainer
}


// class Todo {
//   constructor(title, description){
//       this.title = title
//       this.description = description
//   }
// }