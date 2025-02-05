'use strict';

const times = (n, fnk) => {
  const results = Array(n).fill(0);
  results.forEach((x, index, results) => (results[index] = fnk(index)));
  return results;
};

// My recursive code:

const askForPrice = () => {
  let price = Number(prompt(`Gib einen Preis an`));
  return (!isNaN(price) && price > 0)? fillWithZeros(price): askForPrice();

}

const fillWithZeros = (price) => {
  let newPrice = '' + price;
  if(newPrice.length < 7) {
    console.log('Führe times aus:')
    newPrice = times(7-newPrice.length, ()=> '0').join('') + newPrice;
  }
  return newPrice;
}

alert(askForPrice());