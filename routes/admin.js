const express = requires('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //dont use next, you dont want to send more than one response or 
    //it will cause an error
})

//get will only fire for incoming get requests
//.post will only fire for incoming post requests
router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;