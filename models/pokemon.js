
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name : {
        type: String,
        require:  true
    },
    img: {
        type: String,
        require: true
    }
})
// const pokemon = [
//     {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"},
//     {name: "ivysaur", img: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"},
//     {name: "venusaur", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg"},
//     {name: "charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg"},
//     {name: "charizard", img: "https://img.pokemondb.net/artwork/large/charizard.jpg"},
//     {name: "squirtle", img: "https://img.pokemondb.net/artwork/large/squirtle.jpg"},
//     {name: "wartortle", img: "https://img.pokemondb.net/artwork/large/wartortle.jpg"}
//  ];

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon



















/* const mongoose = require('mongoose');
const pokemonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,

    }
})

const Pokemon = mongoose.model('Pokemon',pokemonSchema);

module.exports = Pokemon; */




/* const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
 ];

 module.exports = pokemon; */