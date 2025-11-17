document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const track = document.querySelector(".carousel-track");

  // FILTRO
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      cards.forEach(card => {
        card.style.display =
          filter === "all" || card.classList.contains(filter)
            ? "block"
            : "none";
      });
    });
  });

  // CARROSSEL
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  next.addEventListener("click", () => {
    track.scrollBy({ left: 350, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -350, behavior: "smooth" });
  });
});
