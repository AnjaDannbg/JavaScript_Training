'use strict';

let name = ['Timur', 'Bahadir'];
let nameAlsObjekt = {
  vorname: 'Anja',
  nachname: 'Simon',
}

console.log('name ----->', name);
console.log('nameAlsObjekt ----->', nameAlsObjekt);

console.log('type of name ----->', typeof name);
console.log('type of nameAlsObjekt ----->', typeof nameAlsObjekt);

const namen = {};

namen.vorname= "Jens"; //create
namen.vorname= "Kim"; //update
namen.nachname= "Müller"; //create

console.log('namen ----->', namen);
console.log(JSON.stringify(namen)); // Werte zu JSON-Text umwandeln
console.log(JSON.parse('{"alter" : 42}'))