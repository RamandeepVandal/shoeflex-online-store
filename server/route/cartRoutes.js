const express = require('express');
const { getCart, postCart, deleteCart } = require('../controller/cartController');

// create router
const router = express.Router();

// GET AND POST
router.route('/').get(getCart).post(postCart);

// DELETE
router.route('/:id').delete(deleteCart);

module.exports = router;