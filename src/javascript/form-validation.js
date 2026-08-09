export const createContactFormValidation = () => {
  const form = document.getElementById("contact-form");
  const captchaErrorMessage = document.getElementById("captcha-error-message");

  console.log("Validação criada");

  form.addEventListener("submit", (event) => {
    const hCaptcha = form.querySelector(
      "textarea[name=h-captcha-response]",
    ).value;

    if (!validateName() || !validateEmail() || !validateTextarea()) {
      event.preventDefault();
      return;
    }

    if (!hCaptcha) {
      event.preventDefault();
      captchaErrorMessage.classList.add("active");
      return;
    }

    captchaErrorMessage.classList.remove("active")
  });
};

const validateEmail = () => {
  const emailInput = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = document.getElementById("email-error-message");

  if (
    emailInput.value.trim() === "" ||
    !emailRegex.test(emailInput.value.trim())
  ) {
    errorMessage.classList.add("active");

    return false;
  } else {
    errorMessage.classList.remove("active");

    return true;
  }
};

const validateName = () => {
  const nameInput = document.getElementById("name");
  const errorMessage = document.getElementById("name-error-message");

  if (nameInput.value.trim() === "") {
    errorMessage.classList.add("active");
    return false;
  } else {
    errorMessage.classList.remove("active");
    return true;
  }
};

const validateTextarea = () => {
  const textareaInput = document.getElementById("message");
  const errorMessage = document.getElementById("textarea-error-message");

  if (textareaInput.value.trim() === "") {
    errorMessage.classList.add("active");
    return false;
  } else {
    errorMessage.classList.remove("active");
    return true;
  }
};

const clearInputFields = () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const textareaInput = document.getElementById("message");

  nameInput.value = "";
  emailInput.value = "";
  textareaInput.value = "";
};
