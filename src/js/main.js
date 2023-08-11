import { startScroll } from './modules/helpers/startScroll.js';
import { cancelScroll } from './modules/helpers/cancelScroll.js';
import { getTop } from './modules/helpers/getTop.js';

let offset = 10;
const headerBlock = document.querySelector('.header');
const blockMenu = document.querySelector('.header__menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


/* Кнопки показать меню на мобильных */
openMenu.addEventListener('click', function() {
  blockMenu.classList.add('show');
  headerBlock.setAttribute('aria-expanded', 'true');

  cancelScroll(); // Отключение скролла
});

/* Кнопки скрыть меню на мобильных */
closeMenu.addEventListener('click', function() {
  blockMenu.classList.remove('show');
  headerBlock.setAttribute('aria-expanded', 'false');

  startScroll(); // Включение скролла
});


/* Высота при прокрутке */
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});


/* Условия для элементов при прокрутке */
window.addEventListener('scroll', function () {
  if (getTop() > offset) {
    if (headerBlock) {
      headerBlock.classList.add('header--scroll');
    }
  } else {
    if (headerBlock) {
      if (!blockMenu.classList.contains('show')) headerBlock.classList.remove('header--scroll');
    } 
  }
});


///* Модальные окна */
//const modalOverlay = document.querySelector('.modal__overlay');
//const modalWraps = document.querySelectorAll('.modal__wrap');
//const modalCloses = document.querySelectorAll('.modal__close');
//
//const modalWrapOrder = document.querySelector('.modal__wrap--order');
//const orderBtns = document.querySelectorAll('.order-button');
//
//
//
//orderBtns.forEach((btn) => {
//  
//  btn.addEventListener('click', function (event) {
//    event.preventDefault();
//
//    modalOverlay.classList.remove('hidden');
//    modalWrapOrder.classList.remove('hidden');
//  
//    cancelScroll(); // Отключение скролла
//  });
//});
//
//
///* Клик по оверлею в модальном окне */
//modalOverlay.addEventListener('click', function (event) {
//  if (event.target.matches('.modal__overlay')) {
//    this.classList.add('hidden');
//
//    modalWraps.forEach(function (wrap) {
//      wrap.classList.add('hidden');
//    });
//
//    startScroll(); // Включение скролла
//  }
//});
//
///* Клик по крестику */
//modalCloses.forEach(function (btn) {
//  btn.addEventListener('click', function () {
//    modalOverlay.classList.add('hidden');
//
//    modalWraps.forEach(function (wrap) {
//      wrap.classList.add('hidden');
//    });
//
//    startScroll(); // Включение скролла
//  });
//});