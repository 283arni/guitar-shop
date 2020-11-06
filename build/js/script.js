'use strict';

var Slicer = {
  FROM: 0,
  TO: 3
};

(function () {
  function breakPrice(price) {
    var priceString = price;

    if (!isNaN(priceString)) {
      priceString = price.toString();
    }

    return priceString.substring(priceString.length - Slicer.TO, Slicer.FROM) + ' ' + priceString.substring(priceString.length - Slicer.TO);
  }

  window.utils = {
    breakPrice: breakPrice
  };
})();

'use strict';

(function () {
  window.server = '[{"id": 1, "image": "electro-2", "code": "SO757575","name": "Честер Bass","type": "электрогитара","popular": 15,"strings": 7,"price": 17500},{"id": 2, "image": "electro-1", "code": "TK129049","name": "СURT Z300","type": "электрогитара","popular": 9,"strings": 7,"price": 29500},{"id": 3, "image": "ukulele", "code": "RO111111","name": "Roman LX","type": "укулеле","popular": 21,"strings": 4,"price": 6800},{"id": 4, "image": "electro-3", "code": "TK436457","name": "СURT T300","type": "электрогитара","popular": 15,"strings": 6,"price": 30000},{"id": 5, "image": "acoustic", "code": "DI192138","name": "Dania Super","type": "акустическая гитара","popular": 5,"strings": 7,"price": 3500},{"id": 6, "image": "electro-4", "code": "SO934345","name": "Честер WX ","type": "электрогитара","popular": 17,"strings": 6,"price": 15300},{"id": 7,"image": "ukulele","code": "DI082347","name": "Dania VX","type": "укулеле","popular": 5,"strings": 4,"price": 2200},{"id": 8,"image": "electro-1","code": "SO135646","name": "Честер Plus ","type": "электрогитара","popular": 27,"strings": 4,"price": 30000},{"id": 9,"image": "acoustic","code": "VO154751","name": "Виолана 300","type": "акустическая гитара","popular": 3,"strings": 7,"price": 1700},{"id": 10,"image": "electro-2","code": "TK244556","name": "СURT Clasic","type": "электрогитара","popular": 20,"strings": 4,"price": 23000},{"id": 11,"image": "electro-2","code": "TK134663","name": "СURT Z250","type": "электрогитара","popular": 19,"strings": 4,"price": 18700},{"id": 12,"image": "electro-3","code": "SO123212","name": "Честер 7X","type": "электрогитара","popular": 30,"strings": 7,"price": 35000},{"id": 13,"image": "electro-3","code": "SO123234","name": "Честер 6V","type": "электрогитара","popular": 28,"strings": 6,"price": 14900},{"id": 14,"image": "acoustic","code": "VO519510","name": "Виолана Mix","type": "акустическая гитара","popular": 7,"strings": 6,"price": 7600},{"id": 15,"image": "acoustic","code": "VO457369","name": "Виолана 250x","type": "акустическая гитара","popular": 19,"strings": 6,"price": 6500},{"id": 16,"image": "acoustic","code": "FB625903","name": "Фабио Лайт","type": "акустическая гитара","popular": 26,"strings": 7,"price": 12000},{"id": 17,"image": "acoustic","code": "FB576948","name": "Фабио L100","type": "акустическая гитара","popular": 31,"strings": 7,"price": 9900},{"id": 18,"image": "acoustic","code": "LU012032","name": "Liana Z200","type": "акустическая гитара","popular": 28,"strings": 12,"price": 8900},{"id": 19,"image": "acoustic","code": "LU546853","name": "Liana Z100","type": "акустическая гитара","popular": 34,"strings": 12,"price": 10500},{"id": 20,"image": "acoustic","code": "LU458283","name": "Liana Z300","type": "акустическая гитара","popular": 9,"strings": 6,"price": 13300},{"id": 21,"image": "ukulele","code": "RO324341","name": "Roman RX","type": "укулеле","popular": 37,"strings": 4,"price": 4800},{"id": 22,"image": "ukulele","code": "RO214235","name": "Roman TX","type": "укулеле","popular": 5,"strings": 4,"price": 1900},{"id": 23,"image": "ukulele","code": "DI132414","name": "Dania U100","type": "укулеле","popular": 23,"strings": 4,"price": 2500},{"id": 24,"image": "ukulele","code": "DI934754","name": "Dania WR","type": "укулеле","popular": 3,"strings": 4,"price": 3800},{"id": 25,"image": "ukulele","code": "DI034292","name": "Dania LE","type": "укулеле","popular": 10,"strings": 4,"price": 4100},{"id": 26,"image": "ukulele","code": "MI193214","name": "Mirana V10","type": "укулеле","popular": 14,"strings": 4,"price": 2700},{"id": 27,"image": "ukulele","code": "VO043244","name": "Виолана Mini","type": "укулеле","popular": 29,"strings": 4,"price": 6700}]';
})();

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

'use strict';

