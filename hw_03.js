'use strict';
let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));
if (a >= 0 && b >= 0) {
    alert('Разность чисел: ' + (a - b))
} else if (a < 0 && b < 0) {
    alert('Произведение чисел: ' + (a * b))
} else {
    alert('Сумма чисел: ' + (a + b))
}