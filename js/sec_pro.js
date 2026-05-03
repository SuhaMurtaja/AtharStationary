function closePage() {
  window.history.back();
}

// ===============================
// Reveal Animation
// ===============================
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ===============================
// عناصر الصفحة
// ===============================
const productsTitle = document.getElementById("products-title");
const productsDesc = document.getElementById("products-desc");
const productsGrid = document.getElementById("products-grid");
const cartCountElement = document.getElementById("cart-count");

let cartCount = 0;

// ===============================
// تحويل الأرقام للعربي
// ===============================
function toArabicNumber(value) {
  return value.toString().replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
}

// ===============================
// بيانات المنتجات (مع صور)
// ===============================
const PRODUCTS = {

  notebooks: {
    title: "الدفاتر والمفكرات",
    desc: "دفاتر متنوعة للكتابة، التدوين، والرسم بأسلوب أنيق وعملي.",
    items: [

      {
        id: 1,
        image: "../pics/big_note.png",
        name: "دفتر أثر المميز",
        text: "دفتر أنيق مصمم لتدوين الأفكار والملاحظات اليومية.",
        price: "45 ₪"
      },

     

      {
        id: 2,
        image: "../pics/duck.jpeg",
        name: "دفتر سلك",
        text: "دفتر عملي مناسب للدراسة والملاحظات السريعة.",
        price: "18 ₪"
      },

      {
        id: 3,
        image: "../pics/Spacenotebook.jpeg",
        name: "مفكرة صغيرة",
        text: "مفكرة صغيرة وخفيفة وسهلة الحمل.",
        price: "12 ₪"
      }

    ]
  },

  pens: {
    title: "الأقلام والألوان",
    desc: "مجموعة متنوعة من الأقلام والألوان للاستخدام اليومي والإبداعي.",
    items: [

      {
        id: 4,
        image: "../pics/pen.jpeg",
        name: "قلم أثر المميز",
        text: "قلم أنيق ومريح بحبر ناعم للكتابة اليومية.",
        price: "38 ₪"
      },

      {
        id: 5,
        image: "../pics/wood_pins.png",
        name: "ألوان خشبية",
        text: "علبة ألوان مناسبة للرسم والتلوين.",
        price: "22 ₪"
      },

      {
        id: 6,
        image: "../pics/marker.jpg",
        name: "محددات ملونة",
        text: "ماركر بألوان زاهية للتحديد والكتابة.",
        price: "16 ₪"
      },

      {
        id: 7,
        image: "../pics/5_color_pin.png",
        name: "قلم متعدد الألوان",
        text: "قلم جيل بخط ناعم وانسيابي.",
        price: "10 ₪"
      }

    ]
  },

  planning: {
    title: "التنظيم والتخطيط",
    desc: "أدوات تساعدك على ترتيب يومك وأهدافك بطريقة جميلة وواضحة.",
    items: [

      {
        id: 8,
        image: "../pics/dailyplanner.jpeg",
        name: "منظّم المهام اليومي",
        text: "منظّم عملي يساعدك على تقسيم يومك بسهولة.",
        price: "60 ₪"
      },

      {
        id: 9,
        image: "../pics/month_planner.jpeg",
        name: "دفتر التخطيط الشهري",
        text: "بلانر شهري لمتابعة المواعيد والأهداف.",
        price: "28 ₪"
      },

      {
        id: 10,
        image: "../pics/todo_list.jpeg",
        name: "",
        text: "لوحة بسيطة لمتابعة الإنجاز اليومي.",
        price: "16 ₪"
      },

      {
        id: 11,
        image: "../pics/stiky.png",
        name: "مذكرة لاصقة",
        text: "مناسبة للتذكير السريع وتنظيم الأفكار.",
        price: "9 ₪"
      }

    ]
  },

  art: {
    title: "أدوات الفنون",
    desc: "منتجات فنية للرسم والتلوين والتصميم بأسلوب إبداعي.",
    items: [

      {
        id: 12,
        image: "../pics/../pics/water_color.png",
        name: "ألوان مائية",
        text: "ألوان مائية بدرجات جميلة للرسم الفني.",
        price: "32 ₪"
      },

      {
        id: 13,
        image: "../pics/coloring_pins.png",
        name: "فرشاة رسم",
        text: "فرشاة عملية للرسم والتلوين.",
        price: "18 ₪"
      },

      {
        id: 14,
        image: "../pics/drowing_note.png",
        name: "دفتر رسم",
        text: "دفتر رسم مناسب للتخطيط والرسم الحر.",
        price: "27 ₪"
      },

      {
        id: 15,
        image: "../pics/drowing_wood.png",
        name: "لوحة رسم",
        text: "لوحة خفيفة وعملية لمزج الألوان.",
        price: "14 ₪"
      },
       {
        id: 16,
        image: "../pics/coloring.jpeg",
        name: "دفتر رسومات",
        text: "دفتر بسيط وأنيق يساعدك على التخطيط والرسم.",
        price: "25 ₪"
      },

    ]
  }

};

// ===============================
// فتح القسم
// ===============================
function openCategory(categoryKey) {

  const category = PRODUCTS[categoryKey];

  if (!category) {
    productsTitle.textContent = "القسم غير موجود";
    productsDesc.textContent = "لم يتم العثور على منتجات لهذا القسم.";
    productsGrid.innerHTML = "";
    return;
  }

  productsTitle.textContent = category.title;
  productsDesc.textContent = category.desc;

  let html = "";

  category.items.forEach((item) => {

    html += `
<a href="pro_sec_3d.html?id=${item.id}" class="product-card reveal">

  <div class="product-image">
    <img src="${item.image}" alt="${item.name}">
  </div>

  <div class="product-info">

    <h3 class="product-name">
      ${item.name}
    </h3>

    <p class="product-text">
      ${item.text}
    </p>

    <div class="product-price">
      ${toArabicNumber(item.price)}
    </div>

  </div>

</a>
`;

  });

  productsGrid.innerHTML = html;

  document
    .querySelectorAll(".product-card.reveal")
    .forEach((el) => io.observe(el));

}

// ===============================
// قراءة القسم من الرابط
// ===============================
const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("cat");

if (categoryKey) {

  openCategory(categoryKey);

} else {

  productsTitle.textContent = "اختر قسمًا";
  productsDesc.textContent = "لم يتم تحديد قسم لعرض منتجاته.";
  productsGrid.innerHTML = "";

}

// ===============================
// تحديث عداد السلة
// ===============================
function updateCartCount() {

  if (cartCountElement) {

    cartCountElement.textContent =
      toArabicNumber(cartCount);

  }

}

updateCartCount();