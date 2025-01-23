'use strict'

let name = prompt('Verrate mir deinen Namen.');

let lastSpacePosition = name.lastIndexOf(' ');
let vorname = name.substring(0, lastSpacePosition).trim();
let nachname = name.substring(lastSpacePosition+1).trim();

alert(`${nachname}, ${vorname.charAt(0)}.`)