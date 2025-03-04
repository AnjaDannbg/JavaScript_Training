const fs = require('fs');
const crypto = require('crypto');

const data = "Ich habs verstanden!!!";

const verschluesselt = crypto.createHash('sha256').update(data).digest('hex');

console.log(verschluesselt);
