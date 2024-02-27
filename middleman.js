const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

// Función para guardar los datos en localStorage
function guardarDatos(req, res) {
  const { categoria, fecha, cantidad } = req.body;

  //console.log('Guardando datos en localStorage:', { categoria, fecha, cantidad });
  
  // Guardar los datos en localStorage
  let data = {
    categoria,
    fecha,
    cantidad
  };
  let existingData = JSON.parse(localStorage.getItem('datos')) || [];
  existingData.push(data);
  localStorage.setItem('datos', JSON.stringify(existingData));

  //console.log('Datos guardados exitosamente.');
  console.log('Datos guardados en localStorage:', localStorage.getItem('datos'));
  
  res.redirect('/'); // Redireccionar a la página principal o a donde desees
}


function obtenerDatos(req, res) {
  // Obtener los datos del localStorage
  let existingData = JSON.parse(localStorage.getItem('datos')) || [];
  
  console.log('Datos obtenidos de localStorage:', existingData);

  res.json(existingData); // Enviar los datos como respuesta JSON
}


module.exports = { guardarDatos, obtenerDatos };
