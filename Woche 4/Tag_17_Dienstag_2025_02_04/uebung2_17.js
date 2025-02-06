'use strict';

const times = (n, fnk) => {
  const results = Array(n).fill(0);
  results.forEach((x, index, results) => (results[index] = fnk(index)));
  return results;
};

// fkn = () => '*'
const rectangle = (width, height, character) => times(height, () => times(width, () => character).join('')).join('\n');

console.log(rectangle(30, 10,'*'));
