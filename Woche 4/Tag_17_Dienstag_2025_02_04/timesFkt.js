'use strict';

const line = (length, character) => times(length, () => character).join('');

const times = (n, fn) => {
  let results = [];
  Array(n).fill(0).forEach(a => results.push(fn()));
  return results;
}

line(10, '*');