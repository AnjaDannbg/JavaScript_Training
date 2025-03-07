'use strict';

const fs = require('fs');

const file = fs.readFileSync('data/file_1.txt', 'UTF8');

for(let i=2; i <= 6; i++) {
  fs.writeFileSync(`data/file_${i}.txt`, file, 'UTF8');
}
