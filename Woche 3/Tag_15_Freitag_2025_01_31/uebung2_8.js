// Quersumme berechnen:

'use strict';

let input = 74526456;

let digitSum = (numberInput) => {
  return numberInput.toString().split('').map((n) => Number(n)).reduce((a, b) => a+b, 0);
}

console.log(digitSum(input));