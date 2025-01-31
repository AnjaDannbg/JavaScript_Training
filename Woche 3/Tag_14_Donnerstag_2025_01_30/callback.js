'use strict';

let value = "hallo!";
let fkt = () => {};

// 1. Definition
let testFunktion = (x) => {
  console.log(x);

  //aufruf, ausführen, call
  x();
}

//2. Aufruf
//testFunktion(value)
testFunktion(fkt); // Higher-Order