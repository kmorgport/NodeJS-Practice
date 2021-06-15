const http = require('http')
const routes = require('./routes.js')
// function rqListener(req, res){

// }

// http.createServer(rqListener)

// alternate way to write the above

//store the http createServer inside constant
const server = http.createServer(routes.handler)

//listen to the server you created
//use the port you want as the argument
server.listen(3000)