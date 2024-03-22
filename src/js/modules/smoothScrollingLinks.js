/* Плавная прокрутка при нажатии на анкорную ссылку */

export const smoothScrollingLinks = () => {
  const body = document.body;

  const ancorsLinks = document.querySelectorAll('a[href*="#"]');

  if (body.classList.contains('home')) {
    ancorsLinks.forEach(link => {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();

        const href = this.getAttribute('href').split('#')[1];
        const scrollTarget = document.getElementById(href);
        let topOffset = 24;

        if(window.innerWidth < 1000) {
          topOffset = 16;
        }

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
};