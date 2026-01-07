# Vanilla JS Shopping Cart with Undo Functionality

A lightweight, front-end e-commerce prototype built with vanilla JavaScript and Tailwind CSS. This project demonstrates state management without external frameworks, featuring a persistent shopping cart, an action-stack-based undo system, and a dynamic discount timer.

## 🚀 Features

### Core Functionality
- **Product Listing:** Dynamically renders products with prices and "Add to Cart" buttons.
- **Cart Management:** - Add items to cart.
  - Remove individual items.
  - Clear the entire cart.
  - **Undo System:** A stack-based undo feature that allows users to reverse their last action (Add, Remove, or Clear).
- **Persistence:** Uses `localStorage` so the cart contents remain saved even after refreshing the browser.
- **Dynamic Totals:** Automatically calculates and updates the total price formatted in USD.

### UI/UX
- **Countdown Timer:** A JavaScript-driven countdown on the landing page ("Discount Ends After...").
- **Responsive Design:** Styled using Tailwind CSS (via CDN) for a clean, grid-based layout.
- **Notifications:** Simple alerts when items are added or removed.

## 🛠️ Technologies Used
- **HTML5**
- **CSS3** (Tailwind CSS via CDN)
- **JavaScript (ES6+)**
  - Uses the **Module Pattern (IIFE)** in `ShoppingCart.js` to encapsulate logic.
  - DOM Manipulation.
  - `localStorage` API.

## 📂 Project Structure

```text
.
├── index.html          # Main landing page (Product grid & Timer)
├── Cart.html           # Cart view page (Items list, Total, Undo/Clear controls)
├── Products.js         # Handles product rendering & Countdown logic
└── ShoppingCart.js     # Core logic: State management, Storage, and Undo stack