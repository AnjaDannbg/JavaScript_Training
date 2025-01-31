// Quersumme berechnen:

'use strict';

let numbers = [99, 5, 8, 12, 111, 123];

let digitSum = (numberInput) => {
  return numberInput.toString().split('').map((n) => Number(n)).reduce((a, b) => a+b, 0);
}

let byDigitSum = (a, b) => digitSum(a) < digitSum(b) ? -1: 1;

console.log(numbers.sort(byDigitSum)); // => [ 12, 111, 5, 123, 8, 99 ]