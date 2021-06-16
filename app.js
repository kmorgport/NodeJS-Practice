const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //dont use next, you dont want to send more than one response or 
    //it will cause an error
})

//get will only fire for incoming get requests
//.post will only fire for incoming post requests
app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

//<-- using express -->
//next is a function
app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)