'use strict';

// handler
const wait = (resolve, reject) => {
  setTimeout(() => {
    console.log('ich warte')
    resolve('hat funktioniert');
  }, 5000)
}

// promise:
const p1 = new Promise(wait);

// Aufruf:

p1.then(
  result => {console.log(result)},
  reason => {console.log('hat irgendwie nicht funktioniert. Wie auch immer')}
)