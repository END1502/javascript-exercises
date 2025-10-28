const sumAll = function (start, end) {
    // get all number to add
    let sum = 0;

    if ((start < 0 || end < 0) ||
        (!Number.isSafeInteger(start) ||
            !Number.isSafeInteger(end))) {
        return "ERROR"
    }

    if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
