"use strict";

/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`
*/

const recipe = {
  flour: 2,
  sugar: 2,
  eggs: 4
};

const available = {
  flour: 4,
  sugar: 4,
  eggs: 8,
  milk: 200
};

// compare recipe to the available
// a. are all ingredients available?
// b. if they are, what is the lowest output when you divide the avail/batch
// c. return that number as the batch

// see if avail has all of the keys of recipe
//  if they don't all match, return 0

// if they do
// declare a highest variable set to 0
// loop over each key of recipe
// divide key[val] by avail[key]
// find the lowest sum and return it

// return highest

function batches(recipe, available) {
  for (let ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient)) return 0;
  }

  let maxBatches = Infinity;
  for (let ingredient in recipe) {
    const batches = Math.floor(available[ingredient] / recipe[ingredient]);
    maxBatches = Math.min(batches, maxBatches);
  }
  return maxBatches;
}

console.log(batches(recipe, available)); // Output: 2
