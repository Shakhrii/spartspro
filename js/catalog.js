import { cards } from "../cards.js";

const getCard = (card) => {
  const cardItem = document.createElement('li');
  cardItem.classList.add('catalog-list__item');
  
  const img = document.createElement('img');
  img.classList.add('item-img');
  img.src = card.image;
  img.alt = card.alt;

  const content = document.createElement('div');
  content.classList.add('item-content');

  const title = document.createElement('p');
  title.classList.add('item-title');
  title.innerText = card.title;

  const contentBottom = document.createElement('content-bottom');
  contentBottom.classList.add('content-bottom');

  const instock = document.createElement('div');
  instock.classList.add('instock');

  let instockMarkerPath = '';
  let instockTextValue = '';

  if (card.amount > 0) {
    instockMarkerPath = '../../assets/images/instock.svg';
    instockTextValue = `В наличии ${card.amount} м.`;
  } else {
    instockMarkerPath = '../../assets/images/out-of-stock.svg';
    instockTextValue = 'Под заказ';
  }

  const instockImg = document.createElement('img');
  instockImg.classList.add('instock-img');
  instockImg.src = instockMarkerPath;
  instockImg.alt = 'instock marker';

  const instockTxt = document.createElement('span');
  instockTxt.classList.add('instock-txt'); 
  instockTxt.innerText = instockTextValue;

  const itemBtn = document.createElement('button');
  itemBtn.classList.add('btn');
  itemBtn.innerText = 'Подробнее';

  cardItem.appendChild(img);
  cardItem.appendChild(content);

  content.appendChild(title);
  content.appendChild(contentBottom);

  contentBottom.appendChild(instock);
  contentBottom.appendChild(itemBtn);

  instock.appendChild(instockImg);
  instock.appendChild(instockTxt);

  return cardItem;
}

const catalogList = document.querySelector('.catalog-list');
console.log(catalogList);

cards.forEach(card => {
  catalogList.appendChild(getCard(card));
});