'use strict';

const dns = require('dns')
const util = require('util');

const IP_V = 4 // we use IP protocol version 4
const URL = 'baconipsum.com';



const getIP = util.promisify(dns.lookup);

getIP(URL, IP_V)
.then((data) =>
  console.log('IP address = ' + data.address)
)
.catch((err) => console.error(`Something went wrong: ${err}`))