const header = document.getElementById('header');
const open = document.getElementById('add-btn');
const popup = document.getElementById('popup');
const footer = document.getElementById('footer');


open.addEventListener('click', () => {
    header.classList.add('hide');
    footer.classList.add('hide');
    
    popup.classList.add('show');
});