const T = document.getElementById("discount_time");
document.addEventListener('DOMContentLoaded', function () {
    let hours = 0;
    let minutes = 60;
    let seconds = 0;
    const countdown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(countdown);
                    document.getElementById("discount").style.display = "none";
                    T.innerHTML = " ";
                    return;
                } else {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        T.innerHTML = ` ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});


const products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Headphones', price: 120 },
    { id: 4, name: 'Monitor', price: 300 }
];

function formatCurrency(n) {
    return '$' + Number(n).toFixed(2);
}

const container = document.getElementById('products');

products.forEach(p => {
    const b_el = document.createElement('div');
    b_el.className = 'product w-full max-w-sm bg-gray-900 text-white p-6 rounded-lg shadow-lg mx-auto';

    const el = document.createElement('div');

    const title = document.createElement('h5');
    title.textContent = p.name;
    title.className = 'text-lg font-semibold text-white';

    const lcont = document.createElement('div');
    lcont.className = 'flex items-center justify-between mt-6';

    const sp = document.createElement('span');
    sp.className = 'text-3xl font-extrabold text-white';
    sp.textContent = formatCurrency(p.price);

    const btn = document.createElement('button');
    btn.className = 'inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-sm text-sm px-4 py-2 focus:outline-none shadow cursor-pointer';
    btn.textContent = 'Add to Cart';
    btn.onclick = () => {
        if (window.ShoppingCartManager && typeof window.ShoppingCartManager.addToCart === 'function') {
            alert('Product added to cart');
            window.ShoppingCartManager.addToCart(p);
        } else {
            alert('Cart system not available');
        }
    };

    lcont.appendChild(sp);
    lcont.appendChild(btn);
    el.appendChild(title);
    el.appendChild(lcont);
    b_el.appendChild(el);
    container.appendChild(b_el);
});




































//The Window History Object

// The history object contains the URLs visited by the user (in the browser window).

// The history object is a property of the window object.

// The history object is accessed with window.history or just history

// let length = window.history.length;
// console.log(length);

// back()	Loads the previous URL (page) in the history list
// forward()	Loads the next URL (page) in the history list
// go()	Loads a specific URL (page) from the history list
// length	Returns the number of URLs (pages) in the history list

/* **************************************************************** */

// The Window Navigator Object
// The navigator object contains information about the browser.

// The navigator object is a property of the window object.

// The navigator object is accessed with window.navigator or just navigator:


// cookieEnabled	Returns true if browser cookies are enabled
// console.log(navigator.cookieEnabled);
// // geolocation	Returns a geolocation object for the user's location
// console.log(navigator.geolocation);
// // language	Returns browser language
// console.log(navigator.language);
// // onLine	Returns true if the browser is online
// console.log(navigator.onLine);
// // userAgent	Returns browser user-agent header
// console.log(navigator.userAgent);