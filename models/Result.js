const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  "fight_id": String,
  "fighting_pokemons": Array,
  "winner": Number,
  "date": {type: Date, default: Date.now}
}, { versionKey: null });

module.exports = mongoose.model("Result", resultSchema);
