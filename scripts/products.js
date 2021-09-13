'use strict';

const siteProductsCards = document.querySelectorAll('.featuredItem');
const products = [];
let counter = 0;

/**
 * Функция принимает объект - карточку с товаром с сайта и получает из неё данные о товаре - наименование и цену.
 * @param {product} product объект с информацией о продукте
 */
function productCardParsing(card) {
    addMeaningToCardButton(card);
    products[counter] = {
        id: counter,
        name: card.childNodes[3].children[0].innerText,
        price: +card.childNodes[3].children[2].innerText.slice(1),
    };
    counter++;
};

/**
 * Функция принимает объект - карточку с товаром с сайта и в объект button добавляет id товара и назначает обработку клика.
 * @param {product} product объект с информацией о продукте
 */
function addMeaningToCardButton(card) {
    const cardButton = card.querySelector('button');
    cardButton.setAttribute('data-productId', `${counter}`);
    cardButton.addEventListener('click', add2BasketProductHandler);
};

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function add2BasketProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

siteProductsCards.forEach(productCardParsing);
