// 1
var practice1 = function () {
  var mang = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  var sum = 0;
  var count = mang.length;
  for (var i = 0; i < count; i++) {
    if (mang[i] % 2 !== 0) {
      sum += mang[i];
    }
  }
  return sum;
};

// 2
var practice2 = function (string) {
  var output = "";
  if (string.length > 15) {
    output = string.slice(0, 10).concat("...");
  } else output = string;
  return output;
};

// 3
var practice3 = function (string) {
  var output = "";
  string.toLowerCase();
  output = string[0].toUpperCase().concat(string.slice(1, string.length));
  return output;
};

// 4
var practice4 = function (array) {
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
  } else {
    return console.log("learning code");
  }
};
listStudent[1].coding();

// 6.
var practice6 = function (array1, array2) {
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
var practice7 = function (number) {
  var stringNumber = number.toString().split("");
  var sum = 0;
  for (var i = 0; i < stringNumber.length; i++) {
    sum += parseInt(stringNumber[i]);
  }
  return sum;
};
