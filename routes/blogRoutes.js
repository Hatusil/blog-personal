const express = require('express');
const router = express.Router();
const BlogController = require('../models/BlogController');

// Ruta para la página principal (listar publicaciones)
router.get('/', BlogController.getPosts);

// Ruta para crear una nueva publicación
router.get('/new', BlogController.newPostForm);
router.post('/new', BlogController.createPost);

// Ruta para editar una publicación
router.get('/edit/:id', BlogController.editPostForm);
router.post('/edit/:id', BlogController.updatePost);

// Ruta para eliminar una publicación
router.post('/delete/:id', BlogController.deletePost);

// Ruta para comentar en una publicación
router.post('/comment/:id', BlogController.addComment);


// Ruta para mostrar el formulario de registro
router.get('/register', (req, res) => {
    res.render('register');
});

  // Ruta para manejar el registro
router.post('/register', BlogController.registerUser);

  // Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login');
});

  // Ruta para manejar el inicio de sesión
router.post('/login', BlogController.loginUser);

  // Ruta para Búsqueda
router.get('/search', BlogController.searchPosts);

  // ruta POST para enviar el comentario
router.post('/comment/:id', BlogController.addComment);

// Ruta para mostrar el formulario de comentario
router.get('/comment/:id', (req, res) => {
  const postId = req.params.id;
  res.render('comment', { postId });
});

module.exports = router;
