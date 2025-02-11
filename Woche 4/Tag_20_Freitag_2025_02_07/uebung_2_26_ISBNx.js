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
  let checksum = 10 - checksumDigit(possibleISBN);
  // if(possibleISBN[possibleISBN.length] === checksum) {
  //   return checksum;
  // }
  return checksum === 10 ? 0 : checksum;
}

const checksumDigit = (possibleISBN) =>
  possibleISBN.reduce((a, b, i) => {
    let ISBNnumber = Number(a) + Number(b)*multiplyerByPosition(i)
    console.log('ISBNnumber:', ISBNnumber);
    console.log('a:', a);
    console.log('b:', b);
    console.log('i:', i);
    console.log('--------');
    ISBNnumber.toString().charAt(ISBNnumber.length - 1);
    return Number(ISBNnumber);
  });
   

const multiplyerByPosition = (position) => position % 2 === 0 ? 1 : 3;

const userInputISBN = '978-3-86680-192';

console.log(checkIfISBN(userInputISBN));


