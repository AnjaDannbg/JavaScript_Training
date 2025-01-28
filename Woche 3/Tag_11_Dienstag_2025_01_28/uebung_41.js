'use strict';

let anleitung = `
    Schmelzen Sie die Butter in einer Pfanne, geben Sie die Haferflocken dazu und vermischen Sie alles gut miteinander.

    Nehmen Sie die Masse danach vom Herd und lassen Sie sie etwas auskühlen. Nun schlagen Sie das Eiweiß mit Zucker steif und rühren Eigelb, Backpulver und Mehl unter. Vermengen Sie nun die Masse mit den abgekühlten Haferflocken.

    Setzen Sie kleine Teighäufchen auf ein Backblech. Die Häufchen sollten nicht zu groß sein, da der Teig beim Backen etwas auseinanderläuft. Im vorgeheizten Backofen bei 170 °C 15 Minuten backen.
`;

let zutaten = [
  '70 ml Rapsöl',
  '1 getrenntes Ei',
  '100 g Zucker',
  '1 TL Backpulver'
]
// console.log(zutaten);

zutaten.push('1 EL Mehl');
// console.log(zutaten);

zutaten.unshift('100 g Haferflocken');
// console.log(zutaten);

zutaten.splice(1,1, '75 g Butter');
// console.log(zutaten);

let rezept = '\n- ' + zutaten.join('\n- ');
// console.log(rezept);

console.log(anleitung + rezept);