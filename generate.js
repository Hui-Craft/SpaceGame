var fs = require('fs');
var pages = require('./files');

var content;
content = '';

for(let i=0; i<pages.length; i++) {
    var fc = fs.readFileSync('./files/' + pages[i] + '.md').toString();

    content += fc + '\n';
}

content += '\n\tGenerated at ' + new Date().toLocaleString("en-US");

fs.writeFileSync('./README.MD', content);