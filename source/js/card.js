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
      this.cardFullPrice = this.cloneCard.querySelector('.basket__all-price span');

      this.cardTitle.textContent = 'ГИТАРА ' + item.name.toUpperCase();
      this.cardCode.textContent = 'Артикул: ' + item.code;
      this.cardInfo.textContent = item.type + ', ' + item.strings + ' струнная';
      this.cardFullPrice.innerHTML = breakPrice(item.price) + ' &#8381;';

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
