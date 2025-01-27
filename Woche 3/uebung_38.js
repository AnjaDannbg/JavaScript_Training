'use strict';

let inputStrecke = prompt(`Wie weit bist du gefahren (in km)?`);
let inputBenzin = prompt(`Wieviel Benzin hast du verbraucht (in Liter)?`);
let inuptTank = prompt(`Was ist deine Tankgröße?`);

let verbrauch = (strecke, benzin) => benzin / strecke * 100;

let reichweite = (tank, strecke, benzin) => tank * strecke / benzin;

alert(`Du verbrauchst ${verbrauch(inputStrecke, inputBenzin)} Liter pro Kilometer und hast eine maximale Reichweite von ${reichweite(inuptTank, inputStrecke, inputBenzin)}km`);


