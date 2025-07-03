function raiseItem(clickedItem) {
  document
    .querySelectorAll("nav li")
    .forEach((li) => li.classList.remove("raised"));
  clickedItem.classList.add("raised");
}
