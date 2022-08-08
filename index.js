const navToggle = document.querySelector('.nav-toggle');
const body = document.querySelector('body');


navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
});