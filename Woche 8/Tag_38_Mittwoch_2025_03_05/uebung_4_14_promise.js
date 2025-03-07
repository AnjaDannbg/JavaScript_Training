'use strict'

const dns = require('dns')
const IP_V = 4 // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';

// Handler
const getIP = (resolve, reject) => {
  dns.lookup(URL, IP_V, (error, address) => {
    if(error) {
      reject('error: could not lookup host');
    } else {
      resolve('IP address = ' + address)
    }
  });
}

const getDNSip = (url) => {
  return new Promise((resolve, reject) => {
    dns.lookup(url, IP_V, (error, address) => {
      if(error) {
        reject('error: could not lookup host: ' + url);
      } else {
        resolve('IP address = ' + address)
      }
    });
  })
}

getDNSip('de.webmasters-europe.org').then(
  result => {
    console.log(result);
    return getDNSip('/otto.de');
  }
).then(
  result => {
    console.log(result);
    return getDNSip('google.com');
  }
).then(
  result => console.log(result)
).catch(
  error => console.log(error)
)


// const p1 = new Promise(getIP);

// Möglichkeit 1?
// p1.then(
//   result => {console.log(result)},
//   reason => {console.log(reason)}
// )

// Möglichkeit 2?
// new Promise(getIP).then(
//   result => {
//     console.log('1', result);
//     return new Promise(getIP);
// }).then(
//   result => {
//     console.log('2', result);
//     return new Promise(getIP);
// }).then(
//   result => {
//     console.log('3', result);
// }).catch(
//   reason => {console.log('Fehler:', reason)}
// )

