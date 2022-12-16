require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pokemon =  require('./models/pokemon');
const methodOverride = require('method-override');

const port =3001;
app.get('/',(req, res) => res.send('Welcome to the Pokemon App!'));

//middleware
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

//connect to mongoose/remove deprication warning
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open',()=>{
console.log('connected to mongoDB')
});

//Index
app.get("/pokemon", (req, res) => {
    //find all pokemon
    Pokemon.find({}, (error, allPokemons) => {
        res.render("Index", {
        pokemon: allPokemons,
        });
    });
    });
  
//new
app.get('/new',(req, res)=>{
    res.render('New');
})

/* //create
app.post('/pokemon',(req, res)=>{
    //res.send('pokemon sent')
    Pokemon.create(req.body, (error,newPokemon)=>{
        res.redirect('/pokemon')
    })
});
app.get('/pokemon/new',(req,rew)=>{
    res.render('New');

})
 */

//POST 
app.post('/pokemon',(req,res)=>{
    //console.log(req.body)
    Pokemon.create(req.body, (error, createdPokemon) =>{
        //res.send(createdPokemons)
        res.redirect('/pokemon')
    })
})
app.get('/pokemon/new',(req,res)=>{
    res.render('New');

})

//show
app.get('/pokemon/:id',(req, res) => {
     Pokemon.findById(req.params.id,(err, foundPokemon)=>{
        res.render('Show', {
            pokemon: foundPokemon
        });
    });

});
//edit 
app.get('pokemon/:id/edit',(req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render("Edit",{
            pokemon:foundPokemon
        })
    })
})

//PUT
app.put("/pokemon/:id", (req, res) => {
    //find pokemon by id and update it
    // redirect to the pokemon show page
 
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
      console.log(updatedPokemon);
      res.redirect(`/pokemon/${req.params.id}`);
    });
  });
  
//DELETE

app.delete("/pokemon/:id", (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect("/pokemon");
    })
})




app.listen(port, () => {
    console.log(`${port} - listening`);
});