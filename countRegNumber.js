//creating a function using "Arrow Function" 

var countRegNumber = (regString) => {
    let myList = [];
    myList = regString.split(",");
    return myList.length;
};
