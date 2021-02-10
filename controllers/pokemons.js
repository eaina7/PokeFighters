const pokemons = require('../pokedex.json');
const pokemonsContoller = {
    getAll: (req, res) => {
        res.json(pokemons);
    },
    getPokemonById: (req, res) => {
        const { id } = req.params;
        const pokemon = pokemons.find(poke => poke.id == id)
        res.json(pokemon)
    }, 
    getPokemonInfoByIdAndInfo: (req, res) => {
        const {id, info} = req.params;
        const pokemon = pokemons.find(poke => poke.id == id);
        res.json(pokemon[info])
    }
    
}

module.exports = pokemonsContoller;