'use strict';

(function () {

  var Enter = {
    KEY: 'Enter',
    KEY_CODE: 13
  };

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
  var allCheckboxes = filter.querySelectorAll('label div');
  var allLabels = filter.querySelectorAll('label');


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

  allCheckboxes.forEach(function (item, i) {
    item.addEventListener('keydown', function (e) {
      if (e.key === Enter.KEY || e.keyCode === Enter.KEY_CODE) {
        allLabels[i].click();
      }
    });
  });

  renderListGuitars();

  window.main = {
    renderListGuitars: renderListGuitars,
    guitars: guitars
  };
})();
