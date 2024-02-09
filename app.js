const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3000;

const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController'); 

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/OceanFurnitureDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/products', productController.getAllProducts);
app.post('/signup', userController.signup);


app.get('/', (req, res) => {
  res.send(`
    <h1>Добро пожаловать в мой магазин мебели!</h1>
    <button onclick="window.location.href='/products.html';">Посмотреть продукты</button>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

