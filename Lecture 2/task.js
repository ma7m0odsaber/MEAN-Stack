const products = [
    "Wireless Mouse",
    "Mechanical Keyboard",
    "Gaming Headset",
    "Smart Watch",
    "Laptop Stand",
    "USB-C Cable (2m)",
    "Bluetooth Speaker",
    "24-inch Monitor",
    "Webcam 1080p",
    "External SSD 1TB"
]
const ids = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
const prices = [25.99, 89.50, 55.00, 149.99, 29.99, 12.50, 45.00, 199.99, 49.99, 119.00];
const categories = [
    "Electronics",
    "Electronics",
    "Audio",
    "Wearables",
    "Accessories",
    "Accessories",
    "Audio",
    "Electronics",
    "Electronics",
    "Storage"
];
const availability = [
    "Available",
    "Available",
    "Not Available",
    "Available",
    "Available",
    "Available",
    "Not Available",
    "Available",
    "Not Available",
    "Available"
];

function Product_Name_Extraction(){
    for(let j=0; j<products.length; j++){
        
        console.log(products[j]);
    }
}

function Available_Products_Filter(){
    for(let j=0; j<products.length; j++){
        if(availability[j] == 'Available')
            console.log(products[j]);
    }
}

function Product_Lookup(id){
    for(let i=0; i<ids.length; i++){
        if(ids[i] === id){
            console.log(products[i]);
            break;
        }
    }
}

function Inventory_Value_Calculator(){
    let cnt = 0;
    for (const i of availability) {
        if(i==='Available') cnt++;
    }
    console.log(`There are ${cnt} items available.`);
}

function Report_Generator(){
    for(let i=0; i<products.length; i++){
        console.log(products[i]+', '+prices[i]+', '+availability[i]);
    }
}

function Discount_Application(){
    const discount = 0.1;
    for(let i=0; i<availability.length; i++){
        if(availability[i] == 'Available'){
            prices[i] *= (1-discount);
            console.log(products[i]+', '+prices[i]);
        }
    }
}

function Category_Statistics(){
    let arr = [];
    let names = [];
    for(let i=0; i<categories.length; i++){
        let f = 0;
        for(let j=0; j<names.length; j++){
            if(categories[i] == names[j]){
                f = 1;
                arr[j]++;
                break;
            }
        }
        if(f == 0){
            names.push(categories[i]);
            arr.push(+1);
        }
    }
    for(let j=0; j<names.length; j++){
        console.log(names[j]+' '+arr[j]);
    }
}

function Premium_Product_Identifier(){
    let idx = 0, mx = 0;
    for(let i=0; i<prices.length; i++){
        if(prices[i] > mx){
            mx = prices[i];
            idx = i;
        }
    }
    console.log(`The Premium Product is ${products[idx]}`);
}

// Product_Name_Extraction();
// Available_Products_Filter();
// Product_Lookup(102);
// Inventory_Value_Calculator();
// Report_Generator();
// Discount_Application();
// Category_Statistics();
Premium_Product_Identifier();