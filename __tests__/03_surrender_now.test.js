const {
  filterByType,
  getPokemonNamesMostEffectiveAgainstType,
} = require("../src/03_surrender_now");

const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");
const weaknesses = require("../data/weaknesses");

describe("filterByType()", () => {
  test("should return the names of pokemon with matching type", () => {
    const type = "Grass";
    const actual = filterByType(pokemon, type);
    const expected = [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Paras",
      "Parasect",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Exeggcute",
      "Exeggutor",
      "Tangela",
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no pokemon of that type", () => {
    const type = "Shadow";
    const actual = filterByType(pokemon, type);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getPokemonNamesMostEffectiveAgainstType()", () => {
  test("should return the names of pokemon that are weak to the given type", () => {
    const type = "Water";
    const actual = getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, type);
    const expected = [
      "Pikachu",
      "Raichu",
      "Voltorb",
      "Electrode",
      "Zapdos",
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Paras",
      "Parasect",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Exeggcute",
      "Exeggutor",
      "Tangela",
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an error message if no pokemon match type", () => {
    const type = "Hot Sauce";
    const actual = getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, type);
    const expected = `No Pokemon found of type: '${type}'.`;
    expect(actual).toEqual(expected);
  });
});
