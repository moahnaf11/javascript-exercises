const convertToCelsius = function(temp) {
  let answer = ((5/9) * (temp - 32));
  if (Number.isInteger(answer)) return answer;
  else return Number(answer.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let ans = ((9/5) * temp + 32);
  if (Number.isInteger(ans)) return ans;
  else return Number(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