(function () {
  var breakPrice = window.utils.breakPrice;


  var Card = function (template, item) {
    this.cloneCard = template.content.querySelector('li').cloneNode(true);

    if (this.cloneCard.querySelector('.basket__item')) {
      this.cardSource = this.cloneCard.querySelector('.basket__item source');
      this.cardImg = this.cloneCard.querySelector('.basket__item img');
      this.cardTitle = this.cloneCard.querySelector('.basket__description h2');
      this.cardCode = this.cloneCard.querySelector('.basket__description div:first-of-type');
      this.cardInfo = this.cloneCard.querySelector('.basket__description div:last-of-type');
      this.cardPrice = this.cloneCard.querySelector('.basket__price span');
      this.amountCard = this.cloneCard.querySelector('.basket__buttons div');
      this.cardFullPrice = this.cloneCard.querySelector('.basket__all-price span');

      this.cardTitle.textContent = 'ГИТАРА ' + item.name.toUpperCase();
      this.cardCode.textContent = 'Артикул: ' + item.code;
      this.amountCard.textContent = item.amount;
      this.cardInfo.textContent = item.type + ', ' + item.strings + ' струнная';
      this.cardFullPrice.innerHTML = breakPrice(item.price * item.amount) + ' &#8381;';

    } else {
      this.cardSource = this.cloneCard.querySelector('source');
      this.cardImg = this.cloneCard.querySelector('img');
      this.cardPopular = this.cloneCard.querySelector('.goods__popular span');
      this.cardBlock = this.cloneCard.querySelector('.goods__price');
      this.cardName = this.cardBlock.firstElementChild;
      this.cardPrice = this.cardBlock.lastElementChild;

      this.cardPopular.textContent = item.popular;
      this.cardName.textContent = item.name;
    }

    this.cloneCard.dataset.id = item.id;
    this.cardSource.srcset = 'img/' + item.image + '.webp 1x, img/' + item.image + '@2x.webp 2x';
    this.cardImg.src = 'img/' + item.image + '.png';
    this.cardImg.srcset = 'img/' + item.image + '@2x.png 2x';
    this.cardImg.alt = item.type + ', ' + item.strings + ' струнная';
    this.cardPrice.innerHTML = breakPrice(item.price) + ' &#8381;';

    return this.cloneCard;
  };

  window.cardTemplate = {
    card: Card
  };
})();

'use strict';

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
  var breakPrice = window.utils.breakPrice;

  if (!form) {
    return;
  }

  var field = form.querySelector('.basket__field input');
  var button = form.querySelector('.basket__field button');
  var price = form.querySelector('.basket__submit span');


  function usePromoClick(promo) {
    var addPrices = window.basket.addPrices;
    var nextPrice = addPrices().toString().split(' ').join('');

    var sum = parseInt(nextPrice, 10);

    if (!sum) {
      return;
    }

    switch (promo) {
      case Promo.HIT:
        price.innerHTML = 'Всего: ' + breakPrice(Math.floor(sum * (Numerator.ONE - Numerator.TEN_PERCENT / Numerator.HUNDRED))) + ' &#8381;';
        field.value = '';
        break;
      case Promo.SUPER:
        price.innerHTML = 'Всего: ' + breakPrice(sum - Numerator.SALE) + ' &#8381;';
        field.value = '';
        break;
      case Promo.GUITAR:
        price.innerHTML = 'Всего: ' + breakPrice(Math.floor(sum * Numerator.THIRTY_PERCENT / Numerator.HUNDRED) < Numerator.MAX_SALE ? Math.floor(sum * (Numerator.ONE - Numerator.THIRTY_PERCENT / Numerator.HUNDRED)) : sum - Numerator.MAX_SALE) + ' &#8381;';
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

'use strict';

(function () {
  if (!window.basketCard) {
    return;
  }
  var body = document.querySelector('body');
  var basketList = document.querySelector('.basket ul');
  var indexGoods = document.querySelector('.header__list-icon span');

  var createBasketList = window.basketCard.createBasketList;
  var addEventsPopup = window.popupTemplate.addEventsPopup;
  var breakPrice = window.utils.breakPrice;

  function addPrices() {
    var allPrices = document.querySelectorAll('.basket__all-price span');
    var sumAllPrices = document.querySelector('.basket__submit span');

    var sum = 0;

    allPrices.forEach(function (item) {
      var nextPrice = item.textContent.split(' ').join('');
      sum += parseInt(nextPrice, 10);
    });

    sumAllPrices.innerHTML = 'Всего: ' + breakPrice(sum) + ' &#8381;';

    return sum;
  }

  function openPopupBasket(list, element) {
    var createPopupBasket = window.basketPopup.createPopupBasket;
    body.classList.add('active-popup');

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
    var nextPrice = priceOneThing.textContent.split(' ').join('');

    var price = parseInt(nextPrice, 10) * number;
    fullPrice.innerHTML = breakPrice(price) + ' &#8381';
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
        var numberBasket = +indexGoods.textContent;

        if (number <= MIN_AMOUNT) {
          openPopupBasket(list, item);
          return;
        }

        indexGoods.textContent = --numberBasket;
        amountGuitars.textContent = --number;
        countAmountGuitars(item, number);
      });

      plusButton.addEventListener('click', function () {
        var number = +amountGuitars.textContent;
        var numberBasket = +indexGoods.textContent;

        indexGoods.textContent = ++numberBasket;
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

'use strict';
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

'use strict';

(function () {
  var Checking = {
    TYPE: 'type',
    STRINGS: 'strings'
  };

  var filter = document.querySelector('#filter');
  var breakPrice = window.utils.breakPrice;

  function changePrices(list) {
    var firstPrice = filter.querySelector('.filter__item-fields').firstElementChild;
    var lastPrice = filter.querySelector('.filter__item-fields').lastElementChild;

    var prices = list.map(function (item) {
      return item.price;
    });

    var maxPrice = Math.max.apply(null, prices).toString();
    var minPrice = Math.min.apply(null, prices).toString();

    lastPrice.placeholder = breakPrice(maxPrice);
    firstPrice.placeholder = breakPrice(minPrice);

    if ((+firstPrice.value < +minPrice || firstPrice.value < 0) && firstPrice.value) {
      firstPrice.value = minPrice;
    }

    if ((+lastPrice.value > +maxPrice || +lastPrice.value < 0) && lastPrice.value) {
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

'use strict';

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

'use strict';

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
