'use strict';


// Destrukturierungsklammer / Zerlegungsklammer
let [price, title, author] =  [19, 'XML Buch', 'John Doe'];

console.log(price);
console.log(title);
console.log(author);


let [price1] = [19, 'XML Buch', 'John Doe'];
console.log(price1); // => 19

let [author1] = [19, 'XML Buch', 'John Doe'];
console.log(author1); // => 19
