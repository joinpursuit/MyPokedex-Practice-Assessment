const weaknesses = {
    "Bug": ["Fire", "Flying", "Rock"],
    "Dark": ["Bug", "Fairy", "Fighting"],
    "Dragon": ["Dragon", "Ice", "Fairy"],
    "Electric": ["Ground"],
    "Fairy": ["Steel", "Poison"],
    "Fighting": ["Fairy", "Flying", "Psychic"],
    "Fire": ["Ground", "Rock", "Water"],
    "Flying": ["Electric", "Ice", "Rock"],
    "Ghost": ["Dark", "Ghost"],
    "Grass": ["Bug", "Fire", "Flying", "Ice", "Poison"],
    "Ground": ["Grass", "Ice", "Water"],
    "Ice": ["Fire", "Fighting", "Rock"],
    "Normal": ["Fighting"],
    "Poison": ["Ground", "Psychic"],
    "Psychic": ["Bug", "Dark", "Ghost"],
    "Rock": ["Fighting", "Grass", "Ground", "Steel", "Water"],
    "Steel": ["Fighting", "Fire", "Ground"],
    "Water": ["Electric", "Grass"]
};

module.exports = weaknesses;