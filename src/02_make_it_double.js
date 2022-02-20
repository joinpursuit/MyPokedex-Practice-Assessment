/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");

// Do not change the line above.

/**
 * countByType()
 * -----------------------------
 * Returns an object where the keys are Pokemon types and the values are the number of Pokemon in the array with that type. If the inputted `pokemon` array is empty, return `{}`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {Object} An object where keys are Pokemon types (e.g. "Water") and the values are how many Pokemon in the array have that type (e.g. 22).
 *
 * EXAMPLE:
 *  countByType(pokemon);
 *  //> {
        Grass: 11,
        Poison: 14,
        Fire: 8,
        Flying: 12,
        Water: 22,
        Bug: 8,
        Normal: 14,
        Electric: 5,
        Ground: 10,
        Steel: 3,
        Fairy: 5,
        Fighting: 5,
        Psychic: 13,
        Rock: 4,
        Ice: 4,
        Ghost: 2,
        Dragon: 3
    };
 */

function countByType(pokemon) {
  // Reuse code from countWords(arr) in countWords.js in Module-One-Final-Assessment-Retake-NW(7.2 cohort)
  // Create an empty object `pokeType`.
  let pokeType = {};

  // Iterate over the `pokemon` array inputted as a parameter. Use a nested for loop to access the `type` arrays. If the `type` key is truthy, increment it by 1 and if there is more than one instance of the same type, keep incrementing to end with a total count of each type. Also, use the syntax to create key/value pairs and put them in the new object `pokeType`.
  for (let i = 0; i < pokemon.length; i++) {
    for (let j = 0; j < pokemon[i].type.length; j++) {
      let type = pokemon[i].type[j];
      if (pokeType[type]) {
        pokeType[type] += 1;
      } else {
        pokeType[type] = 1;
      }
      
    }
  }
  
  // Return the object after filling it. If `pokemon` parameter is empty, then return an empty object that was declared at the beginning of the function.
  return pokeType;
}
    
/**
 * findByNumber()
 * -----------------------------
 * Returns a Pokemon object from an array of objects based on the Pokemon's National Pokedex number. If the inputted `pokemon` array is empty or the number does not match any Pokemon, return `null`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {string} number - A unique `national_number`.
 * @returns {Object|null} The Pokemon object with the matching `national_number`.
 *
 * EXAMPLE:
 *  findByNumber(pokemon, "106");
 *  //> {
      // Hitmonlee
    };
 */
function findByNumber() {};


module.exports = {
    countByType,
    findByNumber,
};