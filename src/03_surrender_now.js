/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");
const morePokemon = require("../data/poke_remix");
const exampleWeaknesses = require("../data/weaknesses");
// Do not change the line above.

/**
 * filterByType()
 * -----------------------------
 * Returns all Pokemon objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `type`, return `[]`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {string} type - The type of a Pokemon. (e.g. "Fire")
 * @returns {Object[]} An array of Pokemon where at least one of the types matches the `type` inputted.
 *
 * EXAMPLE:
 *  filterByType(pokemon, "Steel");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByType(pokemon, "Shadow")
 *  //> []
 */
function filterByType() {}

/**
 * getPokemonNamesMostEffectiveAgainstType()
 * -----------------------------
 * Returns all names of Pokemon that have a `type` to which the given `type` is weak.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {string} type - A type as a string. (e.g. "Psychic")
 * @returns {Object[]} An array of Pokemon names where the at least one of its types is a `type` the passed in `type` is weakened by.
 *
 * EXAMPLE:
 *  getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, "Electric");
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getPokemonNamesMostEffectiveAgainstType(){}

module.exports = {
    filterByType,
    getPokemonNamesMostEffectiveAgainstType
}