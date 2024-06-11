const findTheOldest = function(people) {
    let newArray = [];
    let age = undefined;
    
    people.forEach(details => {
        if (details["yearOfDeath"] == undefined) {
            age = new Date().getFullYear() - details["yearOfBirth"];
        }   else {
            age = details["yearOfDeath"] - details["yearOfBirth"];
        }
        newArray.push(age);

    })
    let oldest = Math.max(...newArray);
    let index = newArray.indexOf(oldest);
    return people[index];
};




// Do not edit below this line
module.exports = findTheOldest;
