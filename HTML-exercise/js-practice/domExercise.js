// Câu 1
var $formCalculateAge = document.createElement('form');
$formCalculateAge.setAttribute('id', 'form');

var $inputAge = document.createElement('input');
$inputAge.setAttribute('id', 'input');
$inputAge.type = 'number';
$inputAge.placeholder = 'Nhập năm sinh';

var $CalculateButton = document.createElement('button');
$CalculateButton.setAttribute('id', 'button');
$CalculateButton.textContent = 'Tính tuổi';

var $output = document.createElement('p');
$output.setAttribute('id', 'output');

$formCalculateAge.appendChild($inputAge);
$formCalculateAge.appendChild($CalculateButton);
$formCalculateAge.appendChild($output);

var calculateAge = function () {
  var $input = document.getElementById('input');
  var $submitButton = document.getElementById('button');
  var $output = document.getElementById('output');
  var age;

  $submitButton.onclick = function (e) {
    e.preventDefault();
    var yearOfBirth = $input.value;
    var currentYear = new Date().getFullYear();
    age = currentYear - parseInt(yearOfBirth);
    $output.textContent = 'Tuổi của bạn là: ' + age;
  };
};

document.body.appendChild($formCalculateAge);
// Câu 2

var $listPlan = document.createElement('ul');
$listPlan.setAttribute('id', 'plans');

document.body.appendChild($listPlan);

var plans = [
  {
    title: 'Basic',
    type: 'plan',
    price: '$10/month',
    benefit: [
      '10 users included',
      '2 GB of storage',
      'Email support',
      'Help center access',
    ],
    action: 'Get Started',
  },
  {
    title: 'Pro',
    type: 'plan',
    price: '$30/month',
    benefit: [
      '100 users included',
      '20 GB of storage',
      'Priority email support',
      'Help center access',
    ],
    action: 'Buy Now',
  },
];

var renderPlans = function (plans) {
  plans.forEach(function (element) {
    var $listPlan = document.createElement('li');

    var $title = document.createElement('h3');
    $title.setAttribute('class', 'card-title');
    $title.textContent = element.title;

    var $price = document.createElement('h4');
    $price.setAttribute('class', 'card-price');
    $price.textContent = element.price;

    var $benefits = document.createElement('ul');
    $benefits.setAttribute('class', 'group-benefit');

    element.benefit.forEach(function (item) {
      var $listBenefit = document.createElement('li');
      $listBenefit.setAttribute('class', 'benefit-item');
      $listBenefit.textContent = item;

      $benefits.appendChild($listBenefit);
    });

    var $buttonSubmitPlan = document.createElement('button');
    if (element.title === 'Basic' && element.type === 'plan') {
      $buttonSubmitPlan.setAttribute('class', 'btn btn-secondary');
    } else {
      $buttonSubmitPlan.setAttribute('class', 'btn btn-primary');
    }
    $buttonSubmitPlan.textContent = element.action;

    $listPlan.append($title, $price, $benefits, $buttonSubmitPlan);
    var $groupPlan = document.getElementById('plans');
    $groupPlan.appendChild($listPlan);
  });
};

window.onload = function () {
  calculateAge();
  renderPlans(plans);
};
