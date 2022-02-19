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

 * Returns all Pokemon names with a matching type. Case-insensitive. If the inputted `pokemon` array is empty or no pokemon match the inputted `type`, return `[]`.

 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {string} type - an optional parameter. The type of a Pokemon. (e.g. "Fire")
 * @returns {Object[]} An array of Pokemon objects where at least one of the Pokemons's types matches the `type` inputted.
 *
 * EXAMPLE:

 *  filterByType(pokemon, "Steel");
 *  //> [ {
 *          // 'Sandshrew'
 *        }, 
 *        {
 *          // 'Diglett'
 *        }, 
 *        {
 *          // 'Dugtrio'
 *        } ]

 *
 * EXAMPLE:
 *  filterByType(pokemon, "Shadow")
 *  //> [];
 */
function filterByType(pokemon, type='Normal') {
  let matchingPoke = [];
  for (let poke of pokemon) {
    for (let pokeType of poke.type) {
      if (pokeType.toLowerCase() == type.toLowerCase()) {
        matchingPoke.push(poke);
      }
    }
  }
  return matchingPoke;
}

/**
 * getPokemonNamesMostEffectiveAgainstType()
 * -----------------------------
 * Returns all names of Pokemon that have a `type` to which the given `type` is weak.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {object} weaknesses - An object where the keys are Pokemon types and the values are and array of the types of Pokemon to which the given type is weakened.
 * @param {string} type - A type as a string. (e.g. "Psychic")
 * @returns {Object[]} An array of unique Pokemon names where the at least one of its types is a `type` the passed in `type` is weakened by.
 *
 * EXAMPLE:
 *  getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, "Dragon");
 *  //> [
        "Dratini",
        "Dragonair",
        "Dragonite",
    ];
    *  getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, "copyright infringement");
 *  //> [];
 */
function getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, type) {
  if (!weaknesses[type]) return `No Pokemon found of type: '${type}'.`;

  let weakPokemon = [];
  // for (let cType of weaknesses[type]){
  //   for (let poke of pokemon) {
  //     if (poke.type.includes(cType) && !weakPokemon.includes(poke.name)){
  //       weakPokemon.push(poke.name);
  //     }
  //   }
  // }

  for (let poke of pokemon) {
    for (let pokeType of poke.type){
      if (weaknesses[type].includes(pokeType) && !weakPokemon.includes(poke.name)){
        weakPokemon.push(poke.name);
      }
    }
  }
  return weakPokemon;
}

module.exports = {
    filterByType,
    getPokemonNamesMostEffectiveAgainstType
}
