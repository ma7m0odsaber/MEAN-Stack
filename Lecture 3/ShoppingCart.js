(function () {
  const STORAGE_KEY = 'cart';
  let cart = [];
  let actionStack = [];
  let requestQueue = [];

  function formatCurrency(n) {
    return '$' + ' ' + Number(n).toFixed(2);
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cart = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
      alert('Warning: Unable to save cart locally.');
    }
  }

  function renderCartIfPresent() {
    const containerEl = document.getElementById('cart-items');
    if (!containerEl) return;
    containerEl.innerHTML = '';

    if (cart.length === 0) {
      containerEl.textContent = 'Cart is empty';
      containerEl.className = 'flex justify-center text-gray-900 text-lg';
      const totalEl = document.getElementById('total');
      totalEl.textContent = formatCurrency(0);
      return;
    }

    cart.forEach((p, i) => {
      const b_el = document.createElement('div');
      b_el.className = 'product w-full max-w-sm bg-gray-900 text-white p-6 rounded-lg shadow-lg mx-auto';

      const itemInner = document.createElement('div');

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
      btn.textContent = 'Remove';
      btn.onclick = () => removeAt(i);

      lcont.appendChild(sp);
      lcont.appendChild(btn);
      itemInner.appendChild(title);
      itemInner.appendChild(lcont);
      b_el.appendChild(itemInner);
      containerEl.appendChild(b_el);
    });

    const total = calculateTotal();
    const totalEl = document.getElementById('total');
    totalEl.textContent =formatCurrency(total);
  }

  function calculateTotal() {
    return cart.reduce((sum, item) => {
      const p = Number(item && item.price ? item.price : 0);
      return sum + (isNaN(p) ? 0 : p);
    }, 0);
  }

  function addToCart(product) {
    cart.push(product);
    actionStack.push({ type: 'add', product });
    saveCart();
    renderCartIfPresent();
  }

  function removeAt(index) {
    try {
      if (!confirm('Confirm remove this item from cart?')) return;
      if (index < 0 || index >= cart.length) throw new Error('Invalid index');
      const removed = cart.splice(index, 1)[0];
      actionStack.push({ type: 'remove', product: removed, index });
      saveCart();
      renderCartIfPresent();
    } catch (e) {
      console.error('Remove error', e);
      alert('Unable to remove item.');
    }
  }

  function undo() {
    try {
      if (actionStack.length === 0) {
        alert('Nothing to undo');
        return;
      }
      const a = actionStack.pop();
      if (a.type === 'add') {
        const idx = cart.map(x => x.id).lastIndexOf(a.product.id);
        if (idx >= 0) cart.splice(idx, 1);
      } else if (a.type === 'remove') {
        const idx = Math.min(Math.max(0, a.index), cart.length);
        cart.splice(idx, 0, a.product);
      } else if (a.type === 'clear') {
        cart = Array.isArray(a.previous) ? a.previous.slice() : [];
      }
      saveCart();
      renderCartIfPresent();
    } catch (e) {
      console.error('Undo failed', e);
      alert('Unable to undo');
    }
  }

  function clearCart() {
    if (!confirm('Clear entire cart?')) return;
    actionStack.push({ type: 'clear', previous: cart.slice() });
    cart = [];
    saveCart();
    renderCartIfPresent();
  }

  // expose manager
  window.ShoppingCartManager = {
    addToCart,
    removeAt,
    undo,
    clearCart,
    getCart: () => cart.slice(),
    getTotal: () => calculateTotal(),
    _debug: () => ({ cart, actionStack, requestQueue })
  };

  document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    renderCartIfPresent();

    const undoBtn = document.getElementById('undo-btn');
    if (undoBtn) undoBtn.onclick = undo;
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) clearBtn.onclick = clearCart;
  });

})();
