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
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
        1340: {
            slidesPerView: 3,
        },
        1075: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 2,
        }
    },
});
