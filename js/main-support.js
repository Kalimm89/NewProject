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