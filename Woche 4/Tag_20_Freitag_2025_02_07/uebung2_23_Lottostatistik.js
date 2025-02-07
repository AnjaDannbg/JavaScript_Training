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

// pick Lotto number
const pickLottoNumber = () => {
  const allLottoNumbers = returnAllLottoNumbers();
  return allLottoNumbers.splice(generateRandomNumber(0, allLottoNumbers.length), 1).toString();
}

// count right Lotto Numbers
const countRightLottoNumbers = (lottoNumbers, pickedLottoNumbers) => {
  let count = 0;
  for(let i=0; i < lottoNumbers.length; i++) {
    if(lottoNumbers.includes(pickedLottoNumbers[i]))
    count++;
  }
  return count;
}

// print Lotto statistic
const printLottoStatistic = (turns, pickedLottoNumbers) => {
  let lottoNumbers;
  console.log('turns:', turns);

  let zeroRightNumbers = 0;
  let oneRightNumbers = 0;
  let twoRightNumbers = 0;
  let threeRightNumbers = 0;
  let fourRightNumbers = 0;
  let fiveRightNumbers = 0;
  let sixRightNumbers = 0;

  let rightNumberCount;

  for(let i=0; i < turns; i++) {
    resetLottoNumbers();
    lottoNumbers = times(6, pickLottoNumber);
    rightNumberCount =  countRightLottoNumbers(lottoNumbers, pickedLottoNumbers);
    // console.log('Right numbers:', rightNumberCount);
    // console.log('My Lotto numbers:', pickedLottoNumbers);
    // console.log('Lotto numbers:', lottoNumbers);
    // console.log('----------------');

    if(rightNumberCount === 0) zeroRightNumbers++;
    if(rightNumberCount === 1) oneRightNumbers++;
    if(rightNumberCount === 2) twoRightNumbers++;
    if(rightNumberCount === 3) threeRightNumbers++;
    if(rightNumberCount === 4) fourRightNumbers++;
    if(rightNumberCount === 5) fiveRightNumbers++;
    if(rightNumberCount === 6) sixRightNumbers++;
  }

  //Output:
  console.log('Zero right numbers:', zeroRightNumbers);
  console.log('One right number:', oneRightNumbers);
  console.log('Two right numbers:', twoRightNumbers);
  console.log('Three right numbers:', threeRightNumbers);
  console.log('Four right numbers:', fourRightNumbers);
  console.log('Five right numbers:', fiveRightNumbers);
  console.log('Six right numbers:', sixRightNumbers);
}


// console.log(times(6, pickLottoNumber));
printLottoStatistic(10000, times(6, pickLottoNumber));