import inboxIcon from "../../images/icons/inbox.svg"
import monthIcon from "../../images/icons/month.svg"
import projectsIcon from "../../images/icons/projects.svg"
import weekIcon from "../../images/icons/week.svg"
import todayIcon from "../../images/icons/today.svg"

import Period from "../Period/Period"


const periods = [
  { title: "inbox", src: inboxIcon },
  { title: "today", src: todayIcon },
  { title: "this week", src: weekIcon },
  { title: "this month", src: monthIcon },
  { title: "projects", src: projectsIcon },
]

export default function PeriodsContainer() {
  const periodsContainer = document.createElement("div")
  periodsContainer.setAttribute("id", "periods-container")

  periods.forEach((period) => {
    const {title, src} = period
    const periodEl = Period(title, src)

    periodsContainer.appendChild(periodEl)
    
  })

  return periodsContainer
}
