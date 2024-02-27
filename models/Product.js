const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  url_of_image: String,
  product_url: String,
  inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


