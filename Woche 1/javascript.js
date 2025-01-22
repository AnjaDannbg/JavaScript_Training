'use strict';

let kilometer = Number(prompt('Wie viele Kilometer bist du gefahren?'));
let benzin = Number(prompt('Wie viel Liter Benzin hast du verbraucht?'));
let tankGroesse = prompt('Was ist deine Tankgröße?')

let verbrauch = benzin / kilometer * 100;

alert(`Du hast ${Math.round(verbrauch)} Liter verbraucht.`);
alert(`Deine maximale Reichweite ist ${Math.round(tankGroesse * kilometer / benzin)} km`);
