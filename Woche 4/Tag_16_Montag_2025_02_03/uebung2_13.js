'use strict';

'use strict';

// triangle descending
const triangle = (size) => {
    if(size > 0) {
        return `${line(size, '*')}\n${triangle(size - 1)}`;
    }
    return '';
}

// triangle ascending
const triangleAscending = (size) => {
    return buildTriangle(size, 0);
}

const buildTriangle = (size, index) => {
    if(size >= 0) {
        return `${line(index, '*')}\n${buildTriangle(size - 1, index + 1)}`;
    }
    return '';
}


const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);

console.log(triangleAscending(10));