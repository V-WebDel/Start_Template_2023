/* Замена SPAN на ссылку для внешних ссылок */
export const revealLinksOnAction = (onLinksReady) => {

  const linksLikeItems = document.querySelectorAll('span[data-turbo]');

  const parseTurbo = (turbo) => turbo.replace('*', 'https://').replace(/%/g, '.').replace(/\$/g, '/');
  let linkToRedirect = null;

  const handleTurbo = (linkLikeItem, targetturbo) => {
    const attrs = linkLikeItem.attributes;
    const html = linkLikeItem.innerHTML;
    const link = document.createElement('a');

    for (const attr of attrs) link.setAttribute(attr.name, attr.value);

    const turbo = linkLikeItem.dataset.turbo;
    const href = parseTurbo(turbo);


    link.setAttribute('href', href);
    link.removeAttribute('data-turbo');


    link.innerHTML = html;
    linkLikeItem.replaceWith(link);

    if (targetturbo === turbo) {
      linkToRedirect = link;
    }
  };

  const reveal = (e) => {
    window.removeEventListener('touchmove', reveal);
    document.body.removeEventListener('click', reveal);
    document.body.removeEventListener('keydown', reveal);
    document.body.removeEventListener('mousemove', reveal);

    const turbo = e.target.dataset?.turbo;
    const isClick = e.type === 'click';

    linksLikeItems.forEach((link) => handleTurbo(link, turbo));
    onLinksReady?.();

    if (linkToRedirect && isClick) location.assign(linkToRedirect.href);

    /* Закрыть блоки FAQ */
    // const faqBlocks = document.querySelectorAll('.faq__block');

    // if (faqBlocks.length > 0) {
    //   faqBlocks.forEach(function (el, index) {
    //     const spoilerContentStart = el.querySelector('.faq__content');
    //     const spoilerBtnStart = el.querySelector('.faq__expander');
    
    //     spoilerContentStart.setAttribute('hidden', true);
    //     spoilerBtnStart.setAttribute('aria-expanded', false);

    //     if(index == 0) {
    //       el.classList.add('expanded');
    //       spoilerContentStart.removeAttribute('hidden');
    //       spoilerBtnStart.setAttribute('aria-expanded', true);
    //     }
    //   });
    // }
  };

  window.addEventListener('touchmove', reveal);
  document.body.addEventListener('click', reveal);
  document.body.addEventListener('keydown', reveal);
  document.body.addEventListener('mousemove', reveal);
};