import "./Todo.css"
import trashIcon from "../../images/icons/trash.svg"
import { todosList } from "../../utilities/todosData"
import PeriodShower from "../../utilities/PeriodShower"

export default function Todo(title, description, isDone, date) {
  const todoContainer = document.createElement("div")
  todoContainer.setAttribute("class", "todo")
  const titleText = document.createElement("h3")
  titleText.textContent = title
  const descriptionText = document.createElement("p")
  descriptionText.textContent =
    description != "" ? description : "No description"

  const isDoneEl = document.createElement("input")
  isDoneEl.setAttribute("type", "checkbox")
  isDoneEl.checked = isDone

  const dateShower = document.createElement("p")
  dateShower.textContent = PeriodShower(date)

  if (isDoneEl.checked) {
    titleText.style.textDecoration = "line-through"
    descriptionText.style.textDecoration = "line-through"
    dateShower.style.textDecoration = "line-through"
  }

  const trash = new Image()
  trash.src = trashIcon
  trash.alt = "delete todo"

  trash.addEventListener("click", () => {
    const parentNode = trash.parentNode
    const todosContainer = document.getElementById("todos-container")

    todosContainer.removeChild(parentNode)

    const updatedTodos = todosList.filter(
      (item) =>
        item.title !== titleText.textContent ||
        item.description !== descriptionText.textContent ||
        item.checkbox !== isDoneEl.checked
    )

    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  })

  isDoneEl.addEventListener("click", () => {
    if (isDoneEl.checked == true) {
      titleText.style.textDecoration = "line-through"
      descriptionText.style.textDecoration = "line-through"
      dateShower.style.textDecoration = "line-through"
    } else {
      titleText.style.textDecoration = "none"
      descriptionText.style.textDecoration = "none"
      dateShower.style.textDecoration = "none"
    }
    todosList = todosList.map((todo) => {
      if (
        todo.title == title &&
        todo.description == description &&
        todo.date == date
      ) {
        return { ...todo, checkbox: !todo.checkbox }
      }
      return todo
    })

    localStorage.setItem("todos", JSON.stringify(todosList))
  })

  todoContainer.appendChild(isDoneEl)
  todoContainer.appendChild(titleText)
  todoContainer.appendChild(descriptionText)
  todoContainer.appendChild(dateShower)
  todoContainer.appendChild(trash)

  titleText.addEventListener("click", () => {
    const editTodo = titleText.parentNode
    const titleInput = document.createElement("input")
    titleInput.value = titleText.textContent
    titleInput.setAttribute("type", "text")

    titleInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const newValue = titleInput.value.trim()
        if (newValue !== "") {
          titleText.textContent = newValue
          titleText.style.display = "block"
          editTodo.removeChild(titleInput)

          todosList = todosList.map((todo) => {
            if (
              todo.title == title &&
              todo.description == description &&
              todo.date == date
            ) {
              return { ...todo, title: newValue }
            }
            return todo
          })
          localStorage.setItem("todos", JSON.stringify(todosList))
        }
      }
    })

    titleInput.addEventListener("blur", () => {
      const newValue = titleInput.value.trim()
      if (newValue !== "") {
        titleText.textContent = newValue
        titleText.style.display = "block"
        editTodo.removeChild(titleInput)

        todosList = todosList.map((todo) => {
          if (
            todo.title == title &&
            todo.description == description &&
            todo.date == date
          ) {
            return { ...todo, title: newValue }
          }
          return todo
        })

        localStorage.setItem("todos", JSON.stringify(todosList))
      }
    })

    editTodo.insertBefore(titleInput, editTodo.childNodes[1])
    titleInput.focus()

    document.activeElement = titleText

    titleText.style.display = "none"
  })

  descriptionText.addEventListener("click", () => {
    const editTodo = descriptionText.parentNode
    const descriptionInput = document.createElement("input")
    descriptionInput.value = descriptionText.textContent
    descriptionInput.setAttribute("type", "text")

    descriptionInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const newValue = descriptionInput.value.trim()
        if (newValue !== "") {
          descriptionText.textContent = newValue
          descriptionText.style.display = "block"
          editTodo.removeChild(descriptionInput)

          todosList = todosList.map((todo) => {
            if (
              todo.title == title &&
              todo.description == description &&
              todo.date == date
            ) {
              return { ...todo, description: newValue }
            }
            return todo
          })
          localStorage.setItem("todos", JSON.stringify(todosList))
        }
      }
    })

    descriptionInput.addEventListener("blur", () => {
      const newValue = descriptionInput.value.trim()
      if (newValue !== "") {
        descriptionText.textContent = newValue
        descriptionText.style.display = "block"
        editTodo.removeChild(descriptionInput)

        todosList = todosList.map((todo) => {
          if (
            todo.title == title &&
            todo.description == description &&
            todo.date == date
          ) {
            return { ...todo, description: newValue }
          }
          return todo
        })

        localStorage.setItem("todos", JSON.stringify(todosList))
      }
    })

    editTodo.insertBefore(descriptionInput, editTodo.childNodes[2])
    descriptionInput.focus()

    descriptionText.style.display = "none"
  })

  dateShower.addEventListener("click", () => {
    const editTodo = dateShower.parentNode
    const dateInput = document.createElement("input")
    dateInput.value = dateShower.value
    dateInput.setAttribute("type", "date")

    dateInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const newValue = dateInput.value.trim()
        if (newValue !== "") {
          dateShower.textContent = PeriodShower(newValue)
          dateShower.style.display = "block"
          editTodo.removeChild(dateInput)

          todosList = todosList.map((todo) => {
            if (
              todo.title == title &&
              todo.description == description &&
              todo.date == date
            ) {
              return { ...todo, date: newValue }
            }
            return todo
          })
          localStorage.setItem("todos", JSON.stringify(todosList))
        }
      }
    })

    dateInput.addEventListener("blur", () => {
      const newValue = dateInput.value.trim()
      if (newValue !== "") {
        dateShower.textContent = PeriodShower(newValue)
        dateShower.style.display = "block"
        editTodo.removeChild(dateInput)

        todosList = todosList.map((todo) => {
          if (
            todo.title == title &&
            todo.description == description &&
            todo.date == date
          ) {
            return { ...todo, date: newValue }
          }
          return todo
        })

        localStorage.setItem("todos", JSON.stringify(todosList))
      }
    })

    editTodo.insertBefore(dateInput, editTodo.childNodes[3])
    dateInput.focus()

    dateShower.style.display = "none"
  })

  return todoContainer
}
