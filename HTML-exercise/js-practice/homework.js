// 1
var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var calculateOddTotal = function (array) {
  var sum = 0;
  var count = array.length;
  for (var i = 0; i < count; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
};
calculateOddTotal(array);

// 2
var cutString = function (string) {
  if (string && string.length > 15) {
    string = string.slice(0, 10).concat("...");
  }
  return string;
};

// 3
var capitalizeFirstLetter = function (string) {
  string.toLowerCase();
  var output = string[0].toUpperCase().concat(string.slice(1));
  return output;
};

// 4
var findMin = function (array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] <= min) {
      min = array[i];
    }
  }
  return min;
};

// 5
function student(_name, _age, _school) {
  this.name = _name;
  this.age = _age;
  this.school = _school;
}
var listStudent = [
  new student("John", 26, "Cambridge"),
  new student("Mark", 30, "Oxford"),
  new student("Bill", 28, "Havard"),
];

//  5.1
function student(_name, _age, _school) {
  this.name = _name;
  this.age = _age;
  this.school = _school;
}
var listStudent = [
  new student("John", 26, "Cambridge"),
  new student("Mark", 30, "Oxford"),
  new student("Bill", 28, "Havard"),
];
student.prototype.coding = function () {
  if (this.age >= 28) {
    return console.log("coding master");
  }
  return console.log("learning code");
};
listStudent[1].coding();
listStudent[0].coding();

// 6.
var findDuplicateNumberOf2Array = function (array1, array2) {
  var duplicate = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        duplicate.push(array1[i]);
      }
    }
  }
  return duplicate;
};

// 7
var getTotalDigit = function (number) {
  var stringNumber = number.toString().split("");
  var sum = 0;
  for (var i = 0; i < stringNumber.length; i++) {
    sum += parseInt(stringNumber[i]);
  }
  return sum;
};
