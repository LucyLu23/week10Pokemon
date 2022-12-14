require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pokemons =  require('./models/pokemon');

const port =3001;
app.get('/',(req, res) => res.send('Welcome to the Pokemon App!'));

//middleware
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

//connect to mongoose/remove deprication warning
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open',()=>{
console.log('connected to mongoose')
});

//Index
app.get('/pokemon',(req, res) => {
    //res.send(pokemon);
  /*   res.render('pokemon/Index',{
        pokemons:pokemon
    }); */
    Pokemons.find({},(error, allPokemons)=>{
        res.render('pokemon/Index',{
            pokemon: allPokemons

        })
    })


    });

//new
app.get('/pokemon/new',(req, res)=>{
    res.render('pokemon/New');
})

//POST
app.post('/pokemon',(req,res)=>{
    //console.log(req.body)
    Pokemons.create(req.body, (error, createdPokemons) =>{
        //res.send(createdPokemons)
        res.redirect('/pokemon')
    })


})


//show
app.get('/pokemon/:id',(req, res) => {
    //res.send(req.params.id);

    //res.send(pokemon[req.params.id]);
   /*   res.render('Show',{
        pokemon:pokemon[req.params.id]

    }); */
    Pokemons.findById('req.params.id',(err, foundPokemons)=>{
        res.render('pokemon/Show', {
            pokemon: foundPokemons
        })
    })

});

app.listen(port, () => {
    console.log(`${port} - listening`);
});