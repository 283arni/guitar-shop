'use strict';
// server
(function () {
  window.server = '[{"id": 1, "image": "electro-2", "code": "SO757575","name": "Честер Bass","type": "электрогитара","popular": 15,"strings": 7,"price": 17500},{"id": 2, "image": "electro-1", "code": "TK129049","name": "СURT Z300","type": "электрогитара","popular": 9,"strings": 7,"price": 29500},{"id": 3, "image": "ukulele", "code": "RO111111","name": "Roman LX","type": "укулеле","popular": 21,"strings": 4,"price": 6800},{"id": 4, "image": "electro-3", "code": "TK436457","name": "СURT T300","type": "электрогитара","popular": 15,"strings": 6,"price": 30000},{"id": 5, "image": "acoustic", "code": "DI192138","name": "Dania Super","type": "акустическая гитара","popular": 5,"strings": 7,"price": 3500},{"id": 6, "image": "electro-4", "code": "SO934345","name": "Честер WX ","type": "электрогитара","popular": 17,"strings": 6,"price": 15300},{"id": 7,"image": "ukulele","code": "DI082347","name": "Dania VX","type": "укулеле","popular": 5,"strings": 4,"price": 2200},{"id": 8,"image": "electro-1","code": "SO135646","name": "Честер Plus ","type": "электрогитара","popular": 27,"strings": 4,"price": 30000},{"id": 9,"image": "acoustic","code": "VO154751","name": "Виолана 300","type": "акустическая гитара","popular": 3,"strings": 7,"price": 1700},{"id": 10,"image": "electro-2","code": "TK244556","name": "СURT Clasic","type": "электрогитара","popular": 20,"strings": 4,"price": 23000},{"id": 11,"image": "electro-2","code": "TK134663","name": "СURT Z250","type": "электрогитара","popular": 19,"strings": 4,"price": 18700},{"id": 12,"image": "electro-3","code": "SO123212","name": "Честер 7X","type": "электрогитара","popular": 30,"strings": 7,"price": 35000},{"id": 13,"image": "electro-3","code": "SO123234","name": "Честер 6V","type": "электрогитара","popular": 28,"strings": 6,"price": 14900},{"id": 14,"image": "acoustic","code": "VO519510","name": "Виолана Mix","type": "акустическая гитара","popular": 7,"strings": 6,"price": 7600},{"id": 15,"image": "acoustic","code": "VO457369","name": "Виолана 250x","type": "акустическая гитара","popular": 19,"strings": 6,"price": 6500},{"id": 16,"image": "acoustic","code": "FB625903","name": "Фабио Лайт","type": "акустическая гитара","popular": 26,"strings": 7,"price": 12000},{"id": 17,"image": "acoustic","code": "FB576948","name": "Фабио L100","type": "акустическая гитара","popular": 31,"strings": 7,"price": 9900},{"id": 18,"image": "acoustic","code": "LU012032","name": "Liana Z200","type": "акустическая гитара","popular": 28,"strings": 12,"price": 8900},{"id": 19,"image": "acoustic","code": "LU546853","name": "Liana Z100","type": "акустическая гитара","popular": 34,"strings": 12,"price": 10500},{"id": 20,"image": "acoustic","code": "LU458283","name": "Liana Z300","type": "акустическая гитара","popular": 9,"strings": 6,"price": 13300},{"id": 21,"image": "ukulele","code": "RO324341","name": "Roman RX","type": "укулеле","popular": 37,"strings": 4,"price": 4800},{"id": 22,"image": "ukulele","code": "RO214235","name": "Roman TX","type": "укулеле","popular": 5,"strings": 4,"price": 1900},{"id": 23,"image": "ukulele","code": "DI132414","name": "Dania U100","type": "укулеле","popular": 23,"strings": 4,"price": 2500},{"id": 24,"image": "ukulele","code": "DI934754","name": "Dania WR","type": "укулеле","popular": 3,"strings": 4,"price": 3800},{"id": 25,"image": "ukulele","code": "DI034292","name": "Dania LE","type": "укулеле","popular": 10,"strings": 4,"price": 4100},{"id": 26,"image": "ukulele","code": "MI193214","name": "Mirana V10","type": "укулеле","popular": 14,"strings": 4,"price": 2700},{"id": 27,"image": "ukulele","code": "VO043244","name": "Виолана Mini","type": "укулеле","popular": 29,"strings": 4,"price": 6700}]';
})();

