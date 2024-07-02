//creating a function using Arrow-function

var transportFee = (workShift) => {
    let wShift = workShift.toLowerCase();
    if (wShift === 'morning') {
        return 'R20';
    } else if (wShift === 'afternoon') {
        return 'R10';
    } else {
        return 'free';
    }
}
