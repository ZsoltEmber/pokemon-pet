require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Pokemon = require("./model/Pokemon")

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
  }


const app = express()
app.use(express.json())


mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(3000, () => {
        console.log('Im in! Open this link: http://127.0.0.1:3000');
    })
})



app.get("/api/pokemon", async(req, res) => {
    const AllPokemon = await Pokemon.find({})
    res.send(AllPokemon)
    res.status(200)
})

app.get('/api/pokemon/:id', async (req, res) =>{
    const pokemon = await Pokemon.findById(req.params.id);

    res.json(pokemon)
})
