const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  url_of_image: String,
});

module.exports = mongoose.model('Product', productSchema);


