'use strict';

let addiere = (a, b) => a + b;
let malRechnen = (a, b) => a * b;

// let tueEtwas = (nr, txt, bo, arr, fkt) => {

// }

// tueEtwas(2, 'a', true, [1,2,4]);

let berechneEtwas = (a, b, fkt) => {
  return fkt(a, b);
}

// Aufruf

console.log(berechneEtwas(1, 2, addiere));
console.log(berechneEtwas(3, 4, (a, b)=>a-b));