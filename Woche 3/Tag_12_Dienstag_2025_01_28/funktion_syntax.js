'use strict';
const vorname = 'Jens'; //globale Variable

// parametervariable wird ohne let und const notiert

//Pfeilfunktion =>
let berechneSumme = (a, b) => {
  let summe = a + b;
  return summe;
};

// alte Funktionsschreibweise
function berechneSummeAlt(a, b) {
  let summe = a + b;
  return summe;
}

let inkrementiere = a => a++; // Klammern () weglassbar, wenn nur ein Parameter 
let berechneSummeEinzeiler = (a, b) => a+b; //return weglassbar, wenn Einzeiler