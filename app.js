// Imports
const express = require('express')
const app = express()
const port = process.env.port || 5000;
const path = require('path');
// Static Files
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(require('./routes/index'))

app.use(express.static(path.join(__dirname, '/')));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Rutas en español
app.get('', (req, res) => {
    res.render('index', {
   
    })
})

// Para evitar bugs..
app.get('/#contacto', (req, res) => {
    res.render('index#contacto')
})

app.get('/acerca-de', (req, res) => {
    res.render('acerca-de', {

    })
})
app.get('/equipo', (req, res) => {
    res.render('equipo', {

    })
})
app.get('/multimedia', (req, res) => {
    res.render('multimedia', {

    })
})


// Rutas en ingles
app.get('/en', (req, res) => {
   res.render('index-en')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/media', (req, res) => {
    res.render('media')
})
app.get('/team', (req, res) => {
    res.render('team')
})


// Par evitar bugs..
app.get('/#contact', (req, res) => {
    res.render('index-en#contact')
})


app.get('/success', (req, res) => {
    res.render('success')
})

app.listen(port, () => console.info(`App listening on port ${port}`))