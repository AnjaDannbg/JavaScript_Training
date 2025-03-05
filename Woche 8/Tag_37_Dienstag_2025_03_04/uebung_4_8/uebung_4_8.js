const fs = require('fs');
const validator = require('validator')

const books = fs.readFileSync('data/books.csv', 'UTF8').split('\n');
books.shift();
const booksArray = books.map(book => book.split(','));

console.log(booksArray);

booksArray.forEach(row => console.log(validator.isISBN(row[1])));


