document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const allItems = document.querySelectorAll(".items-card figure");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");

      // Highlight active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      allItems.forEach((item) => {
        const isSideDish = item.classList.contains("SideDish");
        const isVeg = item.classList.contains("veg");
        const isNonVeg = item.classList.contains("non-veg");

        // Show/Hide logic
        if (type === "all") {
          item.style.display = "flex";
        } else if (type === "veg") {
          item.style.display = isVeg && !isSideDish ? "flex" : "none";
        } else if (type === "non-veg") {
          item.style.display = isNonVeg && !isSideDish ? "flex" : "none";
        } else if (type === "side-dish") {
          item.style.display = isSideDish ? "flex" : "none";
        }
      });
    });
  });
});
