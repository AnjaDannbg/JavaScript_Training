'use strict';

// let cats = ['Tommy', 'Snoopy'];

let cats = [];

cats.push('Tommy'); // fügt am Ende hinzu
cats.push('Snoopy'); // fügt am Ende hinzu

cats.pop(); // Entfernt letztes Item

cats.unshift('Kalle'); //fügt am Anfang ein
cats.shift(); // Entfernt erstes Item

console.log(cats[3]); //Zählen fängt bei 0 an

// Beispiel 2

let laender = ['Deutschland', "England", `Dänemark`, "Spanien", 'Island', 'Indonesien', 'Indien'];

//substring-String hat ähnliches Verhalten
console.log('abcd'.substring(2,3)); // => 'c'
console.log(laender.slice(2,3)); // => ['Dänemark']

laender.splice(1, 2, 'Portugal'); // nimmt "England" und "Dänmark" raus, fügt "Portugal" hinzu.
console.log(laender + '<----');

laender.splice(2);
console.log(laender);


let zahlen = ['A','B','C'];

zahlen.sort();
//zahlen.reverse();

console.log(zahlen); // A-Z , Z-A
console.log(zahlen.includes("C")); // true
console.log(zahlen.join('---')); // A,B,C
console.log(zahlen);
console.log(zahlen.join().split(",")); // ['A','B','C']

