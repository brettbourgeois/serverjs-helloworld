const http = require('http');

// Object destructuring, can be read as os.hostname
const { hostname } = require('os')

const message = 'Hello World';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname()}:${port}/`);
})