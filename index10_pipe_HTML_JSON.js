// pipe, HTML, JSON
// https://www.youtube.com/watch?v=PMg9ZtGuyk8

var fs = require('fs');




// connect to local server
var http = require('http');

// // html
// var server = http.createServer( function (req, res) {
//     console.log(req.url);
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}) ;
//     var myReadSort = fs.createReadStream(__dirname+ '/index.html');
//     myReadSort.pipe(res);
// });

// json
var server = http.createServer( function (req, res) {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'application/json'}) ;
    var obj = {
                model: 'Audi',
                speed: '234',
                wheels: 4
              };

    res.end(JSON.stringify(obj));
});
server.listen(3000, 'localhost');
console.log('server listening port 3000');
