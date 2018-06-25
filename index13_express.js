// express
// https://www.youtube.com/watch?v=7H1sadN2KuY

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('this is home');
});

app.get('/news', function (req, res) {
    res.send('this is news');
});


app.get('/news/:id', function (req, res) {
    res.send('ID is ' + req.params.id);
});
app.listen(3000);


