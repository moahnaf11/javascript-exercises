const sumAll = function(num1, num2) {
    let total = 0;
    let i = num1;
    if ((num1 < 0 || num2 < 0) || (typeof(num1) != typeof(7) || typeof(num2) != typeof(7))) {
        return "ERROR";
    }   else if (num1 > num2) {
        i = num2;
        for (; i <= num1; i++) {
            total += i;
        }
    }   else {
        for (; i <= num2; i++) {
            total += i;
        }
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
