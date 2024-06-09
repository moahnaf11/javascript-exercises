const removeFromArray = function(arrOne, ...args) {
    args.forEach((item) => {
        let itemPosition = arrOne.indexOf(item);
        if (itemPosition > -1) {
            arrOne.splice(itemPosition, 1);
        }
        let endPosition = arrOne.lastIndexOf(item);
        if (endPosition > -1) {
            arrOne.splice(endPosition, 1)
        }
    })
    return arrOne;
};

// Do not edit below this line
module.exports = removeFromArray;
