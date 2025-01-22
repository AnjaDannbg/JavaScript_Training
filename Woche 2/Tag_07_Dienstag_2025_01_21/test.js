'use strict';
 
let gestrigesGewicht = prompt('Wie war das Gewicht gestern?');
let heutigesGewicht = prompt('Wie ist Dein heutiges Gewicht');
 
 
let veraenderungProzent = Math.round(Math.abs(heutigesGewicht - gestrigesGewicht) / gestrigesGewicht * 100);
 
if (gestrigesGewicht < heutigesGewicht ) {
    console.log(`Dein heutiges Gewicht ist ${veraenderungProzent} Prozent mehr als gestern`);
    alert('Los bewegt dich')
} else if (gestrigesGewicht > heutigesGewicht) {
  console.log(`Gratulier! Du hast ${veraenderungProzent} Prozent abgenommen!`);
}
if (gestrigesGewicht === heutigesGewicht) {
  console.log('Du hast das gleiche Gewicht wie gestern!')
}