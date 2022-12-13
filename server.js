const express = require('express');
const app = express();
const pokemon =  require('./models/pokemon.js');

const port =3001;
app.get('/',(req, res) => res.send('Welcome to the Pokemon App!'));

app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.get('/pokemon/',(req, res) => {
    res.send(pokemon);
    });

app.get('/pokemon/:id',(req, res) => {
    //res.send(pokemon[req.params.id]);
    res.render('Show',{
        pokemon:pokemon[req.params.id]

    });

});

app.listen(port, () => {
    console.log(`${ port} - listening`);
});