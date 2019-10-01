// Cuando la aplicacion arranque se leera primero el puerto en el archivo config.js:
require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

// Escucho el puerto definido, si es ambiente de algun servidor utilizara el del ambiente, si no utiliza el 3000 (definido en config.js).
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT)
})