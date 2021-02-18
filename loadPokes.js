const pokes = require('./pokedex.json');
const Pokemon = require('./models/Pokemon')

const loadPokemons = (pokemons) => {
  pokemons.forEach(async (poke, index) => {
      try {
        await Pokemon.create({
          "id": poke.id,
          "name": poke.name,
          "type": poke.type,
          "base": poke.base
        })
        console.log(`Poke number ${index} is added`)
    } catch (e) {
      console.error(Error(e));
    }
  })
}

loadPokemons(pokes.slice(0, 5))




// {
//   "id": 1,
//   "name": {
//     "english": "Bulbasaur",
//     "japanese": "フシギダネ",
//     "chinese": "妙蛙种子",
//     "french": "Bulbizarre"
//   },
//   "type": [
//     "Grass",
//     "Poison"
//   ],
//   "base": {
//     "HP": 45,
//     "Attack": 49,
//     "Defense": 49,
//     "Sp. Attack": 65,
//     "Sp. Defense": 65,
//     "Speed": 45
//   }
// }