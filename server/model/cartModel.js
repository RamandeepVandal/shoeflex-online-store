const mongoose = require('mongoose');

const CartModel = new mongoose.Schema({
    name: {
        type: String, 
        required: true,     
    },
    price: {
        type: Number,
        requied: true,
    },
    imgPath: {
        type: String,
        requied: true,
    }
})

module.exports = mongoose.model('Cart', CartModel);