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
