const removeFromArray = function (arr) {
    let toRemoveItem = [];
    let removedItem = [];

    for (let i = 1; i < arguments.length; i++) {
        toRemoveItem.push(arguments[i]);
    }

    for (item of toRemoveItem) {
        const toRemoveIndex = arr.findIndex((num) => num === item);
        arr = arr.filter((num) => num !== item);
        removedItem = arr;
    }

    return removedItem;
};

// Do not edit below this line
module.exports = removeFromArray;
