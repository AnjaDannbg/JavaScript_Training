'use strict';

const askForPositiveNumber = (input) => {
  if(input > 0 && !isNaN(input)) {
    return true; // is positive
  } else {
    alert('Please submit a positive number');
    return false; // is negative
  }
}

let askForFuelLoad = () => {
  const fuelLoad = Number(prompt('How much fuel did you consume?'));
  return askForPositiveNumber(fuelLoad)? fuelLoad : askForFuelLoad();
}

let askForDistance = () => {
  const distance = Number(prompt('How many km did you travel?'));
  return askForPositiveNumber(distance)? distance : askForDistance();
}

let askForTankSize = () => {
  const tankSize = Number(prompt('How many liters of gasoline fits in your tank?'));
  return askForPositiveNumber(tankSize)? tankSize : askForTankSize();
}

let fuelLoad = askForFuelLoad();
let distance = askForDistance();
let tankSize = askForTankSize();

let consumption = () => Math.floor((fuelLoad / distance) * 100);
let fuelRange = () => Math.floor((tankSize * distance) / fuelLoad);

alert(
    `Your car has a consumption of ${consumption()} liter per 100 kilometers .\nYou can travel ${fuelRange()} km with a full tank.`
)
