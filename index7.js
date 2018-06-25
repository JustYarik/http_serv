
var fs = require('fs');

// delete file
fs.unlinkSync('./new-one/sssome.txt', function () {
    fs.rmdirSync('new-one');
});

// create folder
// fs.mkdirSync('new-one');

// delete folder
fs.rmdirSync('new-one');

// async create folder and write a file into it
// fs.mkdir('new-one',  function () {
//     fs.writeFile('./new-one/sssome.txt', 'Hello world', function () {
//         console.log('everything wad done');
//     });
// });
