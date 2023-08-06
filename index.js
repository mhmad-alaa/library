const header = document.getElementById("header");
const open = document.getElementById("add-btn");
const footer = document.getElementById("footer");
const popup = document.getElementById("popup");

function popupBook() {
  document.getElementById("popup").classList.add("popup-book");
}

function closePopup() {
  document.getElementById("popup").classList.remove("popup-book");
}

function submitNewBook() {
  document.getElementById("popup").classList.remove("popup-book");
}