// card basket
(function () {
  var card = document.querySelector('#basket-item');

  if (!card) {
    return;
  }

  function createBasketCard(item) {
    var cloneCard = card.content.querySelector('li').cloneNode(true);
    var cardSource = cloneCard.querySelector('.basket__item source');
    var cardImg = cloneCard.querySelector('.basket__item img');
    var cardTitle = cloneCard.querySelector('.basket__description h2');
    var cardCode = cloneCard.querySelector('.basket__description div:first-of-type');
    var cardInfo = cloneCard.querySelector('.basket__description div:last-of-type');
    var cardPrice = cloneCard.querySelector('.basket__price span');
    var cardFullPrice = cloneCard.querySelector('.basket__all-price span');

    cloneCard.dataset.id = item.id;
    cardSource.srcset = 'img/' + item.image + '.webp 1x, img/' + item.image + '@2x.webp 2x';
    cardImg.src = 'img/' + item.image + '.png';
    cardImg.srcset = 'img/' + item.image + '@2x.png 2x';
    cardImg.alt = item.type + ', ' + item.strings + ' струнная';
    cardTitle.textContent = 'ГИТАРА ' + item.name.toUpperCase();
    cardCode.textContent = 'Артикул: ' + item.code;
    cardInfo.textContent = item.type + ', ' + item.strings + ' струнная';
    cardPrice.innerHTML = item.price + ' &#8381;';
    cardFullPrice.innerHTML = item.price + ' &#8381;';

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

// main basket
(function () {
  var basketList = document.querySelector('.basket ul');
  var sumAllPrices = document.querySelector('.basket__submit span');
  var indexGoods = document.querySelector('.header__list-icon span');

  var createBasketList = window.basketCard.createBasketList;

  function addPrices(list, index) {
    var sum = 0;

    list.forEach(function (item, i) {
      if (index && i !== index || !index) {
        sum += parseInt(item.textContent, 10);
      }
    });

    sumAllPrices.innerHTML = 'Всего: ' + sum + ' &#8381;';
  }

  function addAmountInBasket(list) {
    if (!list.length) {
      indexGoods.textContent = '';
      return;
    }

    indexGoods.textContent = list.length;
  }

  function deleteItemArray(list, index) {
    if (index > -1) {
      list.splice(index, 1);
    }

    addAmountInBasket(list);
  }

  function countAmountGuitares() {

  }

  function addEventsItem(list) {
    var items = document.querySelectorAll('.basket li');
    var allPrices = document.querySelectorAll('.basket__all-price span');

    addPrices(allPrices);

    items.forEach(function (item, i) {
      var closeButton = item.querySelector('.basket__item button');
      var minusButton = item.querySelector('.basket__buttons button:first-of-type');
      var pluseButton = item.querySelector('.basket__buttons button:last-of-type');
      var amouteGuitars = item.querySelector('.basket__buttons div');
      var priceOneThing = item.querySelector('.basket__price span');
      var fullPrice = item.querySelector('.basket__all-price span');


      closeButton.addEventListener('click', function () {
        item.remove();

        var newAllPrices = document.querySelectorAll('.basket__all-price span');
        deleteItemArray(list, i);
        addPrices(newAllPrices, i);
      });

      minusButton.addEventListener('click', function () {

      });

      pluseButton.addEventListener('click', function () {
        var newAllPrices = document.querySelectorAll('.basket__all-price span');

        var number = +amouteGuitars.textContent;
        amouteGuitars.textContent = ++number;
        var price = parseInt(priceOneThing.textContent, 10) * number;
        fullPrice.innerHTML = price + ' &#8381';
        addPrices(newAllPrices);
      });
    });
  }

  function renderBasketList(list) {
    basketList.innerHTML = '';
    basketList.append(createBasketList(list));
    addEventsItem(list);
    countAmountGuitares();
  }

  window.basket = {
    renderBasketList: renderBasketList
  };
})();

// toggle
(function () {
  var main = document.querySelector('.main');
  var mainBasket = document.querySelector('.main_basket');

  function toggleMainClick(element) {
    var data = element.dataset.link;

    switch (data) {
      case 'basket':
        main.setAttribute('hidden', 'hidden');
        mainBasket.removeAttribute('hidden');
        window.basket.renderBasketList(window.popup.addedGuitars);
        break;
      case 'catalog':
        mainBasket.setAttribute('hidden', 'hidden');
        main.removeAttribute('hidden');
        break;
    }
  }

  window.toggle = {
    toggleMainClick: toggleMainClick
  };
})();

// disable checkbox
(function () {


  function disableCheckbox() {
    var typeBoxs = document.querySelectorAll('#type-guitars input:checked');
    var stringsBoxs = document.querySelectorAll('#strings-guitars input');

    var strings = '';

    typeBoxs.forEach(function (type) {
      if (type.value === 'акустическая гитара') {
        strings += '6,7,12,';
      }

      if (type.value === 'укулеле') {
        strings += '4,';
      }

      if (type.value === 'электрогитара') {
        strings += '4,6,7,';
      }
    });

    stringsBoxs.forEach(function (box) {
      if (typeBoxs.length) {
        box.disabled = true;

      } else {
        box.disabled = false;
      }
    });

    stringsBoxs.forEach(function (box) {
      strings.split(',').forEach(function (amountStrings) {
        if (box.value === amountStrings) {
          box.disabled = false;
        }
      });
    });

    var stringDisabled = document.querySelectorAll('#strings-guitars input:disabled');

    stringDisabled.forEach(function (box) {
      box.checked = false;
    });
  }

  window.disableCheckbox = disableCheckbox;
})();

// filter
(function () {
  var filter = document.querySelector('#filter');

  function changePrices(list) {
    var firstPrice = filter.querySelector('.filter__item-fields').firstElementChild;
    var lastPrice = filter.querySelector('.filter__item-fields').lastElementChild;

    var prices = list.map(function (item) {
      return item.price;
    });

    var maxPrice = Math.max.apply(null, prices).toString();
    var minPrice = Math.min.apply(null, prices).toString();

    lastPrice.placeholder = maxPrice.substring(maxPrice.length - 3, 0) + ' ' + maxPrice.substring(maxPrice.length - 3);
    firstPrice.placeholder = minPrice.substring(minPrice.length - 3, 0) + ' ' + minPrice.substring(minPrice.length - 3);


    if (+firstPrice.value < +minPrice && firstPrice.value) {
      firstPrice.value = minPrice;
    }

    if (+lastPrice.value > +maxPrice && lastPrice.value) {
      lastPrice.value = maxPrice;
    }

    if (+firstPrice.value > +lastPrice.value && lastPrice.value && firstPrice.value) {
      var savePrice = firstPrice.value;
      firstPrice.value = lastPrice.value;
      lastPrice.value = savePrice;
    }


    return list.filter(function (item) {
      var currentItem;

      if (!firstPrice.value.length && item.price <= +lastPrice.value) {
        currentItem = item;
      }

      if (!lastPrice.value.length && item.price >= +firstPrice.value) {
        currentItem = item;
      }

      if (item.price >= +firstPrice.value && item.price <= +lastPrice.value) {
        currentItem = item;
      }

      return currentItem;
    });
  }

  function filterDetail(boxs, list, flag) {

    if (boxs.length) {
      return list.filter(function (item) {
        var currentItem;

        boxs.forEach(function (box) {

          if (box.value === item.type && flag === 'type') {
            currentItem = item;
          }

          if (+box.value === item.strings && flag === 'strings') {
            currentItem = item;
          }
        });

        return currentItem;
      });
    }

    return list;
  }


  function filterGuitars(list) {
    var checkedBoxs = filter.querySelectorAll('#type-guitars input[type="checkbox"]:checked');
    var checkedStrings = filter.querySelectorAll('#strings-guitars input[type="checkbox"]:checked');
    var newList;
    newList = filterDetail(checkedBoxs, list, 'type');
    newList = filterDetail(checkedStrings, newList, 'strings');
    newList = changePrices(newList);

    return newList;
  }

  window.filterGuitars = filterGuitars;
})();

// card
(function () {
  var card = document.querySelector('#card');

  if (!card) {
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

    cloneCard.dataset.id = item.id;
    source.srcset = 'img/' + item.image + '.webp 1x, img/' + item.image + '@2x.webp 2x';
    img.src = 'img/' + item.image + '.png';
    img.srcset = 'img/' + item.image + '@2x.png 2x';
    img.alt = item.type + ', ' + item.strings + ' струнная';
    popular.textContent = item.popular;
    name.textContent = item.name;
    price.innerHTML = item.price + ' &#8381;';

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

// active popup
(function () {
  var templateCard = document.querySelector('#add');

  if (!templateCard) {
    return;
  }

  var copyPopup = templateCard.content.querySelector('.popup');
  var templateSuccess = document.querySelector('#success').content.querySelector('.popup');
  var body = document.querySelector('body');
  var toggleMainClick = window.toggle.toggleMainClick;
  var addedGuitars = [];

  function createPopup(currentGuitar) {
    var cloneCard = copyPopup.cloneNode(true);
    var popupSource = cloneCard.querySelector('.popup__info source');
    var popupImg = cloneCard.querySelector('.popup__info img');
    var popupTitle = cloneCard.querySelector('.popup__description h2');
    var popupCode = cloneCard.querySelector('.popup__description div:first-of-type');
    var popupInfo = cloneCard.querySelector('.popup__description span');
    var popupPrice = cloneCard.querySelector('.popup__description div:last-of-type');

    popupSource.srcset = 'img/' + currentGuitar.image + '.webp 1x, img/' + currentGuitar.image + '@2x.webp 2x';
    popupImg.src = 'img/' + currentGuitar.image + '.png';
    popupImg.srcset = 'img/' + currentGuitar.image + '@2x.png 2x';
    popupImg.alt = currentGuitar.type + ', ' + currentGuitar.strings + ' струнная';
    popupTitle.textContent = 'ГИТАРА ' + currentGuitar.name.toUpperCase();
    popupCode.textContent = 'Артикул: ' + currentGuitar.code;
    popupInfo.textContent = currentGuitar.type + ', ' + currentGuitar.strings + ' струнная';
    popupPrice.innerHTML = 'Цена: ' + currentGuitar.price + ' &#8381;';

    return cloneCard;
  }

  function onOpenBasketClick(e) {
    var linkBasket = document.querySelector('.popup__links a:first-of-type');
    var linkCatalog = document.querySelector('.popup__links a:last-of-type');

    if (e.currentTarget.dataset) {
      toggleMainClick(e.currentTarget);
    }

    onClosePopupClick();

    linkCatalog.removeEventListener('click', onClosePopupClick);
    linkBasket.removeEventListener('click', onOpenBasketClick);
  }

  function onClosePopupClick() {
    var popup = body.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__quenstion button');


    if (popup) {
      popup.remove();
    }

    body.classList.remove('active-popup');
    closeBtn.removeEventListener('click', onClosePopupClick);
    popup.removeEventListener('click', onClosePopupClick);
    document.removeEventListener('keydown', onClosePopupKeydown);
  }

  function onClosePopupKeydown(e) {
    if (e.keyCode === 27 || e.key === 'Escape') {
      onClosePopupClick();
    }
  }

  function openSuccessPopup() {
    body.append(templateSuccess);
    body.classList.add('active-popup');

    var popup = body.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__quenstion button');
    var linkBasket = popup.querySelector('.popup__links a:first-of-type');
    var linkCatalog = popup.querySelector('.popup__links a:last-of-type');

    closeBtn.addEventListener('click', onClosePopupClick);
    popup.addEventListener('click', onClosePopupClick);
    linkCatalog.addEventListener('click', onClosePopupClick);
    linkBasket.addEventListener('click', onOpenBasketClick);
    document.addEventListener('keydown', onClosePopupKeydown);
  }

  function addEventsPopup(currentGuitar) {
    var popup = document.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__quenstion button');
    var addButton = popup.querySelector('.popup__buttons_add button');
    var indexGoods = document.querySelector('.header__list-icon span');


    closeBtn.addEventListener('click', onClosePopupClick);

    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        onClosePopupClick();
      }
    });

    addButton.addEventListener('click', function () {
      addedGuitars.push(currentGuitar);
      onClosePopupClick();
      openSuccessPopup();
      indexGoods.textContent = addedGuitars.length;
    });

    document.addEventListener('keydown', onClosePopupKeydown);
  }

  function openPopup(card, guitars) {
    var currentGuitar = guitars[+card.dataset.id - 1];

    body.append(createPopup(currentGuitar));
    body.classList.add('active-popup');
    addEventsPopup(currentGuitar);
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

// main
(function () {
  var $ = window.jQuery;
  var pages = document.querySelector('.goods__pagination');
  var filter = document.querySelector('#filter');
  var linkBasket = document.querySelector('#link-basket');
  var linkCatalog = document.querySelector('#link-catalog');

  var toggleMainClick = window.toggle.toggleMainClick;

  if (!pages) {
    return;
  }

  var guitars = JSON.parse(window.server);
  var createList = window.render.createList;
  var filterGuitars = window.filterGuitars;

  if (!pages) {
    return;
  }

  function renderListGuitars() {
    $('.goods__pagination').pagination({
      dataSource: createList(filterGuitars(guitars)),
      pageSize: 9,
      showPrevious: false,
      nextText: 'Далее',
      callback: function (data) {
        var html = data;
        $('.goods__list ul').html(html);
        window.popup.pullButtonsList(data, guitars);
      }
    });
  }

  filter.addEventListener('change', function () {
    window.disableCheckbox();
    renderListGuitars();
  });

  linkBasket.addEventListener('click', function () {
    toggleMainClick(linkBasket);
  });

  linkCatalog.addEventListener('click', function () {
    toggleMainClick(linkCatalog);
  });

  renderListGuitars();

  window.main = {
    renderListGuitars: renderListGuitars,
    guitars: guitars
  };
})();

// sort
(function () {
  var sortButtons = document.querySelector('.goods__sort');

  if (!sortButtons) {
    return;
  }

  var allButtonText = sortButtons.querySelectorAll('.goods__buttons-type button');
  var allButtonArrow = sortButtons.querySelectorAll('.goods__buttons-prices button');
  var sortPrice = sortButtons.querySelector('.goods__buttons-type button:first-of-type');
  var sortPopular = sortButtons.querySelector('.goods__buttons-type button:last-of-type');
  var sortToMore = sortButtons.querySelector('.goods__buttons-prices button:first-of-type');
  var sortToLess = sortButtons.querySelector('.goods__buttons-prices button:last-of-type');

  var renderListGuitars = window.main.renderListGuitars;
  var guitars = window.main.guitars;

  function removeActiveClass(elements) {
    elements.forEach(function (button) {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
  }

  function sortGuitars(list, activeType, activeArrow) {
    if (activeType === 'price' && !activeArrow || activeType === 'price' && activeArrow === 'toMore') {
      list.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (activeType === 'price' && activeArrow === 'toLess') {
      list.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    if (activeType === 'popular' && !activeArrow || activeType === 'popular' && activeArrow === 'toMore') {
      list.sort(function (a, b) {
        return a.popular - b.popular;
      });
    }

    if (activeType === 'popular' && activeArrow === 'toLess') {
      list.sort(function (a, b) {
        return b.popular - a.popular;
      });
    }

    return list;
  }

  allButtonArrow.forEach(function (buttonArrow) {

    buttonArrow.addEventListener('click', function () {
      removeActiveClass(allButtonArrow);

      buttonArrow.classList.add('active');

      if (sortPrice.classList.contains('active')) {
        sortGuitars(guitars, sortPrice.dataset.sort, buttonArrow.dataset.sort);
      } else if (sortPopular.classList.contains('active')) {
        sortGuitars(guitars, sortPopular.dataset.sort, buttonArrow.dataset.sort);
      } else {
        sortGuitars(guitars, sortPrice.dataset.sort, buttonArrow.dataset.sort);
      }

      renderListGuitars();
    });
  });

  allButtonText.forEach(function (buttonText) {

    buttonText.addEventListener('click', function () {
      removeActiveClass(allButtonText);

      buttonText.classList.add('active');

      if (sortToMore.classList.contains('active')) {
        sortGuitars(guitars, buttonText.dataset.sort, sortToMore.dataset.sort);
      } else if (sortToLess.classList.contains('active')) {
        sortGuitars(guitars, buttonText.dataset.sort, sortToLess.dataset.sort);
      } else {
        sortGuitars(guitars, buttonText.dataset.sort);
      }

      renderListGuitars();
    });
  });
})();
