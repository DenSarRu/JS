'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let divText = document.querySelector('.text');
let siteLinks = document.querySelectorAll('.nav-link');
let currentLinkId = null;

siteLinks.forEach(function (linkEl) {
    if (linkEl.className.includes('active')) {
        currentLinkId = linkEl;
    };
    linkEl.addEventListener('click', clickHandler);
});


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeActiveClass(event);
    changeText(event);
};

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    // document.querySelector('.active').classList.remove('active'); //подсмотрено у преподавателя
    currentLinkId.classList.remove('active');
    event.target.classList.add('active');
    currentLinkId = event.target;
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let linkNumber = event.target.textContent;
    switch (linkNumber) {
        case 'Link 1':
            divText.innerText = texts.text1;
            break;
        case 'Link 2':
            divText.innerText = texts.text2;
            break;
        case 'Link 3':
            divText.innerText = texts.text3;
            break;
    }

}

// Задание. Нужно сделать, чтобы при кликах по .nav-link:
// 1. Класс active назначался тому .nav-link, по которому кликнули, а у предыдущего
// .nav-link, чтобы этот класс убирался.
// 2. В зависимости от того по какому .nav-link кликнули нужно чтобы менялся текст
// в .text, соответствующие тексты вы найдете в app.js