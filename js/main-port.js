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