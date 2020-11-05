'use strict';
(function () {
  window.server = '[{"id": 1, "image": "electro-2", "code": "SO757575","name": "Честер Bass","type": "электрогитара","popular": 15,"strings": 7,"price": 17500},{"id": 2, "image": "electro-1", "code": "TK129049","name": "СURT Z300","type": "электрогитара","popular": 9,"strings": 7,"price": 29500},{"id": 3, "image": "ukulele", "code": "RO111111","name": "Roman LX","type": "укулеле","popular": 21,"strings": 4,"price": 6800},{"id": 4, "image": "electro-3", "code": "TK436457","name": "СURT T300","type": "электрогитара","popular": 15,"strings": 6,"price": 30000},{"id": 5, "image": "acoustic", "code": "DI192138","name": "Dania Super","type": "акустическая гитара","popular": 5,"strings": 7,"price": 3500},{"id": 6, "image": "electro-4", "code": "SO934345","name": "Честер WX ","type": "электрогитара","popular": 17,"strings": 6,"price": 15300},{"id": 7,"image": "ukulele","code": "DI082347","name": "Dania VX","type": "укулеле","popular": 5,"strings": 4,"price": 2200},{"id": 8,"image": "electro-1","code": "SO135646","name": "Честер Plus ","type": "электрогитара","popular": 27,"strings": 4,"price": 30000},{"id": 9,"image": "acoustic","code": "VO154751","name": "Виолана 300","type": "акустическая гитара","popular": 3,"strings": 7,"price": 1700},{"id": 10,"image": "electro-2","code": "TK244556","name": "СURT Clasic","type": "электрогитара","popular": 20,"strings": 4,"price": 23000},{"id": 11,"image": "electro-2","code": "TK134663","name": "СURT Z250","type": "электрогитара","popular": 19,"strings": 4,"price": 18700},{"id": 12,"image": "electro-3","code": "SO123212","name": "Честер 7X","type": "электрогитара","popular": 30,"strings": 7,"price": 35000},{"id": 13,"image": "electro-3","code": "SO123234","name": "Честер 6V","type": "электрогитара","popular": 28,"strings": 6,"price": 14900},{"id": 14,"image": "acoustic","code": "VO519510","name": "Виолана Mix","type": "акустическая гитара","popular": 7,"strings": 6,"price": 7600},{"id": 15,"image": "acoustic","code": "VO457369","name": "Виолана 250x","type": "акустическая гитара","popular": 19,"strings": 6,"price": 6500},{"id": 16,"image": "acoustic","code": "FB625903","name": "Фабио Лайт","type": "акустическая гитара","popular": 26,"strings": 7,"price": 12000},{"id": 17,"image": "acoustic","code": "FB576948","name": "Фабио L100","type": "акустическая гитара","popular": 31,"strings": 7,"price": 9900},{"id": 18,"image": "acoustic","code": "LU012032","name": "Liana Z200","type": "акустическая гитара","popular": 28,"strings": 12,"price": 8900},{"id": 19,"image": "acoustic","code": "LU546853","name": "Liana Z100","type": "акустическая гитара","popular": 34,"strings": 12,"price": 10500},{"id": 20,"image": "acoustic","code": "LU458283","name": "Liana Z300","type": "акустическая гитара","popular": 9,"strings": 6,"price": 13300},{"id": 21,"image": "ukulele","code": "RO324341","name": "Roman RX","type": "укулеле","popular": 37,"strings": 4,"price": 4800},{"id": 22,"image": "ukulele","code": "RO214235","name": "Roman TX","type": "укулеле","popular": 5,"strings": 4,"price": 1900},{"id": 23,"image": "ukulele","code": "DI132414","name": "Dania U100","type": "укулеле","popular": 23,"strings": 4,"price": 2500},{"id": 24,"image": "ukulele","code": "DI934754","name": "Dania WR","type": "укулеле","popular": 3,"strings": 4,"price": 3800},{"id": 25,"image": "ukulele","code": "DI034292","name": "Dania LE","type": "укулеле","popular": 10,"strings": 4,"price": 4100},{"id": 26,"image": "ukulele","code": "MI193214","name": "Mirana V10","type": "укулеле","popular": 14,"strings": 4,"price": 2700},{"id": 27,"image": "ukulele","code": "VO043244","name": "Виолана Mini","type": "укулеле","popular": 29,"strings": 4,"price": 6700}]';
})();

