//creating a function using arrow approach
var mostProfitableDepartment = (salesData) => {
    //create an empty object
    let myDepartment = {};

    for (var i = 0; i < salesData.length; i++) {
        var currentDepartment = salesData[i];
        myDepartment[currentDepartment.department] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
        var currentDepartment = salesData[i];
        var totalSales = myDepartment[currentDepartment.department];
        totalSales += currentDepartment.sales;
        myDepartment[currentDepartment.department] = totalSales;
    }
    var maxSales = 0;
    var maxDepartmentSales = null;
    for (let dept in myDepartment) {

        if (myDepartment[dept] > maxSales) {
            maxDepartmentSales = dept;
            maxSales = myDepartment[dept];
        }
    }
    return maxDepartmentSales;
}