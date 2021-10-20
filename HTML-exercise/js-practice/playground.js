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
//3
var findNumberDivisibleBy3 = function (input) {
  var output = [];
  for (var i = 0; i <= 9; i++) {
    var change = input.replace("*", i);
    change=parseInt(change);
    if (change % 3 === 0) {
      output.push(change);
    }
  }
  return output;
};

//4
var findNumberDivisibleBy6 = function (input) {
  var input = findNumberDivisibleBy3(input);
  var output = [];
  input.forEach((item) => {
    if (item % 6 === 0) {
      output.push(item);
    }
  });
  return output;
};
