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

const capitalOf = (country) => {
  let countriesWithCapital = returnCountriesWithCapital();
  return countriesWithCapital[country];
}

console.log(capitalOf('Russia'));