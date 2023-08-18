import Todo from "../Todo/Todo"
import Explainer from "../Explainer/Explainer"
import TodoCreator from "../TodoCreator/TodoCreator"
import PeriodShower from "../../PeriodShower"


import { todosList } from "../../todosData"



export default function Todos() {
  const todosContainer = document.createElement("div")
  todosContainer.setAttribute('id', 'todos-container')
  todosContainer.appendChild(Explainer())
  todosContainer.appendChild(TodoCreator())

  todosList.forEach((todo) => {
    const { title, description, isDone, date } = todo
    const formattedDate = PeriodShower(date)
    const todoEl = Todo(title, description, isDone, formattedDate)

    todosContainer.appendChild(todoEl)
  })
  document.addEventListener("todosUpdated", Todos);

  return todosContainer
}

// class Todo {
//   constructor(title, description){
//       this.title = title
//       this.description = description
//   }
// }
