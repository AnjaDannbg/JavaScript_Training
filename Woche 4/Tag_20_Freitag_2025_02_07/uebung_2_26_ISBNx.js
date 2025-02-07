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


// -------------- my code :

const removeHyphens = (text) => {
  return text.split('-').join('');
}

const checkIfISBN = (text) => {
  let possibleISBN = removeHyphens(text).split('');
  // add and multiply
  let checksum = checksumDigit(possibleISBN);
  // if(possibleISBN[possibleISBN.length] === checksum) {
  //   return checksum;
  // }
  return checksum;
}

const checksumDigit = (possibleISBN) =>
  possibleISBN.reduce((a, b, i) => {
    console.log('a:', a);
    console.log('b:', b);
    console.log('i:', i);
    console.log('--------');
    return Number(a) + Number(b)*multiplyerByPosition(i)
  });
   

const multiplyerByPosition = (position) => position % 2 === 0 ? 1 : 3;

const userInputISBN = '9783985952762';

console.log(checkIfISBN(userInputISBN));


