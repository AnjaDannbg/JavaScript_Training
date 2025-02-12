'use strict';

let logTransformedName = ({firstName, lastName}) =>
  console.log(`${lastName}, ${firstName.charAt(0)}.`);
logTransformedName({firstName: 'Ladislaus', lastName: 'Jones'});