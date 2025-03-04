const fs = require('fs');

// const stats = fs.statSync('file.txt');
// console.log(stats.size) // => size in bytes

const text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

fs.writeFileSync('file.txt', text, 'utf-8');

fs.stat('file.txt', (error, stats) => { 
  console.log(stats.size);  // => size in bytes
});

// fs.unlinkSync('file.txt');
