const menu = document.querySelector('#mobile-menu');
const menLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menLinks.classList.toggle('active');
});