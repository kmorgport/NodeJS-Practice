const http = require('http');

// function rqListener(req, res){

// }

// http.createServer(rqListener)

// alternate way to write the above

//store the http createServer inside constant
const server = http.createServer((req,res)=>{
    console.log(req, req.method, req.header)
    // process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>')
    res.end();
})

//listen to the server you created
//use the port you want as the argument
server.listen(3000)