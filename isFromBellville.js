//creating a function using "Function Expression style"

var isFromBellville = function (regNumber) {
    if (regNumber.startsWith("CY")) {
        return true;
    } else {
        return false;
    }
}