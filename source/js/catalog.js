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
