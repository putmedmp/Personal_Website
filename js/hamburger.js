const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

const logo = document.getElementById('logo');

const header = document.querySelector('.showcase-container').children;

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    // navUL.classList.toggle('nav.add');
    navUL.classList.toggle('nav-border');
    header.classList.toggle('no-z');
    // logo.classList.toggle('navbar-style');
});

