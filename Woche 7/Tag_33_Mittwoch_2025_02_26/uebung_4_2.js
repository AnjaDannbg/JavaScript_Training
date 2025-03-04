
'use strict';
const fs = require('fs');

const mixedCSV =
    '"very big, soft computer mouse","the cutest peripheral ever",10,39.90'

const CSVtoArray = (CSV) => {
  const charArray = CSV.split('');
  // TODO ...
}

console.log(CSVtoArray(mixedCSV));