'use strict';

const rangeFromStartToEnd = (start, end, step = 1) => {
  const length = Math.max(Math.ceil((end - start) / step), 0);
  const results = Array(length).fill(0);
  results.forEach((x, i, r) => (r[i] = start + i * step));
  return results;
};

const range = (startOrEnd, end, step) =>
  end
      ? rangeFromStartToEnd(startOrEnd, end, step)
      : rangeFromStartToEnd(0, startOrEnd);

// ------ Examples:

// console.log(range(9)); // => [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

// console.log(range(5, 9)); // => [ 5, 6, 7, 8 ]

// console.log(range(3, 9, 2)); // => [ 3, 5, 7 ]

// ------ my code:

// console.log(range(70, 131).join('\n')); // von 70 bis 130 zählen

// console.log(range(20, 201).reverse().join('\n')); // von 200 bis 20 zählen 
// console.log(range(200, 19, -1).join('\n')); // von 200 bis 20 zählen 

console.log(range(10, 51, 2).join('\n')); // alle geraden Zahlen von 10 bis 50