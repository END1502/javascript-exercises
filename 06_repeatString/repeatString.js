const repeatString = function (word, times) {
    let msg = "";
    if (times >= 0) {
        for (let i = 0; i < times; i++) {
            msg += word;
        }
    } else {
        msg = "ERROR";
    }
    return msg;
};

// Do not edit below this line
module.exports = repeatString;
