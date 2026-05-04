// للهامبرغر
function toggleMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  }
}
function closeMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
}
// المنتج
const PRODUCTS = [
  {
    id: 1,
    glb: 'glb/notebook.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/big_note.png",
    name: 'دفتر أثر المميز',
    price: '٤٥ ₪',
    badge: 'جديد',
    badgeClass: 'pp-badge-new',
    cat: 'الدفاتر والمفكرات',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/big_note.png',
    bgClass: 'prod-bg-1',
    desc: 'دفتر أثر المميز هو رفيقك اليومي للأفكار، الملاحظات، والإبداع. مصمّم بعناية لتعكس هويتنا البصرية بألوانها الغنية وأنماطها الهندسية الفريدة. الغلاف مصنوع من كرتون فاخر بطبقة حماية مطفية، والصفحات من ورق أبيض ناعم مقاس ٨٠ جرام مناسب لجميع أنواع الأقلام.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A4'],
      ['عدد الصفحات', '١٤٠ صفحة'],
      ['نوع الأوراق', 'مسطّرة '],
      ['التجليد', ' مقاوم للماء'],
      ['الإتاحة', 'متوفر بـ ٥ ألوان']
    ]
  },
  {
    id: 2,
    glb: 'glb/Pen.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/pen.jpeg",
    name: 'قلم أثر المميز',
    price: '٣٨ ₪',
    badge: null,
    cat: 'الأقلام والألوان',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/pen.jpeg',
    bgClass: 'prod-bg-2',
    desc: 'طقم أقلام فنية متكامل يضم ١٢ قلم بين جراف وماركر، مصمّد للفنانين والمبدعين الذين يبحثون عن دقة اللون وجودة الخط. الأحبار مقاومة للماء وثابتة اللون، والأطراف متنوعة بين رفيعة وسميكة لتناسب أي أسلوب إبداعي.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['عدد الأقلام', '١ قلم'],
      ['الألوان', '٣ ألوان متنوعة'],
      ['الحبر', 'مقاوم للماء'],
      ['طرف القلم', '٠.٥ مم — ٢ مم']
    ]
  },
  {
    id: 3,
    glb: 'glb/smallnote.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/small%20note.jpeg",
    name: 'منظّم المهام اليومي',
    price: '٦٠ ₪',
    badge: 'الأكثر مبيعًا',
    badgeClass: 'pp-badge-new',
    cat: 'التنظيم والتخطيط',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/small%20note.jpeg',
    bgClass: 'prod-bg-3',
    desc: 'نوتة عملية وأنيقة تساعدك على ترتيب يومك وتسجيل مهامك بسهولة. مناسبة لتدوين الخطط اليومية، المواعيد، والأهداف، مع تصميم مريح يجعل التنظيم أبسط وأجمل. خيار مثالي للدراسة، العمل، أو الاستخدام الشخصي اليومي.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المدة', '٥٢ أسبوع كامل'],
      ['المقاس', 'A5 '],
      ['الصفحات', '١٣٠ صفحة ملونة'],
      ['الغلاف', 'شفاف'],
      ['الإضافات', 'ملصقات + علامة صفحة'],
      ['اللغة', 'عربي']
    ]
  },
  {
    id: 4,
    glb: 'glb/finalcelender.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/taqweem.jpeg",
    name: 'تقويم أثر الصغير',
    price: '٢٥ ₪',
    badge: null,
    cat: 'أدوات الفنون',
    icon: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/taqweem.jpeg",
    bgClass: 'prod-bg-4',
    desc: ' تقويم أنيق وعملي بحجم مثالي للمكتب، يساعدك على متابعة الأيام والمواعيد بسهولة. تصميم بسيط وواضح يضيف لمسة مرتبة لمساحتك، مع إمكانية الاستخدام اليومي في الدراسة أو العمل. صغير بالحجم، كبير بالفائدة ✨',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الصفحات', '٣٠ صفحة ملونة'],
      ['الألوان', 'الأزرق +بنفسجي+أصفر'],
      ['الاستخدام', 'مكتبي + مدرسي']
    ]
  },
  {
    id: 5,
    glb: 'glb/Clock.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/clock.jpeg",
    name: "ساعة أثر المميزة",
    price: '٣٨ ₪',
    badge: null,
    cat: 'الأقلام والألوان',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/clock.jpeg',
    bgClass: 'prod-bg-2',
    desc: ' ساعة حائط بتصميم عصري تضيف لمسة جمالية لأي مساحة في منزلك أو مكتبك. تتميز بدقة في عرض الوقت مع شكل بسيط وأنيق يناسب مختلف الديكورات. عملية وسهلة القراءة، لتكون أكثر من مجرد ساعة… قطعة ديكور تكمل المكان.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الأنواع', 'زجاج +بلاستيك+ورق'],
      ['الألوان', '١ لون'],
      ['الخامة', 'مقاوم للماء']
    ]
  },
  {
    id: 6,
    glb: 'glb/mug.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/mug.png",
    name: "مج أثر المميز",
    price: '٣٨ ₪',
    badge: null,
    cat: 'الأقلام والألوان',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/mug.png',
    bgClass: 'prod-bg-2',
    desc: ' مج عملي بتصميم بسيط وجذاب، مثالي لقهوة الصباح أو شاي المساء. مصنوع بجودة عالية ليحافظ على مشروبك، مع شكل مريح في الاستخدام يضيف لمسة هادئة لروتينك اليومي. مناسب للمنزل أو المكتب.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الأنواع', 'زجاج'],
      ['الألوان', '١٢ لون متنوع'],
      ['الطباعة', 'مقاوم للماء']
    ]
  },
  {
    id: 7,
    glb: 'glb/medi.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/mid.jpeg",
    name: "ميدالية أثر المميزة",
    price: '٣٨ ₪',
    badge: null,
    cat: 'الأقلام والألوان',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/mid.jpeg',
    bgClass: 'prod-bg-2',
    desc: 'طقم أقلام فنية متكامل يضم ١٢ قلم بين جراف وماركر، مصمّد للفنانين والمبدعين الذين يبحثون عن دقة اللون وجودة الخط. الأحبار مقاومة للماء وثابتة اللون، والأطراف متنوعة بين رفيعة وسميكة لتناسب أي أسلوب إبداعي.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الألوان', '١ لون '],
      ['الحبر', 'مقاوم للماء']
    ]
  },
  {
    id: 8,
    glb: 'glb/bag.glb',
    pic: "https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/bag.jpeg",
    name: "حقيبة أثر المميزة",
    price: '٣٨ ₪',
    badge: null,
    cat: 'الأقلام والألوان',
    icon: 'https://raw.githubusercontent.com/SuhaMurtaja/AtharStationary/refs/heads/master/pics/bag.jpeg',
    bgClass: 'prod-bg-2',
    desc: 'حقيبة عملية بتصميم يحمل هوية أثر البصرية، مناسبة للاستخدام اليومي والدراسة والعمل. تجمع بين الشكل الجذاب والخامة العملية، وتمنح المنتج طابعًا مميزًا يعكس روح العلامة.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الحبر', 'مقاوم للماء'],
      ['التغليف', 'علبة هدايا مميزة'],
      ['الخامة', 'مقاوم للماء']
    ]
  }
];
let currentQty = 1;
function getHomeCart() {
  return JSON.parse(localStorage.getItem("homeCart")) || [];
}
function saveHomeCart(cart) {
  localStorage.setItem("homeCart", JSON.stringify(cart));
}
const toArabic = n => n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
function updateCartCount() {
  const cart = getHomeCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = toArabic(totalQty);
  }
}
function addProductToStorage(product, qty = 1) {
  let cart = getHomeCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      pic: product.pic,
      qty: qty
    });
  }
  saveHomeCart(cart);
  updateCartCount();
}
function openPage(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentQty = 1;
  const specsHTML = p.specs.map(([k, v]) =>
    `<div class="pp-spec-row">
      <span class="pp-spec-key">${k}</span>
      <span class="pp-spec-val">${v}</span>
    </div>`
  ).join('');
  const related = PRODUCTS.filter(x => x.id !== id);
  const relHTML = related.map(r =>
    `<div class="pp-rel-card" onclick="openPage(${r.id})">
      <img src="${r.icon || r.pic}" class="pp-rel-img" alt="${r.name}">
      <div>
        <div class="pp-rel-name">${r.name}</div>
        <div class="pp-rel-price">${r.price}</div>
      </div>
    </div>`
  ).join('');
  const badgeHTML = p.badge
    ? `<span class="pp-badge ${p.badgeClass || 'pp-badge-cat'}">${p.badge}</span>`
    : '';

  // ✅ التعديل الأول: استخدام data-src بدل src لتفعيل Lazy Load
  const hasGlb = !!p.glb;
  const modelSrc = hasGlb ? p.glb : '';

  document.getElementById('pp-body').innerHTML = `
    <div class="pp-gallery">
      <div class="pp-view-tabs">
        <button class="pp-view-tab active" onclick="setView('3d', this)">عرض ثلاثي الأبعاد</button>
        <button class="pp-view-tab" onclick="setView('flat', this)">عرض مسطّح</button>
      </div>
      <div class="pp-model-wrap" id="pp-model-wrap">
        <div class="pp-model-pattern"></div>
        ${hasGlb ? `
          <model-viewer
            id="pp-viewer"
            data-src="${modelSrc}"
            alt="${p.name}"
            camera-controls
            interaction-prompt="none"
            shadow-intensity="1"
            exposure="0.9"
            style="background: transparent;"
          ></model-viewer>` : `
          <model-viewer id="pp-viewer" style="display: none;"></model-viewer>`
        }
        <div class="pp-model-placeholder ${hasGlb ? 'hidden' : ''}" id="pp-placeholder">
          <div class="placeholder-ring"></div>
          <div class="placeholder-ring-2"></div>
          <div class="placeholder-icon">
            <img src="${p.pic}" alt="${p.name}" style="width:120px; height:120px; object-fit:contain;">
          </div>
          <div class="placeholder-label">عرض ثلاثي الأبعاد<br>قريباً</div>
          <div class="placeholder-glb-hint">GLB · GLTF READY</div>
        </div>
      </div>
      <div class="pp-3d-hint" id="pp-3d-hint">
        ${hasGlb ? 'اسحب لتدوير النموذج — اسكرول للتكبير' : 'ملف GLB سيُضاف قريباً لهذا المنتج'}
      </div>
      <div
        id="pp-flat-view"
        class="pp-flat-view ${p.bgClass}"
        style="
          display: none;
          width: 100%;
          aspect-ratio: 1 / 1;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        "
      >
        <img
          src="${p.pic}"
          alt="${p.name}"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          "
        >
      </div>
    </div>
    <div class="pp-info">
      <div class="pp-breadcrumb">
        المتجر <span>›</span> ${p.cat} <span>›</span> ${p.name}
      </div>
      <div class="pp-badge-row">
        ${badgeHTML}
        <span class="pp-badge pp-badge-cat">${p.cat}</span>
      </div>
      <h1 class="pp-name">${p.name}</h1>
      <div class="pp-price-row">
        <span class="pp-price">${p.price}</span>
        <span class="pp-price-note">شامل الضريبة</span>
      </div>
      <p class="pp-desc">${p.desc}</p>
      <div class="pp-specs">
        <div class="pp-specs-title">المواصفات</div>
        ${specsHTML}
      </div>
      <div class="pp-qty-row">
        <span class="pp-qty-label">الكمية</span>
        <div class="pp-qty-ctrl">
          <button class="pp-qty-btn" onclick="changeQty(-1)">−</button>
          <div class="pp-qty-num" id="pp-qty">${toArabic(1)}</div>
          <button class="pp-qty-btn" onclick="changeQty(1)">+</button>
        </div>
      </div>
      <button class="pp-add-btn" id="pp-add-btn" onclick="addToCart(${p.id})">
        إضافة للسلة ✦
      </button>
    </div>
  `;
  document.getElementById('pp-related-grid').innerHTML = relHTML;
  const page = document.getElementById('product-page');
  if (page) {
    page.classList.add('active');
    page.scrollTo(0, 0);
  }
  document.body.style.overflow = 'hidden';
}

