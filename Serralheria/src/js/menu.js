// menu.js
function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (!toggle || !nav) return;

  // Abre/fecha menu
  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("active");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 900) {
      nav.classList.remove("active");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}
