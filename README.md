# 🖥️ Virtusa Computers — E-Commerce Web Application

<div align="center">

![Virtusa Computers](https://img.shields.io/badge/Virtusa-Computers-00d4ff?style=for-the-badge&labelColor=0a0e1a)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/No_Framework-Vanilla_JS-7c3aed?style=for-the-badge)

**A fully dynamic, modern e-commerce website for Virtusa Computers**  
*Built with pure HTML · CSS · Vanilla JavaScript — no build tools, no dependencies*

[🏪 Open Store](index.html) · [💻 Laptops](category.html?cat=laptops) · [🖥️ Computers](category.html?cat=computers) · [📱 Mobiles](category.html?cat=mobiles)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [File Structure](#-file-structure)
- [Pages & Navigation](#-pages--navigation)
- [Product Data](#-product-data)
- [Cart System](#-cart-system)
- [Design System](#-design-system)
- [How to Run](#-how-to-run)
- [Adding Products](#-adding-products)
- [Technology Stack](#-technology-stack)

---

## 🌟 Overview

Virtusa Computers is a full-featured tech retail e-commerce site selling **laptops, desktop computers, and mobile phones**. The project was rebuilt from scratch to replace 30+ hand-coded near-identical HTML product pages with a modern, data-driven JavaScript templating approach.

### Before vs After

| | Before (Old) | After (Rebuilt) |
|---|---|---|
| **Product Pages** | 30 near-identical HTML files | 1 dynamic `product.html` template |
| **Category Pages** | 3 duplicate HTML files | 1 `category.html` with `?cat=` param |
| **CSS** | 2 flat files + inline styles everywhere | Organized `css/` folder with design system |
| **JavaScript** | 1 broken validation script | `js/products.js` + `js/cart.js` + `js/main.js` |
| **Cart** | Empty stub | Full localStorage cart with live badge |
| **Checkout** | Unstyled basic form | Full form + validation + order summary + modal |
| **Search** | Static non-functional input | Live search with dropdown across all pages |
| **Design** | Plain teal/white, inconsistent | Dark glassmorphism, animated, responsive |
| **README** | 16 bytes (empty) | Full documentation ✅ |

---

## ✨ Features

### 🛍️ Shopping
- **30 products** across 3 categories (Laptops, Computers, Mobiles)
- **Live search** — real-time dropdown in the header, filters as you type
- **Category filters** — price range, badge type (Hot Deal, New Arrival, Best Value)
- **Sort** — by price (low/high), name (A-Z), top rated, biggest discount
- **Product cards** — image, specs chips, price with discount badge, "Add to Cart" button

### 🛒 Cart
- **Add to cart** from any product card or product detail page
- **Quantity controls** — increment/decrement on cart page and product page
- **Live cart badge** — header badge updates instantly across all pages
- **Order totals** — subtotal, shipping (free over $499), 8% tax, grand total
- **Promo code** — try `VIRTUSA10` for a discount message
- **Persistence** — cart saved to `localStorage`, survives page refresh and tab changes

### 💳 Checkout
- Multi-step form: Shipping info + Payment details
- **Real-time validation** — red highlight on missing required fields
- **Card number auto-formatting** — groups into `1234 5678 9012 3456`
- **Expiry auto-formatting** — inserts `/` automatically (`12/25`)
- **Order summary sidebar** — shows all cart items, totals, and shipping on the right
- **Success modal** — animated confirmation with unique order ID on submit

### 🎨 UI/UX
- **Dark glassmorphism design** — premium dark navy with cyan and purple accents
- **Smooth animations** — scroll reveal, card hover lift, hero float animations
- **Toast notifications** — for add-to-cart, wishlist, errors, and promo codes
- **Fully responsive** — works on mobile (375px), tablet, and desktop
- **Keyboard accessible** — all interactive elements work with Tab + Enter/Space

---

## 🏗️ Architecture

The key innovation: instead of **30+ near-identical HTML files**, the project uses a **data-driven JS templating approach**:

```
URL: product.html?id=laptop6
        ↓
  reads ?id from URL
        ↓
  finds product in PRODUCTS[] array (products.js)
        ↓
  renders full detail page dynamically
```

```
URL: category.html?cat=laptops
        ↓
  reads ?cat from URL
        ↓
  filters PRODUCTS[] by category
        ↓
  renders product grid dynamically
```

**Adding a new product** = adding one object to `PRODUCTS[]` in `js/products.js`. No new HTML files ever needed.

---

## 📁 File Structure

```
E-commerce_web/
│
├── index.html          ← Homepage with animated hero & featured products
├── store.html          ← Full store: Hot Deals, New Arrivals, All Products
├── category.html       ← Dynamic category page  (?cat=laptops|computers|mobiles|all)
├── product.html        ← Dynamic product detail  (?id=laptop1 … mobile10)
├── cart.html           ← Shopping cart with qty controls & order totals
├── checkout.html       ← Shipping + payment form with order summary sidebar
├── about.html          ← Company story, values, team, stats
├── README.md           ← This file
│
├── css/
│   ├── main.css        ← Design system: CSS variables, reset, typography, animations
│   ├── components.css  ← Header, footer, nav, product cards, buttons, modals
│   └── pages.css       ← Page-specific layouts (hero, category, cart, checkout, about)
│
├── js/
│   ├── products.js     ← All 30 products as a structured array + query functions
│   ├── cart.js         ← Cart: add/remove/update qty, localStorage, badge sync
│   └── main.js         ← Shared: header/footer renderer, search, toast, card template
│
└── [images]            ← laptop1.jpg … mobile10.jpg, logo.jpg, fb.jpg, etc.
```

---

## 🗺️ Pages & Navigation

| URL | Page | Description |
|---|---|---|
| `index.html` | 🏠 Homepage | Hero, features strip, category cards, featured products |
| `store.html` | 🏪 Store | Hot Deals, New Arrivals, All Products with live search & sort |
| `category.html?cat=laptops` | 💻 Laptops | 10 laptop products, filter sidebar, sort |
| `category.html?cat=computers` | 🖥️ Computers | 10 desktop products, filter sidebar, sort |
| `category.html?cat=mobiles` | 📱 Mobiles | 10 mobile products, filter sidebar, sort |
| `category.html?cat=all` | 🛍️ All Products | All 30 products with full filters |
| `product.html?id=laptop1` | Product Detail | Dynamic: renders any product by ID |
| `cart.html` | 🛒 Cart | Cart items, qty controls, totals, checkout link |
| `checkout.html` | 💳 Checkout | Shipping form, payment, order summary, success modal |
| `about.html` | ℹ️ About Us | Company story, values, team, contact |

---

## 📦 Product Data

All 30 products are defined in [`js/products.js`](js/products.js) as a JavaScript array.

### Product Object Structure

```javascript
{
  id:            'laptop1',                  // URL key: product.html?id=laptop1
  name:          'Microsoft Surface Laptop 2',
  category:      'laptops',                  // 'laptops' | 'computers' | 'mobiles'
  price:         1049,                       // current price (number)
  originalPrice: 1299,                       // original price (for discount %)
  image:         'laptop1.jpg',             // image filename in root
  badge:         'Hot Deal',                 // optional badge label
  badgeColor:    'badge-orange',             // CSS badge class
  rating:        4.7,                        // star rating (1-5)
  reviews:       128,                        // review count
  specs: {                                   // key-value spec pairs (any number)
    'Screen Size':  '13.5" PixelSense',
    'Processor':    'Intel Core i5-8250U',
    'RAM':          '8 GB LPDDR3',
    'Storage':      '128 GB SSD',
    // ...
  },
  description:   'Full product description text...'
}
```

### Available Query Functions

```javascript
getProductById('laptop1')                    // → single product object
getProductsByCategory('laptops')             // → array of products
getProductsByCategory('all')                 // → all 30 products
searchProducts('MacBook')                    // → matching products array
getHotDeals()                                // → products with badge 'Hot Deal'
getNewArrivals()                             // → products with badge 'New Arrival'
getRelatedProducts('laptop1', 'laptops', 4) // → 4 related products (excl. current)
```

### Product Catalogue

| Category | Count | Price Range | IDs |
|---|---|---|---|
| 💻 Laptops | 10 | $339 – $2,132 | `laptop1` … `laptop10` |
| 🖥️ Computers | 10 | $329 – $2,899 | `computer1` … `computer10` |
| 📱 Mobiles | 10 | $299 – $1,199 | `mobile1` … `mobile10` |

---

## 🛒 Cart System

The cart is powered by [`js/cart.js`](js/cart.js) using `localStorage` for persistence.

### Cart API

```javascript
addToCart('laptop1', 1)          // Add product (qty defaults to 1)
removeFromCart('laptop1')        // Remove completely
updateCartQty('laptop1', 3)      // Set qty to 3
clearCart()                      // Empty the cart
getCart()                        // → [{id, name, price, image, qty}, ...]
getCartCount()                   // → total item count (sum of all qtys)
getCartTotal()                   // → total price (number)
getCartTotalFormatted()          // → '$1,049.00'
```

### Cart Events

The cart dispatches a `cartUpdated` custom event whenever the cart changes. All cart badges on the page update automatically.

```javascript
document.addEventListener('cartUpdated', (e) => {
  console.log(e.detail.cart); // current cart array
});
```

### Promo Code

On the cart page, enter **`VIRTUSA10`** in the promo code field.

---

## 🎨 Design System

The design system is defined as CSS custom properties in [`css/main.css`](css/main.css).

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0a0e1a` | Page background |
| `--bg-secondary` | `#111827` | Section backgrounds |
| `--bg-card` | `#1a2035` | Card backgrounds |
| `--accent-cyan` | `#00d4ff` | Primary accent, prices |
| `--accent-purple` | `#7c3aed` | Secondary accent, badges |
| `--accent-green` | `#10b981` | Success, savings |
| `--accent-red` | `#ef4444` | Danger, remove buttons |
| `--text-primary` | `#e8ecf0` | Main body text |
| `--text-secondary` | `#94a3b8` | Subtext |
| `--text-muted` | `#64748b` | Labels, placeholders |

### Typography

| Font | Usage | Weights |
|---|---|---|
| **Inter** (Google Fonts) | UI text, body, buttons | 300–800 |
| **Outfit** (Google Fonts) | Headings, prices, hero | 400–900 |

### Badge Classes

```html
<span class="badge badge-cyan">New Arrival</span>
<span class="badge badge-orange">Hot Deal</span>
<span class="badge badge-green">Best Value</span>
<span class="badge badge-purple">Premium</span>
<span class="badge badge-red">Gaming</span>
```

### Button Classes

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>

<!-- Sizes -->
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-full">Full Width</button>
```

---

## 🚀 How to Run

**No build step, no server, no dependencies required.**

1. Clone or download the repository
2. Open `index.html` in any modern browser

```bash
git clone https://github.com/DuminduMalinga/E-commerce_web.git
cd E-commerce_web
# Open index.html in your browser
start index.html       # Windows
open index.html        # macOS
xdg-open index.html    # Linux
```

> ⚠️ **Note:** Product images are served from the local filesystem. If images appear broken, ensure all `.jpg` / `.png` files are present in the root directory.

---

## ➕ Adding Products

To add a new product, open [`js/products.js`](js/products.js) and add a new object to the `PRODUCTS` array:

```javascript
{
  id:            'laptop11',          // Must be unique
  name:          'My New Laptop',
  category:      'laptops',           // 'laptops' | 'computers' | 'mobiles'
  price:         899,
  originalPrice: 1099,                // Optional: shows crossed-out original price
  image:         'laptop11.jpg',      // Place image file in project root
  badge:         'New Arrival',       // Optional
  badgeColor:    'badge-cyan',        // badge-cyan|orange|green|purple|red
  rating:        4.5,
  reviews:       0,
  specs: {
    'Screen Size': '15.6" FHD',
    'Processor':   'Intel Core i7',
    'RAM':         '16 GB',
    'Storage':     '512 GB SSD',
  },
  description: 'Describe your product here.'
}
```

That's it. The product will automatically appear on:
- The category page (`category.html?cat=laptops`)
- The store page (`store.html`)
- The search dropdown
- Its own detail page (`product.html?id=laptop11`)

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **HTML5** | — | Page structure, semantic markup |
| **CSS3** | — | Styling, animations, responsive layout |
| **Vanilla JavaScript** | ES2020 | Dynamic rendering, cart logic, search |
| **Google Fonts** | — | Inter + Outfit typography |
| **localStorage** | — | Cart persistence across pages |
| **CSS Custom Properties** | — | Design token system |
| **CSS Grid + Flexbox** | — | Responsive layouts |
| **IntersectionObserver API** | — | Scroll reveal animations |

**No frameworks. No npm. No build tools. No external JS libraries.**

---

## 📞 Contact

**Virtusa Computers**  
📍 123 Main Street, Berheim, State Province, Country  
📞 Hotline: 066 1234567  
✉️ info@virtusacomputers.com  
🌐 [Facebook](https://facebook.com) · [Twitter](https://twitter.com)

---

<div align="center">

Copyright © 2024 **Virtusa Technologies**. All rights reserved.  
[Privacy Policy](#) · [Terms of Service](#) · [Cookie Policy](#)

</div>