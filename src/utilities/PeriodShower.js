import { format, isToday, isThisWeek, isThisMonth, parseISO } from "date-fns"


export default function PeriodShower(date){
    const parsedDate = parseISO(date)
    if (isToday(parsedDate)){
        return "Today"
    } else if (isThisWeek(parsedDate)){
        return format(parsedDate, "eeee")
    } else if (isThisMonth(parsedDate)){
        return format(parsedDate, "do") + " " + format(parsedDate, "MMMM")
    } else {
        return "No date"
    }

}