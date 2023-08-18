import Todo from "../Todo/Todo"
import Explainer from "../Explainer/Explainer"
import TodoCreator from "../TodoCreator/TodoCreator"
import { todosList } from "../../utilities/todosData"
import { isThisMonth, isThisWeek, isToday, parseISO } from "date-fns"
todosList
import "./Todos.css"

export default function Todos(period = "inbox") {
  const todosContainer = document.createElement("div")
  todosContainer.setAttribute("id", "todos-container")
  todosContainer.appendChild(Explainer())
  todosContainer.appendChild(TodoCreator())
  let listToIterate


  switch (period) {
    case "inbox":
      listToIterate = todosList
      break
    case "today":
      listToIterate = todosList.filter((todo) => isToday(parseISO(todo.date)))
      break
    case "this week":
      listToIterate = todosList.filter((todo) =>
        isThisWeek(parseISO(todo.date))
      )
      break
    case "this month":
      listToIterate = todosList.filter((todo) =>
        isThisMonth(parseISO(todo.date))
      )
      break

    default:
      listToIterate = todosList
      break
  }

  listToIterate.forEach((todo) => {
    const { title, description, checkbox, date } = todo

    const todoEl = Todo(title, description, checkbox, date)

    todosContainer.appendChild(todoEl)
  })

  return todosContainer
}

// class Todo {
//   constructor(title, description){
//       this.title = title
//       this.description = description
//   }
// }
