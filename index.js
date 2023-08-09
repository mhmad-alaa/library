function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read-it-box").checked = false;
}

function formValues() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readIt = document.getElementById("read-it-box").checked;

  return { title, author, pages, readIt };
}

function popupBook() {
  resetForm();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

const submit = document.getElementById("submit");
submit.addEventListener('click', () => {
  let Book = formValues();
  if (!Book.title || !Book.author || !Book.pages) {
    alert("Un completed data!");
  } else {
    const bookCardContainer = document.createElement('div');
    const bookCard = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');


    title.textContent = Book.title;
    author.textContent = Book.author;
    pages.textContent = Book.pages;
    readBtn.textContent = "Read"
    removeBtn.textContent = "Remove";

    // bookCardContainer.classList.add('book-cards-div');
    // bookCard.classList.add('books-cards');
    // title.classList.add('book-card-title');
    // author.classList.add('book-card-author');
    // pages.classList.add('book-cnt-pages');
    // readBtn.classList.add('book-read');
    // removeBtn.classList.add('book-remove');

    bookCardContainer.setAttribute('class', 'book-cards-div');
    bookCard.setAttribute('class', 'books-cards');
    title.setAttribute('class', 'book-card-title');
    author.setAttribute('class', 'book-card-author');
    pages.setAttribute('class', 'book-cnt-pages');
    readBtn.setAttribute('class', 'book-read');
    removeBtn.setAttribute('class', 'book-remove');

    bookCardContainer.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);


    

    // title.innerHTML = `"${Book.title}"`;
    // author.innerHTML = `${Book.author}`;
    // pages.innerHTML = `${Book.pages} Pages`;
    // readBtn.innerHTML = (Book.readIt ? `Read` : `Not Read`);
    // removeBtn.innerHTML = `Remove`;




    console.log(bookCardContainer); 

    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
}); 

// const createBookCard = () => {
  
// }

// const accountBtn = document.getElementById('accountBtn')
// accountBtn.onclick = openAccountModal

