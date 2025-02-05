'use strict';

const times = (n, fnk) => {
  const results = Array(n).fill(0);
  results.forEach((x, index, results) => (results[index] = fnk(index)));
  return results;
};


// My code:

const askForPrice = () => {
  let price;
  do {
    price = Number(prompt(`Gib einen Preis an`));
  } while (isNaN(price) || price <= 0);

  return fillWithZeros(price);

}

const fillWithZeros = (price) => {
  let newPrice = '' + price;

  for(let i= newPrice.length; i < 7; i++) {
    newPrice = '0' + newPrice;

  }
  return newPrice;
}

alert(askForPrice());