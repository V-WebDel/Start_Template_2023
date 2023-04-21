/* Функция для высоты прокрутки */
export let getTop = function getTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
};