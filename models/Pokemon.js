const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  "id": Number,
    "name": {
      type: Map,
      of: String
    },
    "type": Array,
    "base": {
      hp: Number,
      attack: Number,
      defense: Number,
      special_attack: Number,
      special_defense: Number,
      speed: Number,
    }
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
