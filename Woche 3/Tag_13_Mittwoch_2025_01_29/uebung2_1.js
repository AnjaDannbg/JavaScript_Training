'use strict';

'use strict';

let compareLength = (a, b) => {
  if(a.length >= b.length) {
    return -1;
  } else {
    return 1
  }
}

let sortByLength = (elements) => {
  return elements.sort(compareLength);
}

let city = ['Barcelona', 'Basel', 'Belgrade', 'Berlin', 'Budapest'];
let country = ['Belgium', 'Bulgaria', 'Brazil', 'Bolivia', 'Bosnia and Herzegovina'];
let river = ['Bode', 'Brahmaputra', 'Beuvron', 'Black River', 'Belaja'];

console.log(sortByLength(city));
console.log(sortByLength(country));
console.log(sortByLength(river));