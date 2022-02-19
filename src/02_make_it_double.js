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
let result = {};
if (pokemon.length === 0){
  return result;
} 
for (let i = 0; i < pokemon.length; i++){//loop pokemon arr
//console.log(pokemon[0].type);
  for (let j = 0; j < pokemon[i].type.length; j++){//loop the type arr within pokemom
    if (result[pokemon[i].type[j]]){
      result[pokemon[i].type[j]]+=1;
    } else {
      result[pokemon[i].type[j]] = 1;
    }
  }

}

return result;
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
function findByNumber(pokemon, pokeNum) {
let result = null;

if (pokemon.length === 0){
  return result;
}


for (i = 0; i < pokemon.length; i++){
  //console.log(pokemon[i].national_number);
  //console.log(pokeNum);
  if (pokemon[i].national_number === pokeNum){//code dont get here yet...
    //console.log("asda")//this dont work so not get here...
    result = pokemon[i];

  } 
}

//console.log(result);

return result;
};


module.exports = {
    countByType,
    findByNumber,
};