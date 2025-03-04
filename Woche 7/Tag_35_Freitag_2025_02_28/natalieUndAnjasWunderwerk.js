'use strict';
const fs = require('fs');
const zlib = require('zlib');


const createHTMLpage = (teilHtml) => {
  const html =
  `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Produkte</title>
    </head>
    <body>
    ${teilHtml}
    </body>
  </html>
  `;

  return html;
}

const createHTML = (CVSdata) => {
  let CSVdataArray = CVSdata.split('\n');
  let teilHtml = '';

  CSVdataArray.shift();
  // console.log(CSVdataArray);

  CSVdataArray.forEach(row => {
    const rowArray = row.split(',');
    const htmlMesssage = rowArray[3] <= 5 ? `<p>Jetzt schnell bestellen!!!</p>` : '';
    const html = `
    <h2>${rowArray[1]}</h2>
    <p>${rowArray[2]}</p>
    <p>Preis: ${rowArray[4]}</p>
    ${htmlMesssage}
    `
    teilHtml += html;

  });

  return createHTMLpage(teilHtml);

}

fs.readFile('./data/products.csv', 'UTF8', (error, CVSdata) => {
  if(error) console.log('Das ist Faaaalsch!');
  
  fs.writeFile('products.html', createHTML(CVSdata), 'UTF8', (error) => {
    if (error) console.log('erroooooor');
  });
  
  fs.writeFile('products.html.gz', zlib.gzipSync(createHTML(CVSdata)), 'UTF8', (error) => {
    if (error) console.log('erroooooor');
  });
  
  fs.writeFileSync('products2.html', createHTML(CVSdata), 'UTF8');

  fs.writeFileSync('products2.html.gz', zlib.gzipSync(fs.readFileSync('./products2.html', 'UTF8')));

  console.log(zlib.gzipSync(fs.readFileSync('./products2.html', 'UTF8')));
})
  


