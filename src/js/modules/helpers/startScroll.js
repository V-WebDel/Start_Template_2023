/* Функции для включения прокрутки документа */
export const startScroll = () => {
  const body = document.body;
  let scrollY = body.style.top;

  body.style.position = '';
  body.style.top = '';
  body.style.overflowY = ``;

  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};