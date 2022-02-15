const {
    getAllPokemonNames,
    getHighestAttackStatScore,
    getAverageTotalStatScore
} = require("../src/01_prepare_for_trouble");

const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");

describe("getAllPokemonNames()", () => {
    test("should return all Pokemon names from an array of Pokemon", () => {
        const actual = getAllPokemonNames(pokemon);
        const expected = [
            'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon',
            'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie',
            'Weedle', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Spearow',
            'Fearow', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew',
            'Sandslash', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales',
            'Jigglypuff', 'Wigglytuff', 'Paras', 'Parasect', 'Venonat',
            'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian',
            'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe',
            'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra',
            'Kadabra', 'Alakazam', 'Bellsprout', 'Weepinbell', 'Victreebel',
            'Geodude', 'Graveler', 'Golem', 'Slowpoke', 'Slowbro',
            'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Onix',
            'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb',
            'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak',
            'Hitmonlee', 'Hitmonchan', 'Koffing', 'Weezing', 'Chansey',
            'Tangela', 'Horsea', 'Goldeen', 'Seaking', 'Staryu',
            'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Pinsir',
            'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto',
            'Porygon', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres',
            'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo'
        ];
        expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the Pokemon inputted", () => {
        const actual = getAllPokemonNames(shuffledPokemon);
        const expected = [
            'Exeggcute', 'Primeape',
            'Shellder', 'Meowth',
            'Caterpie', 'Growlithe',
            'Ditto', 'Spearow',
            'Poliwhirl', 'Mankey',
            'Fearow'
        ];
        expect(actual).toEqual(expected);
    });
    test("should return an empty array if there are no Pokemon", () => {
        const actual = getAllPokemonNames([]);
        const expected = [];
        expect(actual).toEqual(expected);
    });
});

describe("getHighestAttackStatScore", () => {
    test("should return the highest attack stat score among all Pokemon as a number", () => {
        const actual = getHighestAttackStatScore(pokemon);
        const expected = 134;
        expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the pokemon inputted", () => {
        const actual = getHighestAttackStatScore(shuffledPokemon);
        const expected = 105;
        expect(actual).toEqual(expected);
    });
    test("should return `0` if there are no pokemon", () => {
        const actual = getHighestAttackStatScore([]);
        const expected = 0;
        expect(actual).toEqual(expected);
    });
});

describe("getAverageTotalStatScore()", () => {
    test("should return the average attack stat score among all Pokemon as a number", () => {
        const actual = getAverageTotalStatScore(pokemon);
        const expected = 407.22;
        expect(actual).toBeCloseTo(expected, 2);
    });
    test("should dynamically change depending on the Pokemon inputted", () => {
        const actual = getAverageTotalStatScore(shuffledPokemon);
        const expected = 327.45;
        expect(actual).toBeCloseTo(expected, 2);
    });
    test("should return `0` if there are no Pokemon", () => {
        const actual = getAverageTotalStatScore([]);
        const expected = 0;
        expect(actual).toBeCloseTo(expected, 2);
    });
});