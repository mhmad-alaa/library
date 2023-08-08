

function popupBook() {
  document.getElementById("overlay").classList.add("active"); 
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active"); 

}

function submitNewBook() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active"); 

}
