const express = require("express");
const app = express();
const port = process.env.port || 3000;
const pokemonRoutes = require("./routes/pokemons");

app.get("/", (req, res) => res.send("test"));

app.use("/pokemons", pokemonRoutes);

app.listen(port, () => console.log(`Server listening to ${port}`));
