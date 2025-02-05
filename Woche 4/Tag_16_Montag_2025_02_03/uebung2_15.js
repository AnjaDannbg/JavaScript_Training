'use strict';

let customersOnline1 = [
  'Heribert'
];

let customersOnline2 = [
  'Friedlinde',
  'Goldy',
  'Heribert',
  'Ladislaus',
  'Oswine',
  'Tusnelda',
];

let customersOnline3 = [
  'Heribert',
  'Friedlinde',
  'Tusnelda',
  'Oswine',
  'Ladislaus',
  'Goldy',
];

const isSorted = (list) => {
  if(list.length === 1) {
    return true;
  }
  if(list[0] > list[1]) {
    return false;
  } else {
    return isSorted(list.slice(1));
  }
}

console.log(isSorted(customersOnline1)); // => true
console.log(isSorted(customersOnline2)); // => true
console.log(isSorted(customersOnline3)); // => false