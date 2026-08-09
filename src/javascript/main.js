import {toggleMenu} from "./hamburguer-toggle.js"
import { createContactFormValidation } from "./form-validation.js"

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu()
    createContactFormValidation()
});
