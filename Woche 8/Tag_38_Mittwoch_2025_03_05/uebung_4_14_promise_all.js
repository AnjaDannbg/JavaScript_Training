const dns = require('dns')
const IP_V = 4 // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';

// dns.lookup(URL, IP_V, (error, address) => {
//   if (error) {
//     console.log('error: could not lookup host');
//   } else {
//     console.log('IP address = ' + address);
//   }
// });

// 
const getDnsIP = (url) => {
  return new Promise( (resolve, reject) =>
    {
      dns.lookup(url, IP_V, (error, address) => {
    if (error) {
      reject('error: could not lookup host');
    } else {
      resolve('IP address = ' + address);
    }})
  });
}


// Promise chaining
// getDnsIP('google.com').then(
//   result => {
//     console.log(result);
//     return getDnsIP('otto.de');
//   }
// ).then(result => console.log(result))
// .catch(error => console.log(error));

// Promise all
Promise.all([
  getDnsIP('google.com'),
  getDnsIP('otto.de'),
  getDnsIP('silver-centauri.de'),
  getDnsIP('google.com')
]).then(result => console.log(result)) // Array aus den results
.catch(error => console.log('etwas ging schief: ', error));