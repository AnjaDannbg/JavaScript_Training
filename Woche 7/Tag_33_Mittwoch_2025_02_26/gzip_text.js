'use strict';
const fs = require('fs');
const zlib = require('zlib');

const data = '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"';

console.log(zlib.gzipSync(data));