const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const pokemonSchema = new Schema({
    name: String,
    nickName: String,
    front: String,
    back: String,
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    xp: Number,
    types: Array,

}, {collection: "Pokemon"})

module.exports = model("Pokemon", pokemonSchema)