'use strict';

function addition(num1, num2) {
    return num1 + num2
}
function subtraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    if (num2 === 0) {
        alert("При делении возникла ошибка. Подробности см. в консоли")
        throw new Error("ай ай ай - на ноль делить нельзя")
    }
    return num1 / num2
}

/**
 * Простенький калькулятор, получаетна вход два числа и опереацию над ними
 * @param {Number} первое число 
 * @param {Number} второе число 
 * @param {String} "+","-", "*","/" 
 * @returns результат арифметической операции
 * @throws {Error} выбрасывает ошибку, если указана некорректнпя операция
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            alert(`Сумма чисел ${arg1} и ${arg2}: ${addition(arg1, arg2)}`);
            return addition(arg1, arg2);
        case "-":
            alert(`Разность чисел ${arg1} и ${arg2}: ${subtraction(arg1, arg2)}`);
            return subtraction(arg1, arg2);
        case "*":
            alert(`Произведение чисел ${arg1} и ${arg2}: ${multiplication(arg1, arg2)}`);
            return multiplication(arg1, arg2);
        case "/":
            alert(`Деление чисел ${arg1} и ${arg2}: ${division(arg1, arg2)}`);
            return division(arg1, arg2);
        default:
            alert("При выполненнии программы возникла ошибка. Подробности в консоли")
            throw new Error("Неизвестная операция:" + operation)
    }

}

let number1 = parseInt(prompt("Введите первое число:"));
let number2 = parseInt(prompt("Введите второе число:"));
let operation = prompt('Укажите операцию: +, -, *, /:')

mathOperation(number1, number2, operation)
