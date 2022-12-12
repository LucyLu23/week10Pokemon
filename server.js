const express = require('express');
const app = express();
const pokemon =  require('./models/pokemon');

const port =3001;

app.get('/',(req, res) => res.send('Welcome to the Pokemon App!'));
app.get('/models/pokemon',(req, res) => res.send(pokemon));
app.get('/views/Index',(req, res) => res.send(Index));

app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());





app.listen(port, () => {
    console.log(`${ port} - listening`);
});