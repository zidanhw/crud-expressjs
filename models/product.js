const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { 
        type: String,
        required: [true, 'Name can not be empty']
    },
    brand : {
        type: String,
        required: [true, 'Brand can not be empty']
    },
    price : {
        type: Number,
        required: [true, 'Number can not be empty']
    },
    color : {
        type: String,
        required: [true, 'Color can not be empty']
    },
    category : {
        type: String,
        enum: ['Baju','Celana','Aksesoris','Jaket'],
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;