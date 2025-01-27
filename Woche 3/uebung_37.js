'use strict';

let vollerName = prompt(`Verrate mir deinen vollen Namen`);
let spacePos = vollerName.lastIndexOf(' ');
let vorname = vollerName.substring(0, spacePos);
let nachname = vollerName.substring(spacePos, vollerName.length);

let transformName = (vName, nName) => {
  return `${nName}, ${vName.charAt(0)}.`.trim();
}

alert(`Dein Name ist ${transformName(vorname, nachname)}`)

