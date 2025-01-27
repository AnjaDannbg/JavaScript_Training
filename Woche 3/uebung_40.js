'use strict';

let input = prompt(`Temperatur (in Celsius):`);

let CelsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;

alert(`${input}°C beträgt ${CelsiusToFahrenheit(input)}°F`);