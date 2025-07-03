document.querySelectorAll(".filter-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    filterPizzas(type);
  });
});

function filterPizzas(type) {
  const items = document.querySelectorAll("section.pizza-item figure");

  items.forEach((item) => {
    item.style.display =
      type === "all" || item.classList.contains(type) ? "inline-block" : "none";
  });

  // Update active button style
  document
    .querySelectorAll(".filter-buttons button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.filter-buttons button[data-type="${type}"]`)
    ?.classList.add("active");
}
