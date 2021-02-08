const express = require("express");

const router = express.Router();

router.get("/:id/:info", (req, res) => res.send("ID INFO"));
router.get("/:id", (req, res) => res.send(" ID route"));
router.get("/", (req, res) => res.send("Hello from / pokemons"));

module.exports = router;
