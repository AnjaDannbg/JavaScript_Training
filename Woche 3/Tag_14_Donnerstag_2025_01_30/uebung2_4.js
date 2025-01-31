'use strict';

let filterfnk = (element) => element.startsWith('F');

let startsWithLetterF = (elements) => {
  return elements.filter(filterfnk);
};

let boardgames = [
  'Caverna',
  'Puerto Rico',
  'Agricola',
  'Black Friday',
  'Funny Friends',
  'Fauna',
  'Eclipse',
  'Codenames',
  'Dominion',
  'Fairy Tale',
  'Fast Flowing Forest Fellers',
  'Fearsome Floors'
];
let boardgamesStartingWithF = startsWithLetterF(boardgames);/* ??? */

console.log(boardgamesStartingWithF); // => [ 'Funny Friends', 'Fauna', 'Fairy Tale', 'Fast Flowing Forest Fellers', 'Fearsome Floors']
