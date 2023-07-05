const mongoose = require('mongoose');
const Cart = require('../model/cartModel');

// GET ALL THE ITEMS IN THE CART
const getCart = async (req, res) => {
    const data = await Cart.find({});

    // if no data exists
    if (!data) {
        res.status(400);
        throw new Error('No carts found.');
    }

    // else
    res.status(200).json(data);
}

// ADD CARTS INTO THE DB
const postCart = async(req, res) => {
    const data = await req.body;

    // if no data exists
    if (!data) {
        res.status(400);
        throw new Error('Please fill out all fields.');
    }

    // else
    const newCart = new Cart(data);
    await newCart.save();
    res.status(200).send('Cart added.')
}

// DELETE CARTS 
const deleteCart = async(req, res) => {
    const id = await req.params.id;

    // if id does not exist
    if(!id) {
        res.status(400);
        throw new Error('Cart does not exist');
    }

    // else
    await Cart.findByIdAndRemove(id);
    res.status(200).send('Cart deleted.');
}

module.exports = { getCart, postCart, deleteCart };