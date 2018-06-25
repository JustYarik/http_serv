// streams
// https://www.youtube.com/watch?v=Sqk-zR9KS2Q

var fs = require('fs');
var myReadSort = fs.createReadStream(__dirname+ '/article.txt');
var myWriteSort = fs.createWriteStream(__dirname+ '/news.txt');


myReadSort.on('data',                 // default event
                function (chunk) {    // chunk -- pace of information
                    console.log('new data retrieved \n');
                    myWriteSort.write(chunk);

                }
    );

