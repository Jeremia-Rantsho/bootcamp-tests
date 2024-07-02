//creating a function using "Arrow-Function" style

var isWeekday = (weekDay) => {
    let weekday = weekDay.toLowerCase();

    switch (weekday) {
        case "monday":
            return true;
            break;
        case "tuesday":
            return true;
            break;
        case "wednesday":
            return true;
            break;
        case "thursday":
            return true;
            break;
        case "friday":
            return true;
            break;
        default:
            return false;
    }
}