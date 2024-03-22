import { smoothScrollingLinks } from './modules/smoothScrollingLinks.js';
import { revealLinksOnAction } from './modules/revealLinksOnAction.js';
import { revealFormsOnAction } from './modules/revealFormsOnAction.js';
import { workItemsMenu } from './modules/workItemsMenu.js';

import './modules/headerScroll.js';
import './modules/menu.js';


/* Плавная прокрутка при нажатии на анкорную ссылку */
smoothScrollingLinks();

/* Замена SPAN на ссылку для внешних ссылок */
revealLinksOnAction();

/* Замена action в FORM */
revealFormsOnAction(); 

/* Показать/скрыть подменю + Фокус на пункте меню */
workItemsMenu();


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