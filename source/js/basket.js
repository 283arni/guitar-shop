'use strict';
(function () {
  if (!window.basketCard) {
    return;
  }

  var basketList = document.querySelector('.basket ul');
  var indexGoods = document.querySelector('.header__list-icon span');

  var createBasketList = window.basketCard.createBasketList;
  var addEventsPopup = window.popupTemplate.addEventsPopup;

  function addPrices() {
    var allPrices = document.querySelectorAll('.basket__all-price span');
    var sumAllPrices = document.querySelector('.basket__submit span');

    var sum = 0;

    allPrices.forEach(function (item) {
      sum += parseInt(item.textContent, 10);
    });

    sumAllPrices.innerHTML = 'Всего: ' + sum + ' &#8381;';

    return sum;
  }

  function openPopupBasket(list, element) {
    var createPopupBasket = window.basketPopup.createPopupBasket;


    list.some(function (item) {
      var success = false;

      if (item.id === +element.dataset.id) {
        createPopupBasket(item);
        success = true;
      }

      return success;
    });

    var popup = document.querySelector('.popup');
    var deleteButton = popup.querySelector('.popup__buttons button:first-of-type');
    var stayButton = popup.querySelector('.popup__buttons button:last-of-type');
    var newEventPopup = addEventsPopup(popup);


    function onDeleteItemClick() {
      element.remove();
      deleteItemArray(list, +element.dataset.id);
      newEventPopup.onClosePopupClick();
      deleteButton.removeEventListener('click', onDeleteItemClick);
      addPrices();
    }


    stayButton.addEventListener('click', newEventPopup.onClosePopupClick);
    deleteButton.addEventListener('click', onDeleteItemClick);
  }

  function addAmountInBasket(list) {
    if (!list.length) {
      indexGoods.textContent = '';
      return;
    }

    indexGoods.textContent = list.length;
  }

  function deleteItemArray(list, index) {


    list.some(function (item, i) {
      var currentIndex = false;

      if (item.id === index) {
        list.splice(i, 1);
        currentIndex = true;
      }

      return currentIndex;
    });

    addAmountInBasket(list);
  }

  function countAmountGuitars(item, number) {

    var priceOneThing = item.querySelector('.basket__price span');
    var fullPrice = item.querySelector('.basket__all-price span');


    var price = parseInt(priceOneThing.textContent, 10) * number;
    fullPrice.innerHTML = price + ' &#8381';
    addPrices();
  }

  function addEventsItem(list) {
    var MIN_AMOUNT = 1;

    var items = document.querySelectorAll('.basket li');

    addPrices();

    items.forEach(function (item) {
      var closeButton = item.querySelector('.basket__item button');
      var minusButton = item.querySelector('.basket__buttons button:first-of-type');
      var plusButton = item.querySelector('.basket__buttons button:last-of-type');
      var amountGuitars = item.querySelector('.basket__buttons div');

      closeButton.addEventListener('click', function () {
        openPopupBasket(list, item);
      });

      minusButton.addEventListener('click', function () {
        var number = +amountGuitars.textContent;

        if (number <= MIN_AMOUNT) {
          openPopupBasket(list, item);
          return;
        }

        amountGuitars.textContent = --number;
        countAmountGuitars(item, number);
      });

      plusButton.addEventListener('click', function () {
        var number = +amountGuitars.textContent;

        amountGuitars.textContent = ++number;
        countAmountGuitars(item, number);
      });
    });
  }

  function renderBasketList(list) {
    basketList.innerHTML = '';
    basketList.append(createBasketList(list));
    addEventsItem(list);
  }

  window.basket = {
    renderBasketList: renderBasketList,
    addPrices: addPrices
  };
})();
