const express = require("express");
const router = express.Router();
const pokemonsContoller = require('../controllers/pokemons')

router.get('/', (req, res) => {
    console.log("redirecting")
    res.redirect('/pokemons')
});

router.get("/pokemons/:id", pokemonsContoller.getPokemonById);
router.get("/pokemons", pokemonsContoller.getAll);


module.exports = router;
