const {
    filterByType,
    getPokemonNamesMostEffectiveAgainstType
} = require("../src/03_surrender_now");

const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");
const weaknesses = require("../data/weaknesses");

describe("filterByGenre()", () => {
    test("should return all pokemon that include the specified type", () => {
        const type = "Mystery";
        const actual = filterByType(pokemon, type);
        const expected = [
            pokemon[2], // Coco
        ];
        expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the type inputted", () => {
        const type = "Fantasy";
        const actual = filterByType(pokemon, type);
        const expected = [
            pokemon[0], // Toy Story 4
            pokemon[1], // Inside Out
            pokemon[2], // Coco
            pokemon[5], // How to Train Your Dragon
            pokemon[8], // Fantasia
            pokemon[9], // James and the Giant Peach
        ];
        expect(actual).toEqual(expected);
    });
    test("should dynamically change depending on the pokemon inputted", () => {
        const type = "Action";
        const actual = filterByType(alternative, type);
        const expected = [
            alternative[0], // Black Panther
            alternative[1], // Wonder Woman
            alternative[3], // Skyfall
        ];
        expect(actual).toEqual(expected);
    });
    test("should be case-insensitive", () => {
        const type = "FANTASY";
        const actual = filterByType(pokemon, type);
        const expected = [
            pokemon[0], // Toy Story 4
            pokemon[1], // Inside Out
            pokemon[2], // Coco
            pokemon[5], // How to Train Your Dragon
            pokemon[8], // Fantasia
            pokemon[9], // James and the Giant Peach
        ];
        expect(actual).toEqual(expected);
    });
    test("should return an empty array if no pokemon match the type", () => {
        const type = "Horror";
        const actual = filterByType(pokemon, type);
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test("should return an empty array if there are no pokemon", () => {
        const type = "Action";
        const actual = filterByType([], type);
        const expected = [];
        expect(actual).toEqual(expected);
    });
});