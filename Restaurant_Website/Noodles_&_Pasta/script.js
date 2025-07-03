document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-buttons button");
  const typeButtons = document.querySelectorAll(".type-buttons button");
  const items = document.querySelectorAll(".noodles-cards figure");

  let selectedCategory = "all"; // empty means show all
  let selectedType = "all";

  const filterItems = () => {
    items.forEach((item) => {
      const isCategoryMatch =
        selectedCategory === "all" || item.classList.contains(selectedCategory);
      const isTypeMatch =
        selectedType === "all" || item.classList.contains(selectedType);

      item.style.display = isCategoryMatch && isTypeMatch ? "block" : "none";
    });
  };

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      selectedCategory = button.getAttribute("data-category") || "all";
      filterItems();
    });
  });

  typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      typeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      selectedType = button.getAttribute("data-type") || "all";
      filterItems();
    });
  });

  filterItems(); // Initial load
});
