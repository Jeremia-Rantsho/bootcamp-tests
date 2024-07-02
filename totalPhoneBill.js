
var totalPhoneBill = (listString) => {
    const myList = listString.split(', ');
    let listLength = myList.length;
    let total = 0;

    for (let i = 0; i < listLength; i++) {
        if (myList[i] === 'call') {
            total += 2.75;
        } else {
            total += 0.65;
        }
    }
    total = total.toFixed(2);
    return `R${total}`;
}