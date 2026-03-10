const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-burger__btn');
const menu = document.querySelector('.menu-list');
const menuItems = Array.from(document.querySelectorAll('.menu-list__item')); 
const elements = [menuBtn].concat(menuItems);

elements.forEach(function (element) {
    element.addEventListener('click', function() {
        menu.classList.toggle('menu-active');
        menuBtn.classList.toggle('menu-active');
        body.classList.toggle('menu-active');
    });
});