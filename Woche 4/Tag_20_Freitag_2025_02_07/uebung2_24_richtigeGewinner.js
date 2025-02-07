'use strict';

const winnerNames = [
  'Heribert',
  'Friedlinde',
  'Tusnelda',
  'Oswine',
  'Ladislaus',
  'Anne',
  'Vivien'
];

const count = [
  'st',
  'nd',
  'rd'
]

const withPlace = (winners, count) =>
  winners.map((winner, i) => (i < 3 ? `${i + 1}${count[i]} Winner : ${winner}` : winner));

console.log(withPlace(winnerNames, count));