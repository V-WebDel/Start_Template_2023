/* Функция для высоты прокрутки */
export const getTop = function getTop() {
  return window.scrollY || document.documentElement.scrollTop;
};