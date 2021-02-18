// const Result = require('../models/Result');
const Pokemon = require('../models/Pokemon');

const resultsController = {
  fight: async (req, res) => {
    const {firstPokeID, secondPokeID} = req.query;
    // res.send(`${firstPokeID}, ${secondPokeID}`)
    firstPokemonAttack = await Pokemon.find({id: firstPokeID});
    // firstPokemonDefence = await Pokemon.find({id: firstPokeID});
    secondPokemonAttack = await Pokemon.find({id: secondPokeID});
    // secondPokemonDefence = await Pokemon.find({id: secondPokeID});
    const pokeBase = await firstPokemonAttack[0].base;
    const {HP, Attack} = await pokeBase
    console.log("Data", HP)
    res.send("yolo")
  //   Result.create({
  //   "winner id": firstPokeID,
  //   "looser id": secondPokeID})
  //   res.send("It's over")
  }
}

module.exports = resultsController;