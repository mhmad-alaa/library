window.addEventListener("DOMContentLoaded", function () {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", function () {
    newBookCard();
  });
});

let libraryBooks = []; 

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

function newBookCard() {
  let book = getBookValues();
  libraryBooks.push(book); 
  
  drawBookCards(libraryBooks); 
}

function drawBookCards() {
  document.getElementById("booksGrid").innerHTML = ''; 
  for (let i = 0; i < libraryBooks.length; ++i) {
    createBookCard(libraryBooks[i], i); 
  }
}

function checkRead(index) {
  libraryBooks[index].readIt = !libraryBooks[index].readIt; 
}

function removeBook(index) {
  libraryBooks.splice(index, 1); 
  drawBookCards(); 
}

function createBookCard(book, index) { 
  if (!book.title || !book.author || !book.pages) {
    alert("Un completed data!")
  } else {
    const bookCard = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readBtn.textContent = book.readIt ? "Read" : "Not read";
    readBtn.style.backgroundColor = book.readIt ? "#9fff9c" : "#ff9c9c";
    removeBtn.textContent = "Remove";


    readBtn.addEventListener('click', () => {
      checkRead(index); 
      readBtn.textContent = book.readIt ? "Read" : "Not read";
      readBtn.style.backgroundColor = book.readIt ? "#9fff9c" : "#ff9c9c";
    }); 
    removeBtn.addEventListener('click', () => {
      removeBook(index); 
    }); 


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

    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
}
