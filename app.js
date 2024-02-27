const express = require('express');
const bodyParser = require('body-parser'); // Importa body-parser
const middleman = require('./middleman');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Usa body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el envío del formulario
app.post('/guardar-datos', middleman.guardarDatos);

// Ruta para obtener los datos almacenados
app.get('/obtener-datos', middleman.obtenerDatos);

app.get('/', (req, res) => {
  res.render('welcome');
});

// Ruta para renderizar la página de ingreso de datos
app.get('/ingresar', (req, res) => {
  res.render('ingresar');
});

// Ruta para renderizar la página de reporte
app.get('/reporte', (req, res) => {
  res.render('reporte');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
