let url = 'https://www.webmasters-fernakademie.de/unser-kursnet-angebot';

// let splittedUrl = url.match(/(https?)(:\/\/)([^\/\r\n]+)(\/[^\r\n]*)?/);
let splittedUrl = url.match('(https?)(:\/\/)([^\/\r\n]+)(\/[^\r\n]*)?');

splittedUrl[4] = '/die-weltbesten-kurse';

splittedUrl.shift();

url = splittedUrl.join('');

console.log(url);