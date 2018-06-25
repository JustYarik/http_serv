// pipe, HTML, JSON
// https://www.youtube.com/watch?v=PMg9ZtGuyk8

var fs = require('fs');




// connect to local server
var http = require('http');

// // html
var server = http.createServer( function (req, res) {
    console.log(req.url);
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}) ;
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}) ;
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else {

        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'}) ;
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, 'localhost');
console.log('server listening port 3000');
