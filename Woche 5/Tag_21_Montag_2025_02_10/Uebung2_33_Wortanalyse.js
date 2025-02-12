'use strict';

const wordOccurrance = (text = '') => {
  let textArray = text.toLowerCase().split(/[ ,.\'\"]/g).filter((word) => word !== '');
  let wordObject = {};
  textArray.forEach((word) => {
    wordObject[word] = 0;
  })
  textArray.forEach((word) => {
    wordObject[word]++;
  })
  return wordObject;
}

const text = 'In cryptology, a code is a method used to encrypt a message that operates at the level of meaning; that is, words or phrases are converted into something else. A code might transform "change" into "CVGDK" or "cocktail lounge". A codebook is needed to encrypt, and decrypt the phrases or words.';

console.log(wordOccurrance(text));