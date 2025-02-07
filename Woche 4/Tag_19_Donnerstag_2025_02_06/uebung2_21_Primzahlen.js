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

// --------------- my code ---------------

// const allNumbers = range(1, 98);
// console.log(allNumbers);

// check if prime number
const isPrimeNumber = (myNumber) => {
  if(myNumber === 0 || myNumber === 1) return false;

  // Generate all Previous Numbers starting with 2
  const allPreviousNumbers = range(2, myNumber);

  for(let i= 0; i<allPreviousNumbers.length; i++) {
    // Prime Numbers can only be divided by 1 or themselves
    // return Number n if n cannot be divided by any number in allPreviousNumbers
    if(myNumber % allPreviousNumbers[i] === 0) {
      return false;
    }
  }
  return true;
}

// Filter for prime numbers
const allPrimeNumbers = (allNumbers) => {
  return allNumbers.filter((n) => isPrimeNumber(n));
}

// try it out!
console.log(allPrimeNumbers(range(1, 98)));
