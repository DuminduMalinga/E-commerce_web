/**
 * VIRTUSA COMPUTERS — Main Shared Utilities
 * Renders shared header/footer, handles search, and toast notifications.
 */

/* ─── Header Template ─── */
function renderHeader(activePage = '') {
  const navLinks = [
    { href: 'index.html',         label: 'Home' },
    { href: 'store.html',         label: 'Store' },
    { href: 'category.html?cat=laptops',   label: 'Laptops' },
    { href: 'category.html?cat=computers', label: 'Computers' },
    { href: 'category.html?cat=mobiles',   label: 'Mobiles' },
    { href: 'about.html',         label: 'About Us' },
  ];

  const navHTML = navLinks.map(link => {
    const isActive = activePage && link.label.toLowerCase().startsWith(activePage.toLowerCase());
    return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
  }).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="header-logo">
        <img src="images/logo.jpg" alt="Virtusa Computers Logo">
        <div class="logo-text">
          <span class="text-gradient">Virtusa</span>
          <span>Computers</span>
        </div>
      </a>

      <div class="header-search">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          id="global-search"
          placeholder="Search laptops, computers, mobiles..."
          autocomplete="off"
        >
        <div class="search-dropdown hidden" id="search-dropdown"></div>
      </div>

      <div class="header-right">
        <div class="header-social">
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <img src="images/fb.jpg" alt="Facebook"> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <img src="images/twitter.png" alt="Twitter"> Twitter
          </a>
        </div>
        <div class="header-hotline">📞 <span>066 1234567</span></div>
        <a href="cart.html" class="cart-btn" id="cart-btn">
          🛒 Cart
          <span class="cart-badge hidden" id="cart-badge">0</span>
        </a>
      </div>
    </div>
  `;

  document.getElementById('site-nav').innerHTML = `
    <div class="nav-bar-header">
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">☰</button>
    </div>
    <div class="nav-inner" id="nav-inner">
      ${navHTML}
    </div>
  `;

  // Immediately update cart badge after header is injected
  if (typeof updateCartBadge === 'function') updateCartBadge();

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const navInner = document.getElementById('nav-inner');
  if (toggle && navInner) {
    toggle.addEventListener('click', () => {
      navInner.classList.toggle('open');
      toggle.textContent = navInner.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Global search
  initGlobalSearch();

  // Close search dropdown on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const dd = document.getElementById('search-dropdown');
      if (dd) dd.classList.add('hidden');
    }
  });
}

/* ─── Footer Template ─── */
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <img src="images/logo.jpg" alt="Virtusa Computers">
          <span class="footer-logo-text text-gradient">Virtusa Computers</span>
        </a>
        <p>Your trusted technology partner since 2022. We provide top-quality laptops, desktops, gaming PCs, mobile phones, accessories, and expert repair services.</p>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">📘</a>
          <a href="https://twitter.com"  target="_blank" rel="noopener" aria-label="Twitter">🐦</a>
          <a href="#"                    aria-label="Instagram">📷</a>
          <a href="#"                    aria-label="YouTube">▶️</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Categories</h5>
        <ul>
          <li><a href="category.html?cat=laptops">💻 Laptops</a></li>
          <li><a href="category.html?cat=computers">🖥️ Computers</a></li>
          <li><a href="category.html?cat=mobiles">📱 Mobile Phones</a></li>
          <li><a href="store.html">🏪 Store</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item">
          <div class="icon">📍</div>
          <p><strong>Address</strong>123 Main Street, Berheim<br>State Province, Country</p>
        </div>
        <div class="footer-contact-item">
          <div class="icon">📞</div>
          <p><strong>Hotline</strong>066 1234567</p>
        </div>
        <div class="footer-contact-item">
          <div class="icon">✉️</div>
          <p><strong>Email</strong>info@virtusacomputers.com</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright © 2024. All rights reserved by Virtusa Technologies.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  `;
}

/* ─── Global Search ─── */
function initGlobalSearch() {
  const input    = document.getElementById('global-search');
  const dropdown = document.getElementById('search-dropdown');
  if (!input || !dropdown) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim();
      if (q.length < 2) { dropdown.classList.add('hidden'); return; }

      const results = searchProducts(q).slice(0, 6);
      if (results.length === 0) {
        dropdown.innerHTML = `<div class="search-no-results">No products found for "<strong>${escapeHTML(q)}</strong>"</div>`;
      } else {
        dropdown.innerHTML = results.map(p => `
          <a href="product.html?id=${p.id}" class="search-dropdown-item">
            <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy">
            <div class="item-info">
              <div class="item-name">${escapeHTML(p.name)}</div>
              <div class="item-price">$${p.price.toLocaleString()}</div>
            </div>
          </a>
        `).join('');
      }
      dropdown.classList.remove('hidden');
    }, 200);
  });

  // Hide on outside click
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });

  // Navigate on Enter
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) window.location.href = `category.html?cat=all&search=${encodeURIComponent(q)}`;
    }
  });
}

/* ─── Toast Notifications ─── */
function showToast(message, type = 'info', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const iconMap = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${iconMap[type] || 'ℹ️'}</span>
    <span class="toast-msg">${escapeHTML(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ─── Render Product Card ─── */
function renderProductCard(product, animated = false, delay = 0) {
  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const specKeys = Object.keys(product.specs).slice(0, 3);
  const specTags = specKeys.map(k =>
    `<span class="product-card-spec">${product.specs[k]}</span>`
  ).join('');

  const style = animated ? `style="opacity:0;animation:fadeInUp 0.5s ease ${delay}s forwards;"` : '';

  return `
    <div class="product-card" ${style}
      onclick="window.location.href='product.html?id=${product.id}'"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.location.href='product.html?id=${product.id}';}"
      role="button" tabindex="0" aria-label="View ${product.name.replace(/"/g,'&quot;')}">
      <div class="product-card-img">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge badge ${product.badgeColor}">${product.badge}</span>` : ''}
        <button class="product-card-wishlist" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" aria-label="Wishlist">♡</button>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${categoryLabel(product.category)}</div>
        <div class="product-card-name">${escapeHTML(product.name)}</div>
        <div class="product-card-specs">${specTags}</div>
        <div class="product-card-footer">
          <div class="product-card-price">
            ${discountPct ? `<span class="original">$${product.originalPrice.toLocaleString()}</span>` : ''}
            $${product.price.toLocaleString()}
          </div>
          <div class="product-card-actions">
            <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">Add 🛒</button>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─── Helpers ─── */
function categoryLabel(cat) {
  return { laptops: '💻 Laptop', computers: '🖥️ Computer', mobiles: '📱 Mobile' }[cat] || cat;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function getURLParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function toggleWishlist(id) {
  showToast('Added to wishlist!', 'info');
}

/* ─── Intersection Observer for scroll animations ─── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
