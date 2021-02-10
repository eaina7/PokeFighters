const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.port || 3000;
const pokemonRoutes = require("./routes/pokemons");

app.use(cors())

app.use("/", pokemonRoutes); 

app.listen(port, () => console.log(`Server listening to ${port}!`));
