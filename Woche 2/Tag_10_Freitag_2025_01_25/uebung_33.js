// Unternehmensrebranding
'use strict';

let url1 = 'https://www.123schmidt.de/shop';
let url2 = 'https://www.123schmidt.de/bewertungen';

let urlAll = 'https://www.123schmidt.de/shop, https://www.123schmidt.de/bewertungen'

// let brandname = '123schmidt';
// let newBrandname = 'hansonline';

// let regex = /123schmidt/g;

// url1 = url1.replace(regex, newBrandname);
// url2 = url2.replace(regex, newBrandname);

// console.log(url1);
// console.log(url2);

// let urlregex = /(https?)(:\/\/)www.123schmidt/g;
let urlregex = /(https?)(:\/\/)([^/\r\n]+)/g;

url1 = url1.replace(urlregex, 'https://www.hansonline');
url2 = url2.replace(urlregex, 'https://www.hansonline');
urlAll = urlAll.replace(urlregex, 'https://www.hansonline');

console.log(url1);
console.log(url2);
console.log(urlAll);


