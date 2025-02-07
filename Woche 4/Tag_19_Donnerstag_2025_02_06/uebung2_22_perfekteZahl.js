'use strict';

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

const isPrimeNumber = (myNumber) => {
  if(myNumber === 0 || myNumber === 1) return false;
  const allPreviousNumbers = range(2, myNumber);
  for(let i= 0; i<allPreviousNumbers.length; i++) {
    if(myNumber % allPreviousNumbers[i] === 0) {
      return false;
    }
  }
  return true;
}

// return cross sum
const crossSum = (myNumber) => {
  const allDigits = String(myNumber).split('');
  return allDigits.reduce((a, b) => Number(a) + Number(b));
}

// Filter for prime numbers
const allPrimeNumbers = (allNumbers) => {
  return allNumbers.filter((n) => isPrimeNumber(n));
}

// -------------------- my code --------------------

// check for perfect number
// is perfect number, if number = cross sum of number
const isPerfectNumber = (myNumber) => {
  console.log(realDividers(myNumber));
  console.log(realDividers(myNumber).reduce((a, b) => Number(a)+Number(b)));
  if(myNumber === realDividers(myNumber).reduce((a, b) => Number(a)+Number(b))) {
    return true;
  }
  return false;
}

const realDividers = (myNumber) => {
  const realDividers = [];
  // if myNumber can be devided my i, i is a realDivider
  for(let i=1; i<myNumber; i++) {
    if(myNumber % i === 0) realDividers.push(i);
  }
  // return Array with real Dividers
  return realDividers;
}

console.log(isPerfectNumber(28));