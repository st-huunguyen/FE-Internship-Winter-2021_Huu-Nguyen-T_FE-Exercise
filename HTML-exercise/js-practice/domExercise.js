// Câu 1
var calculateAge = function () {
  var input = document.getElementById('input');
  input.placeholder="nhập năm sinh";
  var submitButton = document.getElementById('button');
  var output = document.getElementById('output');
  var age;

  submitButton.onclick = function (e) {
    e.preventDefault();
    var yearOfBirth = input.value;
    var currentYear = new Date().getFullYear();
    age = currentYear - parseInt(yearOfBirth);
    output.textContent = "Tuổi của bạn là: " + age;
  };
};
// Câu 2
var options = [
  {
    title: "Basic",
    price: "$10/month",
    benefit: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access",
    ],
    action: "Get Started"
  },
  {
    title: "Pro",
    price: "$30/month",
    benefit: [
      "100 users included",
      "20 GB of storage",
      "Priority email support",
      "Help center access",
    ],
    action: "Buy Now"
  }
];

var renderOption = function (options) {
  options.forEach(function (element) {
    var listOption = document.createElement("li");
    
    var title = document.createElement("h3");
    title.setAttribute("class", "card-title");
    title.textContent = element.title;

    var price = document.createElement("h4");
    price.setAttribute("class", "card-price");
    price.textContent = element.price;

    var benefits = document.createElement("ul");
    benefits.setAttribute("class", "groupBenefit");

    element.benefit.forEach(function (item) {

      var listBenefit = document.createElement("li");
      listBenefit.setAttribute("class", "benefit-item");
      listBenefit.textContent = item; 

      benefits.appendChild(listBenefit);
    }
    );
    
    var choiceOption = document.createElement("button");
    if (element.title === "Basic") {
      choiceOption.setAttribute("class", "btn-secondary");
    }else{
      choiceOption.setAttribute("class", "btn-primary");
    }
    choiceOption.textContent = element.action;

    listOption.append(
      title,
      price,
      benefits,
      choiceOption
    );

    var groupOption = document.getElementById("options");
    groupOption.appendChild(listOption); console.log(benefits)
  });
};

window.onload = function () {
  calculateAge();
  renderOption(options);
};