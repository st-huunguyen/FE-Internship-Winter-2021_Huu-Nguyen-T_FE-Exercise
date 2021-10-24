//1
var getTotalNumberByEachCase = function (number1, number2) {
  if (number1 === number2) {
    return 3 * (number1 + number2);
  };
  return number1 + number2;
};
// 2
var calculateDifferenceWith19ByEachCase = function (number) {
  if (number > 19) {
    return (number - 19) * 3;
  };
  return 19 - number;
};
//3 //4
var findNumberFromInputDivisibleForOtherNumber = function (input, number) {
  var output = [];
  for (var i = 0; i <= 9; i++) {
    var change = input.replace('*', i);
    change = parseInt(change);
    if (change % number === 0) {
      output.push(change);
    }
  }
  return output;
};
