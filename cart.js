document.addEventListener('DOMContentLoaded', function() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const itemsContainer = document.querySelector('.items');

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
            <div class="img" style="background-image: url(Product-${item.productName}.jpg);"></div>
            <div class="info">
                <h2>${item.productName}</h2>
                <div class="quantity">
                    <h3>Qty.</h3>
                    <div class="container">
                        <div class="qty">
                            <div class="sub" onclick="sub_qty(${index})">-</div>
                            <div class="qty-num">${item.quantity || 1}</div>
                            <div class="add" onclick="add_qty(${index})">+</div>
                        </div>
                        <h4>${item.details || 'Details not available'}</h4>
                    </div>
                </div>
                <div class="price-container">
                    <h3>$</h3>
                    <h3 class="item-price">${item.price || '0'}</h3>
                    <h3>/</h3>
                    <h3>${item.unit || 'Unit'}</h3>
                </div>
            </div>
            <input type="checkbox">
            <p class="close-btn" onclick="removeItem(${index})">X</p>
        `;
    itemsContainer.appendChild(itemDiv);
  });

  updateCartTotal(cartItems);
});

function updateCartTotal(cartItems) {
  const subtotalElement = document.querySelector('.subtotal');
  const totalElement = document.querySelector('.total');
  const shipingFeeElement = document.querySelector('.shiping-fee');

  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0);
  const shippingFee = 1;
  const total = subtotal + shippingFee;

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
  shipingFeeElement.textContent = `$${shippingFee.toFixed(2)}`;
}

function add_qty(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cartItems.length) {
    cartItems[index].quantity = (cartItems[index].quantity || 1) + 1;
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  
  updateCartTotal(cartItems);

  const qtyElement = document.querySelector(`#item-${index} .qty-num`);
  if (qtyElement) {
    qtyElement.textContent = cartItems[index].quantity || 1;
  }
}

function sub_qty(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cartItems.length) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity -= 1;
    }
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  updateCartTotal(cartItems);

  const qtyElement = document.querySelector(`#item-${index} .qty-num`);
  if (qtyElement) {
    qtyElement.textContent = cartItems[index].quantity || 1;
  }
}

function removeItem(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  updateCartTotal(cartItems);

  const itemElement = document.querySelector(`#item-${index}`);
  if (itemElement) {
    itemElement.remove();
  }
}
