'use strict'

console.log(`Es startet immerhin`);

let vorname = prompt('Verrate mir dienen Vornamen.');
if (!(vorname.length >=2)) {
  alert('Dein Vorname muss mindestens 2 Zeichen lang sein.');
} else if (!(vorname.length <= 100)) {
  alert('Dein Vorname darf maximal 100 Zeichen lang sein.');
}

let nachname = prompt('Verrate mir deinen Nachnamen');
if (!(nachname.length >=2)) {
  alert('Dein Nachname muss mindestens 2 Zeichen lang sein.');
} else if (!(nachname.length <= 100)) {
  alert('Dein Nachname darf maximal 100 Zeichen lang sein.');
}

let geschlecht = prompt('Verrate mir dein Geschlecht.\nm für Mann.\nf für Frau.');
if(!(geschlecht === 'm' || geschlecht === 'f')) {
  alert('Du musst entweder m oder f eingeben.')
}

let alter = prompt('Verrate mir dein Alter.');
if(!(alter < 150)) {
  alert(`Du bist doch nicht ernsthaft ${alter} Jahre alt oder?`);
}