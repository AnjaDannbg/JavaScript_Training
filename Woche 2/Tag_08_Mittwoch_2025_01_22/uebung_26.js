'use strict';

let name = prompt('Verrate mir deinen vollen Namen.');

let firstSpacePosition = name.indexOf(' ');
let lastSpacePosition = name.lastIndexOf(' ');

let firstname = name.substring(0, firstSpacePosition).trim();
let middlename = name.substring(firstSpacePosition+1, lastSpacePosition).trim();
let lastname = name.substring(lastSpacePosition+1).trim();

if(name.trim() === '') {
  alert(`Du hast keinen Namen eingegeben`);
} else {

  if(middlename === '') {
    alert(`Dein Vorname ist: ${firstname}\nDein Nachname ist: ${lastname}`);
  }
  if(middlename !== '') {
    alert(`Dein Vorname ist: ${firstname}\nDein zweiter Vorname ist: ${middlename}\nDein Nachname ist: ${lastname}`);
  }

}






