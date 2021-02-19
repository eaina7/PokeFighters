const Result = require('../models/Result');
const Pokemon = require('../models/Pokemon');

const resultsController = {
  fight: async (req, res) => {
    try {
      const {firstPokeID, secondPokeID} = req.body;
      // const firstPokemon = await Pokemon.find({id: firstPokeID});
      // const firstPokemonAttack = firstPokemon[0].base.Attack;
      // const firstPokemonDefense = firstPokemon[0].base.Defense;

      // const secondPokemon = await Pokemon.find({id: secondPokeID});
      // const secondPokemonAttack = secondPokemon[0].base.Attack;
      // const secondPokemonDefense = secondPokemon[0].base.Defense;

      // const fightingPokemons = [firstPokemon[0], secondPokemon[0]]
    
      const fightingPokemonsIds = [+firstPokeID, +secondPokeID]
      const winnerId = await fightingPokemonsIds[Math.floor(Math.random() * 2)];
      const winner = await Pokemon.find({id: winnerId})
      
      Result.create({
        "fight_id": `${firstPokeID}vs${secondPokeID}`,
        "fighting_pokemons": fightingPokemonsIds,
        "winner": winnerId
      })

      res.json(winner)

    } catch (e) {
      console.error(Error(e));
    }
  }
}

module.exports = resultsController;