(function () {
  var Numerator = {
    ONE: 1,
    TEN_PERCENT: 10,
    THIRTY_PERCENT: 30,
    HUNDRED: 100,
    MAX_SALE: 3500,
    SALE: 700
  };

  var Promo = {
    HIT: 'GITARAHIT',
    SUPER: 'SUPERGITARA',
    GUITAR: 'GITARA2020'
  };

  var form = document.querySelector('.basket__form');

  if (!form) {
    return;
  }

  var field = form.querySelector('.basket__field input');
  var button = form.querySelector('.basket__field button');
  var price = form.querySelector('.basket__submit span');


  function usePromoClick(promo) {
    var addPrices = window.basket.addPrices;
    var sum = parseInt(addPrices(), 10);

    if (!sum) {
      return;
    }

    switch (promo) {
      case Promo.HIT:
        price.innerHTML = 'Всего: ' + Math.floor(sum * (Numerator.ONE - Numerator.TEN_PERCENT / Numerator.HUNDRED)) + ' &#8381;';
        field.value = '';
        break;
      case Promo.SUPER:
        price.innerHTML = 'Всего: ' + (sum - Numerator.SALE) + ' &#8381;';
        field.value = '';
        break;
      case Promo.GUITAR:
        price.innerHTML = 'Всего: ' + Math.floor(sum * Numerator.THIRTY_PERCENT / Numerator.HUNDRED) < Numerator.MAX_SALE ? Math.floor(sum * (Numerator.ONE - Numerator.THIRTY_PERCENT / Numerator.HUNDRED)) : sum - Numerator.MAX_SALE + ' &#8381;';
        field.value = '';
        break;
      default:
        field.classList.add('error');
        field.value = '';
        field.placeholder = 'Промокод не действителен';
    }
  }

  field.addEventListener('focus', function () {
    field.classList.remove('error');
    field.placeholder = '';
  });

  field.addEventListener('input', function () {
    field.value = field.value.toUpperCase();
  });

  button.addEventListener('click', function () {
    usePromoClick(field.value);
  });
})();

(function () {
  var body = document.querySelector('body');
  var templateCard = document.querySelector('#delete');

  if (!templateCard) {
    return;
  }

  var copyPopup = templateCard.content.querySelector('.popup');

  function createPopupBasket(currentGuitar) {
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

    body.append(cloneCard);
  }

  window.basketPopup = {
    createPopupBasket: createPopupBasket
  };
})();

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

