// ==========================================
// قائمة الهامبرغر
// ==========================================
function toggleMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  }
}

function closeMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.classList.remove("open");
    menu.classList.remove("open");
  }
}

// ==========================================
// تحويل الأرقام للعربي
// ==========================================
function toArabicNumber(value) {
  return value.toString().replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
}

// ==========================================
// سلة الصفحة الرئيسية فقط
// ==========================================
function getHomeCart() {
  return JSON.parse(localStorage.getItem("homeCart")) || [];
}

function saveHomeCart(cart) {
  localStorage.setItem("homeCart", JSON.stringify(cart));
}

function updateHomeCartCount() {
  const cart = getHomeCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = toArabicNumber(total);
  }
}

// ==========================================
// Toast
// ==========================================
function showToast() {
  const toast = document.getElementById("cart-toast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ==========================================
// إضافة منتج للسلة
// ==========================================
function addToHomeCart(product) {
  const cart = getHomeCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      pic: product.pic,
      qty: 1
    });
  }

  saveHomeCart(cart);
  updateHomeCartCount();
  showToast();
}

// ==========================================
// ربط أزرار الإضافة
// ==========================================
function setupAddToCartButtons() {
  const buttons = document.querySelectorAll(".prod-add");

  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();

      const product = {
        id: Number(btn.dataset.id),
        name: btn.dataset.name,
        price: btn.dataset.price,
        pic: btn.dataset.pic,
        glb: btn.dataset.glb // <- تم إضافة دعم تحميل GLB
      };

      if (!product.id || !product.name || !product.price || !product.pic) {
        console.warn("بيانات المنتج غير مكتملة:", product);
        return;
      }

      addToHomeCart(product);

      btn.textContent = "✓";
      btn.style.background = "#f2d242";
      btn.style.color = "#29164b";

      setTimeout(() => {
        btn.textContent = "+";
        btn.style.background = "";
        btn.style.color = "";
      }, 1500);
    });
  });
}

// ==========================================
// إنشاء العنصر ثلاثي الأبعاد (Model Viewer)
// ==========================================
function create3DViewer(product) {
  const container = document.createElement("div");
  container.className = "model-viewer-container";

  // استخدم data-src بدلاً من src لتفعيل Lazy Loading
  const viewer = document.createElement("model-viewer");
  viewer.setAttribute("data-src", product.glb); // Lazy Loading للـ GLB
  viewer.setAttribute("alt", product.name);
  viewer.setAttribute("camera-controls", "");
  viewer.setAttribute("style", "width:100%; height:400px; display:block; background:transparent;");
  viewer.setAttribute("interaction-prompt", "auto");

  // ⚠ إيقاف auto-rotate
  // لا تضيف auto-rotate هنا، لذا الدوران التلقائي متوقف

  container.appendChild(viewer);
  document.body.appendChild(container);

  // تحميل الـ GLB عند العرض
  container.addEventListener("mouseenter", () => {
    if (viewer.dataset.src && !viewer.src) {
      viewer.src = viewer.dataset.src; // تحميل عند الحاجة (Lazy)
    }
  });
}

// ==========================================
// تشغيل عند فتح الصفحة
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  updateHomeCartCount();
  setupAddToCartButtons();
});