'use strict';

let ergebnis = [1, 2, 3, 4].reduce((linkerWert, rechterWert) => {
  console.log(linkerWert, rechterWert);
  return linkerWert + rechterWert;
})

console.log('ergebnis --->', ergebnis);

//nur gerade Zahlen addieren

let ergebnis2 = [1, 2, 3, 4].reduce((linkerWert, rechterWert) => {
  if(linkerWert % 2 !== 0) {
    linkerWert = 0;
  }
  if(rechterWert % 2 !== 0) {
    rechterWert = 0;
  }
  console.log(linkerWert, rechterWert);
  return linkerWert + rechterWert;
})

console.log('ergebnis2 --->', ergebnis2);