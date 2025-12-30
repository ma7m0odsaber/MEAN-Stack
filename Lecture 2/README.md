# Lecture 2: JavaScript Arrays and Functions

## Overview
This lecture covers fundamental JavaScript concepts including arrays, array methods, type conversion, and practical exercises with product inventory management.

## Files Included

### 1. `task.js`
Contains a comprehensive product inventory management system with multiple functions demonstrating array manipulation and data processing.

**Data Structures:**
- `products`: Array of product names
- `ids`: Array of product IDs (101-110)
- `prices`: Array of product prices
- `categories`: Array of product categories
- `availability`: Array indicating product availability status

**Functions:**

1. **`Product_Name_Extraction()`**
   - Displays all product names from the inventory

2. **`Available_Products_Filter()`**
   - Filters and displays only products that are currently available

3. **`Product_Lookup(id)`**
   - Searches for a product by its ID and displays the product name
   - Example: `Product_Lookup(102)` returns "Mechanical Keyboard"

4. **`Inventory_Value_Calculator()`**
   - Counts and displays the total number of available items

5. **`Report_Generator()`**
   - Generates a comprehensive report showing product name, price, and availability status

6. **`Discount_Application()`**
   - Applies a 10% discount to all available products
   - Displays the product name and discounted price

7. **`Category_Statistics()`**
   - Analyzes and displays the count of products in each category

8. **`Premium_Product_Identifier()`**
   - Identifies and displays the most expensive product in the inventory

### 2. `script.js`
Contains examples and exercises covering:

- **Type Conversion:**
  - String to number conversion using `+` operator
  - `parseInt()` and `parseFloat()` functions
  - Handling edge cases with parsing

- **URI Encoding:**
  - `encodeURI()` - Encodes spaces in URLs
  - `encodeURIComponent()` - Encodes spaces and special characters (/, :, @, &, etc.)

- **Array Methods:**
  - `forEach()` - Iterates through array elements
  - `map()` - Transforms array elements
  - `filter()` - Filters array based on conditions
  - `find()` - Finds first matching element
  - `slice()` - Extracts portion of array (non-destructive)
  - `splice()` - Modifies array by removing/replacing elements (destructive)

- **Interactive Exercise:**
  - Prompts user to create an array
  - Implements a custom function to filter array elements

### 3. `index.html`
Simple HTML file that loads and executes `task.js` in the browser.

## How to Use

### Running task.js
1. Open `index.html` in a web browser
2. Open the browser's developer console (F12)
3. Uncomment the function you want to test in `task.js`
4. Refresh the page to see the output

### Running script.js
1. Open `script.js` in a Node.js environment or browser console
2. Uncomment the sections you want to test
3. For the interactive exercise, run it in an environment that supports `prompt()` (browser)

## Key Concepts Covered

### Array Manipulation
- Iterating through arrays using `for` loops
- Using array methods: `forEach`, `map`, `filter`, `find`
- Array slicing and splicing operations

### Type Conversion
- Converting strings to numbers
- Parsing integers and floats
- Handling edge cases in parsing

### Function Design
- Creating reusable functions
- Working with function parameters
- Implementing search and filter logic

### Data Processing
- Filtering data based on conditions
- Calculating statistics
- Generating reports
- Applying transformations (discounts)

## Example Usage

```javascript
// Display all products
Product_Name_Extraction();

// Find product by ID
Product_Lookup(102);

// Get category statistics
Category_Statistics();

// Apply discount to available products
Discount_Application();
```

## Notes
- Most functions in `task.js` are commented out by default
- Uncomment the function call at the bottom of the file to test it
- The `Discount_Application()` function modifies the original `prices` array
- All output is displayed using `console.log()`

