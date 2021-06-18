const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

//allows you to call req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


//REMEMBER, the order MATTERS
//this requires that the url be /admin AND add-product
app.use('/admin',adminRoutes);

//this is the default that just requires '/'
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)