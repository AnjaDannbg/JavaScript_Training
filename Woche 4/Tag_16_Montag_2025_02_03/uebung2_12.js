'use strict';

const zielZahl = Math.floor(Math.random() * 10) + 1;

const vergleicheZahl = (rateZahl) => {
  if(rateZahl < zielZahl) {
    return vergleicheZahl(Number(prompt('Deine Zahl ist zu klein. Probiere es nochmal:')));
  } else if (rateZahl > zielZahl) {
    return vergleicheZahl(Number(prompt('Deine Zahl ist zu groß. Probiere es nochmal:')));
  } else if (rateZahl === zielZahl) {
    alert('Richtig!! Die Zahl ist: ' + zielZahl);
  } else {
    return vergleicheZahl(Number(prompt('Etwas ist schiefgelaufen. Probiere es nochmal:')));
  }
}

vergleicheZahl(Number(prompt('Ich habe mir eine Zahl zwischen 1 und 10 ausgedacht. Rate mal, welche:')));