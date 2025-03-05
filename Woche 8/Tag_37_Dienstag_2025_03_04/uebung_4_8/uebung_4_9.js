'use strict';

const moment = require('moment');

const saturday = moment().day('Saturday').format('DD.MM.YYYY');
console.log(saturday);