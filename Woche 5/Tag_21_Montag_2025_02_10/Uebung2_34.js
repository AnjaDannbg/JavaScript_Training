'use strict';

const countriesWithCapital = {
  UK: 'London',
  France: 'Paris',
  Germany: 'Berlin',
  Switzerland: 'Bern',
  Austria: 'Vienna',
  Russia: 'Moscow'
};

const returnCountriesWithCapital = () => countriesWithCapital;

const countryForCapital = (capital) => {
  let countriesWithCapitalArray = Object.entries(returnCountriesWithCapital());
  // let index = countriesWithCapitalArray.map((n) => n[1]).indexOf(capital);
  // return countriesWithCapitalArray[index][0];
  return countriesWithCapitalArray.find((n) => n[1] === capital)[0];
}

console.log(countryForCapital('Berlin'));
console.log(countryForCapital('Paris'));