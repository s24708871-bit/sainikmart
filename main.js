// =============================================
// SAINIKMART — MAIN JAVASCRIPT
// =============================================

// ===== CART =====
function getCart() {
  try { return JSON.parse(localStorage.getItem('sainikmart_cart')) || []; }
  catch { return []; }
}
function saveCart(cart) { localStorage.setItem('sainikmart_cart', JSON.stringify(cart)); }
function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ ...product, qty: 1 }); }
  saveCart(cart);
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('sm-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sm-toast';
    toast.style.cssText = `position:fixed;bottom:90px;right:24px;background:#1A7A4A;color:white;padding:12px 20px;border-radius:10px;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);transition:opacity 0.3s;font-family:'Poppins',sans-serif;`;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ===== PRODUCT CARD =====
function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-img">${product.emoji}</div>
      <div class="product-body">
        <span class="product-cat">${categoryNames[product.category]}</span>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-footer">
          <span class="product-price">₹${product.price}</span>
          <button class="add-cart-btn" onclick="addToCart(${product.id})">+ Add</button>
        </div>
      </div>
    </div>
  `;
}

// ===== HOME PAGE — FEATURED PRODUCTS =====
function loadFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = products.slice(0, 8);
  grid.innerHTML = featured.map(createProductCard).join('');
}

// ===== SHOP PAGE =====
function loadShop() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const defaultCat = urlParams.get('cat') || 'all';

  const searchBar = document.getElementById('searchBar');
  const catFilter = document.getElementById('catFilter');
  const countEl = document.getElementById('resultsCount');

  // Populate filter dropdown
  if (catFilter) {
    catFilter.innerHTML = `<option value="all">All Categories</option>` +
      Object.entries(categoryNames).map(([k, v]) => `<option value="${k}" ${k === defaultCat ? 'selected' : ''}>${v}</option>`).join('');
  }

  function render() {
    const search = searchBar ? searchBar.value.toLowerCase() : '';
    const cat = catFilter ? catFilter.value : defaultCat;
    let filtered = products;
    if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search));
    grid.innerHTML = filtered.length ? filtered.map(createProductCard).join('') : `<p style="color:#666;grid-column:1/-1;text-align:center;padding:40px">No products found. Try a different search.</p>`;
    if (countEl) countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  }

  if (searchBar) searchBar.addEventListener('input', render);
  if (catFilter) catFilter.addEventListener('change', render);
  render();
}

// ===== CART PAGE =====
function loadCart() {
  const container = document.getElementById('cartContainer');
  if (!container) return;
  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <a href="shop.html" class="btn-primary" style="display:inline-block;margin-top:16px">Shop Now</a>
      </div>`;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal + delivery;

  container.innerHTML = `
    <table class="cart-table">
      <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead>
      <tbody>
        ${cart.map(item => `
          <tr>
            <td><span style="font-size:24px;margin-right:8px">${item.emoji}</span>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
              <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
              <span style="margin:0 8px;font-weight:600">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </td>
            <td><strong>₹${item.price * item.qty}</strong></td>
            <td><button class="remove-btn" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button></td>
          </tr>`).join('')}
      </tbody>
    </table>
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:#1A7A4A">FREE</span>' : '₹' + delivery}</span></div>
      ${delivery > 0 ? `<div style="font-size:12px;color:#888;margin-bottom:8px">Add ₹${500 - subtotal} more for free delivery</div>` : ''}
      <div class="summary-row summary-total"><span>Total</span><span>₹${total}</span></div>
      <button class="checkout-btn" onclick="window.location.href='checkout.html'">Proceed to Checkout →</button>
    </div>`;
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart.splice(cart.indexOf(item), 1);
  saveCart(cart);
  updateCartCount();
  loadCart();
}

function removeItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartCount();
  loadCart();
}

// ===== CHECKOUT PAGE =====
function loadCheckout() {
  const summaryEl = document.getElementById('orderSummaryItems');
  const totalEl = document.getElementById('orderTotal');
  if (!summaryEl) return;
  const cart = getCart();
  if (!cart.length) { window.location.href = 'cart.html'; return; }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal + delivery;

  summaryEl.innerHTML = cart.map(item => `
    <div class="order-item">
      <span>${item.emoji} ${item.name} × ${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
    </div>`).join('') +
    `<div class="order-item" style="border-top:1px solid #eee;padding-top:10px;margin-top:6px">
      <span>Delivery</span><span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span>
    </div>`;

  if (totalEl) totalEl.textContent = `₹${total}`;
}

function placeOrder() {
  const name = document.getElementById('fullName')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const address = document.getElementById('address')?.value.trim();
  const pincode = document.getElementById('pincode')?.value.trim();

  if (!name || !phone || !address || !pincode) {
    alert('Please fill in all required fields.'); return;
  }
  if (phone.length < 10) { alert('Please enter a valid phone number.'); return; }
  if (pincode.length < 6) { alert('Please enter a valid pincode.'); return; }

  saveCart([]);
  updateCartCount();
  window.location.href = 'success.html';
}

// ===== CONTACT FORM =====
function submitContact() {
  const name = document.getElementById('contactName')?.value.trim();
  const email = document.getElementById('contactEmail')?.value.trim();
  const msg = document.getElementById('contactMsg')?.value.trim();
  if (!name || !email || !msg) { alert('Please fill in all fields.'); return; }
  showToast('Message sent! We will get back to you soon.');
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMsg').value = '';
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initHamburger();
  loadFeatured();
  loadShop();
  loadCart();
  loadCheckout();
});
