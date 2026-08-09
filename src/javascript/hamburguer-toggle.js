export function toggleMenu() {
    const hamburguerMenu = document.getElementById("hamburguer-menu")
    const navbarLinks = document.querySelector(".nav-links")

    hamburguerMenu.addEventListener("click", () => {
        navbarLinks.classList.toggle("active")
    })
}

