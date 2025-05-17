const products = [
    {
  productImage:
    "data:image/jpeg;base64,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",
  productName: "Product 1",
  productPrice: 10
},
{
  productImage:
    "data:image/jpeg;base64,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",
  productName: "Product 2",
  productPrice: 8
},
{
  productImage:
    "https://media.istockphoto.com/id/584574708/photo/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit.jpg?s=612x612&w=0&k=20&c=TFeQmTwVUwKY0NDKFFORe3cwDCxRtotFgEujMswn3dc=",
  productName: "Product 3",
  productPrice: 17
},
{
  productImage:
    "https://img.freepik.com/free-photo/care-products-plants-arrangement_23-2149879994.jpg?semt=ais_hybrid&w=740",
  productName: "Product 4",
  productPrice: 25
},
{
  productImage:
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
  productName: "Product 5",
  productPrice: 5
}
]

let cartItem = JSON.parse(localStorage.getItem("cartItem"))||[];
let total_Price = parseFloat(localStorage.getItem("total_Price")) || 0;

const cartCount = document.getElementById("cart-count");
const cartContainer = document.getElementById("cart-container");
cartCount.textContent = cartItem.length;

products.forEach((product, index) => {
  let productContainer = document.createElement("div");

  productContainer.innerHTML = `
    <img src="${product.productImage}" alt="image"/>
    <h3>${product.productName}</h3>
    <button class="addtocart">Add to cart $${product.productPrice}</button>
  `;

  document.getElementById("product_list").appendChild(productContainer);
  
  let addToCartButtons = document.querySelectorAll(".addtocart");
  
  addToCartButtons[index].addEventListener("click", () => {
    cartItem.push({
      name: product.productName,
      image: product.productImage,
      price: product.productPrice
    });
    cartCount.textContent = cartItem.length;

    total_Price += product.productPrice;

    localStorage.setItem("cartItem",JSON.stringify(cartItem));
localStorage.setItem("total_Price", total_Price);

  

    ShowCart();
  });
});


document.getElementById("cart-icon").addEventListener("click", () => {
  if (cartContainer.style.right=== "0px") {
    cartContainer.style.right = "-100%";
  } else {
    cartContainer.style.right = "0px";
  }
});

const ShowCart = () => {
  let product_show = document.getElementById("product_show");
  let price_show = document.getElementById("price_show");

  product_show.innerHTML = "";

  cartItem.forEach((cart, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <img src="${cart.image}" alt="image" />
      <h3>${cart.name} - $${cart.price}</h3>
      <button onclick = "handleDelete(${index})">delete</button>
      
    `;

    product_show.appendChild(li);
  });

  price_show.innerHTML = `Total Price: $${total_Price}`;
};


const handleDelete = (i) => {

let deletedPrice = cartItem[i].price;


cartItem.splice(i, 1);
total_Price = total_Price - deletedPrice;




localStorage.setItem("cartItem", JSON.stringify(cartItem));
localStorage.setItem("total_Price", total_Price);


cartCount.textContent = cartItem.length;
ShowCart();
};
ShowCart();