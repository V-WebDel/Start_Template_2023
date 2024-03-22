import { startScroll } from './helpers/startScroll.js';
import { cancelScroll } from './helpers/cancelScroll.js';

const headerBlock = document.querySelector('.header');
const blockMenu = document.querySelector('.header__menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


/* Скрыть/показать меню для мобильных */
const showHideMenuMobile = () => {

  openMenu.addEventListener('click', function() {
    blockMenu.classList.add('show');
    headerBlock.setAttribute('aria-expanded', 'true');

    closeMenu.focus();
    
    cancelScroll();
  });

  closeMenu.addEventListener('click', function() {
    blockMenu.classList.remove('show');
    headerBlock.setAttribute('aria-expanded', 'false');

    openMenu.focus();

    startScroll();
  });

};


/* Клик на ссылку в меню для мобильных */
const clickLinksMenu = () => {

  const ancorsLinks = blockMenu.querySelectorAll('a[href^="#"]');

  ancorsLinks.forEach(link => {
    link.addEventListener('click', function () {

      if (window.innerWidth < 1000) {
        blockMenu.classList.remove('show');
        headerBlock.setAttribute('aria-expanded', 'false');

        startScroll();
      }
    });
  });
};


export { showHideMenuMobile, clickLinksMenu };