const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: String,
  type: String,
  base: Integer,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
