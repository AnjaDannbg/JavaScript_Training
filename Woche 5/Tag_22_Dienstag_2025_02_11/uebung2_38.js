'use strict';



const distance = ({x: xOrigin, y: yOrigin }, {x: xDestination, y: yDestination}) => {
  return Math.sqrt((yDestination - yOrigin) ** 2 + (xDestination - xOrigin) ** 2);
}

console.log(distance({ x: 1, y: 1 }, { x: 5, y: 1 })); // => 4