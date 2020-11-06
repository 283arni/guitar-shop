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
