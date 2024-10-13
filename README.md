# Blog Personal

Este proyecto es una aplicación de blog desarrollada con Node.js y Express. Permite a los usuarios registrarse, iniciar sesión, crear, editar y eliminar publicaciones, comentar en publicaciones y buscar publicaciones por título o categoría.

## Estructura del Proyecto
```
blog-personal/
│
├── app.js                  # Archivo principal que inicia el servidor
├── package.json            # Dependencias del proyecto
├── routes/                 # Rutas de la aplicación
│   └── blogRoutes.js       # Rutas del blog
├── models/                 # Controladores de la lógica de negocio
│   └── BlogController.js   # Controlador para manejar publicaciones y usuarios
├── views/                  # Vistas Pug
│   ├── index.pug           # Página principal que lista publicaciones
│   ├── new.pug             # Formulario para crear nuevas publicaciones
│   ├── edit.pug            # Formulario para editar publicaciones
│   ├── register.pug        # Formulario de registro de usuarios
│   └── login.pug           # Formulario de inicio de sesión
├── public/                 # Archivos estáticos (CSS, JS, imágenes)
│   ├── styles/
│   │   └── styles.css
│   ├── JS/                  # (opcional) Carpeta para archivos JS
│   └── imágenes/            # (opcional) Carpeta para imágenes
├── data/
│   ├── posts.json         # Almacena las publicaciones del blog
│   └── users.json         # Almacena los datos de los usuarios
└── README.md               # Documentación del proyecto
```
# Documentación del proyecto

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Creación, edición y eliminación de publicaciones.
- Comentarios en publicaciones.
- Búsqueda de publicaciones.
- Almacenamiento de datos en archivos JSON.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor con `node app.js`.
4. Accede a la aplicación en `http://localhost:3000`.

## Pruebas

Puedes probar las rutas y funcionalidades utilizando Postman o Thunder Client. Captura de pantallas y documentación disponibles.

