'use strict';

const zielZahl = Math.floor(Math.random() * 2) + 1;
console.log(zielZahl);

const vergleicheZahl = (rateZahl, runde) => {
  if(!isNaN(rateZahl) && rateZahl !== 0) {
    if(rateZahl < zielZahl) {
      return vergleicheZahl(Number(prompt(`Runde ${runde}\n\nDeine Zahl ist zu klein. Probiere es nochmal:`)), runde + 1);
    } else if (rateZahl > zielZahl) {
      return vergleicheZahl(Number(prompt(`Runde ${runde}\n\nDeine Zahl ist zu groß. Probiere es nochmal:`)), runde + 1);
    } else if (rateZahl === zielZahl) {
      alert('Richtig!! Die Zahl ist: ' + zielZahl + `\nDu hast sie nach ${runde} Runden erraten.`);
    }
  } else {
    return vergleicheZahl(Number(prompt(`Runde ${runde}\n\nEtwas ist schiefgelaufen. Probiere es nochmal:`)), runde);
  }
}

vergleicheZahl(Number(prompt('Ich habe mir eine Zahl zwischen 1 und 10 ausgedacht. Rate mal, welche:')), 1);