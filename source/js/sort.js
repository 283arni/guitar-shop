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
