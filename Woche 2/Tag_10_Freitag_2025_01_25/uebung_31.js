'use strics';

let itemNumber = '007';
let correctedItemNumber = itemNumber;

// if(!itemNumber.startsWith(0)) {
//   correctedItemNumber = '0' + itemNumber;
// }

correctedItemNumber = itemNumber.startsWith('0')?itemNumber:correctedItemNumber = '0' + itemNumber;

console.log(correctedItemNumber);