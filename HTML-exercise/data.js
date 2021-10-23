const data = [
  {
    id: "a",
    title: "T-Shirt Summer Vibes",
    url: "asset/images/t_shirt_summer.png",
    alt: "t_shirt_summer",
    price: 119.99,
    discount: 0.3,
  },
  {
    id: "b",
    title: "Loose Knit 3/4 Sleeve",
    url: "asset/images/loose_knit_sleeve.png",
    alt: "loose_knit_sleeve",
    price: 119.99,
    discount: 0,
  },
  {
    id: "c",
    title: "Basic Slim Fit T-Shirt",
    url: "asset/images/slim_fit_t_shirt.png",
    alt: "slim_fit_t_shirt",
    price: 79.99,
    discount: 0,
  },
  {
    id: "d",
    title: "Loose Textured T-Shirt",
    url: "asset/images/loose_textured_t_shirt.png",
    alt: "loose_textured_t_shirt",
    price: "119.99",
    discount: 0,
  },
];

const addToCart = (id) => {
  // console.log(id);
  let itemMatched = data.filter((item)=>{
    return item.id == id;
  });
  console.log(itemMatched);
  // localStorage.setItem('cart',JSON.stringify(itemMatched));
  alert('Add to cart successfully');
};

const renderSuggestionProduct = (data) => {
  const $listProduct = document.querySelector("#list-product");
  data.forEach((element,index) => {
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
          <button class='btn btn-primary add-cart-btn' onclick='addToCart(${element.id})'>
            add to cart
          </button>
          <div class='card-detail'>
            <h4 class='card-title'>${element.title}</h4>
            <div class='card-price'>
              <p class='price ${
                element.discount > 0 ? "price-sale-off" : null
              }'>
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

window.onload = () => {
  renderSuggestionProduct(data);
};
