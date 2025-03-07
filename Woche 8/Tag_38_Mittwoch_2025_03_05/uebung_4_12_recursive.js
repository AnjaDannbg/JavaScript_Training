'use strict';

const TEXT = 'The pyramid of doom keeps growing.'

const textArray = TEXT.split(' ');

const printWord = (wordIndex) => {
  if(wordIndex < textArray.length) {
    console.log(textArray[wordIndex]);
    setTimeout(() => {
      printWord(wordIndex + 1)
    }, 1000)
  }
}

setTimeout(() => {
  printWord(0)
})

