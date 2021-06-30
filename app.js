const express = require('express');
const bodyParser = require('body-parser')

const errorController = require('./controllers/error');

const path = require('path')

const app = express();


//import handlebars engine
const expressHbs = require('express-handlebars');


//activates the engine that express can use
// app.engine('handlebars', expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout'
//     }))


//set values globally on the app object
//allows you to use reserved key words
//pug comes in with auto express support (doens't always work for all engines)
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')
//where to find these templates
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop.js')

//allows you to call req.body
app.use(bodyParser.urlencoded({extended: false}));
//allows to see inside public folder for css files
app.use(express.static(path.join(__dirname,'public')))


//REMEMBER, the order MATTERS
//this requires that the url be /admin AND add-product
app.use('/admin',adminRoutes);

//this is the default that just requires '/'
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000)