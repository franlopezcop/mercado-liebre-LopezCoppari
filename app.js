const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'home.html')));
app.get('/register', (req, res) => res.sendFile(path.join(viewsPath, 'register.html')))
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}!`));