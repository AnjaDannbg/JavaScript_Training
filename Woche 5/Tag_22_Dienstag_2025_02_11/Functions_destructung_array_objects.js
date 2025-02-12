'use strict';

const myFunction = ([price, title, author]) => { // Variable = Wert
    console.log(price);
    console.log(title);
    console.log(author);
}

myFunction([19, 'XML Buch', 'John Doe'])

const myFunction2 = ({author, title}) => {
  // console.log(price);
  console.log(title);
  console.log(author);
}

const myFunction3 = ({author, title = "da fehlt der Titel"}) => {
  // console.log(price);
  console.log(title);
  console.log(author);
}

const myFunction4 = ({ author, title = "da fehlt der Titel", ...alleAnderen }) => {
  console.log(title);
  console.log(author);
  console.log('Rest:', alleAnderen);
}

myFunction([19, 'XML Buch', 'John Doe']);

myFunction2({
  price: 19,
  title: 'XML Buch',
  author: 'John Doe',
})

myFunction3({
  price: 19,
  // title: 'XML Buch',
  author: 'John Doe',
})

myFunction4({
  price: 19,
  title: 'XML Buch',
  author: 'John Doe',
  volume: 40.67,
})