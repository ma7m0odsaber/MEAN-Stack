# 🎓 Students Management System

A dynamic web application built with Vanilla JavaScript and Tailwind CSS to manage student records, calculate class statistics, and search for specific student results.

## 📋 Project Overview

This project demonstrates how to manipulate the Document Object Model (DOM) using JavaScript to display data from arrays. It calculates the class average and the highest grade automatically and provides a real-time search feature to filter students by name.

## ✨ Key Features

* **Dynamic Data Rendering:** Automatically generates a table of students and grades from JavaScript arrays.
* **Automated Statistics:** Calculates and displays:
* **Class Average:** The mean score of all students.
* **Highest Grade:** The top score in the class.


* **Search Functionality:** Allows users to search for a specific student by name (case-insensitive).
* **Status Indicators:** Automatically assigns "Pass" (Green) or "Fail" (Red) status based on the grade (Passing grade >= 50).


* **Responsive UI:** Styled with **Tailwind CSS** for a clean, modern look.

## 🛠 Technologies Used

* **HTML5:** Structure and layout.
* **JavaScript (ES6):** Logic for data processing, DOM manipulation, and event handling.
* **Tailwind CSS (CDN):** Utility-first CSS framework for styling.

---

## 🚀 How to Run

1. **Clone or Download** this repository.
2. Ensure you have an internet connection (required for loading Tailwind CSS via CDN).
3. Open the `index.html` file in any modern web browser (Chrome, Edge, Firefox, etc.).

---

## 📂 Code Structure

### 1. Data Structure (`script.js`)

The data is stored in two parallel arrays:

```javascript
const students = ["Ahmed", "Sara", "Mahmoud", ...];
const grades = [78, 85, 49, ...];

```

### 2. Logic Implementation

* **Loops (`for`):** Used to iterate through the arrays to calculate the sum of grades and to generate HTML table rows for every student.
* **Conditionals (`if` / Ternary Operator):** Used to determine if a student has passed or failed.
```javascript
// Example of Ternary Operator used for styling
tStatus.className = `... ${grades[i] >= 50 ? "text-green-600" : "text-red-600"}`;

```


* **Search Logic:** The `Search()` function takes the input value, converts it to lowercase, and compares it against the student array to find matches.

### 3. User Interface (`index.html`)

* The UI is built using Tailwind CSS utility classes (e.g., `bg-gray-50`, `text-center`, `shadow-md`).
* It contains a **Search Section**, **Statistics Cards**, and the main **Data Table**.

---

## 🔮 Future Improvements

* Add a form to allow users to **add new students** dynamically.
* Convert the parallel arrays into an **Array of Objects** (e.g., `[{name: "Ahmed", grade: 78}, ...]`) for better data management.
* Add local storage support to save data between page reloads.

---

**Author:** Mahmoud Saber
**Course:** NTI MEAN Stack