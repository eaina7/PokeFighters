const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const pokemonRoutes = require("./routes/pokemons");
const resultsRoutes = require("./routes/results");
const bodyParser = require("body-parser");

app.use(cors());

const mongoDB =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.xm6he.mongodb.net/pokemons?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/fight", resultsRoutes);
app.use("/", pokemonRoutes);

app.listen(port, () => console.log(`Server listening to ${port}!`));
