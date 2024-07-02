

var countAllPaarl = (listString) => {
    const regList = listString.split(', ');
    let paarlList = [];
    let listLength = regList.length;

    for (let i = 0; i < listLength; i++) {
        let currentRegNum = regList[i];
        if (currentRegNum.startsWith('CJ')) {
            paarlList.push(currentRegNum);
        }
    }
    return paarlList.length;
}