// ✅ التعديل الثاني: تحميل الـ GLB فقط عند الضغط على تاب الثري دي
function setView(mode, btn) {
  document.querySelectorAll('.pp-view-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const modelWrap = document.getElementById('pp-model-wrap');
  const viewer = document.getElementById('pp-viewer');
  const placeholder = document.getElementById('pp-placeholder');
  const flatView = document.getElementById('pp-flat-view');
  const hint = document.getElementById('pp-3d-hint');
  if (mode === '3d') {
    // تحميل الـ GLB عند أول طلب فقط (Lazy Load)
    if (viewer && viewer.dataset.src && !viewer.src) {
      viewer.src = viewer.dataset.src;
    }
    if (modelWrap) {
      modelWrap.style.display = 'block';
    }
    if (viewer) {
      viewer.style.display = '';
    }
    if (placeholder && !placeholder.classList.contains('hidden')) {
      placeholder.style.display = '';
    }
    if (flatView) {
      flatView.style.display = 'none';
    }
    if (hint) {
      hint.style.display = 'flex';
    }
  } else {
    if (modelWrap) {
      modelWrap.style.display = 'none';
    }
    if (viewer) {
      viewer.style.display = 'none';
    }
    if (placeholder) {
      placeholder.style.display = 'none';
    }
    if (flatView) {
      flatView.style.display = 'flex';
    }
    if (hint) {
      hint.style.display = 'none';
    }
  }
}
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const qtyEl = document.getElementById('pp-qty');
  if (qtyEl) {
    qtyEl.textContent = toArabic(currentQty);
  }
}
function showToast() {
  const t = document.getElementById('cart-toast');
  if (!t) return;
  t.classList.add('show');
  setTimeout(() => {
    t.classList.remove('show');
  }, 2500);
}
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  addProductToStorage(product, currentQty);
  const btn = document.getElementById('pp-add-btn');
  if (btn) {
    btn.textContent = '✓ تمت الإضافة!';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'إضافة للسلة ✦';
      btn.classList.remove('added');
    }, 2000);
  }
  showToast();
}
function closePage() {
  const page = document.getElementById('product-page');
  if (page) {
    page.classList.remove('active');
  }
  document.body.style.overflow = '';
}
document.querySelectorAll('.prod-card').forEach((card, i) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (e.target.classList.contains('prod-add')) return;
    openPage(i + 1);
  });
});
document.querySelectorAll('.prod-add').forEach((btn, i) => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const product = PRODUCTS[i];
    if (!product) return;
    addProductToStorage(product, 1);
    btn.textContent = '✓';
    btn.style.background = '#f2d242';
    btn.style.color = '#29164b';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
    showToast();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});