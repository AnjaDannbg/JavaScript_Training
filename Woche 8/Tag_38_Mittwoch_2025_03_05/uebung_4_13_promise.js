'use strict'

const fs = require('fs');

const printDelay = (time, str) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(str);
      resolve();
    }, time)
  );

  const getFileContent = (name, encoding = 'UTF8') => {
    return new Promise((resolve, reject) => {
      fs.readFile(name, encoding, (error, content) => {
        if (error) {
          reject(`could not read file ${name}`);
        } else {
          resolve(content);
        }
      });
    });
  };

Promise.all([
  getFileContent('data/file_1.txt'),
  getFileContent('data/file_2.txt'),
  getFileContent('data/file_3.txt'),
  getFileContent('data/file_.txt'),
  getFileContent('data/file_5.txt'),
  getFileContent('data/file_6.txt')
])
.then(() => {
  console.log('hat funktioniert');
})
.catch((error) => {
  console.log(error);
})


// getFileContent('data/file_1.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(`Something went wrong: ${err}`));