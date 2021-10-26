const data = [
  {
    id: "53581",
    title: "T-Shirt Summer Vibes",
    url: "asset/images/t_shirt_summer.png",
    alt: "t_shirt_summer",
    color: "White",
    size: "XL",
    price: 119.99,
    discount: 0.3,
    quantity: 1,
  },
  {
    id: "25687",
    title: "Loose Knit 3/4 Sleeve",
    url: "asset/images/loose_knit_sleeve.png",
    alt: "loose_knit_sleeve",
    color: "White",
    size: "XL",
    price: 119.99,
    discount: 0,
    quantity: 1,
  },
  {
    id: "58762",
    title: "Basic Slim Fit T-Shirt",
    url: "asset/images/slim_fit_t_shirt.png",
    alt: "slim_fit_t_shirt",
    color: "Black",
    size: "XL",
    price: 79.99,
    discount: 0,
    quantity: 1,
  },
  {
    id: "42546",
    title: "Loose Textured T-Shirt",
    url: "asset/images/loose_textured_t_shirt.png",
    alt: "loose_textured_t_shirt",
    color: "Black",
    size: "XL",
    price: 119.99,
    discount: 0,
    quantity: 1,
  },
];
const renderSuggestionProduct = (data) => {
  const $listProduct = document.querySelector("#list-product");
  data.forEach((element) => {
    $listProduct.insertAdjacentHTML(
      "beforeend",
      `<li class='list-item col-6 col-xl-3'>
        <div class='card product-card'>
          <img src='${element.url}' alt='${element.alt}' class='card-image' />
          ${
            element.discount > 0
              ? `<p class='badge badge-danger'>${element.discount * 100}%</p>`
              : ""
          }
          <button class='btn btn-primary add-cart-btn' onclick='addToCart("${
            element.id
          }")'>
            add to cart
          </button>
          <div class='card-detail'>
            <h4 class='card-title'>${element.title}</h4>
            <div class='card-price'>
              <p class='price ${element.discount > 0 ? "price-sale-off" : ""}'>
                $${element.price * (1 - element.discount)}
              </p>
              ${
                element.discount > 0
                  ? `<p class='price price-initial'>$${element.price}</p>`
                  : ""
              }
            </div>
          </div>
        </div>
      </li> `
    );
  });
};
const $dataTable = document.querySelector(".shopping-product-table");
const $totalPrice = document.querySelector(".total-price");
const renderItem=(product)=>{
  const $cartTableRow = document.createElement("tr");
    $cartTableRow.className = "table-row";
    const $miniProductCart = document.createElement("td");
    $miniProductCart.className = "table-content col-xl-4";
    const $productColor = document.createElement("td");
    $productColor.className = "table-content text-center col-xl-2";
    const $productSize = document.createElement("td");
    $productSize.className = "table-content text-center col-xl-1";
    const $productTotalPrice = document.createElement("td");
    $productTotalPrice.className = "table-content text-center col-xl-1";
    const $deleteProductIcon = document.createElement("td");
    $deleteProductIcon.className = "table-content text-center col-xl-1";
    const $productAmount = document.createElement("td");
    $productAmount.className = "table-content text-center col-xl-3";

    $miniProductCart.innerHTML = `<div class="mini-cart">
                                    <img src="${product.url}" class="mini-card-image">
                                    <div class="mini-card-info">
                                    <h4 class="mini-card-title">${product.title}</h4>
                                    <h5 class="mini-card-id">#${product.id}</h5>
                                    </div>
                                    </div>`;
    $productColor.innerHTML = `${product.color}`;
    $productSize.innerHTML = `${product.size}`;
    $productAmount.innerHTML = `<div class="amount btn btn-outline">
                                 <p class="change-quantity" onclick="subtractToCart('${product.id}')">
                                 -
                                 </p>
                                 <p class="quantity">${product.quantity}</p>
                                 <p class="change-quantity" onclick="addToCart('${product.id}')">
                                 +
                                 </p>
                                </div>`;
    $productTotalPrice.innerHTML = 
    `<b>${(product.quantity * product.price).toFixed(2)}</b>`;
    $deleteProductIcon.innerHTML = `<img src="./asset/images/cancel.svg" 
    class="cancel-cross" onclick="removeProductInCart('${product.id}')">`;
    $cartTableRow.append(
      $miniProductCart,
      $productColor,
      $productSize,
      $productAmount,
      $productTotalPrice,
      $deleteProductIcon
    );
    $dataTable.appendChild($cartTableRow);
    calculateTotalPrice();
}
const renderListProduct = () => {
let localData = JSON.parse(localStorage.getItem("cart")) || [];
  localData.forEach((product) => {
    renderItem(product);
  });
};
const addToCart = (productId) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === productId);
  if (index < 0) {
    let itemMatched = data.filter((item) => {
      return item.id === productId;
    });
    localData.push(itemMatched[0]);
    renderItem(itemMatched[0]);
  } else {
    localData[index].quantity++;
    $dataTable.children[index].querySelector(".quantity").innerHTML =
    localData[index].quantity;
  }
  localStorage.setItem("cart", JSON.stringify(localData));
  calculateTotalPrice();
  alert("Add to cart successfully");
};
const subtractToCart = (productId) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === productId);
  if (localData[index].quantity <= 1) {
    return;
  } else {
    localData[index].quantity--;
  }
  $dataTable.children[index].querySelector(".quantity").innerHTML = localData[index].quantity;
  localStorage.setItem("cart", JSON.stringify(localData));
  calculateTotalPrice();
  alert("subtract to cart successfully");
};
const removeProductInCart = (productId) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === productId);
  localData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(localData));
  $dataTable.removeChild($dataTable.children[index]);
  calculateTotalPrice();
  alert("remove product successfully");
};
const calculateTotalPrice = () => {
  let total=0;
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  localData.forEach(product=>{
    total+=(product.price*product.quantity);
  })
  $totalPrice.innerHTML= ` $${total.toFixed(2)}`;
};
const redirectPage=(e)=>{
  e.preventDefault();
  if(e.target.classList.contains('redirect-cart-page')){
    document.querySelector('#home-page').style.display='none';
    document.querySelector('#cart-page').style.display='block';
  }
  if(e.target.classList.contains('redirect-home-page')){
    document.querySelector('#home-page').style.display='block';
    document.querySelector('#cart-page').style.display='none';
  }
}
window.onload = () => {
  renderSuggestionProduct(data);
  renderListProduct();
  document.querySelector('.redirect-cart-page').onclick=redirectPage;
  document.querySelector('.redirect-home-page').onclick=redirectPage;
};
