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

const generateRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

let allLottoNumbers = range(1, 50, 1); // 1 bis 49
const returnAllLottoNumbers = () => allLottoNumbers;
const resetLottoNumbers = () => {
  allLottoNumbers = range(1, 50, 1);
}

// -------------- my code :

const countriesWithCapital = [
  ['UK', 'London'],
  ['France', 'Paris'],
  ['Germany', 'Berlin'],
  ['Switzerland', 'Bern'],
  ['Austria', 'Vienna'],
  ['Russia', 'Moscow']
];

const returnCountriesWithCapital = () => countriesWithCapital;

const capitalOf = (country) => {
  const countriesWithCapital = returnCountriesWithCapital();
  let capital;
  for(let i=0; i<countriesWithCapital.length; i++) {
    if(countriesWithCapital[i][0] === country) {
      capital = countriesWithCapital[i][1];
    }
  }
  return capital;
};

console.log(capitalOf('Germany'));