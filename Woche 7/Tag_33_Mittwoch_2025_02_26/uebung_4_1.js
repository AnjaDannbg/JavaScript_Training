const fs = require('fs');

const quotedCSV =
    '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"'

const CSVtoArray = (CSV) => {
  return CSV.split('","').map(n => {
    if (n.startsWith('"')) return n.slice(1);
    if (n.endsWith('"')) return n.slice(0, n.length - 1);
    else return n;
  });
}


console.log(CSVtoArray(quotedCSV));
