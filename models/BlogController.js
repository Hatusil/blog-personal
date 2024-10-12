const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/posts.json');
const usersPath = path.join(__dirname, '../data/users.json');


class BlogController {

  // Obtener todas las publicaciones
static getPosts(req, res) {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.render('index', { posts });
}

  // Mostrar formulario para nueva publicación
static newPostForm(req, res) {
    res.render('new');
}

  // Crear una nueva publicación
  static createPost(req, res) {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const { title, content, author, category } = req.body;
  
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author,
      category,  // Agregar la categoría
      comments: []
    };
  
    posts.push(newPost);
    fs.writeFileSync(dataPath, JSON.stringify(posts));
    res.redirect('/');
  }

  // Formulario para editar publicación
static editPostForm(req, res) {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const post = posts.find(p => p.id == req.params.id);
    res.render('edit', { post });
}

  // Actualizar publicación
static updatePost(req, res) {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    fs.writeFileSync(dataPath, JSON.stringify(posts));
    res.redirect('/');
}

  // Eliminar publicación
static deletePost(req, res) {
    let posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    posts = posts.filter(p => p.id != req.params.id);
    fs.writeFileSync(dataPath, JSON.stringify(posts));
    res.redirect('/');
}

  // Agregar un comentario
static addComment(req, res) {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const post = posts.find(p => p.id == req.params.id);
    const newComment = { text: req.body.comment };
    post.comments.push(newComment);
    fs.writeFileSync(dataPath, JSON.stringify(posts));
    res.redirect('/');
}


// Registrar un nuevo usuario
static registerUser(req, res) {
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  const { username, password } = req.body;
  console.log("Datos recibidos:", username, password);

  // Verificar si el usuario ya existe
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.send('El usuario ya existe');
  }

  // Crear nuevo usuario
  const newUser = { username, password };
  users.push(newUser);
  fs.writeFileSync(usersPath, JSON.stringify(users));
   // Enviar respuesta de éxito
  res.send('Usuario registrado con éxito');
}

// Iniciar sesión
static loginUser(req, res) {
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  const { username, password } = req.body;

  // Verificar si el usuario existe y la contraseña es correcta
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.send('Usuario o contraseña incorrectos');
  }

  // Redirigir al panel de usuario o página principal
  res.send('Inicio de sesión exitoso');
}

  // buscar publicaciones por título o categoría
static searchPosts(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const { query } = req.query;

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) || 
    post.category.toLowerCase().includes(query.toLowerCase())
  );

  res.render('index', { posts: filteredPosts });
}


}



module.exports = BlogController;
