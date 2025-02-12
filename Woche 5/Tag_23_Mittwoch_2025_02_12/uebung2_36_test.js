'use strict';

let logTransformedName = ([firstName, lastName]) =>
  console.log(`${lastName}, ${firstName.charAt(0)}.`);
// logTransformedName(['Ladislaus', 'Jones']);

let logTransformedName2 = ({firstName, lastName}) =>
  console.log(`${lastName}, ${firstName.charAt(0)}.`);
// logTransformedName2({firstName: 'Ladislaus', lastName: 'Jones'});

let logTransformedName3 = ({firstName: fn, lastName: ln}) =>
  console.log(`${ln}, ${fn.charAt(0)}.`);
// logTransformedName3({firstName: 'Ladislaus', lastName: 'Jones'});

let logTransformedName4 = ({firstName: fn, lastName: ln} = {firstName: 'Max', lastName: 'Mustermann'}) =>
  console.log(`${ln}, ${fn.charAt(0)}.`);
// logTransformedName4();

let logTransformedName5 = ({firstName: fn = 'Maxine', lastName: ln = 'Musterfrau'}) =>
  console.log(`${ln}, ${fn.charAt(0)}.`);
// logTransformedName5({}); // => Musterfrau, M.
// logTransformedName5({firstName: 'Ladislaus'}); // => Musterfrau, L.
// logTransformedName5({lastName: 'Jones'}); // => Jones, M.
logTransformedName5(['Ladislaus', 'Jones']); // => Musterfrau, M.
// logTransformedName5(4); // => Musterfrau, M.
// logTransformedName5({firstName: 'Ladislaus', lastName: 'Jones'}); // => Jones, L.

let logTransformedName6 = ({firstName: firstName = 'Maxine', lastName: lastName = 'Musterfrau'} = {firstName: 'Max', lastName: 'Mustermann'}) =>
  console.log(`${firstName}, ${lastName.charAt(0)}.`);
logTransformedName6(); // => MusterMann, M.
logTransformedName6(4); // => Musterfrau, M.
// logTransformedName6({}); // => Musterfrau, M.
// logTransformedName6({firstName: 'Ladislaus'}); // => Musterfrau, L.
// logTransformedName6({lastName: 'Jones'}); // => Jones, M.
// logTransformedName6(['Ladislaus', 'Jones']); // => Musterfrau, M.
// logTransformedName6({firstName: 'Ladislaus', lastName: 'Jones'}); // => Jones, L.