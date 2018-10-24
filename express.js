const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers.js');

const port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));

//Express HBS engine
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Maxi Lopez'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        nombre: 'Maxi Lopez'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});