// Câu 1
var renderCalculateAgeForm = function () {
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

  var age;

  $CalculateButton.onclick = function (e) {
    e.preventDefault();
    var yearOfBirth = $inputAge.value;
    var currentYear = new Date().getFullYear();
    age = currentYear - parseInt(yearOfBirth);
    $output.textContent = 'Tuổi của bạn là: ' + age;
    $inputAge.value = '';
  };
  $formCalculateAge.appendChild($inputAge);
  $formCalculateAge.appendChild($CalculateButton);
  $formCalculateAge.appendChild($output);
  document.body.appendChild($formCalculateAge);
};
// Câu 2
var plans = [
  {
    title: 'Basic',
    type: 'basic',
    price: 10,
    duration: 'month',
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
    type: 'pro',
    price: 30,
    duration: 'month',
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
  var $listGroupPlan = document.createElement('ul');
  $listGroupPlan.setAttribute('id', 'plans');
  plans.forEach(function (element) {
    var $listPlan = document.createElement('li');
    $listPlan.setAttribute('class', 'list-group-benefit');

    var $title = document.createElement('h3');
    $title.setAttribute('class', 'card-title');
    $title.textContent = element.title;

    var $price = document.createElement('h4');
    $price.setAttribute('class', 'card-price');
    $price.textContent = element.price + '$' + '/' + element.duration;

    var $benefits = document.createElement('ul');
    $benefits.setAttribute('class', 'group-benefit');

    element.benefit.forEach(function (item) {
      var $listBenefit = document.createElement('li');
      $listBenefit.setAttribute('class', 'benefit-item');
      $listBenefit.textContent = item;

      $benefits.appendChild($listBenefit);
    });
    var $buttonSubmitPlan = document.createElement('button');
    if (element.type === 'basic') {
      $buttonSubmitPlan.setAttribute('class', 'btn btn-secondary');
    } else {
      $buttonSubmitPlan.setAttribute('class', 'btn btn-primary');
    }
    $buttonSubmitPlan.textContent = element.action;
    $listPlan.append($title, $price, $benefits, $buttonSubmitPlan);
    $listGroupPlan.appendChild($listPlan);
    document.body.appendChild($listGroupPlan);
  });
};
window.onload = function () {
  renderCalculateAgeForm();
  renderPlans(plans);
};
