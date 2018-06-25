// create server

var http = require('http');

var server = http.createServer( function (req, res) {
    console.log(req.url);
   res.writeHead(200, {'Content-Type': 'text/plan'}) ;
   res.end('hello world');
});

server.listen(3000, 'localhost');
console.log('server listening port 3000');

