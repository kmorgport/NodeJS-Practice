const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            prods: products,
            pageTitle: 'All products',
            path: '/products',
        })
    })
    // const products = Product.fetchAll();
}

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/index',{
            prods: products,
            pageTitle: 'Shop',
            path: '/index',
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
},

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}