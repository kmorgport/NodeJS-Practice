const path = require('path')
const express = require('express');
const rootDir = require('../util/path');


const router = express.Router();

const adminData = require('./admin')

router.get('/',(req, res, next)=>{
    //pull the product array from admin.js thats being exported
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir,'views', 'shop.html'))
    const products = adminData.products
    res.render('shop', {
        prods: products,
        docTitle: "shop",
        path: "/"
    })
})

module.exports = router;