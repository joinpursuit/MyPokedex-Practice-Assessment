const {
    countByType
} = require("../src/02_make_it_double");

const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");

describe("countByType()", () => {
    test("should return an object where the keys are types and the values are the number of Pokemon with that type", () => {
        const actual = countByType(pokemon);
        const expected = {
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
        expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the movies inputted", () => {
        const actual = countByType(shuffledPokemon);
        const expected = {
            Grass: 1,
            Psychic: 1,
            Fighting: 2,
            Water: 2,
            Normal: 4,
            Bug: 1,
            Fire: 1,
            Flying: 2
        };
        expect(actual).toEqual(expected);
    });
    test("should return an empty object if there are no movies", () => {
        const actual = countByType([]);
        const expected = {};
        expect(actual).toEqual(expected);
    });
});