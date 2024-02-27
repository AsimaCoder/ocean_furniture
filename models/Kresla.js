// models/AnotherModel.js
const mongoose = require('mongoose');

const anotherSchema = new mongoose.Schema({
    name: String,
    price: Number,
    url_of_image: String,
});

module.exports = mongoose.model('Kresla', anotherSchema);
