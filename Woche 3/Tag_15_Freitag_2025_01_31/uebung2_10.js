'use strict';

let isFerdinandsBoardgame = (boardgame) => {
  // let boardgameName = boardgame.split(' ');
  return boardgame.split(' ').every((name) => name.startsWith('F')) && boardgame.includes(' ');
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

let ferdinandsBoardgames = boardgames.filter(isFerdinandsBoardgame);

console.log(ferdinandsBoardgames); // => [ 'Funny Friends', 'Fast Flowing Forest Fellers', 'Fearsome Floors' ]