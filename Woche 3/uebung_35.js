'use strict';

// let showNewsletterFor = (clientName) => {
//   console.log(`Hello, ${clientName},

// We're happy to inform you that you've just won $100,000! Congratulations! Please write us an email with your banking information and we will transfer the money.

// Sincerely, the Win Team`)
// }

let showNewsletterFor = (clientName, gender) => {
  if(gender.toLowerCase() === 'mr.') {
    console.log(`Hello ${gender} ${clientName},

We are glad to inform you that you won an incredible Ferrari and 20.000$!

Sincerely, the Win Team`)
   } else if(gender.toLowerCase() === 'ms.') {
    console.log(`Hello ${gender} ${clientName},

We are glad to inform you that you have won a voucher from Tiffany &amp; Co. (50.000$), a luxury trip to New York and additionally 50.000$ for shopping and more!

Sincerely, the Win Team`)
   }
}

showNewsletterFor('Heribert', 'Mr.');
showNewsletterFor('Goldy', 'Ms.');
showNewsletterFor('Ladislaus', 'Mr.');