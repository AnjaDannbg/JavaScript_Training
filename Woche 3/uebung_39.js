'use strict';

let input = prompt(`Gib mir einen Link.`);

let convertToLink = (url) => `<a href="${url}">${url}</a>`;

console.log(convertToLink(input));