const reverseString = function (word) {
    const wordArr = [...word];
    let reversed = [];

    for (let i = wordArr.length; i >= 0; i--) {
        reversed += [wordArr[i]];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
