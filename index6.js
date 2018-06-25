
// sync and async read and write file


var fs = require('fs');


// SYNC

// var file_readed = fs.readFileSync('text.txt', 'utf8');
// console.log(file_readed);
// var message = "hello world!\n"+ file_readed;
// fs.writeFileSync('some_new_file.txt', message);

// async

fs.readFile('text.txt', 'utf8', function (err, data) {
    console.log(data);
});

fs.writeFile('some.txt', 'hi, it is me', function (err, data) { });
console.log("test");
