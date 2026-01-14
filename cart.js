const CART_KEY = "cc_cart_v1";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (err) {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function formatCurrency(value) {
  return `$${Number(value).toFixed(2)}`;
}

function buildCustomizationSummary(custom) {
  const parts = [];
  if (custom.size) parts.push(`Size: ${custom.size}`);
  if (custom.palette) parts.push(`Palette: ${custom.palette}`);
  if (custom.eventDate) parts.push(`Event date: ${custom.eventDate}`);
  if (custom.addons && custom.addons.length) parts.push(`Add-ons: ${custom.addons.join(", ")}`);
  if (custom.message) parts.push(`Message: ${custom.message}`);
  return parts.join(" | ");
}

function addToCart(item) {
  const cart = loadCart();
  cart.push(item);
  saveCart(cart);
  if (window.CartCount) window.CartCount.update();
  return cart.length;
}

function removeFromCart(id) {
  const cart = loadCart().filter(item => item.cartItemId !== id);
  saveCart(cart);
  if (window.CartCount) window.CartCount.update();
  return cart;
}

function updateQuantity(id, quantity) {
  const cart = loadCart().map(item => {
    if (item.cartItemId === id) {
      return { ...item, quantity };
    }
    return item;
  });
  saveCart(cart);
  if (window.CartCount) window.CartCount.update();
  return cart;
}

function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart(container) {
  const cart = loadCart();
  container.innerHTML = "";

  if (!cart.length) {
    container.innerHTML = "<div class=\"no-results\">Your cart is empty.</div>";
    return;
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p class="cart-sub">${item.customSummary || ""}</p>
        <div class="cart-price">${formatCurrency(item.price)}</div>
      </div>
      <div class="cart-controls">
        <label>
          Qty
          <input type="number" min="1" value="${item.quantity}" data-qty="${item.cartItemId}" />
        </label>
        <button class="btn-secondary" data-remove="${item.cartItemId}">Remove</button>
      </div>
    `;
    container.appendChild(row);
  });

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) {
    totalEl.textContent = formatCurrency(getCartTotal(cart));
  }
}

async function startCheckout() {
  const cart = loadCart();
  if (!cart.length) return;

  const payload = {
    items: cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      customSummary: item.customSummary,
    }))
  };

  const endpoint = window.CHECKOUT_ENDPOINT || "/create-checkout-session";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    alert("Checkout failed. Please try again.");
    return;
  }

  const data = await response.json();
  if (data && data.url) {
    window.location.href = data.url;
  }
}

window.Cart = {
  loadCart,
  saveCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  renderCart,
  buildCustomizationSummary,
  startCheckout,
};
