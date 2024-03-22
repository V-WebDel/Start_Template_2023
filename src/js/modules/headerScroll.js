let offset = 10;
const headerBlock = document.querySelector('.header');
const blockMenu = document.querySelector('.header__menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


const headerBlockScroll = () => {
  if (headerBlock) {
    headerBlock.classList.add('header--scroll');
  }
};


const headerBlockNoScroll = () => {
  if (headerBlock) {
    headerBlock.classList.remove('header--scroll');
  } 
};


const headerBlockHide= () => {
  if (headerBlock) {
    headerBlock.classList.add('header--hide');
  }
};


const headerBlockShow = () => {
  if (headerBlock) {
    headerBlock.classList.remove('header--hide');
  } 
};



/* Кнопки показать меню на мобильных */
openMenu.addEventListener('click', function() {
  blockMenu.classList.add('show');
  headerBlock.setAttribute('aria-expanded', 'true');

  closeMenu.focus();
  
  cancelScroll(); // Отключение скролла
});

/* Кнопки скрыть меню на мобильных */
closeMenu.addEventListener('click', function() {
  blockMenu.classList.remove('show');
  headerBlock.setAttribute('aria-expanded', 'false');

  openMenu.focus();

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