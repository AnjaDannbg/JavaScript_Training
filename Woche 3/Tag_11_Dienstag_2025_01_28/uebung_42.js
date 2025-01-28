'use strict';

const LINE_46 = [
    'Nordostbahnhof',
    'Theresienkrankenhaus',
    'Teutoburger Str.',
    'Leipziger Str.',
    'Dresdener Str.',
    'Spitalhof',
    'Hubertusstr.',
    'Tattersall',
    'Martha-Maria-Krkhs.',
];

// let zielPos = LINE_46.indexOf('Hubertusstr.');

// let haltestellen = LINE_46.slice(0, zielPos+1);
// console.log(haltestellen);

let anfang = 'Leipziger Str.';
let ziel = 'Tattersall';

let deineHaltestellen = (anfang, ziel) => {
  let anfangPos = LINE_46.indexOf(anfang);
  let zielPos = LINE_46.indexOf(ziel);
  let haltestellen = [];
  if (zielPos != -1 && anfangPos != -1) {
    haltestellen = LINE_46.slice(0, zielPos + 1).slice(anfangPos);
  }
  return haltestellen;
}

console.log(deineHaltestellen(anfang, ziel));