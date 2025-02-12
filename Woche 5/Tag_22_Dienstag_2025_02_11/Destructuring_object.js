'use strict';


// Destrukturierungsklammer / Zerlegungsklammer
let objekt = {
  price: 19,
  title: 'XML Buch',
  author: 'John Doe',
}

let price = objekt['price'];
let title = objekt["title"];
let author = objekt['author'];

console.log(price);
console.log(title);
console.log(author);

// destructuring

let {price:p, title:t, author:a} = {
  price: 19,
  title: 'XML Buch',
  author: 'John Doe',
}

console.log(p);
console.log(t);
console.log(a);

let {price1, title1, author1} = {
  price1: 19,
  title1: 'XML Buch',
  author1: 'John Doe',
}

console.log(price1);
console.log(title1);
console.log(author1);

let {author2} = {
  price2: 19,
  title2: 'XML Buch',
  author2: 'John Doe',
}
console.log(author2);