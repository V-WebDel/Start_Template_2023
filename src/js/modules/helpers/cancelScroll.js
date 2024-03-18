/* Функции для отмены прокрутки документа */
export const cancelScroll = () => {
  const body = document.body;

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');

  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  // body.style.overflowY = `hidden`;
};