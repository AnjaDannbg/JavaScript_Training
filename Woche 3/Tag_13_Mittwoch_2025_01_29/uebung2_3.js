'use strict';

// let fullNames = [
//   'Anja Dannenberg',
//   'Jens Simon',
//   'Fiona Wahnsinn',
//   'Violetta Hinterberger'
// ]



const transformName = (firstName, lastName) => {
  let firstNameCapitals = firstName.map((n) => n.charAt(0).toUpperCase()).join('. ');
  return `${firstNameCapitals}. ${lastName}.`;
}



console.log(transformName(['Ladislaus', 'Coolio', 'Barry'], 'Jones'));
// => 'L. C. B. Jones'
