

window.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", function() {
    newBookCard();
    // formValues();
  });
});



function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read-it-box").checked = false;
}


function formValues() {
  const title = document.querySelector("#title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readIt = document.getElementById("read-it-box").checked;

  console.log(title, author, pages, readIt);
  closePopup(); 

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

function newBookCard() {
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


    title.textContent = `"${Book.title}"`;
    author.textContent = Book.author;
    pages.textContent = `${Book.pages} pages`;
    readBtn.textContent = (Book.readIt? "Read" : "Not read")
    removeBtn.textContent = "Remove";

    bookCardContainer.classList.add('book-cards-container');
    bookCard.classList.add('books-cards');
    title.classList.add('book-card-title');
    author.classList.add('book-card-author');
    pages.classList.add('book-cnt-pages');
    readBtn.classList.add('book-read');

    removeBtn.classList.add('book-remove');

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    bookCardContainer.appendChild(bookCard);
    
    // document.querySelector('body').appendChild(bookCard); 
    document.querySelector('body').appendChild(bookCardContainer); 


    console.log(bookCardContainer); 

    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
}

