// Unternehmensrebranding
'use strict';

let url1 = 'https://www.123schmidt.de/shop';
let url2 = 'https://www.123schmidt.de/bewertungen';

let brandname = '123schmidt';
let newBrandname = 'hansonline';

let regex = /123schmidt/g;

url1 = url1.replace(regex, newBrandname);
url2 = url2.replace(regex, newBrandname);

console.log(url1);
console.log(url2);

