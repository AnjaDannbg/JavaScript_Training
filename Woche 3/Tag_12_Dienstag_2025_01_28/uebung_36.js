'use strict';

let logTransformedName = (vorname, nachname) => {
  console.log(`${nachname}, ${vorname.charAt(0)}.`);
};

logTransformedName('Anja', 'Dannenberg');
