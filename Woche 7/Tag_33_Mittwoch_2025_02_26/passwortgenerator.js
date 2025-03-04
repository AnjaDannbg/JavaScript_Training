const crypto = require('crypto');

// Passwortlänge festlegen
const PASSWORD_LENGTH = 10;

// String mit allen möglichen Zeichen für ein Passwort
const s = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ!.,;#$%/+*';

// Es sollen 10 Bytes generiert und in buf gespeichert werden
const buf = crypto.randomBytes(PASSWORD_LENGTH);

//
const password = Array.from(buf)
    .map(byte => s.charAt(byte % s.length))
    .join('');

console.log(password);