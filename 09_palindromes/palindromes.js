const palindromes = function (word) {
    let lowerCaseWord = word.toLowerCase();
    let punctuation = [".", ",", ":", "!", "?"];
    let newString = "";
    for (let letter of lowerCaseWord) {
        if (punctuation.includes(letter)) {
            newString += "";
        }   else {
            newString += letter
        }
    }
    return checkpalin(newString);
};

const checkpalin = function (word) {
    let number = word.length
    if (number == 0 || number == 1) return true;
    else {
        if (word[0] == word[number - 1]) {
            return checkpalin(word.slice(1, number - 1).trim());
        }   else {
            return false;
        }
    }

}

console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;
