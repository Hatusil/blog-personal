const fs = require('fs').promises;
const path = require('path');
const dataPath = path.join(__dirname, '../data/posts.json');
const usersPath = path.join(__dirname, '../data/users.json');

class BlogController {

  // Obtener todas las publicaciones
static async getPosts(req, res) {
  const posts = await fs.readFile(dataPath, 'utf8').then(data => JSON.parse(data));
  res.render('index', { posts });
}

  // Mostrar formulario para nueva publicación
static newPostForm(req, res) {
    res.render('new');
}

  // Crear una nueva publicación
  static async createPost(req, res) {
    const posts = await fs.readFile(dataPath, 'utf8').then(data => JSON.parse(data));
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
    await fs.writeFile(dataPath, JSON.stringify(posts));
    res.redirect('/');
  }

  // Formulario para editar publicación
static async editPostForm(req, res) {
  const posts = await fs.readFile(dataPath, 'utf8').then(data => JSON.parse(data));
  const post = posts.find(p => p.id == req.params.id);
  res.render('edit', { post });
}

  // Actualizar publicación
static async updatePost(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    await fs.writeFile(dataPath, JSON.stringify(posts));
    res.redirect('/');
}

  // Eliminar publicación
static async deletePost(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    posts = posts.filter(p => p.id != req.params.id);
    await fs.writeFile(dataPath, JSON.stringify(posts));
    res.redirect('/');
}

  // Agregar un comentario
static async addComment(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const post = posts.find(p => p.id == req.params.id);
    const newComment = { text: req.body.comment };
    post.comments.push(newComment);
    fs.writeFileSync(dataPath, JSON.stringify(posts));
    res.redirect('/');
}


// Registrar un nuevo usuario
static async registerUser(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
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
  await fs.writeFile(dataPath, JSON.stringify(posts));
   // Enviar respuesta de éxito
  res.send('Usuario registrado con éxito');
}

// Iniciar sesión
static async loginUser(req, res) {
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
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
static async searchPosts(req, res) {
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
