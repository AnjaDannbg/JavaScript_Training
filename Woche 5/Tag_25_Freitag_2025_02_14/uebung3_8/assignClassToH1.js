'use strict';

const h1 = document.querySelector('h1');
// let articleLength = Array.from(document.querySelectorAll('section p')).reduce(
//   (p1, p2) => p2 !== null ? p1.innerHTML.length + p2.innerHTML.length : p1.innerHTML.length);

let articleLength = 0;
document.querySelectorAll('section p').forEach( p => articleLength += p.innerHTML.length );
console.log('articleLength: ', articleLength);
// document.querySelectorAll('section p').forEach( p => document.querySelector('#ausgabe').innerHTML = Number(document.querySelector('#ausgabe').innerHTML) + p.innerHTML.length );

if(articleLength <= 3000) {
  h1.classList.add('coffee_break_article');
} else if (articleLength <= 9000) {
  h1.classList.add('normal_length_article');
} else {
  h1.classList.add('lone_weekend_article');
}




