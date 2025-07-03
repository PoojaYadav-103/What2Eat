document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const figures = document.querySelectorAll(".drink-cards figure");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      figures.forEach((figure) => {
        if (category === "all") {
          figure.style.display = "flex";
        } else {
          // Check if figure has the matching class
          if (figure.classList.contains(category)) {
            figure.style.display = "flex";
          } else {
            figure.style.display = "none";
          }
        }
      });
    });
  });
});
