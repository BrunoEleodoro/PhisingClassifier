
var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'fraudes_compilado.json');
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        var contents = JSON.parse(data);
        console.log(contents.length);
    } else {
        console.log(err);
    }
});

