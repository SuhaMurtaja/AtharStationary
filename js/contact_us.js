const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "الرجاء تعبئة جميع الحقول.";
    formMessage.style.color = "#f2d242";

    setTimeout(() => {
      formMessage.textContent = "";
    }, 2000);

    return;
  }

  formMessage.textContent = "تم إرسال رسالتك بنجاح.";
  formMessage.style.color = "#fefdec";

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);

});