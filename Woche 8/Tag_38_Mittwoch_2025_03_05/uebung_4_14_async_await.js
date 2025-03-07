'use strict';
const dns = require('dns')
const IP_V = 4 // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';


const getAllIPs = async () => {
  await getDnsIP(URL, IP_V);
  await getDnsIP('google.com', IP_V);
  await getDnsIP('silver-centauri.de', IP_V);
}

const getDnsIP = async (url, ip_v) => {
  try {
    const data = await dns.promises.lookup(url, ip_v);
    console.log(`IP address of ${url} = `, data.address);
  } catch (error) {
    console.error('da ging was schief', error);
  }
}

getAllIPs();