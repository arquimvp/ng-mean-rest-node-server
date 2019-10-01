// Cuando la aplicacion arranque se leera primero el puerto en el archivo config.js:
require('./config/config');

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: true,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

// Escucho el puerto definido, si es ambiente de algun servidor utilizara el del ambiente, si no utiliza el 3000 (definido en config.js).
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT)
})