// Menu
const burger = document.querySelector('.burger-open');
const menu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('open');
});
