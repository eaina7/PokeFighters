const pokemons = require('../pokedex.json');
const pokemonsContoller = {
    getAll: (req, res) => {
        res.json(pokemons);
    },
    getPokemonById: (req, res) => {
        try {
            const { id } = req.params;
            if (isNaN(id) || id < 1 || id > 809) {throw {code: 400, message:'Please use a correct id number'}}
            const pokemon = pokemons.find(poke => poke.id == id)
            res.json(pokemon)
        } catch (e) {
            res.json(e)
        } 
    }, 
    getPokemonInfoByIdAndInfo: (req, res) => {
        try {
            const {id, info} = req.params;
            if (isNaN(id) || id < 1 || id > 809) {throw {code: 400, message:'Please enter a valid id number'}}
            if (!(["name", "type", "base"].includes(info))) {throw {code: 400, message:'Wrong info type, choose between [name, type, base]'}}
            const pokemon = pokemons.find(poke => poke.id == id);
            res.json(pokemon[info])
        } catch (e) {
            res.json(e)
        }
    }
    
}

module.exports = pokemonsContoller;