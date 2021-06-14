const http = require('http');
const fs = require('fs');

// function rqListener(req, res){

// }

// http.createServer(rqListener)

// alternate way to write the above

//store the http createServer inside constant
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url ===  '/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        //add return to cease the function, cannot continue after res.end
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        //after request. on is finished
        req.on('end' ,()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
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