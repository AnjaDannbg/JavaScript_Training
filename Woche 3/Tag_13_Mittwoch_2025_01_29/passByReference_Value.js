'use strict';

//Einzelwertdatentypen number, string, boolean
// Mehrwertdatentyp object

let vorname = 'Jens'

let veraendereName = (vorname) => {
  vorname = vorname + "[verändert]";
  return vorname;
}

console.log(vorname);
console.log(veraendereName(vorname));

let vornamen = ['Jens', 'Anne'];

let veraendereVornamen = (vornamen) => {
  vornamen.splice(0,1);
  return vornamen;
}

console.log(vornamen);
console.log(veraendereVornamen(vornamen));
console.log(vornamen);