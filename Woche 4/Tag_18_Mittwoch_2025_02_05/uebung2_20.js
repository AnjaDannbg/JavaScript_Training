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


// 1. function declaration:
// Lotto with repeating numbers:
const generateLottoNumber = () => Math.floor(Math.random() * 49) + 1;
// 2. function call:
// let lottoNumbers = times(6, generateLottoNumber);
// console.log(lottoNumbers);

// -------- keine wiederholenden Nummern ----------------

const generateRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

// generate all Lotto numbers:
const allLottoNumbers = range(1, 50, 1); // 1 bis 49
// console.log('all Lotto numbers:', allLottoNumbers);

const returnAllLottoNumbers = () => allLottoNumbers;

const pickLottoNumber = () => {
  //choose and remove LottoNumber from allLottoNumbers
  const allLottoNumbers = returnAllLottoNumbers();
  const LottoNumber = allLottoNumbers.splice(generateRandomNumber(0, allLottoNumbers.length), 1).toString();
  console.log(LottoNumber, 'was removed');
  
  //return LottoNumber
  return LottoNumber;
}

// for(let i= 0; i < 50; i++) {
//   console.log(pickLottoNumber(allLottoNumbers));
//   console.log(allLottoNumbers);
// }

// Lottozahlen ziehen:

console.log(times(6, pickLottoNumber));

