'use strict';

// sind manche Zahlen gerade?
console.log([1, 2, 3].some((element) => element % 2 == 0));

// sind alle Zahlen gerade?
console.log([1, 2, 3].every((element) => element % 2 == 0));

console.log(['b', 'jens', 'n'].some((text) => {
  console.log(text, text.indexOf('a'))
  return text.indexOf('a') >= 0;
}))