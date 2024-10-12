const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas principales
const blogRoutes = require('./routes/blogRoutes');
app.use('/', blogRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
