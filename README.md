## Blog Personal
Este proyecto es una aplicación de blog desarrollada con Node.js y Express. Permite a los usuarios registrarse, iniciar sesión, crear, editar y eliminar publicaciones, comentar en publicaciones y buscar publicaciones por título o categoría.

## Descripción del Proyecto
Desarrollar un sistema de blog que almacene información relacionada con publicaciones, usuarios y comentarios, incluyendo herramientas de filtrado y búsqueda avanzadas.


## Estructura del Proyecto

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
│   ├── login.pug           # Formulario de inicio de sesión
│   └── comment.pug         # Formulario para comentar en publicaciones
├── public/                 # Archivos estáticos (CSS, JS, imágenes)
│   ├── styles/
│   │   └── styles.css
│   ├── JS/                 # (opcional) Carpeta para archivos JS
│   └── imágenes/           # (opcional) Carpeta para imágenes
├── data/
│   ├── posts.json          # Almacena las publicaciones del blog
│   └── users.json          # Almacena los datos de los usuarios
└── README.md               # Documentación del proyecto

# Documentación del proyecto

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Creación, edición y eliminación de publicaciones.
- Comentarios en publicaciones.
- Búsqueda de publicaciones.
- Almacenamiento de datos en archivos JSON.

## Objetivos Específicos

- Desarrollar una aplicación web utilizando Node.js y Express.
- Integrar una base de datos JSON.
- Aplicar conceptos de asincronía y manejo de promesas.
- Organizar el código en módulos.
- Utilizar el motor de plantillas Pug para generar HTML simple.
- Implementar un sistema de rutas dinámicas y middleware.
- Probar la aplicación con Postman o Thunder Client.
- Seguir buenas prácticas de desarrollo, manteniendo una estructura de carpetas ordenada y utilizando POO.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con npm install.
3. Inicia el servidor con node app.js.
4. Accede a la aplicación en http://localhost:3000.

## Pruebas
Puedes probar las rutas y funcionalidades utilizando Postman o Thunder Client.