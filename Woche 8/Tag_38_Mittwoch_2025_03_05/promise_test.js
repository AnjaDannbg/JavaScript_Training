'use strict';

// TEIL 1
// Handler / callback function
const doSomething = (resolve, reject) => {
  resolve('I did something!!');
  reject('Woops error!!');
}

// TEIL 2
// create Promise:
const p1 = new Promise(doSomething);

// TEIL 3
// Funktionsaufruf - Die Begriffe result und reason sind frei wählbar. Alternative: (data, error)
p1.then(result => console.log(result),
reason => console.log(reason));