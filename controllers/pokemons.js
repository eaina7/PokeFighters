// const pokemons = require('../pokedex.json');
const Pokemon = require('../models/Pokemon')

//import the model and use it here below
//Add create pokemons 
const pokemonsContoller = {
    getAll: async (_, res) => {
        const allPokemons = await Pokemon.find()
        res.json(allPokemons);
    },
    getPokemonById: async (req, res) => {
        try {
            const { id } = req.params;
            if (isNaN(id) || id < 1 || id > 809) {throw {code: 400, message:'Please use a correct id number'}}
            const pokemon = await Pokemon.find({id: id})
            if (!pokemon.length) {throw {code: 404, message:'No pokemons found'}}
            res.json(pokemon)
        } catch (e) {
            res.json(e)
        } 
    }
}

module.exports = pokemonsContoller;