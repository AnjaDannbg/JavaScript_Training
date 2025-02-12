'use strict';

const triangle = ({height, character = '*'} = {height: 5, character: '*'}) => buildTriangle(height, 1, character);

const buildTriangle = (height, topLineWidth, character) =>
    topLineWidth > height
        ? ''
        : `${line(topLineWidth, character)}\n${buildTriangle(
              height,
              topLineWidth + 1,
              character,
          )}`;

const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);


console.log(triangle({ height: 10 }));
console.log(triangle({ height: 10, character: '#' }));
console.log(triangle());