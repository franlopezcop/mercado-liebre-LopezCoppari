const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride('_method')); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 

const mainRouter = require('./routes/main'); 
const productsRouter = require('./routes/products'); 

app.use('/', mainRouter);
app.use('/products', productsRouter);

const port = 3001

app.listen(port, () => console.log(`aplicación funcionando ${port}!`))