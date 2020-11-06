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
      var amount = 0;

      list.forEach(function (element) {
        if (element.id === item.id) {
          amount += 1;
        }
      });

      item.amount = amount;
    });


    list.filter(function (item, i) {
      if (list.indexOf(item) === i) {
        fragment.append(createBasketCard(item));
      }
    });

    return fragment;
  }


  window.basketCard = {
    createBasketList: createBasketList
  };
})();
