// express
// https://www.youtube.com/watch?v=FUf8a47ZT9Q

var express = require('express');
var app = express();
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/about.html");
});


app.get('/news/:id', function (req, res) {
    var obj = {   title: "NOVOST"
                , id: 4
                , paragraphs: ['Paragraphs', 'Simple text', 'Numbers: 2,4,6',99 ]
              };

    res.render('news' // file name by default at folder views
        , {newsID: req.params.id, newParpm: 222, obj: obj})
});
app.listen(3000);
console.log('srever started');


