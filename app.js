const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();
const port = process.env.PORT || 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // папка для хранения файлов


const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController'); 
const kreslaRoutes = require('./routes/kreslaRoutes');



// Указываем Express, где находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use('/api/protected', authMiddleware, (req, res) => {
  res.send("This route is protected and you are authenticated.");
});

app.use(express.json());
app.use(express.static('public'));
app.use('/api', kreslaRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/OceanFurnitureDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/products', productController.getAllProducts);
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.post('/api/products/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({ message: 'Продукт добавлен', product });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Добро пожаловать в мой магазин мебели!</h1>
    <button onclick="window.location.href='/products.html';">Посмотреть продукты</button>
  `);
});

app.post('/admin/add-product', upload.single('image'), async (req, res) => {
  // Теперь req.body будет содержать текстовые поля, а req.file - информацию о загруженном файле
  console.log(req.body.name); // Должно работать теперь

  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      url_of_image: req.body.url_of_image, // Если вы хотите использовать URL изображения из формы
      // Для файла изображения, его путь будет в req.file.path, если вам нужно сохранить в базу данных
    });

    await product.save();
    res.status(201).send({ message: 'Продукт успешно добавлен' });
  } catch (error) {
    res.status(400).send({ message: 'Ошибка при добавлении продукта', error: error.toString() });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
