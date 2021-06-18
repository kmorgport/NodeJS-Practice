const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','add-product.html'))
    //dont use next, you dont want to send more than one response or 
    //it will cause an error
})

//get will only fire for incoming get requests
//.post will only fire for incoming post requests
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    //when a post request is recognized, it will automatically default back to the '/'
    res.redirect('/')
})

module.exports = router;