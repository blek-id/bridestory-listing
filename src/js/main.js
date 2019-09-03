import json from '../api/data.json';

const ranges = [
  { divider: 1e3, suffix: 'K' },
  { divider: 1e6, suffix: 'M' },
]

function formatNumber(number) {
  for (let i = 0; i < ranges.length; i++) {
    if (number >= ranges[i].divider) {
      let shortenedNumber = number / ranges[i].divider
      return shortenedNumber.toFixed(1).toString() + ranges[i].suffix;
    }
  }
  return number.toString();
}

function loadContent() {

  if ('content' in document.createElement('template')) {
    const cardItem = document.querySelector('template').content;

    for (let i = 0; i < json.length; i++) {
      let currentCard = cardItem.cloneNode(true);

      currentCard.querySelector(".card__image img").src = `images/${json[i].image}`

      currentCard.querySelector(".card__text--header").innerHTML = json[i].title;

      let bannerElement = currentCard.querySelector(".banner");
      if (json[i].discount === 0) {
        bannerElement.remove();

        currentCard.querySelector(".card__text--subheader").innerHTML = `${json[i].currency} ${json[i].price.toLocaleString('id-ID')}`;
      } else {
        currentCard.querySelector(".banner__text").innerHTML = `Discount ${json[i].discount.toString()}%`;

        const originalPriceText = (json[i].currency + ' ' + json[i].price.toLocaleString('id-ID'));
        const discountPrice = json[i].price * (100 - json[i].discount) / 100;
        const discountPriceText = json[i].currency + ' ' + discountPrice.toLocaleString('id-ID');

        currentCard.querySelector(".card__text--before-discount").innerHTML = `${originalPriceText}`;
        currentCard.querySelector(".card__text--after-discount").innerHTML = `${discountPriceText}`;

      }

      currentCard.querySelector("#views").innerHTML = `${formatNumber(json[i].views)} Views`;
      currentCard.querySelector("#likes").innerHTML = `${formatNumber(json[i].likes)} Likes`;
      currentCard.querySelector("#sold").innerHTML = `${formatNumber(json[i].sold)} Sold`;

      document.querySelector(".listing").append(currentCard);
    }

  } else {
    console.warn('HTML template element is not supported on your browser')
  }
}

loadContent();