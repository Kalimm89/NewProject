// Swiper
new Swiper('.new', {
    navigation: {
        nextEl: '.ar_right',
        prevEl: '.ar_left'
    },
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1650: {
            slidesPerView: 3,
        },
        1050: {
            slidesPerView: 2,
        }
    },
});
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