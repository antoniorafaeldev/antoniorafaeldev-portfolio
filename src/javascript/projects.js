import { fetchProjects } from "./render-projects.js";
import { toggleMenu } from "./hamburguer-toggle.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  fetchProjects();
});
