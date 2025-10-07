let products = [
  {name:"Laptop", price:50000, img:"https://via.placeholder.com/150"},
  {name:"Phone", price:25000, img:"https://via.placeholder.com/150"},
  {name:"Earphones", price:2000, img:"https://via.placeholder.com/150"}
];
let cart = [];

function loadProducts(){
  let div = document.getElementById("products");
  div.innerHTML = "";
  products.forEach((p,i)=>{
    div.innerHTML += `
      <div class="product">
        <img src="${p.img}" width="150"><br>
        <b>${p.name}</b><br>
        ₹${p.price}<br>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(i){
  cart.push(products[i]);
  displayCart();
}

function displayCart(){
  let ul = document.getElementById("cart");
  ul.innerHTML = "";
  cart.forEach((item, index)=>{
    ul.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeItem(${index})">Remove</button></li>`;
  });
}

function removeItem(i){
  cart.splice(i,1);
  displayCart();
}

window.onload = loadProducts;

