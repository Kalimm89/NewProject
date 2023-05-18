// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        document.body.classList.toggle('_lock');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        document.body.classList.remove('_lock');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
}());
//Question
let arrow = document.querySelectorAll('.arrow');
for (let i = 0; i < arrow.length; i++){
    let submenu = arrow[i].nextElementSibling;
   let thisArrow = arrow[i];
   arrow[i].addEventListener('click',function() {
       thisArrow.classList.toggle('active');
       submenu.classList.toggle('open');
   });
}
// Swiper
new Swiper('.new', {
    navigation: {
        nextEl: '.ar_right',
        prevEl: '.ar_left'
    },
    loop: false,
    grabCursor: true,
    slidesPerView: 1.5,
    initialSlide: 0,
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 3.5,
        },
        1050: {
            slidesPerView: 2,
        }
    },
});
// Header open
let arrows = document.querySelectorAll('.serve');
for (let i = 0; i < arrows.length; i++){
    let submenu = arrows[i].nextElementSibling;
   arrows[i].addEventListener('click',function() {
       submenu.classList.toggle('dropdown_open');
   });
}
(function () {
    const web_dev = document.querySelector('.web_dev');
    const dropdown_wd_mob = document.querySelector('.dropdown_wd_mob');
    web_dev.addEventListener('click', () => {
        dropdown_wd_mob.classList.toggle('dropdown_open');
    });
}());
(function () {
    const menu = document.querySelector('.dropdown_mobile');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const dropdown_wd_mob = document.querySelector('.dropdown_wd_mob');
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('dropdown_open');
        dropdown_wd_mob.classList.remove('dropdown_open');
    });
}());
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