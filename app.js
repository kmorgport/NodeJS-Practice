const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();


//set values globally on the app object
//allows you to use reserved key words
//pug comes in with auto express support (doens't always work for all engines)
app.set('view engine', 'pug')
//where to find these templates
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

//allows you to call req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


//REMEMBER, the order MATTERS
//this requires that the url be /admin AND add-product
app.use('/admin',adminRoutes.routes);

//this is the default that just requires '/'
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)