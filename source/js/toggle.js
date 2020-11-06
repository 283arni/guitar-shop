'use strict';

(function () {
  var Page = {
    BASKET: 'basket',
    CATALOG: 'catalog'
  };

  var main = document.querySelector('.main');
  var mainBasket = document.querySelector('.main_basket');
  var amountBasket = document.querySelector('.header__list-icon span');

  function toggleMainClick(element) {
    var data = element.dataset.link;
    var addedGuitars = window.popup.addedGuitars;
    var renderBasketList = window.basket.renderBasketList;

    switch (data) {
      case Page.BASKET:
        main.setAttribute('hidden', 'hidden');
        mainBasket.removeAttribute('hidden');
        renderBasketList(addedGuitars);
        amountBasket.textContent = addedGuitars.length;
        break;
      case Page.CATALOG:
        mainBasket.setAttribute('hidden', 'hidden');
        main.removeAttribute('hidden');
        break;
    }
  }

  window.toggle = {
    toggleMainClick: toggleMainClick
  };
})();
