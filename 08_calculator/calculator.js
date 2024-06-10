const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(list) {
  let total = 0;
  list.forEach(item => total += item);
  return total;
	
};

const multiply = function(list) {
  let total = 1;
  list.forEach(item => total *= item)
  return total;

};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorial(num - 1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
