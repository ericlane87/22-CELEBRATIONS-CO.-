const CART_KEY = "cc_cart_v1";

function getCartCount() {
  try {
    const items = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  } catch (err) {
    return 0;
  }
}

function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = count;
    el.classList.toggle("is-empty", count === 0);
  });
}

window.addEventListener("storage", event => {
  if (event.key === CART_KEY) updateCartCount();
});

window.CartCount = { update: updateCartCount };
window.addEventListener("load", updateCartCount);
