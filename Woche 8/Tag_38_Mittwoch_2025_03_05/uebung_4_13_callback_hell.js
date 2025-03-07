'use strict'

const fs = require('fs');

fs.readFile('data/file_1.txt', 'UTF8', (error, content) => {
  if(error) console.log("There is no Fiiiile!")
  else {
    console.log('it has been done! Async!!\n', content);
    fs.readFile('data/file_2.txt', 'UTF8', (error, content) => {
      if(error) console.log("There is no Fiiiile!")
      else {
        fs.readFile('data/file_3.txt', 'UTF8', (error, content) => {
          if(error) console.log("There is no Fiiiile!");
          else {
            console.log('finally done!!');
          }
        })
      }
    })
  }
})