'use strict'

// line
const line = (length, character) => times(length, () => character).join('');

// times
const times = (n, fn) => {
  let results = [];
  Array(n).fill(0).forEach(a => results.push(fn()));
  return results;
}

// rangeFromStartToEnd 
const rangeFromStartToEnd = (start, end, step = 1) => {
  const length = Math.max(Math.ceil((end - start) / step), 0);
  const results = Array(length).fill(0);
  results.forEach((x, i, r) => (r[i] = start + i * step));
  return results;
};

// range
const range = (startOrEnd, end, step) =>
  end
      ? rangeFromStartToEnd(startOrEnd, end, step)
      : rangeFromStartToEnd(0, startOrEnd);



// -------------- Buchstabendieb --------------

const letterThief = (word) => {
  let wordArray = times(word.length, () => word);
  
  //use map
  return wordArray.map((x, i, a) => a[i] = x.substring(0, x.length - 1 - i));
}

console.log(letterThief('dance'));  // => ['danc', 'dan', 'da', 'd', '']