(function () {
  if (!window.basketCard) {
    return;
  }

  var Escape = {
    KEY_CODE: 'Escape',
    KEY: 27
  };

  var basketList = document.querySelector('.basket ul');
  var indexGoods = document.querySelector('.header__list-icon span');

  var createBasketList = window.basketCard.createBasketList;

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
    var closeButton = popup.querySelector('.popup__question button');

    function closePopup() {
      popup.remove();
      popup.removeEventListener('click', onClosePopupBasketOverlayClick);
      stayButton.removeEventListener('click', onClosePopupBasketClick);
      closeButton.removeEventListener('keydown', onClosePopupBasketClick);
      deleteButton.removeEventListener('click', onDeleteItemClick);
      document.removeEventListener('keydown', onClosePopupBasketKeydown);
    }

    function onDeleteItemClick() {
      element.remove();

      deleteItemArray(list, +element.dataset.id);
      closePopup();
      addPrices();
    }

    function onClosePopupBasketKeydown(e) {
      if (e.keyCode === Escape.KEY_CODE || e.key === Escape.KEY) {
        closePopup();
      }
    }

    function onClosePopupBasketClick() {
      closePopup();
    }

    function onClosePopupBasketOverlayClick(e) {
      if (e.target === popup) {
        closePopup();
      }
    }

    popup.addEventListener('click', onClosePopupBasketOverlayClick);
    stayButton.addEventListener('click', onClosePopupBasketClick);
    closeButton.addEventListener('click', onClosePopupBasketClick);
    deleteButton.addEventListener('click', onDeleteItemClick);
    document.addEventListener('keydown', onClosePopupBasketKeydown);
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

    items.forEach(function (item, i) {
      var closeButton = item.querySelector('.basket__item button');
      var minusButton = item.querySelector('.basket__buttons button:first-of-type');
      var plusButton = item.querySelector('.basket__buttons button:last-of-type');
      var amountGuitars = item.querySelector('.basket__buttons div');

      closeButton.addEventListener('click', function () {
        openPopupBasket(list, item, i);
      });

      minusButton.addEventListener('click', function () {
        var number = +amountGuitars.textContent;

        if (number <= MIN_AMOUNT) {
          openPopupBasket(list, item, i);
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

(function () {
  var Page = {
    BASKET: 'basket',
    CATALOG: 'catalog'
  };

  var main = document.querySelector('.main');
  var mainBasket = document.querySelector('.main_basket');

  function toggleMainClick(element) {
    var data = element.dataset.link;
    var addedGuitars = window.popup.addedGuitars;
    var renderBasketList = window.basket.renderBasketList;

    switch (data) {
      case Page.BASKET:
        main.setAttribute('hidden', 'hidden');
        mainBasket.removeAttribute('hidden');
        renderBasketList(addedGuitars);
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

(function () {

  function disableCheckbox() {
    var guitars = [
      {
        type: 'акустическая гитара',
        value: '6,7,12,'
      },
      {
        type: 'укулеле',
        value: '4,'
      },
      {
        type: 'электрогитара',
        value: '4,6,7,'
      },
    ];

    var typeBoxes = document.querySelectorAll('#type-guitars input:checked');
    var stringsBoxes = document.querySelectorAll('#strings-guitars input');

    var strings = '';

    typeBoxes.forEach(function (type) {
      guitars.forEach(function (item) {
        if (type.value === item.type) {
          strings += item.value;
        }
      });
    });

    stringsBoxes.forEach(function (box) {
      if (typeBoxes.length) {
        box.disabled = true;

      } else {
        box.disabled = false;
      }
    });

    stringsBoxes.forEach(function (box) {
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

(function () {
  var Slicer = {
    FROM: 0,
    TO: 3
  };

  var Checking = {
    TYPE: 'type',
    STRINGS: 'strings'
  };

  var filter = document.querySelector('#filter');

  function changePrices(list) {
    var firstPrice = filter.querySelector('.filter__item-fields').firstElementChild;
    var lastPrice = filter.querySelector('.filter__item-fields').lastElementChild;

    var prices = list.map(function (item) {
      return item.price;
    });

    var maxPrice = Math.max.apply(null, prices).toString();
    var minPrice = Math.min.apply(null, prices).toString();

    lastPrice.placeholder = maxPrice.substring(maxPrice.length - Slicer.TO, Slicer.FROM) + ' ' + maxPrice.substring(maxPrice.length - Slicer.TO);
    firstPrice.placeholder = minPrice.substring(minPrice.length - Slicer.TO, Slicer.FROM) + ' ' + minPrice.substring(minPrice.length - Slicer.TO);


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

  function filterDetail(boxes, list, flag) {

    if (boxes.length) {
      return list.filter(function (item) {
        var currentItem;

        boxes.forEach(function (box) {
          if (box.value === item.type && flag === Checking.TYPE) {
            currentItem = item;
          }

          if (+box.value === item.strings && flag === Checking.STRINGS) {
            currentItem = item;
          }
        });

        return currentItem;
      });
    }

    return list;
  }


  function filterGuitars(list) {
    var checkedBoxes = filter.querySelectorAll('#type-guitars input[type="checkbox"]:checked');
    var checkedStrings = filter.querySelectorAll('#strings-guitars input[type="checkbox"]:checked');
    var newList;
    newList = filterDetail(checkedBoxes, list, 'type');
    newList = filterDetail(checkedStrings, newList, 'strings');
    newList = changePrices(newList);

    return newList;
  }

  window.filterGuitars = filterGuitars;
})();

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

(function () {
  var Escape = {
    KEY_CODE: 'Escape',
    KEY: 27
  };

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
    var linkBasket = document.querySelector('.popup__links a');
    var stayButton = document.querySelector('.popup__links button');

    if (e.currentTarget.dataset) {
      toggleMainClick(e.currentTarget);
    }

    onClosePopupClick();

    stayButton.removeEventListener('click', onClosePopupClick);
    linkBasket.removeEventListener('click', onOpenBasketClick);
  }

  function onClosePopupClick() {
    var popup = body.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__question button');


    if (popup) {
      popup.remove();
    }

    body.classList.remove('active-popup');
    closeBtn.removeEventListener('click', onClosePopupClick);
    popup.removeEventListener('click', onClosePopupClick);
    document.removeEventListener('keydown', onClosePopupKeydown);
  }

  function onClosePopupKeydown(e) {
    if (e.keyCode === Escape.KEY_CODE || e.key === Escape.KEY) {
      onClosePopupClick();
    }
  }

  function openSuccessPopup() {
    body.append(templateSuccess);
    body.classList.add('active-popup');

    var popup = body.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__question button');
    var linkBasket = popup.querySelector('.popup__links a');
    var stayButton = popup.querySelector('.popup__links button');

    closeBtn.addEventListener('click', onClosePopupClick);
    popup.addEventListener('click', onClosePopupClick);
    stayButton.addEventListener('click', onClosePopupClick);
    linkBasket.addEventListener('click', onOpenBasketClick);
    document.addEventListener('keydown', onClosePopupKeydown);
  }

  function addEventsPopup(currentGuitar) {
    var popup = document.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup__question button');
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
    var currentGuitar = guitars.find(function (guitar) {
      return guitar.id === +card.dataset.id;
    });

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

(function () {
  var AMOUNT_CARDS_ON_PAGE = 9;
  var $ = window.jQuery;
  var pages = document.querySelector('.goods__pagination');
  var header = document.querySelector('.header');

  if (!pages || !window.render || !header) {
    return;
  }

  var filter = document.querySelector('#filter');
  var linkBasket = header.querySelector('#link-basket');
  var linkCatalog = header.querySelector('#link-catalog');

  var toggleMainClick = window.toggle.toggleMainClick;
  var guitars = JSON.parse(window.server);
  var createList = window.render.createList;
  var filterGuitars = window.filterGuitars;

  function renderListGuitars() {
    $('.goods__pagination').pagination({
      dataSource: createList(filterGuitars(guitars)),
      pageSize: AMOUNT_CARDS_ON_PAGE,
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

(function () {
  var Sorting = {
    PRICE: 'price',
    POPULAR: 'popular',
    TO_MORE: 'toMore',
    TO_LESS: 'toLess'
  };

  var sortButtons = document.querySelector('.goods__sort');

  if (!sortButtons || !window.main) {
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
    if (activeType === Sorting.PRICE && !activeArrow || activeType === Sorting.PRICE && activeArrow === Sorting.TO_MORE) {
      list.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (activeType === Sorting.PRICE && activeArrow === Sorting.TO_LESS) {
      list.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    if (activeType === Sorting.POPULAR && !activeArrow || activeType === Sorting.POPULAR && activeArrow === Sorting.TO_MORE) {
      list.sort(function (a, b) {
        return a.popular - b.popular;
      });
    }

    if (activeType === Sorting.POPULAR && activeArrow === Sorting.TO_LESS) {
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
