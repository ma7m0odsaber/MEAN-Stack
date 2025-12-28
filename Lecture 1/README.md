# JavaScript Logic & DOM Manipulation Assignment

This repository contains a practical implementation of basic JavaScript concepts including DOM manipulation, event handling, and control flow logic. The project simulates a simple e-commerce system with distinct "Admin" (Seller) and "User" (Buyer) views.

## 📂 Project Structure

* **`index.html`**: The main interface containing the Login, Buy, and Sell sections (hidden/shown dynamically).
* **`script.js`**: Contains all the logic for authentication, item management, and dynamic HTML generation.

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

## 🔑 Usage & Credentials

### 1. Admin Mode (Seller)

* **Username:** `ma7m0od_saber`
* **Password:** `12345678`
* **Feature:** Access to the "Sell" interface where new items can be added to the inventory array.

### 2. User Mode (Buyer)

* **Username:** (Any other name)
* **Password:** (Any password)
* **Feature:** Access to the "Buy" interface. The system dynamically loops through the available items array and creates clickable buttons for each product.

---

## 📚 Lecture Topics Covered

As part of the NTI MEAN Stack course, this project demonstrates the following theoretical and practical concepts:

### 1. JavaScript Origin & History

JavaScript was created by **Brendan Eich** in 1995 while he was working at **Netscape Communications**. It was originally developed in just 10 days under the codename "Mocha," then "LiveScript," and finally named "JavaScript" to capitalize on the popularity of Java at the time, despite having no relation to it. It has since evolved into the standard for client-side web behavior, standardized under **ECMAScript**.

### 2. Conditional Statements (`if` / `else`)

This project uses `if/else` statements heavily for the **Authentication Logic**.

* The script checks `if` the username matches the admin credentials.
* `if` true, it displays the Selling Dashboard.
* `else`, it assumes a standard user and displays the Buying Dashboard.

### 3. The `switch` Statement

The `switch` statement is an alternative to complex `if/else` chains, useful when checking a variable against multiple distinct values.

* *In this project context:* It is used to handle specific item logic (e.g., executing different code blocks depending on whether "apple" or "juice" was selected).

### 4. Loops (`for`)

Loops are used to automate repetitive tasks.

* **Usage in Project:** Instead of hard-coding every button in HTML, a `for` loop iterates through the `items` array (`['apple', 'juice', ...]`).
* For every iteration, the script dynamically creates a new HTML `<button>`, assigns it an ID and an event listener, and appends it to the document body. This allows the shop to scale indefinitely as new items are added.

---

## 🛠 Technologies Used

* **HTML5:** For page structure.
* **JavaScript (ES6):** For logic and DOM manipulation (`document.getElementById`, `createElement`, `appendChild`).