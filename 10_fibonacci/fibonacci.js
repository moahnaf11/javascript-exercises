const fibonacci = function(num) {
    let list = [1, 1];
    let start = 0;
    while (true) {
        if (num == 1 || num == 2) {
            return 1;
        }   else if (num == 0) {
            return 0;
        }   else if (num < 0) {
            return "OOPS"
        }   else {
            list.push(list[start] + list[start + 1])
            start += 1;
            if (list.length == num) {
                return list.at(-1);
            }
        }
    }

};

// Do not edit below this line
module.exports = fibonacci;
