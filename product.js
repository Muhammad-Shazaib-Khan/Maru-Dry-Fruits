let alert_div = document.querySelector(".alert");
function addToCart(productName) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.push({ productName });
  localStorage.setItem('cart', JSON.stringify(cartItems));

  alert_div.style.display = "flex";
}