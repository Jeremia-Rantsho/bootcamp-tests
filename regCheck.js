//creating a function using "Function Expression Style"

var regCheck = function (regNumber, regLoc) {
    if (regLoc === "GP" || regLoc === "EC" || regLoc === "L" || regLoc === "MP") {
        if (regNumber.endsWith(regLoc) === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
