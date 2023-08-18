import "./Period.css"
import Central from "../Central/Central"

export default function Period(title, src) {
  
  const periodContainer = document.createElement("div")
  periodContainer.setAttribute("class", "period")

  const periodImage = new Image()
  periodImage.src = src

  const periodTitle = document.createElement("a")
  periodTitle.textContent = title

  periodContainer.appendChild(periodImage)
  periodContainer.appendChild(periodTitle)

  periodContainer.addEventListener('click', () =>{
    const main = document.querySelector('main')
    const centralDiv = document.querySelector('#central')
    main.removeChild(centralDiv)
    main.appendChild(Central(title))




  })

  return periodContainer
}
