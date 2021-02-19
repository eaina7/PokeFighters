const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  "id": Number,
    "name": {
      type: Object,
      of: String
    },
    "type": Array,
    "base": {
      type: Object,
      of: Number
    }
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
