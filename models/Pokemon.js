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
      type: Map,
      of: Number
    }
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
