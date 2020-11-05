'use strict';

(function () {
  var card = document.querySelector('#card');
  var Card = window.cardTemplate.card;

  if (!card) {
    return;
  }

  function createCard(item) {

    var cloneCard = new Card(card, item);

    return cloneCard;
  }

  function createList(list) {
    var listCards = [];

    list.forEach(function (guitar) {
      listCards.push(createCard(guitar));
    });

    return listCards;
  }

  window.render = {
    createList: createList
  };
})();
