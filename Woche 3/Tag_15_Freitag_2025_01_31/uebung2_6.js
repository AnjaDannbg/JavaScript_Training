'use strict';

let result;
let results;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = 'Hi this is a short text';
let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

//odd numbers
results = inputs.filter((n) => n % 2 !== 0);
console.log(results) // => [ 1, 3, 5, 7, 9 ]

//sum
result = inputs.reduce((a, b) => a+b, 0); // with initial value 0
console.log(result); // => 55

//product
result = inputs.reduce((a, b) => a*b, 1); // with initial value 1
console.log(result); // => 3628800

//longest word length
result = text.split(' ').sort((a, b) => b.length - a.length)[0].length;
console.log(result); // => 5

//longest word length
result = text.split(' ').map((n) => n.length).sort((a, b) => b-a)[0];
console.log(result); // => 5

//longest word
result = text.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(result); // => short

//avg word length (Durchschnittliche Wortlänge)
result = text.split(' ').map((n) => n.length).reduce((a, b) => a+b) / text.split(' ').length;
console.log(result); // => 3

//avg word length (Durchschnittliche Wortlänge)
//---- Funktioniert nicht, weil beim zweiten durchlauf der Datentyp von b number ist. 
// result = text.split(' ').reduce((a, b) => a.length+b.length);
// console.log(result); // => 3

//sort by 3rd letter
results = names.sort(
  (a, b) => a.charAt(2) > b.charAt(2) ? 1 : -1
);
console.log(results); // => [ 'Ladislaus', 'Friedlinde', 'Heribert', 'Tusnelda', 'Oswine' ]

// Are there names with more than 8 letters?
result = names.some((name) => name.length > 8);
console.log(result); // => true

// Has every name at least 8 letters?
result = names.every((name) => name.length >= 8)
console.log(result); // => false

// What is the lowest value from the inputs?
result = inputs.sort((a, b) => a-b)[0];
console.log(result); // => 1