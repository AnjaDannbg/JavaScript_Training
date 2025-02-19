'use strict';
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));


document.querySelector('p').innerHTML = "Abend!";
let myNodeList = document.querySelectorAll('p');

myNodeList[0].innerHTML = "0";
myNodeList[1].innerHTML = "1";
myNodeList[2].innerHTML = "2";

for(let i=0; i<myNodeList.length; i++) {
  myNodeList[i].innerHTML = 10 + i;
}

$('p').innerHTML = "§§§§§"

$$("p").map((p, i) => {
  if(i===2)
    return p.innerHTML = "---------"
  }
);