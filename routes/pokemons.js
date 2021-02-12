const express = require("express");
const { getAll } = require("../controllers/allPokemons");
const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", (req, res) => res.send(" ID route"));
router.get("/", (req, res) => res.send("Hello from / pokemons"));

module.exports = router;
