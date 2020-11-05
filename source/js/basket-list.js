'use strict';

(function () {
  var card = document.querySelector('#basket-item');
  var Card = window.cardTemplate.card;

  if (!card) {
    return;
  }

  function createBasketCard(item) {

    var cloneCard = new Card(card, item);

    return cloneCard;
  }


  function createBasketList(list) {
    var fragment = document.createDocumentFragment();

    list.forEach(function (item) {
      fragment.append(createBasketCard(item));
    });

    return fragment;
  }


  window.basketCard = {
    createBasketList: createBasketList
  };
})();
