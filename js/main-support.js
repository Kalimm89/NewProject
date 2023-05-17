// Header open
let arrow = document.querySelectorAll('.serve');
for (let i = 0; i < arrow.length; i++){
    let submenu = arrow[i].nextElementSibling;
   arrow[i].addEventListener('click',function() {
       submenu.classList.toggle('dropdown_open');
   });
}

(function () {
    const menu = document.querySelector('.dropdown_mobile');
    const menuCloseItem = document.querySelector('.header__nav-close');
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('dropdown_open');
    });
}());
// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
}());
let arrows = document.querySelectorAll('.arrow');
for (let i = 0; i < arrows.length; i++){
    let submenu = arrows[i].nextElementSibling;
    let thisArrow = arrows[i];
    arrows[i].addEventListener('click',function() {
        thisArrow.classList.toggle('active');
        submenu.classList.toggle('open');
    });
}
// Popup 
(function () {
    const ppBtns = document.querySelectorAll('.popup-act');
    const ppForm = document.querySelector('.popup_form');
    const popupClose = document.querySelector('.popup_form-close');
    ppBtns.forEach((ppBtn) => {
        ppBtn.addEventListener('click', () => {
            ppForm.classList.add('popup_form_active');
        });
      });
      popupClose.addEventListener('click', () => {
        ppForm.classList.remove('popup_form_active');
    });
}());