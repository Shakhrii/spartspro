
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-burger__btn');
const menu = document.querySelector('.menu-list');
const menuItems = Array.from(document.querySelectorAll('.menu-list__item')); 
const elements = [menuBtn].concat(menuItems);

const mediaQuery = window.matchMedia('(max-width: 1160px)');
const menuClickHandler = () => {
  menu.classList.toggle('menu-active');
  menuBtn.classList.toggle('menu-active');
  body.classList.toggle('menu-active');
}

function handleScreenChange(event) {
  if (event.matches) {
    elements.forEach(element => {
      element.addEventListener('click', menuClickHandler);
    });
  } else {
    menu.classList.remove('menu-active');
    menuBtn.classList.remove('menu-active');
    body.classList.remove('menu-active');
    elements.forEach(element => {
      element.removeEventListener('click', menuClickHandler);
    });
  }
}

mediaQuery.addEventListener('change', handleScreenChange);

handleScreenChange(mediaQuery);


