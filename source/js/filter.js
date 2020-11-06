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
