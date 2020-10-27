'use strict';

(function () {
  window.server = '[{"id": 1, "image": "electro-2", "code": "SO757575","name": "Честер Bass","type": "электрогитара","popular": 15,"strings": 7,"price": 17500},{"id": 2, "image": "electro-1", "code": "TK129049","name": "СURT Z300","type": "электрогитара","popular": 9,"strings": 7,"price": 29500},{"id": 3, "image": "ukulele", "code": "RO111111","name": "Roman LX","type": "укулеле","popular": 21,"strings": 4,"price": 6800},{"id": 4, "image": "electro-3", "code": "TK436457","name": "СURT T300","type": "электрогитара","popular": 15,"strings": 6,"price": 30000},{"id": 5, "image": "acoustic", "code": "DI192138","name": "Dania Super","type": "акустическая гитара","popular": 5,"strings": 7,"price": 3500},{"id": 6, "image": "electro-4", "code": "SO934345","name": "Честер WX ","type": "электрогитара","popular": 17,"strings": 6,"price": 15300},{"id": 7,"image": "ukulele","code": "DI082347","name": "Dania VX","type": "укулеле","popular": 5,"strings": 4,"price": 2200},{"id": 8,"image": "electro-1","code": "SO135646","name": "Честер Plus ","type": "электрогитара","popular": 27,"strings": 4,"price": 30000},{"id": 9,"image": "acoustic","code": "VO154751","name": "Виолана 300","type": "акустическая гитара","popular": 3,"strings": 7,"price": 1700},{"id": 10,"image": "electro-2","code": "TK244556","name": "СURT Clasic","type": "электрогитара","popular": 20,"strings": 4,"price": 23000},{"id": 11,"image": "electro-2","code": "TK134663","name": "СURT Z250","type": "электрогитара","popular": 19,"strings": 4,"price": 18700},{"id": 12,"image": "electro-3","code": "SO123212","name": "Честер 7X","type": "электрогитара","popular": 30,"strings": 7,"price": 35000},{"id": 13,"image": "electro-3","code": "SO123234","name": "Честер 6V","type": "электрогитара","popular": 28,"strings": 6,"price": 14900},{"id": 14,"image": "acoustic","code": "VO519510","name": "Виолана Mix","type": "акустическая гитара","popular": 7,"strings": 6,"price": 7600},{"id": 15,"image": "acoustic","code": "VO457369","name": "Виолана 250x","type": "акустическая гитара","popular": 19,"strings": 6,"price": 6500},{"id": 16,"image": "acoustic","code": "FB625903","name": "Фабио Лайт","type": "акустическая гитара","popular": 26,"strings": 7,"price": 12000},{"id": 17,"image": "acoustic","code": "FB576948","name": "Фабио L100","type": "акустическая гитара","popular": 31,"strings": 7,"price": 9900},{"id": 18,"image": "acoustic","code": "LU012032","name": "Liana Z200","type": "акустическая гитара","popular": 28,"strings": 12,"price": 8900},{"id": 19,"image": "acoustic","code": "LU546853","name": "Liana Z100","type": "акустическая гитара","popular": 34,"strings": 12,"price": 10500},{"id": 20,"image": "acoustic","code": "LU458283","name": "Liana Z300","type": "акустическая гитара","popular": 9,"strings": 6,"price": 13300},{"id": 21,"image": "ukulele","code": "RO324341","name": "Roman RX","type": "укулеле","popular": 37,"strings": 4,"price": 4800},{"id": 22,"image": "ukulele","code": "RO214235","name": "Roman TX","type": "укулеле","popular": 5,"strings": 4,"price": 1900},{"id": 23,"image": "ukulele","code": "DI132414","name": "Dania U100","type": "укулеле","popular": 23,"strings": 4,"price": 2500},{"id": 24,"image": "ukulele","code": "DI934754","name": "Dania WR","type": "укулеле","popular": 3,"strings": 4,"price": 3800},{"id": 25,"image": "ukulele","code": "DI034292","name": "Dania LE","type": "укулеле","popular": 10,"strings": 4,"price": 4100},{"id": 26,"image": "ukulele","code": "MI193214","name": "Mirana V10","type": "укулеле","popular": 14,"strings": 4,"price": 2700},{"id": 27,"image": "ukulele","code": "VO043244","name": "Виолана Mini","type": "укулеле","popular": 29,"strings": 4,"price": 6700}]';
})();

(function () {
  var guitars = JSON.parse(window.server);
  var card = document.querySelector('#card');
  var listCards = [];

  if (!guitars || !card) {
    return;
  }

  function createCard(item) {
    var cloneCard = card.content.querySelector('li').cloneNode(true);
    var source = cloneCard.querySelector('source');
    var img = cloneCard.querySelector('img');
    var popular = cloneCard.querySelector('.goods__popular span');
    var priceBlock = cloneCard.querySelector('.goods__price');
    var name = priceBlock.firstElementChild;
    var price = priceBlock.lastElementChild;

    source.srcset = 'img/' + item.image + '.webp 1x, img/' + item.image + '@2x.webp 2x';
    img.src = 'img/' + item.image + '.png';
    img.srcset = 'img/' + item.image + '@2x.png 2x';
    img.alt = item.type;
    popular.textContent = item.popular;
    name.textContent = item.name;
    price.innerHTML = item.price + ' &#8381;';


    return cloneCard;
  }

  guitars.forEach(function (guitar) {
    listCards.push(createCard(guitar));
  });

  window.listCards = listCards;
})();

(function () {
  var $ = window.jQuery;
  var pages = document.querySelector('.goods__pagination');

  if (!pages) {
    return;
  }

  $('.goods__pagination').pagination({
    dataSource: window.listCards,
    pageSize: 9,
    showPrevious: false,
    nextText: 'Далее',
    callback: function (data) {
      var html = data;
      $('.goods__list ul').html(html);
    }
  });
})();
