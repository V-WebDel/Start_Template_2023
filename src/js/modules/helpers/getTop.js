/* Функция для высоты прокрутки */
export const getTop = function getTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
};