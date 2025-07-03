function filterBurgers(type) {
  const items = document.querySelectorAll("section.burger-item figure"); // Fixed selector

  items.forEach((item) => {
    if (type === "all" || item.classList.contains(type)) {
      item.style.display = "inline-block";
    } else {
      item.style.display = "none";
    }
  });

  // Update active button style
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  const clickedButton = document.querySelector(
    `.filter-buttons button[onclick*="${type}"]`
  );
  if (clickedButton) clickedButton.classList.add("active");
}
