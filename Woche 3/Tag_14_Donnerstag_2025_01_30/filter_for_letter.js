'use strict';

let startsWithLetterX = (elements, letter) => {
  return elements.filter((e) => e.startsWith(letter));
}

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
let boardgamesStartingWithX = startsWithLetterX(boardgames, 'C');

console.log(boardgamesStartingWithX); // => [ 'Funny Friends', 'Fauna', 'Fairy Tale', 'Fast Flowing Forest Fellers', 'Fearsome Floors']
