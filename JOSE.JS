
// MENÚ DESPLEGABLE PARA CELULARES

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CERRAR EL MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  });

});


// FILTRAR LAS TARJETAS POR CATEGORÍA

const filterButtons = document.querySelectorAll(".filter");

const placeCards = document.querySelectorAll(".place-card");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((item) => {

      item.classList.remove("active");

    });

    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    placeCards.forEach((card) => {

      const shouldShow =
        selectedCategory === "todos" ||
        card.dataset.category === selectedCategory;

      card.hidden = !shouldShow;

    });

  });

});


// AÑO AUTOMÁTICO EN EL PIE DE PÁGINA

document.getElementById("year").textContent =
  new Date().getFullYear();
