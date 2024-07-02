//creating a function using arrow approach

var threshold = 0;
var findItemsOver = (itemList, threshold) => {

    var results = [];

    for (let i = 0; i < itemList.length; i++) {
        const listItem = itemList[i];

        if (listItem.name === undefined) {
            listItem.name = 0;
        }
        let currentItemQty = listItem.qty;
        if (currentItemQty > 20) {
            results.push(listItem);
        }
    }
    return results;
}