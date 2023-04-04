//Standart
function readMoreStandart() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Показать ещё";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
}
//Business
function readMoreBusiness() {
    var dots_second = document.getElementById("dots_second");
    var more_second = document.getElementById("more_second");
    var btn_second = document.getElementById("btn_second");
    if(dots_second.style.display === "none") {
        dots_second.style.display="inline";
        btn_second.innerHTML="Показать ещё";
        more_second.style.display="none";
    } else {
        dots_second.style.display="none";
        btn_second.innerHTML="Скрыть";
        more_second.style.display="inline";
    }
}
//Portfolio more
// function portfolioMore() {
//     var card_hide = document.getElementById("card_hide");
//     var card_hide2 = document.getElementById("card_hide2");
//     var btn = document.getElementById("h3_more-mobile");
//     if(card_hide.style.display === "none") {
//         card_hide.style.display="block";
//         card_hide2.style.display="block";
//         btn.innerHTML="Скрыть";
//     } else {
//         card_hide.style.display="none";
//         card_hide2.style.display="none";
//         btn.innerHTML="Ещё кейсы";
//     }
// }
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

//Swiper
new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
        640: {
            slidesPerView: 3,
        }
    },
});