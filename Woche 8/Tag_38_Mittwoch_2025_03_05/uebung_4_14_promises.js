const dns = require('dns')
const IP_V = 4 // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';


const getDnsIP = (url, ip_v = 4) => {
  return dns.promises.lookup(url, ip_v); 
}

getDnsIP(URL, IP_V)
.then((data) => console.log(`IP address: ${data.address}`))
.catch((err) => console.log(`IP address not found`, err));