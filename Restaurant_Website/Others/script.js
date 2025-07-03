document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const items = document.querySelectorAll(".items-cards figure");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add 'active' to clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      items.forEach((item) => {
        if (category === "all") {
          item.style.display = "flex";
        } else if (item.classList.contains(category)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
