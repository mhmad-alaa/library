window.addEventListener("DOMContentLoaded", function () {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", function () {
    newBookCard();
  });
});

function resetBookForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read-it-box").checked = false;
}

function getBookValues() {
  const title = document.querySelector("#title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readIt = document.getElementById("read-it-box").checked;

  // console.log(title, author, pages, readIt);
  closeBookForm();

  return { title, author, pages, readIt };
}

function openBookForm() { 
  resetBookForm();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("popup").classList.add("active");
}

function closeBookForm() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// not worked yet
function checkReadBtn(isRead, readBtn) {
  readBtn.textContent = !Book.readIt ? "Read" : "Not read";
  readBtn.style.backgroundColor = !Book.readIt ? "#9fff9c" : "#ff9c9c";
}

function newBookCard() {
  let Book = getBookValues();
  if (!Book.title || !Book.author || !Book.pages) {
    alert("Un completed data!");
  } else {
    const bookCard = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    title.textContent = `"${Book.title}"`;
    author.textContent = Book.author;
    pages.textContent = `${Book.pages} pages`;
    readBtn.textContent = Book.readIt ? "Read" : "Not read";
    readBtn.style.backgroundColor = Book.readIt ? "#9fff9c" : "#ff9c9c";
    removeBtn.textContent = "Remove";

    // to do => do read-status and remove buttons onclick
    // readBtn.onclick = checkReadBtn(Book.readIt, readBtn);

    bookCard.classList.add("books-cards");
    title.classList.add("book-card-title");
    author.classList.add("book-card-author");
    pages.classList.add("book-cnt-pages");
    readBtn.classList.add("book-read");
    removeBtn.classList.add("book-remove");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);

    document.getElementById("booksGrid").appendChild(bookCard);

    // console.log(bookCard);

    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
}
