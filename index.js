const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 3000;
const pokemonRoutes = require("./routes/pokemons");

//Since we haven't created a database on mongodb => we have to replace the path correctly when we've done this, I think.
const mongoDB = "mongodb://127.0.0.1:27017/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => res.send("test"));

app.use("/pokemons", pokemonRoutes);

app.listen(port, () => console.log(`Server listening to ${port}`));
