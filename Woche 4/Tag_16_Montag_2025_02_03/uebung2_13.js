'use strict';

'use strict';

/* your code here */
const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);

console.log(triangle(10));