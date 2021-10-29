const data = [
  {
    id: '53581',
    name: 'T-Shirt Summer Vibes',
    url: 'asset/images/t_shirt_summer.png',
    color: 'White',
    size: 'XL',
    price: 119.99,
    discount: 0.3,
    quantity: 1,
  },
  {
    id: '25687',
    name: 'Loose Knit 3/4 Sleeve',
    url: 'asset/images/loose_knit_sleeve.png',
    color: 'White',
    size: 'XL',
    price: 119.99,
    discount: 0,
    quantity: 1,
  },
  {
    id: '58762',
    name: 'Basic Slim Fit T-Shirt',
    url: 'asset/images/slim_fit_t_shirt.png',
    color: 'Black',
    size: 'XL',
    price: 79.99,
    discount: 0,
    quantity: 1,
  },
  {
    id: '42546',
    name: 'Loose Textured T-Shirt',
    url: 'asset/images/loose_textured_t_shirt.png',
    color: 'Black',
    size: 'XL',
    price: 119.99,
    discount: 0,
    quantity: 1,
  },
];
const countCartItem = () => {
  let count = 0;
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];
  cartData.forEach((product) => {
    count += product.quantity;
  });
  let $listCartIcon = document.querySelectorAll('.cart');
  $listCartIcon.forEach((item) => (item.textContent = count));
};
const renderSuggestionProduct = (data) => {
  const $listProduct = document.querySelector('#list-product');
  data.forEach((element) => {
    const $listItem = document.createElement('li');
    $listItem.className = 'list-item col-6 col-xl-3';
    const $productCard = document.createElement('div');
    $productCard.className = 'card product-card';
    const $cardImage = document.createElement('img');
    $cardImage.className = 'card-image';
    $cardImage.setAttribute('src', element.url);
    $cardImage.setAttribute('alt', element.name);
    const $cardBadge = document.createElement('p');
    $cardBadge.className = 'badge badge-danger';
    $cardBadge.innerHTML = element.discount * 100 + '%';
    const $addCartButton = document.createElement('button');
    $addCartButton.className = 'btn btn-primary add-cart-btn';
    $addCartButton.innerHTML = 'ADD TO CART';
    $addCartButton.onclick = () => changeQuantityOfItemInCart('add', element.id);
    const $cardDetail = document.createElement('div');
    $cardDetail.className = 'card-detail';
    const $cardName = document.createElement('h4');
    $cardName.className = 'card-name';
    $cardName.innerHTML = element.name;
    const $cardPrice = document.createElement('div');
    $cardPrice.className = 'card-price';
    const $price = document.createElement('p');
    $price.className = 'price';
    $price.innerHTML = '$' + element.price * (1 - element.discount);
    const $priceInitial = document.createElement('p');
    $priceInitial.className = 'price price-initial';
    $priceInitial.innerHTML = '$' + element.price;
    if (element.discount > 0) {
      $price.classList.add('price-sale-off');
      $cardBadge.style.display = 'block';
      $priceInitial.style.display = 'block';
    } else {
      $cardBadge.style.display = 'none';
      $priceInitial.style.display = 'none';
    }
    $cardPrice.append($price, $priceInitial);
    $cardDetail.append($cardName, $cardPrice);
    $productCard.append($cardImage, $cardBadge, $addCartButton, $cardDetail);
    $listItem.appendChild($productCard);
    $listProduct.appendChild($listItem);
  });
};
const $dataTable = document.querySelector('.shopping-product-table');
const $totalPrice = document.querySelector('.total-price');
const renderItem = (product) => {
  const $cartTableRow = document.createElement('tr');
  $cartTableRow.className = 'table-row';
  const $miniProductCart = document.createElement('td');
  $miniProductCart.className = 'table-content col-xl-4';
  const $productColor = document.createElement('td');
  $productColor.className = 'table-content text-center col-xl-2';
  const $productSize = document.createElement('td');
  $productSize.className = 'table-content text-center col-xl-1';
  const $productTotalPrice = document.createElement('td');
  $productTotalPrice.className = 'product-total-price table-content text-center col-xl-1';
  const $deleteProductIcon = document.createElement('td');
  $deleteProductIcon.className = 'table-content text-center col-xl-1';
  const $productAmount = document.createElement('td');
  $productAmount.className = 'table-content text-center col-xl-3';
  const $miniCard = document.createElement('div');
  $miniCard.className = 'mini-card';
  const $miniCardImage = document.createElement('img');
  $miniCardImage.className = 'mini-card-image';
  $miniCardImage.setAttribute('src', product.url);
  $miniCardImage.setAttribute('alt', product.name);
  const $miniCardInfo = document.createElement('div');
  $miniCardInfo.className = 'mini-card-info';
  const $miniCardName = document.createElement('h4');
  $miniCardName.className = 'mini-card-name';
  $miniCardName.innerHTML = product.name;
  const $miniCardId = document.createElement('h5');
  $miniCardId.className = 'mini-card-id';
  $miniCardId.innerHTML = product.id;
  $miniCardInfo.append($miniCardName, $miniCardId);
  $miniCard.append($miniCardImage, $miniCardInfo);
  $miniProductCart.append($miniCard);
  $productColor.innerHTML = product.color;
  $productSize.innerHTML = product.size;
  const $amount = document.createElement('div');
  $amount.className = 'amount btn btn-outline';
  const $quantity = document.createElement('p');
  $quantity.className = 'quantity';
  $quantity.innerHTML = product.quantity;
  const $decreaseQuantity = document.createElement('p');
  $decreaseQuantity.innerHTML = '-';
  $decreaseQuantity.className = 'decrease-quantity';
  $decreaseQuantity.onclick = () => changeQuantityOfItemInCart('delete', product.id);
  if (product.quantity === 1) {
    $decreaseQuantity.classList.add('disable');
  } else {
    $decreaseQuantity.classList.remove('disable');
  }
  const $increaseQuantity = document.createElement('p');
  $increaseQuantity.className = 'increase-quantity';
  $increaseQuantity.innerHTML = '+';
  $increaseQuantity.onclick = () => changeQuantityOfItemInCart('add', product.id);
  $amount.append($decreaseQuantity, $quantity, $increaseQuantity);
  $productAmount.appendChild($amount);
  $productTotalPrice.innerHTML = '$' + (product.quantity * product.price).toFixed(2);
  const $deleteIcon = document.createElement('img');
  $deleteIcon.className = 'cancel-cross';
  $deleteIcon.setAttribute('src', './asset/images/cancel.svg');
  $deleteIcon.onclick = () => removeProductInCart(product.id);
  $deleteProductIcon.appendChild($deleteIcon);
  $cartTableRow.append($miniProductCart, $productColor, $productSize, $productAmount, $productTotalPrice, $deleteProductIcon);
  $dataTable.appendChild($cartTableRow);
  calculateTotalPrice();
};
const renderListProduct = () => {
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];
  cartData.forEach((product) => renderItem(product));
};
const changeQuantityOfItemInCart = (mess, productId) => {
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cartData.findIndex((obj) => obj.id === productId);
  if (mess === 'add') {
    if (index < 0) {
      let itemMatched = data.filter((item) => {
        return item.id === productId;
      });
      cartData.push(itemMatched[0]);
      renderItem(itemMatched[0]);
      alert('Add to cart successfully');
    } else {
      cartData[index].quantity++;
      $dataTable.children[index].querySelector('.quantity').innerHTML = cartData[index].quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    calculateTotalPrice();
  }
  if (mess === 'delete') {
    if (cartData[index].quantity <= 1) {
      return;
    } else {
      cartData[index].quantity--;
      $dataTable.children[index].querySelector('.quantity').innerHTML = cartData[index].quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    calculateTotalPrice();
  }
  if (cartData[index].quantity === 1) {
    $dataTable.children[index].querySelector('.decrease-quantity').classList.add('disable');
  } else {
    $dataTable.children[index].querySelector('.decrease-quantity').classList.remove('disable');
  }
};
const removeProductInCart = (productId) => {
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cartData.findIndex((obj) => obj.id === productId);
  cartData.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartData));
  $dataTable.removeChild($dataTable.children[index]);
  calculateTotalPrice();
};
const calculateTotalPrice = () => {
  let total = 0;
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];
  cartData.forEach((product) => {
    total += product.price * product.quantity;
  });
  $totalPrice.innerHTML = '$' + total.toFixed(2);
  countCartItem();
};
const displayPage = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('redirect-cart-page')) {
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#cart-page').style.display = 'block';
  }
  if (e.target.classList.contains('redirect-home-page')) {
    document.querySelector('#home-page').style.display = 'block';
    document.querySelector('#cart-page').style.display = 'none';
  }
};
window.onload = () => {
  renderSuggestionProduct(data);
  renderListProduct();
  document.querySelector('.redirect-cart-page').onclick = displayPage;
  document.querySelector('.redirect-home-page').onclick = displayPage;
};
