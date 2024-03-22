/* Замена action в FORM */
export const revealFormsOnAction = (onFormsReady) => {

  const formsLikeItems = document.querySelectorAll('form[data-turbo]');

  const parseTurbo = (turbo) => turbo.replace('*', 'https://').replace(/%/g, '.').replace(/\$/g, '/');
  let formToRedirect = null;

  const handleTurbo = (formLikeItem, targetturbo) => {

    const turbo = formLikeItem.dataset.turbo;
    const href = parseTurbo(turbo);
    formLikeItem.removeAttribute('data-turbo');

    formLikeItem.setAttribute('action', href);

    if (targetturbo === turbo) {
      formToRedirect = formLikeItem;
    }
  };

  const reveal = (e) => {
    window.removeEventListener('touchmove', reveal);
    document.body.removeEventListener('click', reveal);
    document.body.removeEventListener('keydown', reveal);
    document.body.removeEventListener('mousemove', reveal);

    const turbo = e.target.dataset?.turbo;

    formsLikeItems.forEach((form) => handleTurbo(form, turbo));
    onFormsReady?.();

    if (formToRedirect) location.href = formToRedirect.href;
  };

  window.addEventListener('touchmove', reveal);
  document.body.addEventListener('click', reveal);
  document.body.addEventListener('keydown', reveal);
  document.body.addEventListener('mousemove', reveal);
};
