const getTheTitles = function(books) {
    let newArray = []
    books.forEach(book => {
        newArray.push(book["title"])
    });
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
