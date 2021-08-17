'use strict';

/**
 * Функция выполняет сложение двух чисел
 * @param {Number} первое слагаемое 
 * @param {Number} второе слагаемое 
 * @returns {Number} сумма
 */
function addition(num1, num2) {
    return num1 + num2
}

/**
 * Функция выполняет вычитание двух чисел
 * @param {Number} уменьшаемое 
 * @param {Number} вычитаемое
 * @returns {Number} разность
 */
function subtraction(num1, num2) {
    return num1 - num2
}

/**
 * Функция выполняет умножение двух чисел
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number}
 */
function multiplication(num1, num2) {
    return num1 * num2
}

/**
 * Функция выполняет деление двух чисел
 * @param {Number} делимое 
 * @param {Number} делитель
 * @returns {Number} частное
 * @throws {Error} если делитель равен нулю, то будет выброшена ошибка
 */
function division(num1, num2) {
    if (num2 === 0) {
        alert("При делении возникла ошибка. Подробности см. в консоли")
        throw new Error("ай ай ай - на ноль делить нельзя")
    }
    return num1 / num2
}

let number1 = parseInt(prompt("Введите первое число:"));
let number2 = parseInt(prompt("Введите второе число:"));

alert(`Сумма чисел ${number1} и ${number2}: ${addition(number1, number2)}`);
alert(`Разность чисел ${number1} и ${number2}: ${subtraction(number1, number2)}`);
alert(`Произведение чисел ${number1} и ${number2}: ${multiplication(number1, number2)}`);
alert(`Деление чисел ${number1} и ${number2}: ${division(number1, number2)}`)

