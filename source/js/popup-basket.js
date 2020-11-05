'use strict';

(function () {

  var templateCard = document.querySelector('#add');
  var Popup = window.popupTemplate.popup;
  var addEventsPopup = window.popupTemplate.addEventsPopup;

  if (!templateCard || !window.popupTemplate) {
    return;
  }


  var copyPopup = templateCard.content.querySelector('.popup');
  var templateSuccess = document.querySelector('#success').content.querySelector('.popup');
  var toggleMainClick = window.toggle.toggleMainClick;
  var addedGuitars = [];


  function createPopup(currentGuitar) {
    var cloneCard = new Popup(copyPopup, currentGuitar);

    return cloneCard;
  }

  function onOpenBasketClick(e) {
    var popup = document.querySelector('.popup');
    var linkBasket = document.querySelector('.popup__links a');
    var stayButton = document.querySelector('.popup__links button');
    var newEventPopup = addEventsPopup(popup);

    if (e.currentTarget.dataset) {
      toggleMainClick(e.currentTarget);
    }

    newEventPopup.onClosePopupClick();

    stayButton.removeEventListener('click', newEventPopup.onClosePopupClick);
    linkBasket.removeEventListener('click', onOpenBasketClick);
  }


  function openSuccessPopup() {
    var body = document.querySelector('body');

    body.append(templateSuccess);
    body.classList.add('active-popup');

    var popup = body.querySelector('.popup');
    var linkBasket = popup.querySelector('.popup__links a');
    var stayButton = popup.querySelector('.popup__links button');
    var newEventPopup = addEventsPopup(popup);


    stayButton.addEventListener('click', newEventPopup.onClosePopupClick);
    linkBasket.addEventListener('click', onOpenBasketClick);
  }


  function openPopup(card, guitars) {
    var body = document.querySelector('body');
    var currentGuitar = guitars.find(function (guitar) {
      return guitar.id === +card.dataset.id;
    });

    body.append(createPopup(currentGuitar));
    body.classList.add('active-popup');

    var popup = document.querySelector('.popup');
    var addButton = popup.querySelector('.popup__buttons_add button');
    var indexGoods = document.querySelector('.header__list-icon span');
    var newEventPopup = addEventsPopup(popup);

    addButton.addEventListener('click', function () {
      addedGuitars.push(currentGuitar);
      newEventPopup.onClosePopupClick();
      openSuccessPopup();
      indexGoods.textContent = addedGuitars.length;
    });
  }


  function pullButtonsList(cards, guitars) {
    var buttons = document.querySelectorAll('.goods__item-buttons button');

    buttons.forEach(function (button, i) {

      button.addEventListener('click', function () {
        openPopup(cards[i], guitars);
      });
    });
  }

  window.popup = {
    pullButtonsList: pullButtonsList,
    addedGuitars: addedGuitars
  };
})();

(function () {
  var body = document.querySelector('body');
  var templateCard = document.querySelector('#delete');
  var Popup = window.popupTemplate.popup;

  if (!templateCard) {
    return;
  }

  var copyPopup = templateCard.content.querySelector('.popup');

  function createPopupBasket(currentGuitar) {
    var cloneCard = new Popup(copyPopup, currentGuitar);

    body.append(cloneCard);
  }

  window.basketPopup = {
    createPopupBasket: createPopupBasket
  };
})();
