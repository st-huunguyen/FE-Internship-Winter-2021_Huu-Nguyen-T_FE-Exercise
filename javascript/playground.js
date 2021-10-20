//1
var sum = function (a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
};
// 2
var difference = function (a) {
  if (a > 19) {
    return (a - 19) * 3;
  } else return 19 - a;
};
//3
var divisibleBy3 = function (a) {
  var output = [];
  if (a.indexOf("*") < 0) {
    return null;
  } else {
    for (var i = 0; i <= 9; i++) {
      var change = a.replace("*", i);
      parseInt(change);
      if (change % 3 === 0) {
        output.push(change);
      }
    }
  }
  return output;
};

//4
var divisibleBy6 = function (a) {
  var input = divisibleBy3(a);
  var output = [];
  input.forEach((item) => {
    if (item % 6 === 0) {
      output.push(item);
    }
  });
  return output;
};
