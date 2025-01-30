'use strict';

// map, mappen, abbilden

let zahlen = [1, 2, 3, 4];
// zahlen.map(callbackfn);

let mappingFunktion = (element) => {
  return element * 2;
}

// let gemappteZahlen = zahlen.map((element) => element * 2 );
let gemappteZahlen2 = zahlen.map(mappingFunktion);


console.log(zahlen);
console.log(gemappteZahlen2);

//sort: Rückgabe immer 1 oder -1

let compareFnAbsteigend = (a, b) => {
  if(b < a) {
    return -1
  } else {
    return 1;
  }
}

let compareFnAufsteigend = (a, b) => {
  if(b > a) {
    return -1 //-1 = nicht tauschen
  } else {
    return 1; //1 = tauschen
  }
}

let compareFnSpecial = (a, b) => {
  if(a.length < b.length) {
    return -1
  } else {
    return 1;
  }
}


let texte = ['jens', 'anne', '3'];
console.log(texte.map(txt => txt.toUpperCase()));

//sort
let compareFn = (a, b) => a < b;
console.log(['a', 'b', 'c'].sort(compareFn));
console.log(['a', 'b', 'c'].sort(compareFnAbsteigend));

//filtern: Rückgabe immer true oder false

let arr = [1,2,3,4,5,6];
console