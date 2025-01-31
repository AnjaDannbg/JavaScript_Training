'use strict';


let hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

// let isMixableWith = (cocktailRecipe, availableIngredients) => cocktailRecipe.every((n) => availableIngredients.includes(n));
let isMixableWith = (cocktailRecipe, availableIngredients) => cocktailRecipe.every((n) => hasIngredient(availableIngredients, n));

let honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice'
];

let ingredientsFromMyBar = [
  'Pineapple',
  'Maracuja Juice',
  'Cream',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice',
  'Milk',
  'Apple Juice',
  'Aperol',
  'Pineapple Juice',
  'Limes',
  'Lemons'
];

//honoluluFlip isMixableWith ingredientsFromMyBar?
console.log(isMixableWith(honoluluFlip, ingredientsFromMyBar)); // => true