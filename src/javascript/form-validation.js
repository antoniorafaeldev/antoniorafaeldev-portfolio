export const createContactFormValidation = () => {
  const form = document.getElementById("contact-form");
    

  console.log("Validação criada");

  form.addEventListener("submit", function (event) {
    const hCaptcha = form.querySelector(
      "textarea[name=h-captcha-response]",
    ).value;

    if (!hCaptcha) {
      event.preventDefault();
      alert("Please fill out captcha field");
      return;
    }
  });
};
