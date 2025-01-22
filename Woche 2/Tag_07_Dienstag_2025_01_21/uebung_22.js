'use strict'

let jahr = Number(prompt('Nenne ein Jahr.'));

if (jahr % 400 === 0 || (jahr % 100 !== 0 && jahr % 4 === 0) ) {
  alert(`${jahr} ist ein Schaltjahr!!`);
} else {
  alert(`${jahr} ist kein Schaltjahr :(`);
}

/*

if(jahr % 400 === 0) {
  alert(`${jahr} ist ein Schaltjahr!!`);
} else {
  if(jahr % 100 !== 0) {
    if(jahr % 4 === 0) {
      alert(`${jahr} ist ein Schaltjahr!!`);
    } else alert(`${jahr} ist kein Schaltjahr:(`);
  } else alert(`${jahr} ist kein Schaltjahr:(`);
}

*/