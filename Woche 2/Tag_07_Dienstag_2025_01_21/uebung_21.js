'use strict';

let gewichtGestern = Number(prompt('Wieviel hast du gestern gewogen?'));
let gewichtHeute = Number(prompt('Wieviel wiegst du heute?'));

if (gewichtHeute < gewichtGestern) {
  alert(`Glückwunsch! Du hast ${(1 - gewichtHeute/gewichtGestern).toFixed(2) * 100}% abgenommen.`)
} else {
  alert(`Beweg dich mal!`);
}

if (gewichtHeute === gewichtGestern) alert(`Du hast dasselbe Gewicht wie gestern`);