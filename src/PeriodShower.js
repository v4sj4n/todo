import { format, isToday, isThisWeek, isThisMonth, parseISO } from "date-fns"


export default function PeriodShower(date){
    const parsedDate = parseISO(date)
    if (isToday(parsedDate)){
        return "Today"
    } else if (isThisWeek(parsedDate)){
        return "This week"
    } else if (isThisMonth(parsedDate)){
        return "This month"
    } else {
        return "No date"
    }

}