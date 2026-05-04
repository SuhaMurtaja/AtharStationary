const PRODUCTS = [
  // =========================
  // الدفاتر والمفكرات
  // =========================
  {
    id: 1,
    glb: '/glb/notebook.glb',
    pic: '/pics/big_note.png',
    name: 'دفتر أثر المميز',
    price: '٤٥ ₪',
    badge: 'جديد',
    badgeClass: 'pp-badge-new',
    cat: 'الدفاتر والمفكرات',
    icon: '/pics/big_note.png',
    bgClass: 'prod-bg-1',
    desc: 'دفتر أنيق مصمم لتدوين الأفكار والملاحظات اليومية بجودة عالية ولمسة عصرية مميزة.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A4'],
      ['عدد الصفحات', '١٤٠ صفحة'],
      ['نوع الأوراق', 'مسطّرة'],
      ['الغلاف', 'مقوّى'],
      ['الإتاحة', '1 ألوان']
    ]
  },
  {
    id: 2,
    glb: '/glb/DuckNotebook.glb',
    pic: '/pics/duck.jpeg',
    name: 'دفتر سلك',
    price: '١٨ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الدفاتر والمفكرات',
    icon: '/pics/duck.jpeg',
    bgClass: 'prod-bg-1',
    desc: 'دفتر عملي مناسب للدراسة والملاحظات السريعة، سهل الفتح والاستخدام اليومي.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A5'],
      ['عدد الصفحات', '٨٠ صفحة'],
      ['التجليد', 'سلك'],
      ['الاستخدام', 'مدرسي + جامعي']
    ]
  },
  {
    id: 3,
    glb: '/glb/Spacenotebook.glb',
    pic: '/pics/Spacenotebook.jpeg',
    name: 'مفكرة صغيرة',
    price: '١٢ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الدفاتر والمفكرات',
    icon: '/pics/Spacenotebook.jpeg',
    bgClass: 'prod-bg-1',
    desc: 'مفكرة صغيرة وخفيفة وسهلة الحمل لتسجيل الملاحظات السريعة في أي وقت.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'صغير'],
      ['عدد الصفحات', '٦٠ صفحة'],
      ['الاستخدام', 'يومي']
    ]
  },

  // =========================
  // الأقلام والألوان
  // =========================
  {
    id: 4,
    glb: '/glb/Pen.glb',
    pic: '/pics/Spacenotebook.jpeg',
    name: 'قلم أثر المميز',
    price: '٣٨ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الأقلام والألوان',
    icon: '/pics/Spacenotebook.jpeg',
    bgClass: 'prod-bg-2',
    desc: 'قلم أنيق ومريح بحبر ناعم يناسب الكتابة اليومية والدراسة والعمل.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['اللون', 'أسود'],
      ['الحبر', 'ناعم'],
      ['الخامة', 'بلاستيك فاخر'],
      ['الاستخدام', 'كتابة يومية']
    ]
  },
  {
    id: 5,
    glb: '/glb/color_pins.glb',
    pic: '/pics/wood_pins.png',
    name: 'ألوان خشبية',
    price: '٢٢ ₪',
    badge: 'مميز',
    badgeClass: 'pp-badge-new',
    cat: 'الأقلام والألوان',
    icon: '/pics/wood_pins.png',
    bgClass: 'prod-bg-2',
    desc: 'علبة ألوان خشبية مناسبة للرسم والتلوين بدقة وسهولة للأطفال والكبار.',
    specs: [
      ['عدد القطع', '١٢ لون'],
      ['النوع', 'خشبي'],
      ['الاستخدام', 'رسم + تلوين'],
      ['الخامة', 'خشب معالج']
    ]
  },
  {
    id: 6,
    glb: '/glb/marker.glb',
    pic: '/pics/marker.jpg',
    name: 'محددات  ملونة',
    price: '١٦ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الأقلام والألوان',
    icon: '/pics/marker.jpg',
    bgClass: 'prod-bg-2',
    desc: 'ماركر بألوان زاهية مناسب للتحديد والكتابة الواضحة في الدراسة والعمل.',
    specs: [
      ['عدد القطع', '٤ ألوان'],
      ['الحبر', 'ثابت'],
      ['الاستخدام', 'تحديد + كتابة'],
      ['السماكة', 'متوسطة']
    ]
  },
  {
    id: 7,
    glb: '/glb/5_color_pin.glb',
    pic: '/pics/5_color_pin.png',
    name: 'قلم متعدد الألوان',
    price: '١٠ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الأقلام والألوان',
    icon: '/pics/5_color_pin.png',
    bgClass: 'prod-bg-2',
    desc: 'قلم متعدد الألوان بخط ناعم وانسيابي يضيف تجربة كتابة مريحة وأنيقة.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['اللون', 'أزرق و أحمر و أبيض و أخضر'],
      ['الاستخدام', 'مذكرات + دراسة']
    ]
  },

  // =========================
  // التنظيم والتخطيط
  // =========================
  {
    id: 8,
    glb: '/glb/dailyplanner.glb',
    pic: '/pics/dailyplanner.jpeg',
    name: 'منظّم المهام اليومي',
    price: '٦٠ ₪',
    badge: 'الأكثر مبيعًا',
    badgeClass: 'pp-badge-new',
    cat: 'التنظيم والتخطيط',
    icon: '/pics/dailyplanner.jpeg',
    bgClass: 'prod-bg-3',
    desc: 'منظّم عملي يساعدك على تقسيم يومك وتحديد المهام والأولويات بسهولة ووضوح.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المدة', '٥٢ أسبوع كامل'],
      ['المقاس', 'A5'],
      ['الصفحات', '١٣٠ صفحة']
    ]
  },
  {
    id: 9,
    glb: '/glb/MonthlyPlanner.glb',
    pic: '/pics/month_planner.jpeg',
    name: 'بلانر شهري',
    price: '٢٨ ₪',
    badge: null,
    badgeClass: '',
    cat: 'التنظيم والتخطيط',
    icon: '/pics/month_planner.jpeg',
    bgClass: 'prod-bg-3',
    desc: 'بلانر شهري أنيق لمتابعة المواعيد والأهداف وتنظيم الخطط الشهرية.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A5'],
      ['عدد الصفحات', '٩٠ صفحة'],
      ['الاستخدام', 'تنظيم شهري']
    ]
  },
  {
    id: 10,
    glb: '/glb/TodoList.glb',
    pic: '/pics/todo_list.jpeg',
    name: 'لوحة مهام',
    price: '١٦ ₪',
    badge: null,
    badgeClass: '',
    cat: 'التنظيم والتخطيط',
    icon: '/pics/todo_list.jpeg',
    bgClass: 'prod-bg-3',
    desc: 'لوحة بسيطة وعملية لمتابعة الإنجاز اليومي وتسجيل قائمة المهام.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الخامة', 'ورق مقوّى'],
      ['الاستخدام', 'مكتبي'],
      ['الحجم', 'متوسط']
    ]
  },
  {
    id: 11,
    glb: '/glb/stiky.glb',
    pic: '/pics/stiky.png',
    name: 'مذكرة لاصقة',
    price: '٩ ₪',
    badge: null,
    badgeClass: '',
    cat: 'التنظيم والتخطيط',
    icon: '/pics/stiky.png',
    bgClass: 'prod-bg-3',
    desc: 'مذكرة لاصقة مناسبة للتذكير السريع وتنظيم الأفكار والملاحظات اليومية.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['عدد الأوراق', '٥٠ ورقة'],
      ['اللون', 'متعدد'],
      ['الاستخدام', 'تذكير سريع']
    ]
  },

  // =========================
  // أدوات الفنون
  // =========================
  {
    id: 12,
    glb: '/glb/water_color.glb',
    pic: '/pics/water_color.png',
    name: 'ألوان مائية',
    price: '٣٢ ₪',
    badge: 'جديد',
    badgeClass: 'pp-badge-new',
    cat: 'أدوات الفنون',
    icon: '/pics/water_color.png',
    bgClass: 'prod-bg-4',
    desc: 'ألوان مائية بدرجات جميلة ومناسبة للرسم والتجارب الفنية المختلفة.',
    specs: [
      ['عدد القطع', '١٢ لون'],
      ['النوع', 'ألوان مائية'],
      ['الاستخدام', 'رسم فني'],
      ['الفئة', 'طلاب + هواة']
    ]
  },
  {
    id: 13,
    glb: '/glb/coloring_pins.glb',
    pic: '/pics/coloring_pins.png',
    name: 'فرشاة رسم',
    price: '١٨ ₪',
    badge: null,
    badgeClass: '',
    cat: 'أدوات الفنون',
    icon: '/pics/coloring_pins.png',
    bgClass: 'prod-bg-4',
    desc: 'فرشاة عملية للرسم والتلوين بتصميم مريح وتحكم أفضل أثناء الاستخدام.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الخامة', 'شعيرات ناعمة'],
      ['الاستخدام', 'ألوان مائية + أكريليك'],
      ['الحجم', 'متوسط']
    ]
  },
  {
    id: 14,
    glb: '/glb/drawingBook.glb',
    pic: '/pics/adrowing_note.png',
    name: 'دفتر رسم',
    price: '٢٧ ₪',
    badge: null,
    badgeClass: '',
    cat: 'أدوات الفنون',
    icon: '/pics/drowing_note.png',
    bgClass: 'prod-bg-4',
    desc: 'دفتر رسم بأوراق مناسبة للتخطيط والرسم الحر والتصميم الإبداعي.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A4'],
      ['عدد الصفحات', '٧٠ صفحة'],
      ['نوع الورق', 'رسم']
    ]
  },
  {
    id: 15,
    glb: '/glb/drowing_wood.glb',
    pic: '/pics/drowing_wood.png',
    name: 'لوحة ألوان',
    price: '١٤ ₪',
    badge: null,
    badgeClass: '',
    cat: 'أدوات الفنون',
    icon: '/pics/drowing_wood.png',
    bgClass: 'prod-bg-4',
    desc: 'لوحة خفيفة وعملية لمزج الألوان وترتيبها أثناء العمل الفني.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['الخامة', 'بلاستيك'],
      ['الاستخدام', 'مزج ألوان'],
      ['التنظيف', 'سهل']
    ]
  },
  {
    id: 16,
    glb: '/glb/Coloringbook.glb',
    pic: '/pics/coloring.jpeg',
    name: 'دفتر رسومات ',
    price: '٢٥ ₪',
    badge: null,
    badgeClass: '',
    cat: 'الدفاتر والمفكرات',
    icon: '/pics/coloring.jpeg',
    bgClass: 'prod-bg-1',
    desc: 'دفتر يوميات بسيط وأنيق يساعدك على كتابة خططك وأفكارك بشكل مرتب.',
    specs: [
      ['عدد القطع', '+١ قطعة'],
      ['المقاس', 'A5'],
      ['عدد الصفحات', '١٠٠ صفحة'],
      ['نوع الأوراق', 'سادة'],
      ['الغلاف', 'ناعم']
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

function toArabic(n) {
  return n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function updateCartCount() {
  const cart = getHomeCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartEl = document.getElementById("cart-count");
  if (cartEl) {
    cartEl.textContent = toArabic(totalQty);
  }
}

function openPage(id) {
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) {
    document.getElementById('pp-body').innerHTML = `
      <div class="pp-info" style="grid-column:1/-1; direction:rtl;">
        <h1 class="pp-name">المنتج غير موجود</h1>
        <p class="pp-desc">لم يتم العثور على المنتج المطلوب.</p>
      </div>
    `;
    document.getElementById('pp-related-grid').innerHTML = '';
    return;
  }

  currentQty = 1;

  const specsHTML = p.specs.map(([k, v]) => `
    <div class="pp-spec-row">
      <span class="pp-spec-key">${k}</span>
      <span class="pp-spec-val">${v}</span>
    </div>
  `).join('');

  const related = PRODUCTS
    .filter(x => x.id !== id && x.cat === p.cat)
    .slice(0, 6);

  const relHTML = related.map(r => `
    <div class="pp-rel-card" onclick="openRelatedProduct(${r.id})">
      <img src="${r.icon || r.pic}" alt="${r.name}" class="pp-rel-img">
      <div>
        <div class="pp-rel-name">${r.name}</div>
        <div class="pp-rel-price">${r.price}</div>
      </div>
    </div>
  `).join('');

  const badgeHTML = p.badge
    ? `<span class="pp-badge ${p.badgeClass || 'pp-badge-cat'}">${p.badge}</span>`
    : '';

  const hasGlb = !!p.glb;
  const modelSrc = hasGlb ? p.glb : '';

  document.getElementById('pp-body').innerHTML = `
    <div class="pp-gallery">
      <div class="pp-view-tabs">
        <button class="pp-view-tab active" onclick="setView('3d', this)">عرض ثلاثي الأبعاد</button>
        <button class="pp-view-tab" onclick="setView('flat', this)">عرض مسطّح</button>
      </div>

      <div id="pp-3d-view" style="display:block;">
        <div class="pp-model-wrap" id="pp-model-wrap">
          <div class="pp-model-pattern"></div>

          ${hasGlb ? `
            <model-viewer
              id="pp-viewer"
              src="${modelSrc}"
              alt="${p.name}"
              auto-rotate
              camera-controls
              shadow-intensity="1"
              exposure="0.9"
              interaction-prompt="auto"
              touch-action="pan-y"
              camera-orbit="45deg 65deg 105%"
              field-of-view="30deg"
              style="width:100%; height:100%; display:block; background:transparent;"
            ></model-viewer>
          ` : `
            <div class="pp-model-placeholder">
              <div class="placeholder-ring"></div>
              <div class="placeholder-ring-2"></div>
              <div class="placeholder-icon">✦</div>
              <div class="placeholder-label">عرض ثلاثي الأبعاد<br>غير متوفر لهذا المنتج</div>
              <div class="placeholder-glb-hint">NO GLB FILE</div>
            </div>
          `}
        </div>

        <div class="pp-3d-hint" id="pp-3d-hint">
          ${hasGlb ? 'اسحب لتدوير النموذج — اسكرول للتكبير' : 'هذا المنتج لا يملك ملف 3D حالياً'}
        </div>
      </div>

      <div
        id="pp-flat-view"
        class="pp-flat-view ${p.bgClass}"
        style="
          display:none;
          width:100%;
          aspect-ratio:1 / 1;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        "
      >
        <img
          src="${p.pic}"
          alt="${p.name}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
          "
        >
      </div>
    </div>

    <div class="pp-info">
      <div class="pp-breadcrumb">المتجر <span>›</span> ${p.cat} <span>›</span> ${p.name}</div>

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

      <button class="pp-add-btn" id="pp-add-btn" onclick="addToCart(${p.id})">إضافة للسلة ✦</button>
    </div>
  `;

  document.getElementById('pp-related-grid').innerHTML = relHTML;

  const viewer = document.getElementById('pp-viewer');
  if (viewer) {
    viewer.addEventListener('load', () => {
      console.log('3D loaded successfully');
    });

    viewer.addEventListener('error', () => {
      console.error('Failed to load GLB file');
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openRelatedProduct(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('id', id);
  window.location.href = url.toString();
}

function setView(mode, btn) {
  document.querySelectorAll('.pp-view-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const view3D = document.getElementById('pp-3d-view');
  const flatView = document.getElementById('pp-flat-view');
  const viewer = document.getElementById('pp-viewer');
  const hint = document.getElementById('pp-3d-hint');

  if (!view3D || !flatView) return;

  if (mode === '3d') {
    view3D.style.display = 'block';
    flatView.style.display = 'none';

    if (viewer) {
      viewer.style.display = 'block';
      viewer.setAttribute('camera-controls', '');
      viewer.setAttribute('auto-rotate', '');
      viewer.setAttribute('camera-orbit', '45deg 65deg 105%');
      viewer.setAttribute('field-of-view', '30deg');

      requestAnimationFrame(() => {
        if (typeof viewer.dismissPoster === 'function') viewer.dismissPoster();
        if (typeof viewer.jumpCameraToGoal === 'function') viewer.jumpCameraToGoal();
      });
    }

    if (hint) {
      hint.style.display = 'flex';
      hint.textContent = 'اسحب لتدوير النموذج — اسكرول للتكبير';
    }

  } else {
    view3D.style.display = 'none';
    flatView.style.display = 'flex';

    if (viewer) {
      viewer.style.display = 'none';
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
  setTimeout(() => t.classList.remove('show'), 2500);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  let cart = getHomeCart();
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.qty += currentQty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      pic: product.pic,
      qty: currentQty
    });
  }

  saveHomeCart(cart);
  updateCartCount();

  const btn = document.getElementById('pp-add-btn');
  if (btn) {
    btn.textContent = ' تمت الإضافة!';
    btn.classList.add('added');

    setTimeout(() => {
      btn.textContent = 'إضافة للسلة ✦';
      btn.classList.remove('added');
    }, 2000);
  }

  showToast();
}

function closePage() {
  window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id')) || 1;

  openPage(id);
});