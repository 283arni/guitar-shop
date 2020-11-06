'use strict';

(function () {
  var Escape = {
    KEY_CODE: 27,
    KEY: 'Escape'
  };

  var breakPrice = window.utils.breakPrice;

  var Popup = function (template, guitar) {
    this.cloneCard = template.cloneNode(true);
    this.popupSource = this.cloneCard.querySelector('.popup__info source');
    this.popupImg = this.cloneCard.querySelector('.popup__info img');
    this.popupTitle = this.cloneCard.querySelector('.popup__description h2');
    this.popupCode = this.cloneCard.querySelector('.popup__description div:first-of-type');
    this.popupInfo = this.cloneCard.querySelector('.popup__description span');
    this.popupPrice = this.cloneCard.querySelector('.popup__description div:last-of-type');

    this.popupSource.srcset = 'img/' + guitar.image + '.webp 1x, img/' + guitar.image + '@2x.webp 2x';
    this.popupImg.src = 'img/' + guitar.image + '.png';
    this.popupImg.srcset = 'img/' + guitar.image + '@2x.png 2x';
    this.popupImg.alt = guitar.type + ', ' + guitar.strings + ' струнная';
    this.popupTitle.textContent = 'ГИТАРА ' + guitar.name.toUpperCase();
    this.popupCode.textContent = 'Артикул: ' + guitar.code;
    this.popupInfo.textContent = guitar.type + ', ' + guitar.strings + ' струнная';
    this.popupPrice.innerHTML = 'Цена: ' + breakPrice(guitar.price) + ' &#8381;';

    return this.cloneCard;
  };

  var addEventsPopup = function (popup) {
    var body = document.querySelector('body');
    var closeBtn = popup.querySelector('.popup__question button');
    var stayButton = popup.querySelector('.popup__links button');

    closeBtn.addEventListener('click', onClosePopupClick);

    popup.addEventListener('click', closePopupOverlayClick);

    function onClosePopupClick() {
      if (popup) {
        popup.remove();
      }

      if (stayButton) {
        stayButton.removeEventListener('click', onClosePopupClick);
      }

      body.classList.remove('active-popup');
      closeBtn.removeEventListener('click', onClosePopupClick);
      popup.removeEventListener('click', closePopupOverlayClick);
      document.removeEventListener('keydown', onClosePopupKeydown);
    }

    function closePopupOverlayClick(e) {
      if (e.target === popup) {
        onClosePopupClick();
      }
    }

    function onClosePopupKeydown(e) {
      if (e.keyCode === Escape.KEY_CODE || e.key === Escape.KEY) {
        onClosePopupClick();
      }
    }

    document.addEventListener('keydown', onClosePopupKeydown);

    return {
      onClosePopupClick: onClosePopupClick
    };
  };

  window.popupTemplate = {
    popup: Popup,
    addEventsPopup: addEventsPopup
  };
})();
