//1
var sum = function (number1, number2) {
  if (number1 === number2) {
    return 3 * (number1 + number2);
  } else {
    return number1 + number2;
  }
};
// 2
var calculateDifference = function (number) {
  if (number > 19) {
    return (number - 19) * 3;
  } else return 19 - number;
};
//3
var divisibleBy3 = function (input) {
  var output = [];
  if (input.indexOf("*") < 0) {
    return null;
  } else {
    for (var i = 0; i <= 9; i++) {
      var change = input.replace("*", i);
      parseInt(change);
      if (change % 3 === 0) {
        output.push(change);
      }
    }
  }
  return output;
};

//4
var divisibleBy6 = function (input) {
  var input = divisibleBy3(input);
  var output = [];
  input.forEach((item) => {
    if (item % 6 === 0) {
      output.push(item);
    }
  });
  return output;
};