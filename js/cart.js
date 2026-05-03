function getHomeCart() {
  return JSON.parse(localStorage.getItem("homeCart")) || [];
}

function saveHomeCart(cart) {
  localStorage.setItem("homeCart", JSON.stringify(cart));
}

function toArabicNumber(value) {
  return value.toString().replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
}

function arabicToEnglishNumber(str) {
  return String(str).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
}

function getNumericPrice(price) {
  const normalized = arabicToEnglishNumber(price);
  const cleaned = normalized.replace(/[^\d.]/g, "");
  return Number(cleaned) || 0;
}

function formatPrice(price) {
  return toArabicNumber(price) + " ₪";
}

function updateCartCount() {
  const cart = getHomeCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = toArabicNumber(totalQty);
  }
}

function renderCart() {
  const cart = getHomeCart();
  const container = document.getElementById("cart-items");

  updateCartCount();

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h3>السلة فارغة</h3>
        <p>لم يتم إضافة أي منتج بعد.</p>
        <a href="index.html">العودة للتسوق</a>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => {
    const price = getNumericPrice(item.price);
    const total = price * item.qty;

    return `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.pic}" alt="${item.name}">
        </div>

        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <div class="cart-item-price">السعر: ${item.price}</div>
          <div class="cart-item-total">المجموع: ${formatPrice(total)}</div>
        </div>

        <div class="cart-item-actions">
          <div class="qty-box">
            <button class="qty-btn" onclick="decreaseQty(${item.id})">-</button>
            <span class="qty-number">${toArabicNumber(item.qty)}</span>
            <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
          </div>

          <button class="remove-btn" onclick="removeItem(${item.id})">حذف</button>
        </div>
      </div>
    `;
  }).join("");
}

function increaseQty(id) {
  const cart = getHomeCart();
  const item = cart.find(product => product.id === id);

  if (item) {
    item.qty += 1;
  }

  saveHomeCart(cart);
  renderCart();
}

function decreaseQty(id) {
  let cart = getHomeCart();
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.qty -= 1;

  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveHomeCart(cart);
  renderCart();
}

function removeItem(id) {
  const cart = getHomeCart().filter(product => product.id !== id);
  saveHomeCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem("homeCart");
  renderCart();
}

function checkoutCart() {
  alert("تم استلام طلبك بنجاح ");
  localStorage.removeItem("homeCart");
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.getElementById("clear-cart-btn");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (clearBtn) {
    clearBtn.addEventListener("click", clearCart);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkoutCart);
  }

  renderCart();
});