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
    quanty: 1,
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
    quanty: 1,
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
    quanty: 1,
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
    quanty: 1,
  },
];

const addToCart = (el) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === el);
  if (index < 0) {
    let itemMatched = data.filter((item) => {
      return item.id === el;
    });
    localData.push(itemMatched[0]);
  } else {
    localData[index].quanty++;
  }
  localStorage.setItem("cart", JSON.stringify(localData));
  alert("Add to cart successfully");
  renderData();
};

const subtractToCart = (el) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === el);
  if (localData[index].quanty <= 1) {
    return;
  } else {
    localData[index].quanty--;
  }
  localStorage.setItem("cart", JSON.stringify(localData));
  alert("subtract to cart successfully");
  renderData();
};

const removeProductInCart = (el) => {
  let localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((obj) => obj.id === el);
  localData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(localData));
  alert("remove product successfully");
  renderData();
};

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

const renderData = () => {
  let dataTable = ``;
  let total = 0;
  const $dataTable = document.querySelector(".shopping-product-table");
  const $totalPrice = document.querySelector(".total-price");
  let listProductInCart = JSON.parse(localStorage.getItem("cart")) || [];
  listProductInCart.forEach((product) => {
    let subTotal = parseFloat((product.price * product.quanty).toFixed(2));
    total += subTotal;
    dataTable += `<tr class="table-row">
                    <td class="table-content col-xl-4">
                      <div class="mini-card">
                        <img src="${product.url}" class="mini-card-image">
                        <div class="mini-card-info">
                          <h4 class="mini-card-title">
                            ${product.title}
                          </h4>
                          <h5 class="mini-card-id">
                            #${product.id}
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td class="table-content text-center col-xl-1">
                      ${product.color}
                    </td>
                    <td class="table-content text-center col-xl-1">
                      ${product.size}
                    </td>
                    <td class="table-content text-center col-xl-3">
                      <div class="amount btn btn-outline">
                        <p class="change-quanty" onclick="subtractToCart('${product.id}')">
                        -
                        </p>
                        ${product.quanty}
                        <p class="change-quanty" onclick="addToCart('${product.id}')">
                        +
                        </p>
                      </div>
                    </td>
                    <td class="table-content text-center col-xl-1">
                      <b>$${subTotal}</b>
                    </td>
                    <td class="table-content text-center col-xl-2">
                      <img src="./asset/images/cancel.svg" class="cancel-cross" onclick="removeProductInCart()">
                    </td>
                  </tr>`;
  });
  $dataTable.innerHTML = dataTable;
  $totalPrice.innerHTML = `$${total.toFixed(2)}`;
};
window.onload = () => {
  renderSuggestionProduct(data);
  renderData();
};
