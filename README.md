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
- [File Structure](#-file-structure)
- [Pages & Navigation](#-pages--navigation)
- [Product Catalogue](#-product-catalogue)
- [Technology Stack](#-technology-stack)
- [How to Run](#-how-to-run)
- [Contact](#-contact)

---

## 🌟 Overview

Virtusa Computers is a full-featured tech retail e-commerce site selling **laptops, desktop computers, and mobile phones**. The project uses a modern, data-driven JavaScript templating approach — a single product page template dynamically renders any of the 30 products, and a single category page handles all three categories.

---

## ✨ Features

### 🛍️ Shopping
- **30 products** across 3 categories (Laptops, Computers, Mobiles)
- **Live search** — real-time dropdown in the header, filters as you type
- **Category filters** — price range and badge type (Hot Deal, New Arrival, Best Value)
- **Sort options** — by price (low/high), name (A–Z), top rated, biggest discount
- **Product cards** — image, specs chips, price with discount badge, Add to Cart button

### 🛒 Cart
- **Add to cart** from any product card or product detail page
- **Quantity controls** — increment/decrement on the cart page and product page
- **Live cart badge** — header badge updates instantly across all pages
- **Order totals** — subtotal, shipping (free over $499), 8% tax, grand total
- **Promo code** — enter VIRTUSA10 on the cart page for a discount
- **Persistence** — cart saved to browser storage, survives page refresh

### 💳 Checkout
- Multi-step form covering shipping info and payment details
- Real-time validation with red highlight on missing required fields
- Card number auto-formatting into groups of four digits
- Expiry date auto-formatting with slash separator
- Order summary sidebar showing all cart items, totals, and shipping cost
- Animated success confirmation modal with a unique order ID on submit

### 🎨 UI / UX
- Dark glassmorphism design with cyan and purple accents
- Smooth animations — scroll reveal, card hover lift, hero floating cards
- Toast notifications for add-to-cart, wishlist, errors, and promo codes
- Fully responsive — works on mobile (375 px), tablet, and desktop
- Keyboard accessible — all interactive elements work with Tab + Enter / Space

---

## 📁 File Structure

| Path | Description |
|---|---|
| `index.html` | Homepage — animated hero & featured products |
| `store.html` | Full store: Hot Deals, New Arrivals, All Products |
| `category.html` | Dynamic category page (`?cat=laptops\|computers\|mobiles\|all`) |
| `product.html` | Dynamic product detail page (`?id=laptop1` … `mobile10`) |
| `cart.html` | Shopping cart with qty controls & order totals |
| `checkout.html` | Shipping + payment form with order summary sidebar |
| `about.html` | Company story, values, team, stats |
| `css/main.css` | Design system — CSS variables, reset, typography, animations |
| `css/components.css` | Header, footer, nav, product cards, buttons, modals |
| `css/pages.css` | Page-specific layouts (hero, category, cart, checkout, about) |
| `js/products.js` | All 30 products as a structured array + query functions |
| `js/cart.js` | Cart — add/remove/update qty, browser storage, badge sync |
| `js/main.js` | Shared — header/footer renderer, search, toast, card template |
| `images/` | UI images — logo, social icons, crew photo, backgrounds |
| `images/products/` | Product images — laptop1–10, computer1–10, mobile1–10 |

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
| `product.html?id=laptop1` | Product Detail | Dynamic — renders any product by ID |
| `cart.html` | 🛒 Cart | Cart items, qty controls, totals, checkout link |
| `checkout.html` | 💳 Checkout | Shipping form, payment, order summary, success modal |
| `about.html` | ℹ️ About Us | Company story, values, team, contact |

---

## 📦 Product Catalogue

| Category | Count | Price Range | IDs |
|---|---|---|---|
| 💻 Laptops | 10 | $339 – $2,132 | laptop1 … laptop10 |
| 🖥️ Computers | 10 | $329 – $2,899 | computer1 … computer10 |
| 📱 Mobiles | 10 | $299 – $1,199 | mobile1 … mobile10 |

All product data is stored in `js/products.js`. To add a new product, add a new object to the PRODUCTS array in that file with the required fields — id, name, category, price, image, specs, and description. The product will automatically appear on the category page, store page, search dropdown, and its own detail page.

Product images should be placed in the `images/products/` folder and referenced by filename in the product object.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, responsive layout |
| **Vanilla JavaScript (ES2020)** | Dynamic rendering, cart logic, live search |
| **Google Fonts — Inter & Outfit** | Typography |
| **localStorage (Browser API)** | Cart persistence across pages |
| **CSS Custom Properties** | Design token system |
| **CSS Grid + Flexbox** | Responsive layouts |
| **IntersectionObserver API** | Scroll reveal animations |

No frameworks. No npm. No build tools. No external JS libraries.

---

## 🚀 How to Run

No build step, no server, and no dependencies are required.

1. Clone or download the repository
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari)

> **Note:** All images are served from the local `images/` folder. Make sure the `images/` and `images/products/` folders are present alongside the HTML files.


<div align="center">

Copyright © 2024 **Virtusa Technologies**. All rights reserved.  
[Privacy Policy](#) · [Terms of Service](#) · [Cookie Policy](#)

</div>
