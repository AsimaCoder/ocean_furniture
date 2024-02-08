const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/OceanFurnitureDB');

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

const Product = require('./models/Product');

app.get('/api/products', async (req, res) => {
    console.log("products api")
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error); 
    res.status(500).send(error.toString());
  }
});
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send(`
        <h1>Добро пожаловать в мой магазин мебели!</h1>
        <button onclick="window.location.href='/products.html';">Посмотреть продукты</button>
    `);
});
app.use(express.static('public'));

