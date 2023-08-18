import "./Aside.css"
import Periods from "../Periods/Periods"

export default function Aside() {
  
  const asideContainer = document.createElement("aside")


  

  asideContainer.appendChild(Periods())

  return asideContainer
}
