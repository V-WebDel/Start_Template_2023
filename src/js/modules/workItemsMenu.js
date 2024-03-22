/* Показать/скрыть подменю + Фокус на пункте меню */

export const workItemsMenu = () => {
  const menuItem = document.querySelectorAll('.menu-item a');
  const menuParents = document.querySelectorAll('.menu-item-has-children');
  const mainMenu = document.querySelector('.main-menu');
  const focusElements = document.querySelectorAll("[tabindex], a, button, input, textarea, select");
  
  if(menuItem.length > 0) {
    /* Стрелка для пункта с подменю */
    menuItem.forEach(function (item) {
      const parentMenu = item.closest('.menu-item-has-children');
      const prevElem = item.nextElementSibling;
  
      item.classList.add('menu-link'); // добавляю класс для ссылок
    
      if(prevElem) {
  
        // Если у элемента есть подменю, то добавить span.arrow
        const spanArrow = document.createElement('span');
        spanArrow.classList.add('arrow');
        spanArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7"><path fill-rule="evenodd" d="M9.207 1.25a1 1 0 0 0-1.414 0L5 4.043 2.207 1.25A1 1 0 0 0 .793 2.665l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.415Z" clip-rule="evenodd"/></svg>';
    
        item.append(spanArrow);
      }
  
      item.addEventListener('blur', function(){
        if(parentMenu) {
          parentMenu.classList.add('active');
        }
      });
  
      if(item.getAttribute('href') == '#') {
        const span = document.createElement('span');
        for (let i = 0; i < item.attributes.length; i++) {
          const attr = item.attributes[i];
          span.setAttribute(attr.name, attr.value);
        }
  
        span.removeAttribute('href');
        span.innerHTML = item.innerHTML;
  
        item.parentNode.replaceChild(span, item);
      }
    });
  
    focusElements.forEach(element => {
      element.addEventListener('focus', function(){
        const parentMenu = element.closest('.menu-item-has-children');
  
        if(menuParents.length > 0) {
          menuParents.forEach(menu => {
            menu.classList.remove('active');
          });
        }
    
        if(parentMenu) {
          parentMenu.classList.add('active');
        }
      });
    });
  
    document.addEventListener("click", (event) => {
      const targetElement = event.target;// клик вне элемента Main-menu
  
      if (targetElement !== mainMenu && !mainMenu.contains(targetElement)) {
        if(menuParents.length > 0) {
          menuParents.forEach(menu => {
            menu.classList.remove('active');
          });
        }
      }
    });
  }
};
