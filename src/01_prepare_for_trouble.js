/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all Pokemon names from an array of Pokemon. If the inputted `pokemon` array is empty, return `[]`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are Pokemon names.
 *
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'Bulbasaur',  'Ivysaur',    'Venusaur',   'Charmander', 'Charmeleon',
  'Charizard',  'Squirtle',   'Wartortle',  'Blastoise',  'Caterpie',
  'Weedle',     'Pidgey',     'Pidgeotto',  'Pidgeot',    'Spearow',
  'Fearow',     'Arbok',      'Pikachu',    'Raichu',     'Sandshrew',
  'Sandslash',  'Clefairy',   'Clefable',   'Vulpix',     'Ninetales',
  'Jigglypuff', 'Wigglytuff', 'Paras',      'Parasect',   'Venonat',
  'Venomoth',   'Diglett',    'Dugtrio',    'Meowth',     'Persian',
  'Psyduck',    'Golduck',    'Mankey',     'Primeape',   'Growlithe',
  'Arcanine',   'Poliwag',    'Poliwhirl',  'Poliwrath',  'Abra',
  'Kadabra',    'Alakazam',   'Bellsprout', 'Weepinbell', 'Victreebel',
  'Geodude',    'Graveler',   'Golem',      'Slowpoke',   'Slowbro',
  'Shellder',   'Cloyster',   'Gastly',     'Haunter',    'Onix',
  'Drowzee',    'Hypno',      'Krabby',     'Kingler',    'Voltorb',
  'Electrode',  'Exeggcute',  'Exeggutor',  'Cubone',     'Marowak',
  'Hitmonlee',  'Hitmonchan', 'Koffing',    'Weezing',    'Chansey',
  'Tangela',    'Horsea',     'Goldeen',    'Seaking',    'Staryu',
  'Starmie',    'Mr. Mime',   'Scyther',    'Jynx',       'Pinsir',
  'Tauros',     'Magikarp',   'Gyarados',   'Lapras',     'Ditto',
  'Porygon',    'Snorlax',    'Articuno',   'Zapdos',     'Moltres',
  'Dratini',    'Dragonair',  'Dragonite',  'Mewtwo'
];
 */

  // My Solution:
  // 1. Understand the Problem:
  //  1) Input an array via the `pokemon` parameter. 
  //  2) If array is empty, return `[]`,
  //  3) Else return an array of strings, which are Pokemon names accessed and retrieved from the original Pokemon objects array passed in.

  // 2. The Strategy/Plan:
  //  1) Create an empty array and assign it to a variable.
  //  2) Iterate over the inputted `pokemon` array of objects.
  //  3) If array is empty, return an empty array.
  //  4) If `pokemon` array is not empty push the `.name` key of every object into the new array `pokeNames` and return the array.

function getAllPokemonNames(pokemon) {
  let pokeNames = [];

  for (let i = 0; i < pokemon.length; i++) {
    pokeNames.push(pokemon[i].name);
  }

  return pokeNames;
};

/**
 * getHighestAttackStatScore()
 * -----------------------------
 * Returns the highest `attack` stat score among all Pokemon. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The highest `attack` stat of all Pokemon.
 *
 * EXAMPLE:
 *  getHighestAttackStatScore(pokemon);
 *  //> 134
 */

// My Solution:
// 1. Understand the Problem:
//  1) Input an array via the `pokemon` parameter. 
//  2) If array is empty, return `0`,
//  3) Else return the highest `attack` stat score among all Pokemon.

// 2. The Strategy/Plan:
//  1) Create a variable `highestAttack` to hold the highest score or else assign zero to it and return it. 
//  2) Access the `stats` key then array and the category of 'attack' at the correct index of every object.
//  3) Use a nested for loop inside of a for loop to iterate over every `stats` array and check the value of every object with the `category` key and value `attack`. 
//  4) Use the accumulator pattern to find the largest value of the scores at `attack` objects. 
//  5) Return the highest score.


function getHighestAttackStatScore(pokemon) {
  let highestAttack;
  let statsVal;
  let statsCat;

  if (pokemon.length < 1 || pokemon === undefined) {
    highestAttack = 0;
  } else {
    highestAttack = pokemon[0].stats[2].value;
    for (let i = 1; i < pokemon.length; i++) {
      for (let j = 0; j < pokemon[i].stats.length; j++) {
        statsVal = pokemon[i].stats[2].value;
        statsCat = pokemon[i].stats[2].category;
        if (statsCat === 'attack' && statsVal > highestAttack) {
          highestAttack = statsVal;
        }
      }
    } 
  }

  return highestAttack;
};

/**
 * getAverageTotalStatScore()
 * -----------------------------
 * Averages all of the `total` stat scores from all Pokemon and returns it, as a number. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The average `total` stat across all Pokemon.
 *
 * EXAMPLE:
 *  getAverageTotalStatScore(pokemon);
 *  //> 407.22
 */

function getAverageTotalStatScore(pokemon) {
  let averageAttack = 0;
  let counter = 0;
  let statsAttackVal;
  
  if (pokemon.length < 1 || pokemon === undefined) {
    return averageAttack;
  } else {
    for (let i = 0; i < pokemon.length; i++) {
      for (let j = 0; j < pokemon[i].stats.length; j++) {
        statsAttackVal = pokemon[i].stats[0].value;
        averageAttack += statsAttackVal;
        counter++;
      }
    } 
  }

  averageAttack = Number((averageAttack / counter).toFixed(2));

  return averageAttack;
};


module.exports = {
    getAllPokemonNames,
    getHighestAttackStatScore,
    getAverageTotalStatScore
};