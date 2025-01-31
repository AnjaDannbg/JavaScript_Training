'use strict';

let isFerdinandsBoardgame = (boardgame) => boardgame.includes(' ') && boardgame.startsWith('F');

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

let ferdinandsBoardgames = boardgames.filter(isFerdinandsBoardgame);

console.log(ferdinandsBoardgames); // => [ 'Funny Friends', 'Fast Flowing Forest Fellers', 'Fearsome Floors' ]