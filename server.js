const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app);

console.log("Starting server");


server.listen(port)

console.log("Server is running");


