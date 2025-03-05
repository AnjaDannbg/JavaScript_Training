'use strict';

const fs = require('fs');
const papaparse = require('papaparse');

const products = fs.readFileSync('data/products.csv', 'UTF8');

console.log(products);

const productsJSON = JSON.stringify(papaparse.parse(products, {header: true}).data);
fs.writeFileSync('data/products.json', productsJSON, 'UTF8');