import "./style.css"
import Nav from "./components/Nav/Nav"
import Aside from "./components/Aside/Aside"
import Central from "./components/Central/Central"

const body = document.body
const main = document.createElement("main")
main.appendChild(Aside())
main.appendChild(Central())

body.appendChild(Nav())

body.appendChild(main)
