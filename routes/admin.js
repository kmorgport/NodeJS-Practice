const express = require('express');
const path = require('path');

// const rootDir = require('../util/path');

const productsController = require('../controllers/products');
const router = express.Router();


const products = [];
router.get('/add-product',
    productsController.getAddProduct
    // res.sendFile(path.join(rootDir, 'views','add-product.html'))

    //dont use next, you dont want to send more than one response or 
    //it will cause an error
)

//get will only fire for incoming get requests
//.post will only fire for incoming post requests
router.post('/add-product', productsController.postAddProduct)
    //express allows you to just console.log the req.body by using the bodyparser
    //when a post request is recognized, it will automatically default back to the '/')

// module.exports = router;
// exports.routes = router
// exports.products = products
module.exports = routers