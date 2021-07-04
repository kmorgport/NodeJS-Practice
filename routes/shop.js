const path = require('path')
const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin')


const shopController = require('../controllers/shop')
const router = express.Router();

router.get('/', shopController.getIndex)

router.get('/products', shopController.get);


//always put the dynamic segment last.
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart',)

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout)

module.exports = router;