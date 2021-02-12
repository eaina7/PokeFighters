const Pokemon = require("../models/Pokemon")


module.exports = {
  getAll: (req, res) => {
    const dbRes = await Pokemon.find({});
    res.json(dbRes);
  },
};
