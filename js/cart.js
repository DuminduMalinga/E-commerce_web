/**
 * VIRTUSA COMPUTERS — Cart Manager
 * Uses localStorage for persistence across pages.
 */

const CART_KEY = 'virtusa_cart';

/** @returns {Array} cart items array */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

/** @param {Array} cart */
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  dispatchCartEvent();
}

/** Dispatch a custom event so all open listeners can react */
function dispatchCartEvent() {
  document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: getCart() } }));
}

/**
 * Add a product to cart (or increment qty)
 * @param {string} productId
 * @param {number} qty
 */
function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    product.image,
      category: product.category,
      qty
    });
  }
  saveCart(cart);
  showToast(`✅ ${product.name} added to cart!`, 'success');
}

/**
 * Remove a product from cart entirely
 * @param {string} productId
 */
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

/**
 * Update quantity for a product
 * @param {string} productId
 * @param {number} qty
 */
function updateCartQty(productId, qty) {
  if (qty < 1) { removeFromCart(productId); return; }
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = qty; saveCart(cart); }
}

/**
 * Clear cart completely
 */
function clearCart() {
  localStorage.removeItem(CART_KEY);
  dispatchCartEvent();
}

/** @returns {number} total items count */
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

/** @returns {number} total price */
function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

/** @returns {number} formatted total string */
function getCartTotalFormatted() {
  return '$' + getCartTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Update cart badge(s) in header */
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  });
  document.querySelectorAll('.cart-count-text').forEach(el => {
    el.textContent = count > 0 ? `(${count})` : '';
  });
}

// Auto-update badge whenever cart changes
document.addEventListener('cartUpdated', updateCartBadge);
document.addEventListener('DOMContentLoaded', updateCartBadge);
